import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function GET() {
  const email = "Irisman.psi@gmail.com"; // <--- Coloque seu email aqui
  const senhaPura = "Irisman@2026"; // <--- Defina a senha que deseja usar

  try {
    const hashedPassword = await bcrypt.hash(senhaPura, 10);

    const user = await prisma.user.upsert({
      where: { email },
      update: {
        role: 'admin',
        password: hashedPassword,
      },
      create: {
        email,
        name: 'Dra Irisman',
        role: 'admin',
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      success: true,
      message: `Usuário admin criado! Use o email ${email} e a senha definida.`,
    });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message });
  }
}
