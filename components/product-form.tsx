'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';

// Categorías de ejemplo
const categories = [
  { id: 'design', name: 'Diseño' },
  { id: 'development', name: 'Desarrollo' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'support', name: 'Soporte' },
  { id: 'infrastructure', name: 'Infraestructura' },
];

export default function ProductForm({ product = null }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: product?.name || '',
    description: product?.description || '',
    price: product?.price || '',
    category: product?.category || '',
    sku: product?.sku || '',
    isActive: product?.isActive !== false, // Por defecto activo
    isTaxable: product?.isTaxable !== false, // Por defecto con impuestos
    notes: product?.notes || '',
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSelectChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Aquí iría la lógica para guardar el producto en la base de datos
      // Por ahora, simulamos un retraso y redirigimos
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mostrar mensaje de éxito
      toast({
        title: 'Producto guardado',
        description: 'El producto ha sido guardado exitosamente.',
      });

      // Redirigir a la lista de productos
      router.push('/products');
    } catch (error) {
      console.error('Error al guardar el producto:', error);
      toast({
        title: 'Error',
        description: 'Hubo un problema al guardar el producto.',
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
          <CardTitle>Información del Producto</CardTitle>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='grid gap-2'>
              <Label htmlFor='name'>Nombre del Producto</Label>
              <Input
                id='name'
                value={formData.name}
                onChange={handleChange}
                placeholder='Nombre del producto o servicio'
                required
              />
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='price'>Precio</Label>
              <Input
                id='price'
                type='number'
                min='0'
                step='0.01'
                value={formData.price}
                onChange={handleChange}
                placeholder='0.00'
                required
              />
            </div>
          </div>

          <div className='grid gap-4 md:grid-cols-2'>
            <div className='grid gap-2'>
              <Label htmlFor='category'>Categoría</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleSelectChange('category', value)}
              >
                <SelectTrigger id='category'>
                  <SelectValue placeholder='Seleccionar categoría' />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='grid gap-2'>
              <Label htmlFor='sku'>SKU / Código</Label>
              <Input
                id='sku'
                value={formData.sku}
                onChange={handleChange}
                placeholder='Código único del producto'
              />
            </div>
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='description'>Descripción</Label>
            <Textarea
              id='description'
              value={formData.description}
              onChange={handleChange}
              placeholder='Descripción detallada del producto o servicio'
              rows={3}
              required
            />
          </div>

          <div className='grid gap-4 md:grid-cols-2'>
            <div className='flex items-center space-x-2'>
              <Switch
                id='isActive'
                checked={formData.isActive}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, isActive: checked }))
                }
              />
              <Label htmlFor='isActive'>Producto Activo</Label>
            </div>

            <div className='flex items-center space-x-2'>
              <Switch
                id='isTaxable'
                checked={formData.isTaxable}
                onCheckedChange={(checked) =>
                  setFormData((prev) => ({ ...prev, isTaxable: checked }))
                }
              />
              <Label htmlFor='isTaxable'>Aplicar Impuestos</Label>
            </div>
          </div>

          <div className='grid gap-2'>
            <Label htmlFor='notes'>Notas Internas</Label>
            <Textarea
              id='notes'
              value={formData.notes}
              onChange={handleChange}
              placeholder='Notas adicionales (no visibles para clientes)'
              rows={2}
            />
          </div>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button
            type='button'
            variant='outline'
            onClick={() => router.push('/products')}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>
          <Button type='submit' disabled={isSubmitting}>
            {isSubmitting ? 'Guardando...' : 'Guardar Producto'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
