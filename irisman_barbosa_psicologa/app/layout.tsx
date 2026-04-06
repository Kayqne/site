import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Irisman Barbosa - Psicóloga | CRP 09/18965',
  description: 'Psicóloga especializada em Psicologia Analítica Junguiana. Atendimento presencial e online para ansiedade, depressão, autoconhecimento e desenvolvimento pessoal.',
  keywords: 'psicóloga, psicologia, terapia, Jung, psicologia analítica, ansiedade, depressão, Brasília',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <script src="https://apps.abacus.ai/chatllm/appllm-lib.js"></script>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
