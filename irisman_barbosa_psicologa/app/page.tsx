import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { GoldenButton } from '@/components/golden-button';
import { Heart, Brain, Users } from 'lucide-react';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

async function getRecentBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
      take: 3,
    });
    return posts ?? [];
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function Home() {
  const recentPosts = await getRecentBlogPosts();

  return (
    <>
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center overflow-hidden pt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="z-10 space-y-8">
            <p className="flex items-center gap-4 text-[0.65rem] tracking-[0.3em] uppercase text-[#c9a84c] animate-[fadeUp_0.9s_ease_0.2s_forwards] opacity-0">
              <span className="w-8 h-[1px] bg-[#c9a84c]"></span>
              Psicologia Clínica & Analítica
            </p>

            <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light leading-[1.05] text-[#faf8f3] animate-[fadeUp_0.9s_ease_0.4s_forwards] opacity-0">
              Irisman
              <br />
              <em className="italic text-[#e2c97e]">Barbosa</em>
            </h1>

            <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl font-light italic text-[#a89f8c] animate-[fadeUp_0.9s_ease_0.55s_forwards] opacity-0">
              Psicóloga — CRP 09/18965
            </p>

            <p className="text-base leading-relaxed text-[#a89f8c] max-w-[38ch] animate-[fadeUp_0.9s_ease_0.7s_forwards] opacity-0">
              Um espaço seguro e acolhedor para o seu processo de autoconhecimento, equilíbrio emocional e transformação pessoal. Atendimento presencial e online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center animate-[fadeUp_0.9s_ease_0.85s_forwards] opacity-0">
              <Link href="/agendar">
                <GoldenButton>Agendar Consulta</GoldenButton>
              </Link>
              <Link href="/sobre">
                <GoldenButton variant="ghost">
                  Conheça mais <span className="text-lg">↓</span>
                </GoldenButton>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-[3/4] bg-gradient-to-br from-[#1c1810] to-[#0f0d09] overflow-hidden animate-[fadeIn_1.2s_ease_0.3s_forwards] opacity-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <Image
                    src="/logo-irisman.png"
                    alt="Irisman Barbosa"
                    fill
                    className="object-contain opacity-20"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0b09] via-transparent to-transparent"></div>
            </div>
            <div className="absolute -inset-2 border border-[rgba(201,168,76,0.18)] rotate-1 pointer-events-none"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 left-6 lg:left-24 flex gap-12 animate-[fadeUp_0.9s_ease_1s_forwards] opacity-0">
          <div>
            <div className="font-['Cormorant_Garamond'] text-4xl font-light text-[#e2c97e] leading-none">
              +5
            </div>
            <div className="text-[0.6rem] tracking-[0.2em] uppercase text-[#a89f8c] mt-1">
              Anos de experiência
            </div>
          </div>
          <div>
            <div className="font-['Cormorant_Garamond'] text-4xl font-light text-[#e2c97e] leading-none">
              300+
            </div>
            <div className="text-[0.6rem] tracking-[0.2em] uppercase text-[#a89f8c] mt-1">
              Pacientes atendidos
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Services Preview */}
      <section className="bg-[#111009] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-end mb-16">
            <div>
              <SectionEyebrow>Áreas de atuação</SectionEyebrow>
              <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light leading-tight text-[#faf8f3]">
                Serviços &<br />
                <em className="italic text-[#e2c97e]">Abordagens</em>
              </h2>
            </div>
            <Link href="/servicos" className="hidden md:block">
              <GoldenButton variant="ghost">
                Ver todos <span className="text-lg">→</span>
              </GoldenButton>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[rgba(201,168,76,0.08)]">
            {[
              {
                icon: Brain,
                title: 'Psicoterapia Individual',
                desc: 'Processo terapêutico focado em autoconhecimento e desenvolvimento emocional.',
              },
              {
                icon: Heart,
                title: 'Ansiedade & Depressão',
                desc: 'Acompanhamento especializado para transtornos de ansiedade e depressivos.',
              },
              {
                icon: Users,
                title: 'Psicologia Analítica',
                desc: 'Abordagem junguiana com foco no inconsciente e individuação.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-[#0c0b09] p-12 hover:bg-[#14120d] transition-all duration-400 group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-[#c9a84c] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left"></div>
                <service.icon className="w-12 h-12 text-[#c9a84c] mb-6 opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                <h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#f2ead8] mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#a89f8c]">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link href="/servicos">
              <GoldenButton variant="ghost">
                Ver todos os serviços <span className="text-lg">→</span>
              </GoldenButton>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* Blog Preview */}
      <section className="bg-[#0c0b09] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <SectionEyebrow className="justify-center">
              <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
              Blog
              <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
            </SectionEyebrow>
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light leading-tight text-[#faf8f3]">
              Artigos sobre<br />
              <em className="italic text-[#e2c97e]">Saúde Mental</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentPosts?.map?.((post: any) => (
              <Link
                key={post?.id}
                href={`/blog/${post?.slug}`}
                className="border border-[rgba(201,168,76,0.08)] bg-[rgba(255,255,255,0.01)] hover:border-[rgba(201,168,76,0.18)] transition-all duration-300 group overflow-hidden"
              >
                {post?.coverImage && (
                  <div className="relative aspect-video bg-[#1c1810]">
                    <Image
                      src={post.coverImage}
                      alt={post?.title || 'Blog post'}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4 text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f]">
                    <span>{post?.category}</span>
                    <span>•</span>
                    <span>{post?.readTime} min</span>
                  </div>
                  <h3 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#f2ead8] mb-3 leading-tight group-hover:text-[#e2c97e] transition-colors duration-300">
                    {post?.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#a89f8c] line-clamp-2">
                    {post?.excerpt}
                  </p>
                </div>
              </Link>
            )) || []}
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog">
              <GoldenButton variant="outline">Ver todos os artigos</GoldenButton>
            </Link>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA Section */}
      <section className="bg-[#111009] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionEyebrow className="justify-center">
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
            Dê o primeiro passo
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
          </SectionEyebrow>
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light leading-tight text-[#faf8f3] mb-6">
            Pronto para iniciar sua<br />
            <em className="italic text-[#e2c97e]">jornada de transformação?</em>
          </h2>
          <p className="text-base leading-relaxed text-[#a89f8c] mb-12 max-w-2xl mx-auto">
            O início de um processo terapêutico é um ato de coragem. Entre em contato e agende sua consulta — responderei em até 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/agendar">
              <GoldenButton>Agendar Consulta</GoldenButton>
            </Link>
            <Link href="/contato">
              <GoldenButton variant="outline">Enviar Mensagem</GoldenButton>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}