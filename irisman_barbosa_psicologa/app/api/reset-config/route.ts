import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const config = await prisma.siteConfig.upsert({
      where: { id: 'singleton' },
      update: { aboutText: 'Configuração Inicial' },
      create: {
        id: 'singleton',
        aboutText: 'Olá, sou a Dra. Irisman...',
        whatsappNumber: '5511999999999',
        instagramUrl: 'https://instagram.com/',
      },
    });
    return NextResponse.json({ success: true, message: "Banco inicializado!", config });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message });
  }
}
