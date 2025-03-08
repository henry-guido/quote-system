import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import ClientList from '@/components/client-list';

export default function ClientsPage() {
  return (
    <div className='py-6 md:py-10'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Clientes</h1>
          <p className='text-muted-foreground'>
            Gestiona la información de tus clientes.
          </p>
        </div>
        <Link href='/clients/new'>
          <Button>
            <PlusIcon className='mr-2 h-4 w-4' />
            Nuevo Cliente
          </Button>
        </Link>
      </div>
      <ClientList />
    </div>
  );
}
