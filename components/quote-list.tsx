'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  MoreHorizontalIcon,
  FileTextIcon,
  PencilIcon,
  TrashIcon,
} from 'lucide-react';
import Link from 'next/link';

// Mock data for quotes
const initialQuotes = [
  {
    id: 'Q-2023-001',
    client: 'Acme Corp',
    amount: 2500.0,
    date: '2023-11-15',
    status: 'sent',
    expiryDate: '2023-12-15',
  },
  {
    id: 'Q-2023-002',
    client: 'Globex Inc',
    amount: 4750.5,
    date: '2023-11-10',
    status: 'accepted',
    expiryDate: '2023-12-10',
  },
  {
    id: 'Q-2023-003',
    client: 'Stark Industries',
    amount: 10000.0,
    date: '2023-11-05',
    status: 'draft',
    expiryDate: '2023-12-05',
  },
  {
    id: 'Q-2023-004',
    client: 'Wayne Enterprises',
    amount: 7250.75,
    date: '2023-11-01',
    status: 'rejected',
    expiryDate: '2023-12-01',
  },
];

export default function QuoteList() {
  const [quotes, setQuotes] = useState(initialQuotes);

  const deleteQuote = (id: string) => {
    setQuotes(quotes.filter((quote) => quote.id !== id));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-500';
      case 'sent':
        return 'bg-blue-500';
      case 'accepted':
        return 'bg-green-500';
      case 'rejected':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className='rounded-md border'>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cotización #</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Monto</TableHead>
            <TableHead>Fecha</TableHead>
            <TableHead>Expira</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className='w-[80px]'>Acción</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {quotes.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={7}
                className='text-center py-8 text-muted-foreground'
              >
                No quotes found. Create your first quote to get started.
              </TableCell>
            </TableRow>
          ) : (
            quotes.map((quote) => (
              <TableRow key={quote.id}>
                <TableCell className='font-medium'>{quote.id}</TableCell>
                <TableCell>{quote.client}</TableCell>
                <TableCell>${quote.amount.toFixed(2)}</TableCell>
                <TableCell>
                  {new Date(quote.date).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {new Date(quote.expiryDate).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  <Badge className={getStatusColor(quote.status)}>
                    {quote.status.charAt(0).toUpperCase() +
                      quote.status.slice(1)}
                  </Badge>
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
                      <Link href={`/quotes/${quote.id}`}>
                        <DropdownMenuItem>
                          <FileTextIcon className='mr-2 h-4 w-4' />
                          View
                        </DropdownMenuItem>
                      </Link>
                      <Link href={`/quotes/${quote.id}/edit`}>
                        <DropdownMenuItem>
                          <PencilIcon className='mr-2 h-4 w-4' />
                          Edit
                        </DropdownMenuItem>
                      </Link>
                      <DropdownMenuItem onClick={() => deleteQuote(quote.id)}>
                        <TrashIcon className='mr-2 h-4 w-4' />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
