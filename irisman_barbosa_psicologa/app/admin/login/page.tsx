'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { GoldenButton } from '@/components/golden-button';
import Image from 'next/image';

export default function AdminLoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Email ou senha inválidos');
      } else {
        router.push('/admin');
        router.refresh();
      }
    } catch (error: any) {
      setError('Erro ao fazer login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0b09] flex items-center justify-center p-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-12">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <Image
              src="/logo-irisman.png"
              alt="Irisman Barbosa"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="font-['Cormorant_Garamond'] text-4xl font-light text-[#faf8f3] mb-2">
            Admin <em className="italic text-[#e2c97e]">Login</em>
          </h1>
          <p className="text-sm text-[#a89f8c]">Entre com suas credenciais de administrador</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all"
              placeholder="seu@email.com"
            />
          </div>

          <div>
            <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
              Senha
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-sm text-red-400 text-center">{error}</p>
          )}

          <GoldenButton type="submit" disabled={loading} className="w-full">
            {loading ? 'Entrando...' : 'Entrar'}
          </GoldenButton>
        </form>
      </div>
    </div>
  );
}
