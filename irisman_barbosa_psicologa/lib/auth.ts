// lib/auth.ts
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'; // se usar credenciais
// import GoogleProvider from 'next-auth/providers/google'; // se usar Google
import { prisma } from './db'; // ajuste o path conforme o seu projeto

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma), // se você usa Prisma
  providers: [
    // Exemplo credentials (opcional) — mantenha os providers que você já tem
    CredentialsProvider({
      name: 'Email',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // sua lógica de autenticação (verificar senha etc.)
        const user = await prisma.user.findUnique({ where: { email: credentials!.email } });
        if (!user) return null;
        // verify password ...
        return user as any; // next-auth espera um objeto user
      },
    }),
    // GoogleProvider({ clientId: process.env.GOOGLE_ID!, clientSecret: process.env.GOOGLE_SECRET! }),
  ],
  session: {
    strategy: 'jwt', // mais simples e comum: session enviada via JWT
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    // *jwt* é chamado ao criar o token e em requests subsequentes do next-auth
    async jwt({ token, user }) {
      // Quando o usuário faz login, `user` existe — copie o role do DB para o token
      if (user) {
        token.role = (user as any).role ?? token.role;
      } else if (!token.role && token.email) {
        // Caso o role não exista no token (por ex. providers externos),
        // buscamos no banco pelo email e colocamos no token.
        const dbUser = await prisma.user.findUnique({ where: { email: token.email as string } });
        if (dbUser) token.role = dbUser.role;
      }
      return token;
    },

    // *session* é chamado quando getSession/getServerSession/useSession retornam a sessão
    async session({ session, token }) {
      // Copiamos role do token para a sessão (acessível no client e server)
      (session.user as any).role = token.role as string | undefined;
      return session;
    },
  },
  // Outras configurações (pages, logger, etc.) se precisar
};

export default NextAuth(authOptions); // opcional — seu handler já usa NextAuth(authOptions)
