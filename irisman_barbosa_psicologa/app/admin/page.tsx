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
    return (
      <div style={{ padding: 24 }}>
        <h1>Acesso negado</h1>
        <p>Você não tem permissão para acessar essa área.</p>
      </div>
    );
  }

  const configDb = await prisma.siteConfig.findUnique({ where: { id: 'singleton' } });

  // cria um objeto "seguro" com apenas os campos que o form precisa
  const safeConfig = configDb
    ? {
        aboutText: configDb.aboutText ?? '',
        aboutImage: configDb.aboutImage ?? '',
        contactPhone: configDb.contactPhone ?? '',
        contactEmail: configDb.contactEmail ?? '',
        whatsappNumber: configDb.whatsappNumber ?? '',
        instagramUrl: configDb.instagramUrl ?? '',
      }
    : null;

  return (
    <main style={{ padding: 24, maxWidth: 960, margin: '0 auto' }}>
      <h1>Painel Admin</h1>
      <p>Bem-vindo, {(session.user as any)?.name ?? 'Admin'}.</p>

      <section style={{ marginTop: 20 }}>
        <h2>CONFIG (server → safeConfig)</h2>
        <pre style={{ background: '#f6f6f6', padding: 12, overflowX: 'auto' }}>
          {JSON.stringify(safeConfig, null, 2)}
        </pre>
      </section>

      <section style={{ marginTop: 20 }}>
        <h2>Configuração do Site</h2>
        {/* passa apenas os campos simples */}
        <EditSiteConfigForm initialConfig={safeConfig} />
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
