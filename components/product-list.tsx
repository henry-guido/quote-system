'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  FileTextIcon,
  MoreHorizontalIcon,
  PencilIcon,
  TrashIcon,
} from 'lucide-react';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

// Datos de ejemplo para productos
const initialProducts = [
  {
    id: 'P001',
    name: 'Diseño de Sitio Web',
    description: 'Diseño profesional de sitio web responsive',
    price: 1500,
    category: 'Diseño',
  },
  {
    id: 'P002',
    name: 'Desarrollo Web',
    description: 'Desarrollo de sitio web con funcionalidades avanzadas',
    price: 3500,
    category: 'Desarrollo',
  },
  {
    id: 'P003',
    name: 'Configuración SEO',
    description: 'Optimización para motores de búsqueda',
    price: 750,
    category: 'Marketing',
  },
  {
    id: 'P004',
    name: 'Mantenimiento Mensual',
    description: 'Servicio de mantenimiento y actualizaciones',
    price: 250,
    category: 'Soporte',
  },
  {
    id: 'P005',
    name: 'Hosting Premium',
    description: 'Alojamiento web de alta velocidad',
    price: 120,
    category: 'Infraestructura',
  },
];

export default function ProductList() {
  const [products, setProducts] = useState(initialProducts);

  const deleteProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead className='hidden md:table-cell'>Descripción</TableHead>
            <TableHead>Precio</TableHead>
            <TableHead>Categoría</TableHead>
            <TableHead className='w-[80px]'>Acción</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell className='font-medium'>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell className='hidden md:table-cell'>
                {product.description}
              </TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>
                <Badge variant='outline'>{product.category}</Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant='ghost' className='h-8 w-8 p-0'>
                      <span className='sr-only'>Open menu</span>
                      <MoreHorizontalIcon className='h-4 w-4' />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align='end'>
                    <Link href={`/quotes/${product.id}`}>
                      <DropdownMenuItem>
                        <FileTextIcon className='mr-2 h-4 w-4' />
                        View
                      </DropdownMenuItem>
                    </Link>
                    <Link href={`/products/${product.id}/edit`}>
                      <DropdownMenuItem>
                        <PencilIcon className='mr-2 h-4 w-4' />
                        Edit
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={() => deleteProduct(product.id)}>
                      <TrashIcon className='mr-2 h-4 w-4' />
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
