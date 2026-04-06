import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';
import EditSiteConfigForm from '../components/EditSiteConfigForm';
import { prisma } from '@/lib/db';

export default async function AdminPage() {
  const session = await getServerSession(authOptions as any);
  if (!session) {
    redirect('/api/auth/signin');
  }
  if ((session.user as any)?.role !== 'admin') {
    return (
      <div style={{ padding: 24 }}>
        <h1>Acesso negado</h1>
        <p>Você não tem permissão para acessar essa área.</p>
      </div>
    );
  }

  // pega configuração atual do site
  const config = await prisma.siteConfig.findUnique({ where: { id: 'singleton' } });

  return (
    <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
      <h1>Painel Admin</h1>
      <p>Bem-vindo, {(session.user as any)?.name ?? 'Admin'}.</p>

      <section style={{ marginTop: 20 }}>
        <h2>Configuração do Site</h2>
        <EditSiteConfigForm initialConfig={config} />
      </section>

      <section style={{ marginTop: 40 }}>
        <h2>Conteúdo</h2>
        <ul>
          <li><a href="/admin/blog">Gerenciar posts (Blog)</a></li>
          <li><a href="/admin/services">Gerenciar serviços</a></li>
          <li><a href="/admin/appointments">Agendamentos</a></li>
        </ul>
      </section>
    </main>
  );
}
