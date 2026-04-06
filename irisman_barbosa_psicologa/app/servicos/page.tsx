import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { Brain, Heart, Users, Video, UserPlus, Baby } from 'lucide-react';
import Link from 'next/link';
import { GoldenButton } from '@/components/golden-button';

export default function ServicesPage() {
  const services = [
    {
      number: '01',
      icon: Brain,
      title: 'Psicoterapia Individual',
      description: 'Processo terapêutico individual focado em autoconhecimento, resolução de conflitos internos e desenvolvimento emocional sustentável.',
      modalities: ['Presencial', 'Online'],
    },
    {
      number: '02',
      icon: Heart,
      title: 'Ansiedade & Depressão',
      description: 'Acompanhamento especializado para quadros de ansiedade, síndrome do pânico, burnout e transtornos depressivos com abordagem integrativa.',
      modalities: ['Especialidade'],
    },
    {
      number: '03',
      icon: Users,
      title: 'Psicologia Analítica',
      description: 'Abordagem junguiana com foco no inconsciente, arquétipos e individuação. Um mergulho profundo na sua história e potencial de transformação.',
      modalities: ['Jung', 'Profundidade'],
    },
    {
      number: '04',
      icon: Users,
      title: 'Terapia de Casal',
      description: 'Espaço para ressignificar padrões relacionais, melhorar a comunicação e fortalecer vínculos afetivos com escuta imparcial e técnica.',
      modalities: ['Presencial'],
    },
    {
      number: '05',
      icon: Video,
      title: 'Atendimento Online',
      description: 'Sessões por videochamada com a mesma qualidade e sigilo do atendimento presencial. Flexibilidade para sua rotina, onde quer que você esteja.',
      modalities: ['Nacional'],
    },
    {
      number: '06',
      icon: Baby,
      title: 'Orientação Parental',
      description: 'Suporte especializado para pais e mães navegarem os desafios da criação de filhos com mais segurança, presença e consciência emocional.',
      modalities: ['Família'],
    },
  ];

  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#0c0b09]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionEyebrow className="justify-center md:justify-start">
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
            O que ofereço
          </SectionEyebrow>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light leading-tight text-[#faf8f3] mb-6">
            Serviços &<br />
            <em className="italic text-[#e2c97e]">Abordagens</em>
          </h1>
          <p className="text-base leading-relaxed text-[#a89f8c] max-w-2xl">
            Cada modalidade é pensada para atender às suas necessidades de forma personalizada e cuidadosa.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      {/* Services Grid */}
      <section className="bg-[#111009] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[rgba(201,168,76,0.08)]">
            {services.map((service) => (
              <div
                key={service.number}
                className="bg-[#0c0b09] p-12 hover:bg-[#14120d] transition-all duration-400 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#c9a84c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
                
                <div className="font-['Cormorant_Garamond'] text-6xl font-light text-[rgba(201,168,76,0.25)] group-hover:text-[rgba(201,168,76,0.35)] leading-none mb-6 transition-colors duration-400">
                  {service.number}
                </div>

                <service.icon className="w-12 h-12 text-[#c9a84c] mb-6 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />

                <h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#f2ead8] mb-4 leading-tight">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#a89f8c] mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.modalities.map((modality, index) => (
                    <span
                      key={index}
                      className="text-[0.58rem] tracking-[0.2em] uppercase text-[#8a6e2f] border border-[rgba(201,168,76,0.18)] px-3 py-1.5"
                    >
                      {modality}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA */}
      <section className="bg-[#0c0b09] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionEyebrow className="justify-center">
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
            Agendamento
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
          </SectionEyebrow>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light leading-tight text-[#faf8f3] mb-6">
            Dê o primeiro<br />
            <em className="italic text-[#e2c97e]">passo</em>
          </h2>
          <p className="text-base leading-relaxed text-[#a89f8c] mb-12 max-w-2xl mx-auto">
            O início de um processo terapêutico é um ato de coragem. Entre em contato e agende sua consulta.
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
