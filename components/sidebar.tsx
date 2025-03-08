'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Users,
  FileText,
  Package,
  LayoutDashboard,
  Settings,
  Menu,
  X,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const routes = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/',
      active: pathname === '/',
    },
    {
      label: 'Quotes',
      icon: FileText,
      href: '/quotes',
      active: pathname.includes('/quotes'),
    },
    {
      label: 'Clients',
      icon: Users,
      href: '/clients',
      active: pathname.includes('/clients'),
    },
    {
      label: 'Products',
      icon: Package,
      href: '/products',
      active: pathname.includes('/products'),
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/settings',
      active: pathname.includes('/settings'),
    },
  ];

  return (
    <>
      <div className='md:hidden fixed top-4 left-4 z-50'>
        <Button
          variant='outline'
          size='icon'
          onClick={() => setIsOpen(!isOpen)}
          aria-label='Toggle Menu'
        >
          {isOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
        </Button>
      </div>
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r bg-background transition-transform duration-300 md:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className='flex h-16 items-center border-b px-6'>
          <Link href='/' className='flex items-center gap-2 font-bold text-xl'>
            <FileText className='h-6 w-6' />
            <span>QuoteSystem</span>
          </Link>
        </div>
        <div className='flex-1 overflow-auto py-4'>
          <nav className='grid gap-1 px-2'>
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                  route.active
                    ? 'bg-primary text-primary-foreground'
                    : 'hover:bg-muted',
                )}
              >
                <route.icon className='h-5 w-5' />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className='border-t p-4'>
          <div className='flex items-center gap-3 rounded-lg px-3 py-2'>
            <div className='h-8 w-8 rounded-full bg-muted' />
            <div>
              <p className='text-sm font-medium'>Usuario</p>
              <p className='text-xs text-muted-foreground'>
                usuario@ejemplo.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
