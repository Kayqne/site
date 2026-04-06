import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const published = searchParams.get('published');
    const category = searchParams.get('category');

    const posts = await prisma.blogPost.findMany({
      where: {
        ...(published === 'true' ? { published: true } : {}),
        ...(category ? { category } : {}),
      },
      orderBy: { publishedAt: 'desc' },
    });

    return NextResponse.json({ success: true, posts });
  } catch (error: any) {
    console.error('Erro ao buscar posts:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao buscar posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { success: false, message: 'Não autorizado' },
        { status: 401 }
      );
    }

    const data = await request.json();
    const { title, content, excerpt, coverImage, published, category, tags, readTime } = data;

    if (!title || !content || !excerpt) {
      return NextResponse.json(
        { success: false, message: 'Título, conteúdo e resumo são obrigatórios' },
        { status: 400 }
      );
    }

    // Generate slug from title
    const slug = title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');

    const post = await prisma.blogPost.create({
      data: {
        title,
        slug,
        content,
        excerpt,
        coverImage: coverImage || null,
        published: published ?? false,
        publishedAt: published ? new Date() : null,
        category: category || 'Geral',
        tags: tags || [],
        readTime: readTime || 5,
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Post criado com sucesso',
      post,
    });
  } catch (error: any) {
    console.error('Erro ao criar post:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao criar post' },
      { status: 500 }
    );
  }
}
