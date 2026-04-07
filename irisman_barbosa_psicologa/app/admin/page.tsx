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

  // Busca segura: Se o banco falhar no build, ele não trava o deploy
  let config = null;
  try {
    config = await prisma.siteConfig.findUnique({ where: { id: 'singleton' } });
  } catch (e) {
    console.log("Aguardando conexão com banco...");
  }

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: '0 auto' }}>
      <h1>Painel de Controle</h1>
      <p>Bem-vindo, {(session.user as any)?.name}.</p>
      <section style={{ marginTop: 20, padding: 20, background: '#f9f9f9', borderRadius: 8, border: '1px solid #ddd' }}>
        <EditSiteConfigForm initialConfig={config} />
      </section>
      <div style={{ marginTop: 20 }}>
        <a href="/api/auth/signout" style={{ color: 'red' }}>Sair do sistema</a>
      </div>
    </main>
  );
}
