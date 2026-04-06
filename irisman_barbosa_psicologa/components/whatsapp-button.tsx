'use client';

import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  const phoneNumber = '5561999999999'; // Replace with real number
  const message = 'Olá, gostaria de agendar uma consulta';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-14 h-14 bg-[#c9a84c] rounded-full flex items-center justify-center shadow-lg hover:bg-[#e2c97e] transition-all duration-300 glow-gold group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="w-6 h-6 text-[#0c0b09]" />
      <span className="absolute right-full mr-4 bg-[#111009] border border-[rgba(201,168,76,0.18)] px-4 py-2 rounded text-[0.7rem] tracking-[0.15em] uppercase text-[#f2ead8] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale no WhatsApp
      </span>
    </a>
  );
}
