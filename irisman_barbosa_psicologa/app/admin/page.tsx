'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPage() {
  const { data: session, status } = useSession() || {};
  const router = useRouter();

  useEffect(() => {
    if (status === 'loading') return;
    
    if (!session) {
      router.replace('/admin/login');
    } else {
      // For now, just show a simple admin page
      // In a full implementation, this would be the admin dashboard
    }
  }, [session, status, router]);

  if (status === 'loading' || !session) {
    return (
      <div className="min-h-screen bg-[#0c0b09] flex items-center justify-center">
        <div className="text-[#c9a84c]">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0c0b09] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-['Cormorant_Garamond'] text-5xl font-light text-[#faf8f3] mb-8">
          Admin <em className="italic text-[#e2c97e]">Dashboard</em>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="/admin/blog"
            className="border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.01)] p-8 hover:border-[rgba(201,168,76,0.3)] hover:bg-[#14120d] transition-all"
          >
            <h2 className="font-['Cormorant_Garamond'] text-2xl text-[#e2c97e] mb-2">Blog</h2>
            <p className="text-sm text-[#a89f8c]">Gerenciar posts do blog</p>
          </a>
          <a
            href="/admin/agendamentos"
            className="border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.01)] p-8 hover:border-[rgba(201,168,76,0.3)] hover:bg-[#14120d] transition-all"
          >
            <h2 className="font-['Cormorant_Garamond'] text-2xl text-[#e2c97e] mb-2">Agendamentos</h2>
            <p className="text-sm text-[#a89f8c]">Ver e gerenciar agendamentos</p>
          </a>
          <a
            href="/admin/contatos"
            className="border border-[rgba(201,168,76,0.18)] bg-[rgba(255,255,255,0.01)] p-8 hover:border-[rgba(201,168,76,0.3)] hover:bg-[#14120d] transition-all"
          >
            <h2 className="font-['Cormorant_Garamond'] text-2xl text-[#e2c97e] mb-2">Contatos</h2>
            <p className="text-sm text-[#a89f8c]">Ver mensagens de contato</p>
          </a>
        </div>
      </div>
    </div>
  );
}
