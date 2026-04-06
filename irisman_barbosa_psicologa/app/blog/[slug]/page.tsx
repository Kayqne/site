import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { prisma } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import { GoldenButton } from '@/components/golden-button';
import { Calendar, Clock, Tag } from 'lucide-react';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

async function getBlogPost(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { slug, published: true },
    });
    return post;
  } catch (error: any) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params?.slug || '');

  if (!post) {
    notFound();
  }

  return (
    <>
      <Header />
      <WhatsAppButton />

      <article className="pt-32 pb-24 bg-[#0c0b09]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {post?.coverImage && (
            <div className="relative aspect-video bg-[#1c1810] mb-12 overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post?.title || 'Blog post'}
                fill
                className="object-cover"
              />
            </div>
          )}

          <div className="flex items-center gap-6 mb-6 text-[0.65rem] tracking-[0.2em] uppercase text-[#8a6e2f]">
            <span className="flex items-center gap-2">
              <Tag size={14} />
              {post?.category}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={14} />
              {post?.readTime} min
            </span>
            {post?.publishedAt && (
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            )}
          </div>

          <h1 className="font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light leading-tight text-[#faf8f3] mb-6">
            {post?.title}
          </h1>

          <p className="text-lg leading-relaxed text-[#a89f8c] mb-12 pb-12 border-b border-[rgba(201,168,76,0.08)]">
            {post?.excerpt}
          </p>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-['Cormorant_Garamond'] prose-headings:font-light prose-headings:text-[#e2c97e] prose-p:text-[#f2ead8] prose-p:leading-relaxed prose-a:text-[#c9a84c] prose-a:no-underline hover:prose-a:text-[#e2c97e] prose-strong:text-[#e2c97e] prose-strong:font-medium prose-ul:text-[#f2ead8] prose-ol:text-[#f2ead8] prose-li:text-[#f2ead8]"
            dangerouslySetInnerHTML={{ __html: post?.content || '' }}
          />

          {post?.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-12 pt-12 border-t border-[rgba(201,168,76,0.08)]">
              {post.tags.map((tag: string, index: number) => (
                <span
                  key={index}
                  className="text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] border border-[rgba(201,168,76,0.18)] px-3 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-16 pt-16 border-t border-[rgba(201,168,76,0.08)] text-center">
            <Link href="/blog">
              <GoldenButton variant="outline">← Voltar ao Blog</GoldenButton>
            </Link>
          </div>
        </div>
      </article>

      <div className="divider"></div>

      <section className="bg-[#111009] py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl font-light leading-tight text-[#faf8f3] mb-6">
            Pronto para iniciar sua<br />
            <em className="italic text-[#e2c97e]">jornada de transformação?</em>
          </h2>
          <p className="text-base leading-relaxed text-[#a89f8c] mb-12 max-w-2xl mx-auto">
            Entre em contato para agendar uma consulta.
          </p>
          <Link href="/agendar">
            <GoldenButton>Agendar Consulta</GoldenButton>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
