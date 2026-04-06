export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';

export async function GET() {
  const config = await prisma.siteConfig.findUnique({ where: { id: 'singleton' } });
  return NextResponse.json({ success: true, config });
}

export async function PUT(request: Request) {
  const session = await getServerSession(authOptions as any);
  if (!session || (session.user as any)?.role !== 'admin') {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  const body = await request.json();
  const data = {
    aboutText: body.aboutText ?? '',
    aboutImage: body.aboutImage ?? null,
    contactPhone: body.contactPhone ?? null,
    contactEmail: body.contactEmail ?? null,
    whatsappNumber: body.whatsappNumber ?? null,
    instagramUrl: body.instagramUrl ?? null,
  };

  const updated = await prisma.siteConfig.upsert({
    where: { id: 'singleton' },
    update: data,
    create: { id: 'singleton', ...data },
  });

  return NextResponse.json({ success: true, config: updated });
}
