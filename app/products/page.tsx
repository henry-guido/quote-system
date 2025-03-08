import { Button } from '@/components/ui/button';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import ProductList from '@/components/product-list';

export default function ProductsPage() {
  return (
    <div className='py-6 md:py-10'>
      <div className='flex items-center justify-between mb-8'>
        <div>
          <h1 className='text-3xl font-bold tracking-tight'>Productos</h1>
          <p className='text-muted-foreground'>
            Gestiona tu catálogo de productos y servicios.
          </p>
        </div>
        <Link href='/products/new'>
          <Button>
            <PlusIcon className='mr-2 h-4 w-4' />
            Nuevo Producto
          </Button>
        </Link>
      </div>
      <ProductList />
    </div>
  );
}
