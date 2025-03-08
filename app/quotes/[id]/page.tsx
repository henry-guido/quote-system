import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeftIcon, DownloadIcon, PencilIcon } from "lucide-react"
import Link from "next/link"

// Mock function to get quote data
function getQuoteData(id) {
  // In a real app, this would fetch from your database
  return {
    id: id,
    client: "Acme Corp",
    clientEmail: "contact@acmecorp.com",
    date: "2023-11-15",
    expiryDate: "2023-12-15",
    status: "sent",
    notes: "Payment due within 30 days of acceptance. This quote is valid for 30 days.",
    items: [
      { description: "Website Design", quantity: 1, price: 1500 },
      { description: "Website Development", quantity: 1, price: 3500 },
      { description: "SEO Setup", quantity: 1, price: 750 },
    ],
  }
}

export default function QuoteDetail({ params }) {
  const quote = getQuoteData(params.id)

  const calculateSubtotal = () => {
    return quote.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  }

  const calculateTax = () => {
    return calculateSubtotal() * 0.1 // 10% tax rate
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax()
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "draft":
        return "bg-gray-500"
      case "sent":
        return "bg-blue-500"
      case "accepted":
        return "bg-green-500"
      case "rejected":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Quotes
          </Button>
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Quote #{quote.id}</h1>
            <p className="text-muted-foreground">Created on {new Date(quote.date).toLocaleDateString()}</p>
          </div>
          <div className="flex gap-2">
            <Link href={`/quotes/${quote.id}/edit`}>
              <Button variant="outline">
                <PencilIcon className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </Link>
            <Button>
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download PDF
            </Button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Quote Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold">Client</h3>
                    <p>{quote.client}</p>
                    <p>{quote.clientEmail}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Status</h3>
                    <Badge className={getStatusColor(quote.status)}>
                      {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                    </Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Items</h3>
                  <div className="rounded-md border">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Description</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Quantity</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Price</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-muted-foreground">Total</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {quote.items.map((item, index) => (
                          <tr key={index}>
                            <td className="px-4 py-3 text-sm">{item.description}</td>
                            <td className="px-4 py-3 text-sm text-right">{item.quantity}</td>
                            <td className="px-4 py-3 text-sm text-right">${item.price.toFixed(2)}</td>
                            <td className="px-4 py-3 text-sm text-right">${(item.quantity * item.price).toFixed(2)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {quote.notes && (
                  <div>
                    <h3 className="font-semibold mb-2">Notes</h3>
                    <p className="text-sm">{quote.notes}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax (10%):</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col space-y-2">
              <div className="w-full">
                <h3 className="font-semibold mb-2">Quote Details</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-muted-foreground">Quote #:</div>
                  <div>{quote.id}</div>
                  <div className="text-muted-foreground">Date:</div>
                  <div>{new Date(quote.date).toLocaleDateString()}</div>
                  <div className="text-muted-foreground">Expiry:</div>
                  <div>{new Date(quote.expiryDate).toLocaleDateString()}</div>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

