import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-[rgba(201,168,76,0.08)] bg-[#0c0b09]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Info */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo-irisman.png"
                  alt="Irisman Barbosa Psicóloga"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="font-['Cormorant_Garamond']">
                <div className="text-lg tracking-[0.12em] text-[#e2c97e]">
                  Irisman <span className="italic font-light text-[#a89f8c]">Barbosa</span>
                </div>
              </div>
            </Link>
            <p className="text-sm text-[#a89f8c] leading-relaxed mb-4">
              Psicóloga especializada em Psicologia Analítica Junguiana.
            </p>
            <div className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-[#8a6e2f] border border-[rgba(201,168,76,0.18)] px-4 py-2 inline-block">
              <span>CRP</span>
              <span className="text-[#a89f8c]">09/18965</span>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[0.65rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-6">
              Navegação
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                href="/sobre"
                className="text-[0.65rem] tracking-[0.15em] uppercase text-[#a89f8c] hover:text-[#c9a84c] transition-colors duration-300"
              >
                Sobre
              </Link>
              <Link
                href="/servicos"
                className="text-[0.65rem] tracking-[0.15em] uppercase text-[#a89f8c] hover:text-[#c9a84c] transition-colors duration-300"
              >
                Serviços
              </Link>
              <Link
                href="/blog"
                className="text-[0.65rem] tracking-[0.15em] uppercase text-[#a89f8c] hover:text-[#c9a84c] transition-colors duration-300"
              >
                Blog
              </Link>
              <Link
                href="/contato"
                className="text-[0.65rem] tracking-[0.15em] uppercase text-[#a89f8c] hover:text-[#c9a84c] transition-colors duration-300"
              >
                Contato
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[0.65rem] tracking-[0.3em] uppercase text-[#c9a84c] mb-6">
              Contato
            </h3>
            <div className="flex flex-col gap-3 text-sm text-[#a89f8c]">
              <p>Atendimento presencial e online</p>
              <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[#8a6e2f]">
                Seg–Sex: 8h–19h
              </p>
              <Link
                href="/agendar"
                className="text-[#c9a84c] hover:text-[#e2c97e] transition-colors duration-300 text-sm"
              >
                Agendar Consulta &rarr;
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(201,168,76,0.08)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.65rem] text-[#a89f8c] opacity-40 tracking-[0.1em]">
            © {new Date().getFullYear()} Irisman Barbosa · Psicóloga CRP 09/18965
          </p>
        </div>
      </div>
    </footer>
  );
}
