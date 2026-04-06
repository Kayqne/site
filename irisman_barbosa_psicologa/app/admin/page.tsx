// app/admin/page.tsx
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/api/auth/signin');
  }
  if ((session.user as any).role !== 'admin') {
    return <div style={{ padding: 24 }}><h1>Acesso negado</h1><p>Você não é admin.</p></div>;
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Painel Admin — bem vindo {(session.user as any).name}</h1>
      {/* Aqui você coloca seus componentes de edição (formulário do SiteConfig etc.) */}
    </main>
  );
}
