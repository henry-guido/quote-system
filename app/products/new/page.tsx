import ProductForm from "@/components/product-form"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon } from "lucide-react"
import Link from "next/link"

export default function NewProduct() {
  return (
    <div className="py-6 md:py-10">
      <div className="mb-8">
        <Link href="/products">
          <Button variant="ghost" className="mb-4">
            <ArrowLeftIcon className="mr-2 h-4 w-4" />
            Volver a Productos
          </Button>
        </Link>
        <h1 className="text-3xl font-bold tracking-tight">Nuevo Producto</h1>
        <p className="text-muted-foreground">Completa el formulario para añadir un nuevo producto o servicio.</p>
      </div>
      <ProductForm />
    </div>
  )
}

