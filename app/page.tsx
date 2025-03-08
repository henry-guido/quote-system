import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Users, Package, DollarSign } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className='py-6 md:py-10'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
        <p className='text-muted-foreground'>Welcome to the quote system.</p>
      </div>

      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Quotes</CardTitle>
            <FileText className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>12</div>
            <p className='text-xs text-muted-foreground'>4 pending shipment</p>
            <Link href='/quotes' className='text-xs text-primary mt-2 block'>
              View all quotes
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Clients</CardTitle>
            <Users className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>24</div>
            <p className='text-xs text-muted-foreground'>3 new this month</p>
            <Link href='/clients' className='text-xs text-primary mt-2 block'>
              View all clients
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Products</CardTitle>
            <Package className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>48</div>
            <p className='text-xs text-muted-foreground'>5 categories</p>
            <Link href='/products' className='text-xs text-primary mt-2 block'>
              View all products
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Revenues</CardTitle>
            <DollarSign className='h-4 w-4 text-muted-foreground' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$24,500</div>
            <p className='text-xs text-muted-foreground'>
              +15% since last month
            </p>
            <Link
              href='/quotes?status=accepted'
              className='text-xs text-primary mt-2 block'
            >
              View accepted quotes
            </Link>
          </CardContent>
        </Card>
      </div>

      <div className='mt-8 grid gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader>
            <CardTitle>Recent Quotes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              {[
                'Acme Corp',
                'Globex Inc',
                'Stark Industries',
                'Wayne Enterprises',
              ].map((client, i) => (
                <div
                  key={i}
                  className='flex items-center justify-between border-b pb-2'
                >
                  <div>
                    <p className='font-medium'>{client}</p>
                    <p className='text-xs text-muted-foreground'>
                      {new Date(2023, 10, 15 - i * 5).toLocaleDateString()}
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='font-medium'>
                      ${(2500 + i * 1000).toFixed(2)}
                    </p>
                    <p className='text-xs text-muted-foreground'>
                      {['Enviada', 'Aceptada', 'Borrador', 'Rechazada'][i]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link href='/quotes' className='text-sm text-primary mt-4 block'>
              View all quotes →
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Clients</CardTitle>
          </CardHeader>
          <CardContent>
            <div className='space-y-2'>
              {[
                'Acme Corp',
                'Globex Inc',
                'Stark Industries',
                'Wayne Enterprises',
              ].map((client, i) => (
                <div
                  key={i}
                  className='flex items-center justify-between border-b pb-2'
                >
                  <div>
                    <p className='font-medium'>{client}</p>
                    <p className='text-xs text-muted-foreground'>
                      {
                        [
                          'contact@acmecorp.com',
                          'info@globexinc.com',
                          'hello@starkindustries.com',
                          'contact@wayneenterprises.com',
                        ][i]
                      }
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-xs text-muted-foreground'>
                      Añadido el{' '}
                      {new Date(2023, 10, 15 - i * 10).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Link href='/clients' className='text-sm text-primary mt-4 block'>
              View all clients →
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
