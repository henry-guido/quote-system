import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import Link from "next/link"
import QuoteList from "@/components/quote-list"

export default function QuotesPage() {
  return (
    <div className="py-6 md:py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Cotizaciones</h1>
          <p className="text-muted-foreground">Gestiona tus cotizaciones y envíalas a clientes.</p>
        </div>
        <Link href="/quotes/new">
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Nueva Cotización
          </Button>
        </Link>
      </div>
      <QuoteList />
    </div>
  )
}

