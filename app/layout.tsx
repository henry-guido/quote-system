import type React from 'react';
import '@/app/globals.css';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/sidebar';
import { ToastProvider } from '@/components/ui/use-toast';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Sistema de Cotizaciones',
  description: 'Un sistema para crear y gestionar cotizaciones',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <ToastProvider>
          <div className='flex min-h-screen'>
            <Sidebar />
            <main className='flex-1 md:pl-64'>
              <div className='min-h-screen bg-background p-0 md:p-8'>
                {children}
              </div>
            </main>
          </div>
        </ToastProvider>
      </body>
    </html>
  );
}
