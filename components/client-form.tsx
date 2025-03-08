'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

export default function ClientForm({ client = null }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: client?.name || '',
    email: client?.email || '',
    phone: client?.phone || '',
    address: client?.address || '',
    contactPerson: client?.contactPerson || '',
    notes: client?.notes || '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí iría la lógica para guardar el cliente en la base de datos
      // Por ahora, simulamos un retraso y redirigimos
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mostrar mensaje de éxito
      toast({
        title: 'Cliente guardado',
        description: 'El cliente ha sido guardado exitosamente.',
      });

      // Redirigir a la lista de clientes
      router.push('/clients');
    } catch (error) {
      console.error('Error al guardar el cliente:', error);
      toast({
        title: 'Error',
        description: 'Hubo un problema al guardar el cliente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader>
          <CardTitle>Información del Cliente</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Nombre de la Empresa</Label>
              <Input
                id='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Nombre de la empresa'
                required
              />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='email'>Correo Electrónico</Label>
              <Input
                id='email'
                type='email'
                value={formData.email}
                onChange={handleChange}
                placeholder='correo@empresa.com'
                required
              />
            </div>
          </div>

          <div className='grid gap-4 md:grid-cols-2'>
            <div className='grid gap-2'>
              <Label htmlFor='phone'>Teléfono</Label>
              <Input
                id='phone'
                value={formData.phone}
                onChange={handleChange}
                placeholder='+1 (555) 123-4567'
              />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='contactPerson'>Persona de Contacto</Label>
              <Input
                id='contactPerson'
                value={formData.contactPerson}
                onChange={handleChange}
                placeholder='Nombre del contacto'
              />
            </div>
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='address'>Dirección</Label>
            <Textarea
              id='address'
              value={formData.address}
              onChange={handleChange}
              placeholder='Dirección completa'
              rows={2}
            />
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='notes'>Notas</Label>
            <Textarea
              id='notes'
              value={formData.notes}
              onChange={handleChange}
              placeholder='Información adicional sobre el cliente'
              rows={3}
            />
          </div>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            type='button'
            variant='outline'
            onClick={() => router.push('/clients')}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Guardando...' : 'Guardar Cliente'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
