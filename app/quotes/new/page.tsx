import QuoteForm from "@/components/quote-form"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

export default function NewQuote() {
  return (
    <div className="container mx-auto py-10">
      <div className="mb-8">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Back to Quotes
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Create New Quote</h1>
        <p className="text-muted-foreground">Fill out the form below to create a new quote for your client.</p>
      </div>
      <QuoteForm />
    </div>
  )
}

