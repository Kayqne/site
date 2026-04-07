export const dynamic = 'force-dynamic';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { prisma } from '@/lib/db';

export default async function AdminPage() {
  const session = await getServerSession(authOptions as any);
  if (!session) redirect('/api/auth/signin');
  if ((session.user as any)?.role !== 'admin') return <div style={{padding: 20}}>Acesso negado.</div>;

  let config = null;
  try {
    config = await prisma.siteConfig.findUnique({ where: { id: 'singleton' } });
  } catch (e) {
    console.error("Erro banco:", e);
  }

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Painel Administrativo - Dra. Irisman</h1>
      <p>Bem-vinda, {(session.user as any)?.name}.</p>
      
      <div style={{ padding: 20, background: '#f0f0f0', border: '1px solid #ccc', borderRadius: 8 }}>
        <h2>Configurações Atuais</h2>
        <p><strong>Sobre:</strong> {config?.aboutText || 'Não configurado'}</p>
        <p><strong>WhatsApp:</strong> {config?.whatsappNumber || 'Não configurado'}</p>
        <p><strong>Instagram:</strong> {config?.instagramUrl || 'Não configurado'}</p>
        <hr />
        <p><em>O formulário de edição será reativado assim que o build estabilizar.</em></p>
      </div>

      <div style={{ marginTop: 20 }}>
        <a href="/api/auth/signout" style={{ color: 'red' }}>Sair do Painel</a>
      </div>
    </main>
  );
}
