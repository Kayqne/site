import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  const seuEmail = "SEU-EMAIL-AQUI@gmail.com"; // <--- COLOQUE O SEU EMAIL AQUI
  try {
    const user = await prisma.user.upsert({
      where: { email: seuEmail },
      update: { role: 'admin' },
      create: { 
        email: seuEmail, 
        name: 'Admin Irisman', 
        role: 'admin' 
      },
    });
    return NextResponse.json({ success: true, message: "Você agora é ADMIN!", user });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message });
  }
}
