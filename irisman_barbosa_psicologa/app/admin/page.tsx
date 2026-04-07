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
      <div style={{ padding: 24, textAlign: 'center' }}>
        <h1>Acesso negado</h1>
        <p>Você não tem permissão de administrador.</p>
        <a href="/">Voltar para o site</a>
      </div>
    );
  }

  // Busca a configuração do banco
  const config = await prisma.siteConfig.findUnique({ where: { id: 'singleton' } });

  return (
    <main style={{ padding: '40px 20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '1px solid #eee', marginBottom: '30px', paddingBottom: '10px' }}>
        <h1>Painel Administrativo</h1>
        <p>Olá, <strong>{(session.user as any)?.name || 'Dra. Irisman'}</strong></p>
      </header>

      <section style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' }}>
        <h2 style={{ marginTop: 0 }}>Configurações Gerais do Site</h2>
        <p style={{ fontSize: '14px', color: '#666' }}>Altere os textos do "Sobre Mim", links de redes sociais e WhatsApp.</p>
        
        {/* Renderiza o formulário enviando os dados do banco */}
        <EditSiteConfigForm initialConfig={config} />
      </section>

      <section style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid #eee' }}>
        <h3>Outras Opções</h3>
        <ul style={{ lineHeight: '2' }}>
          <li><a href="/admin/appointments">Visualizar Agendamentos</a></li>
          <li><a href="/">Ver site ao vivo</a></li>
          <li><a href="/api/auth/signout" style={{ color: 'red' }}>Sair do Painel</a></li>
        </ul>
      </section>
    </main>
  );
}
