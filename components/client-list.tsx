'use client';

import { useState } from 'react';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

// Datos de ejemplo para clientes
const initialClients = [
  {
    id: 'C001',
    name: 'Acme Corp',
    email: 'contact@acmecorp.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, USA',
  },
  {
    id: 'C002',
    name: 'Globex Inc',
    email: 'info@globexinc.com',
    phone: '+1 (555) 987-6543',
    address: '456 Tech Blvd, Innovation City, USA',
  },
  {
    id: 'C003',
    name: 'Stark Industries',
    email: 'hello@starkindustries.com',
    phone: '+1 (555) 789-0123',
    address: '789 Tower Ave, Metropolis, USA',
  },
  {
    id: 'C004',
    name: 'Wayne Enterprises',
    email: 'contact@wayneenterprises.com',
    phone: '+1 (555) 456-7890',
    address: '1007 Mountain Dr, Gotham City, USA',
  },
];

export default function ClientList() {
  const [clients, setClients] = useState(initialClients);

  const deleteClient = (id: string) => {
    setClients(clients.filter((client) => client.id !== id));
  };

  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className='hidden md:table-cell'>Teléfono</TableHead>
            <TableHead className='hidden md:table-cell'>Dirección</TableHead>
            <TableHead className='w-[80px]'>Acción</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className='font-medium'>{client.id}</TableCell>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell className='hidden md:table-cell'>
                {client.phone}
              </TableCell>
              <TableCell className='hidden md:table-cell'>
                {client.address}
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
                    <Link href={`/clients/${client.id}`}>
                      <DropdownMenuItem>
                        <FileTextIcon className='mr-2 h-4 w-4' />
                        View
                      </DropdownMenuItem>
                    </Link>
                    <Link href={`/clients/${client.id}/edit`}>
                      <DropdownMenuItem>
                        <PencilIcon className='mr-2 h-4 w-4' />
                        Edit
                      </DropdownMenuItem>
                    </Link>
                    <DropdownMenuItem onClick={() => deleteClient(client.id)}>
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
