'use client';
import { useSession } from 'next-auth/react';

export default function AdminButton() {
  const { data: session } = useSession();
  if (!session) return <a href="/api/auth/signin">Login</a>;
  if ((session.user as any).role !== 'admin') return <p>Sem permissão</p>;
  return <a href="/admin">Ir para o Admin</a>;
}
