import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  return (
    <div className="py-6 md:py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
        <p className="text-muted-foreground">Gestiona la configuración de tu sistema de cotizaciones.</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="company">Empresa</TabsTrigger>
          <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>Configuración General</CardTitle>
              <CardDescription>Configura las opciones generales del sistema.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="currency">Moneda</Label>
                <Input id="currency" defaultValue="USD" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="tax-rate">Tasa de Impuesto (%)</Label>
                <Input id="tax-rate" type="number" defaultValue="10" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quote-prefix">Prefijo de Cotización</Label>
                <Input id="quote-prefix" defaultValue="Q-" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="quote-expiry">Días de Validez de Cotización</Label>
                <Input id="quote-expiry" type="number" defaultValue="30" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle>Información de la Empresa</CardTitle>
              <CardDescription>Actualiza la información de tu empresa para las cotizaciones.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="company-name">Nombre de la Empresa</Label>
                <Input id="company-name" defaultValue="Mi Empresa S.A." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-address">Dirección</Label>
                <Textarea id="company-address" defaultValue="123 Calle Principal, Ciudad" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-phone">Teléfono</Label>
                <Input id="company-phone" defaultValue="+1 (555) 123-4567" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-email">Email</Label>
                <Input id="company-email" type="email" defaultValue="contacto@miempresa.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="company-tax-id">ID Fiscal</Label>
                <Input id="company-tax-id" defaultValue="123456789" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Notificaciones</CardTitle>
              <CardDescription>Configura cómo y cuándo recibir notificaciones.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="email-new-quote"
                  className="h-4 w-4 rounded border-gray-300"
                  defaultChecked
                />
                <Label htmlFor="email-new-quote">Email al crear nueva cotización</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="email-quote-accepted"
                  className="h-4 w-4 rounded border-gray-300"
                  defaultChecked
                />
                <Label htmlFor="email-quote-accepted">Email cuando un cliente acepta una cotización</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="email-quote-rejected"
                  className="h-4 w-4 rounded border-gray-300"
                  defaultChecked
                />
                <Label htmlFor="email-quote-rejected">Email cuando un cliente rechaza una cotización</Label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="email-quote-expiry"
                  className="h-4 w-4 rounded border-gray-300"
                  defaultChecked
                />
                <Label htmlFor="email-quote-expiry">Email cuando una cotización está por expirar</Label>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Guardar Cambios</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

