'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useSession } from 'next-auth/react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const session = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/blog', label: 'Blog' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(12,11,9,0.92)] backdrop-blur-lg border-b border-[rgba(201,168,76,0.18)]'
          : 'border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12">
            <Image
              src="/logo-irisman.png"
              alt="Irisman Barbosa Psicóloga"
              fill
              className="object-contain"
            />
          </div>
          <div className="font-['Cormorant_Garamond'] hidden sm:block">
            <div className="text-lg tracking-[0.12em] text-[#e2c97e]">
              Irisman <span className="italic font-light text-[#a89f8c]">Barbosa</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[0.7rem] tracking-[0.2em] uppercase text-[#a89f8c] hover:text-[#e2c97e] transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/agendar"
            className="text-[0.7rem] tracking-[0.18em] uppercase text-[#c9a84c] border border-[#8a6e2f] px-5 py-2.5 hover:bg-[#c9a84c] hover:text-[#0c0b09] transition-all duration-300"
          >
            Agendar Consulta
          </Link>
          {session?.data?.user && (
            <Link
              href="/admin"
              className="text-[0.7rem] tracking-[0.18em] uppercase text-[#8a6e2f] hover:text-[#c9a84c] transition-colors duration-300"
            >
              Admin
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#c9a84c] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111009] border-t border-[rgba(201,168,76,0.18)]">
          <div className="flex flex-col gap-1 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.7rem] tracking-[0.2em] uppercase text-[#a89f8c] hover:text-[#e2c97e] py-3 transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/agendar"
              className="text-[0.7rem] tracking-[0.18em] uppercase text-[#c9a84c] border border-[#8a6e2f] px-5 py-3 text-center mt-4 hover:bg-[#c9a84c] hover:text-[#0c0b09] transition-all duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Agendar Consulta
            </Link>
            {session?.data?.user && (
              <Link
                href="/admin"
                className="text-[0.7rem] tracking-[0.18em] uppercase text-[#8a6e2f] text-center py-3 hover:text-[#c9a84c] transition-colors duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
