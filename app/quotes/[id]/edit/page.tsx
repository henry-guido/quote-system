import QuoteForm from "@/components/quote-form"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
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

export default function EditQuote({ params }) {
  const quote = getQuoteData(params.id)

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <Link href={`/quotes/${params.id}`}>
          <Button variant="ghost" className="mb-4">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Quote
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Edit Quote #{params.id}</h1>
        <p className="text-muted-foreground">Update the quote details below.</p>
      </div>
      <QuoteForm quote={quote} />
    </div>
  )
}

