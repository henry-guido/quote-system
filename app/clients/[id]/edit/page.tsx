import ClientForm from '@/components/client-form';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

// Mock function to get quote data
function getClientData(id) {
  // In a real app, this would fetch from your database
  return {
    name: 'Acme Corp',
    email: 'contact@acmecorp.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, USA',
    contactPerson: '',
    notes: '',
  };
}

export default function EditClient({ params }) {
  const client = getClientData(params.id);

  return (
    <div className='container mx-auto py-10'>
      <div className='mb-8'>
        <Link href={`/products/${params.id}`}>
          <Button variant='ghost' className='mb-4'>
            <ArrowLeftIcon className='mr-2 h-4 w-4' />
            Back to Client
          </Button>
        </Link>
        <h1 className='text-3xl font-bold tracking-tight'>
          Editar Client #{params.id}
        </h1>
        <p className='text-muted-foreground'>
          Update the client details below.
        </p>
      </div>
      <ClientForm client={client} />
    </div>
  );
}
