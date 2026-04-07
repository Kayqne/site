export const dynamic = 'force-dynamic';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
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

  const config = await prisma.siteConfig.findUnique({ where: { id: 'singleton' } });

  return (
    <main style={{ padding: 24 }}>
      <h1>DEBUG Admin</h1>
      <h2>Session (server)</h2>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <h2>SiteConfig (server)</h2>
      <pre>{JSON.stringify(config, null, 2)}</pre>
      <p>Se o config for null, crie via /api/reset-config ou pelo Studio na Vercel.</p>
    </main>
  );
}
