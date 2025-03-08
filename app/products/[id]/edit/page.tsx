import ProductForm from '@/components/product-form';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

// Mock function to get quote data
function getProductData(id) {
  // In a real app, this would fetch from your database
  return {
    name: 'Diseño de Sitio Web',
    description: 'Diseño profesional de sitio web responsive',
    price: 1500,
    category: 'design',
    sku: '001',
    isActive: true,
    isTaxable: true,
    notes: '',
  };
}

export default function EditProduct({ params }) {
  const product = getProductData(params.id);

  return (
    <div className='container mx-auto py-10'>
      <div className='mb-8'>
        <Link href={`/products/${params.id}`}>
          <Button variant='ghost' className='mb-4'>
            <ArrowLeftIcon className='mr-2 h-4 w-4' />
            Back to Product
          </Button>
        </Link>
        <h1 className='text-3xl font-bold tracking-tight'>
          Editar Product #{params.id}
        </h1>
        <p className='text-muted-foreground'>
          Update the product details below.
        </p>
      </div>
      <ProductForm product={product} />
    </div>
  );
}
