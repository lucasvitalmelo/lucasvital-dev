// app/components/ContactForm.tsx
'use client';

import { useForm } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type FormData = {
  name: string;
  email: string;
  message: string;
};


const contactSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  email: z.string().email('Email inválido'),
  message: z.string().min(1, 'Mensagem obrigatória'),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });


  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (res.ok) {
        toast('Mensagem enviada com sucesso!');
        reset();
      } else {
        toast(json.error || 'Erro ao enviar');
      }
    } catch (error) {
      toast('Erro na requisição');
    }
  };

  return (
    <>
      <h2 id='contact' className="text-white font-mono text-3xl mt-40 ">
        {`< Contact me />`}
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mt-16 mb-40">
        <input
          {...register('name', { required: 'Name required!' })}
          placeholder="Name"
          className={
            twMerge(
              "w-full p-2 border rounded bg-slate-900",
              errors.name && 'border-red-500'
            )
          }
        />
        {errors.name && <span className="text-red-500 text-[14px]">{errors.name.message}</span>}
        <input
          {...register('email', {
            required: 'Email required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'invalid email',
            },
          })}
          placeholder="Email"
          className={
            twMerge(
              "w-full p-2 border rounded bg-slate-900 mt-4",
              errors.name && 'border-red-500'
            )
          }
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <textarea
          {...register('message', { required: 'Message required!' })}
          placeholder="Message..."
          className={
            twMerge(
              "w-full p-2 border rounded bg-slate-900 mt-4",
              errors.name && 'border-red-500'
            )
          }
        />
        {errors.message && <p className="text-red-500">{errors.message.message}</p>}

        <div className='w-full flex'>

          <Button
            type="submit"
            disabled={isSubmitting}
            className='mt-4 ml-auto w-30'
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </Button>
        </div>


      </form>
    </>

  );
}
