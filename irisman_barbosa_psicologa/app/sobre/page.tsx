import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Award, Heart, Lightbulb, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { GoldenButton } from '@/components/golden-button';

export default function AboutPage() {
  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0c0b09]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionEyebrow className="justify-center">
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
            Sobre mim
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
          </SectionEyebrow>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light leading-tight text-[#faf8f3] mb-6">
            Cuidado que <br className="hidden md:block" />
            <em className="italic text-[#e2c97e]">transforma</em>
          </h1>
        </div>
      </section>

      <div className="divider"></div>

      {/* Main Content */}
      <section className="bg-[#111009] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-[#1c1810] to-[#0f0d09] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-80 h-80">
                    <Image
                      src="/logo-irisman.png"
                      alt="Irisman Barbosa"
                      fill
                      className="object-contain opacity-20"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -inset-2 border border-[rgba(201,168,76,0.18)] rotate-[1.5deg] pointer-events-none"></div>
              <div className="absolute left-0 top-12 w-12 h-[1px] bg-[#c9a84c] -translate-x-6"></div>
            </div>

            {/* Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-[#a89f8c]">
                  Sou psicóloga clínica com formação em Psicologia Analítica (Junguiana) e especialização em saúde mental. Acredito que cada pessoa carrega consigo recursos internos únicos para superar seus desafios — meu papel é criar um espaço seguro para que você os encontre.
                </p>
                <p className="text-base leading-relaxed text-[#a89f8c]">
                  Atendo adultos e adolescentes com foco em ansiedade, depressão, relacionamentos, autoconhecimento e desenvolvimento pessoal. Cada processo terapêutico é singular e conduzido com escuta ativa, empatia e ética.
                </p>
                <p className="text-base leading-relaxed text-[#a89f8c]">
                  Minha abordagem integra a profundidade da Psicologia Analítica de Jung com técnicas baseadas em evidências, criando um processo terapêutico personalizado que respeita sua história e seu ritmo.
                </p>
              </div>

              {/* Credentials */}
              <div className="space-y-4 pt-8">
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#e2c97e] mb-6">
                  Formação e Credenciais
                </h3>
                <div className="space-y-3">
                  {[
                    'Graduação em Psicologia',
                    'Especialização em Psicologia Analítica Junguiana',
                    'Formação em Terapia Cognitivo-Comportamental (TCC)',
                    'Membro do Conselho Federal de Psicologia',
                  ].map((credential, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-1 h-1 bg-[#c9a84c] rounded-full mt-2.5 flex-shrink-0"></div>
                      <p className="text-sm text-[#a89f8c] leading-relaxed">{credential}</p>
                    </div>
                  ))}
                </div>

                <div className="inline-flex items-center gap-3 border border-[rgba(201,168,76,0.18)] px-4 py-2 mt-8">
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#c9a84c]">CRP</span>
                  <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#a89f8c]">
                    09/18965 — Registro ativo
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Values */}
      <section className="bg-[#0c0b09] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionEyebrow className="justify-center">
              <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
              Valores
              <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
            </SectionEyebrow>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light leading-tight text-[#faf8f3]">
              Como <em className="italic text-[#e2c97e]">trabalho</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Empatia',
                desc: 'Escuta ativa e acolhedora, sem julgamentos, criando um espaço seguro para sua expressão.',
              },
              {
                icon: Award,
                title: 'Ética',
                desc: 'Sigilo profissional absoluto e compromisso com os princípios do Conselho de Psicologia.',
              },
              {
                icon: Lightbulb,
                title: 'Autoconhecimento',
                desc: 'Facilitação do processo de descoberta dos seus recursos internos e potenciais.',
              },
              {
                icon: Users,
                title: 'Individualização',
                desc: 'Cada pessoa é única. Respeito ao seu ritmo, história e processo singular.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="border border-[rgba(201,168,76,0.08)] bg-[rgba(255,255,255,0.01)] p-8 hover:border-[rgba(201,168,76,0.18)] hover:bg-[#14120d] transition-all duration-300"
              >
                <value.icon className="w-10 h-10 text-[#c9a84c] mb-6 opacity-60" />
                <h3 className="font-['Cormorant_Garamond'] text-xl font-normal text-[#f2ead8] mb-3">
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#a89f8c]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA */}
      <section className="bg-[#111009] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light leading-tight text-[#faf8f3] mb-6">
            Pronto para dar o <br className="hidden md:block" />
            <em className="italic text-[#e2c97e]">primeiro passo?</em>
          </h2>
          <p className="text-base leading-relaxed text-[#a89f8c] mb-12 max-w-2xl mx-auto">
            Entre em contato para agendar uma consulta ou esclarecer dúvidas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendar">
              <GoldenButton>Agendar Consulta</GoldenButton>
            </Link>
            <Link href="/contato">
              <GoldenButton variant="outline">Entrar em Contato</GoldenButton>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
