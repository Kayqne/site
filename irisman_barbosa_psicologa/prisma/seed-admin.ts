import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('SUA_SENHA_AQUI', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'seu-email@exemplo.com' },
    update: {
      role: 'admin'
    },
    create: {
      email: 'seu-email@exemplo.com',
      name: 'Admin Irisman',
      password: hashedPassword,
      role: 'admin',
    },
  });

  console.log('Usuário admin criado/atualizado:', admin);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
