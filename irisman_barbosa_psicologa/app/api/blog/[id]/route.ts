import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export const dynamic = 'force-dynamic';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const post = await prisma.blogPost.findUnique({
      where: { id: params?.id },
    });

    if (!post) {
      return NextResponse.json(
        { success: false, message: 'Post não encontrado' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, post });
  } catch (error: any) {
    console.error('Erro ao buscar post:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao buscar post' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
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

    const post = await prisma.blogPost.update({
      where: { id: params?.id },
      data: {
        ...(title ? { title } : {}),
        ...(content ? { content } : {}),
        ...(excerpt ? { excerpt } : {}),
        ...(coverImage !== undefined ? { coverImage } : {}),
        ...(published !== undefined ? {
          published,
          publishedAt: published ? new Date() : null,
        } : {}),
        ...(category ? { category } : {}),
        ...(tags ? { tags } : {}),
        ...(readTime ? { readTime } : {}),
      },
    });

    return NextResponse.json({
      success: true,
      message: 'Post atualizado com sucesso',
      post,
    });
  } catch (error: any) {
    console.error('Erro ao atualizar post:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao atualizar post' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json(
        { success: false, message: 'Não autorizado' },
        { status: 401 }
      );
    }

    await prisma.blogPost.delete({
      where: { id: params?.id },
    });

    return NextResponse.json({
      success: true,
      message: 'Post excluído com sucesso',
    });
  } catch (error: any) {
    console.error('Erro ao excluir post:', error);
    return NextResponse.json(
      { success: false, message: 'Erro ao excluir post' },
      { status: 500 }
    );
  }
}
