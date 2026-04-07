export const dynamic = 'force-dynamic';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import EditSiteConfigForm from '../components/EditSiteConfigForm';
import { prisma } from '@/lib/db';

export default async function AdminPage() {
  const session = await getServerSession(authOptions as any);
  
  if (!session) {
    redirect('/api/auth/signin');
  }

  if ((session.user as any)?.role !== 'admin') {
    return <div style={{ padding: 24 }}>Acesso negado.</div>;
  }

  let config = null;
  try {
    // Tenta buscar no banco, mas não deixa o build quebrar se falhar
    config = await prisma.siteConfig.findUnique({ where: { id: 'singleton' } });
  } catch (error) {
    console.error("Erro ao buscar config no build:", error);
  }

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: '0 auto' }}>
      <h1>Painel Admin</h1>
      <p>Olá, {(session.user as any)?.name}.</p>

      <section style={{ marginTop: 20, padding: 20, background: '#f5f5f5', borderRadius: 8 }}>
        <h2>Configuração do Site</h2>
        {/* Se o banco falhar, o form inicia vazio em vez de dar erro 500 */}
        <EditSiteConfigForm initialConfig={config} />
      </section>

      <ul style={{ marginTop: 40 }}>
        <li><a href="/admin/appointments">Agendamentos</a></li>
        <li><a href="/">Sair</a></li>
      </ul>
    </main>
  );
}
