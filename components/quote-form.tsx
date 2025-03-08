"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PlusIcon, TrashIcon } from "lucide-react"

export default function QuoteForm({ quote = null }) {
  const router = useRouter()
  const [items, setItems] = useState(quote?.items || [{ description: "", quantity: 1, price: 0 }])
  const [status, setStatus] = useState(quote?.status || "draft")

  const addItem = () => {
    setItems([...items, { description: "", quantity: 1, price: 0 }])
  }

  const removeItem = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  const updateItem = (index, field, value) => {
    const newItems = [...items]
    newItems[index][field] = value
    setItems(newItems)
  }

  const calculateSubtotal = () => {
    return items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  }

  const calculateTax = () => {
    return calculateSubtotal() * 0.1 // 10% tax rate
  }

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would normally save the quote to your database
    // For this example, we'll just redirect back to the quotes list
    router.push("/")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="client">Client Name</Label>
              <Input id="client" placeholder="Enter client name" defaultValue={quote?.client || ""} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="client-email">Client Email</Label>
              <Input
                id="client-email"
                type="email"
                placeholder="client@example.com"
                defaultValue={quote?.clientEmail || ""}
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="expiry-date">Expiry Date</Label>
              <Input id="expiry-date" type="date" defaultValue={quote?.expiryDate || ""} required />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="status">Status</Label>
              <Select value={status} onValueChange={setStatus}>
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="sent">Sent</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Additional notes or terms..."
                defaultValue={quote?.notes || ""}
                rows={4}
              />
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Quote Items</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor={`item-${index}-description`}>Description</Label>
                    <Input
                      id={`item-${index}-description`}
                      value={item.description}
                      onChange={(e) => updateItem(index, "description", e.target.value)}
                      placeholder="Item description"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor={`item-${index}-quantity`}>Quantity</Label>
                      <Input
                        id={`item-${index}-quantity`}
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(index, "quantity", Number.parseInt(e.target.value))}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor={`item-${index}-price`}>Price</Label>
                      <Input
                        id={`item-${index}-price`}
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.price}
                        onChange={(e) => updateItem(index, "price", Number.parseFloat(e.target.value))}
                        required
                      />
                    </div>
                  </div>

                  {items.length > 1 && (
                    <Button type="button" variant="outline" size="sm" onClick={() => removeItem(index)}>
                      <TrashIcon className="mr-2 h-4 w-4" />
                      Remove Item
                    </Button>
                  )}

                  {index < items.length - 1 && <hr className="my-2" />}
                </div>
              ))}

              <Button type="button" variant="outline" onClick={addItem} className="w-full">
                <PlusIcon className="mr-2 h-4 w-4" />
                Add Item
              </Button>
            </CardContent>
            <CardFooter className="flex-col items-start space-y-2 border-t p-4">
              <div className="flex justify-between w-full text-sm">
                <span>Subtotal:</span>
                <span>${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-full text-sm">
                <span>Tax (10%):</span>
                <span>${calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between w-full font-bold">
                <span>Total:</span>
                <span>${calculateTotal().toFixed(2)}</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => router.push("/")}>
          Cancel
        </Button>
        <Button type="submit">{status === "draft" ? "Save Draft" : "Save and Send"}</Button>
      </div>
    </form>
  )
}

