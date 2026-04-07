import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function GET() {
  const email = "Irisman.psi@gmail.com"; // <--- COLOQUE SEU EMAIL AQUI
  const senhaPura = "Irisman@2026"; // <--- ESTA SERÁ SUA SENHA DEFINITIVA
  
  try {
    // Criptografa a senha para o banco aceitar
    const hashedPassword = await bcrypt.hash(senhaPura, 10);
    
    const user = await prisma.user.upsert({
      where: { email },
      update: { 
        role: 'admin',
        password: hashedPassword 
      },
      create: { 
        email, 
        name: 'Dra Irisman', 
        role: 'admin',
        password: hashedPassword
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: `Usuário Admin configurado! Logue com o e-mail ${email} e a senha que você definiu no código.` 
    });
  } catch (e: any) {
    return NextResponse.json({ success: false, error: e.message });
  }
}
