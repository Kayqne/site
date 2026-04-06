import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { prisma } from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';

export const dynamic = 'force-dynamic';

async function getBlogPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { publishedAt: 'desc' },
    });
    return posts ?? [];
  } catch (error: any) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="pt-32 pb-16 bg-[#0c0b09]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionEyebrow className="justify-center">
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
            Blog
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
          </SectionEyebrow>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light leading-tight text-[#faf8f3] mb-6">
            Artigos sobre<br />
            <em className="italic text-[#e2c97e]">Saúde Mental</em>
          </h1>
          <p className="text-base leading-relaxed text-[#a89f8c] max-w-2xl mx-auto">
            Reflexões, conhecimento e orientações sobre psicologia, saúde mental e desenvolvimento pessoal.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section className="bg-[#111009] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts?.map?.((post: any) => (
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
                  <h2 className="font-['Cormorant_Garamond'] text-2xl font-normal text-[#f2ead8] mb-3 leading-tight group-hover:text-[#e2c97e] transition-colors duration-300">
                    {post?.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-[#a89f8c] line-clamp-3">
                    {post?.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post?.tags?.slice?.(0, 3)?.map?.((tag: string, index: number) => (
                      <span
                        key={index}
                        className="text-[0.55rem] tracking-[0.15em] uppercase text-[#8a6e2f] border border-[rgba(201,168,76,0.1)] px-2 py-1"
                      >
                        {tag}
                      </span>
                    )) || []}
                  </div>
                </div>
              </Link>
            )) || []}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
