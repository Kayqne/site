'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { GoldenButton } from '@/components/golden-button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function ContactPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result?.success) {
        setMessage('Mensagem enviada com sucesso! Retornaremos em breve.');
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage(result?.message || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error: any) {
      setMessage('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="pt-32 pb-16 bg-[#0c0b09]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <SectionEyebrow>
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
            Agendamento
          </SectionEyebrow>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light leading-tight text-[#faf8f3] mb-6">
            Dê o primeiro<br />
            <em className="italic text-[#e2c97e]">passo</em>
          </h1>
          <p className="text-base leading-relaxed text-[#a89f8c] max-w-2xl">
            O início de um processo terapêutico é um ato de coragem. Entre em contato e agende sua consulta — responderei em até 24 horas.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section className="bg-[#111009] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-['Cormorant_Garamond'] text-3xl font-light text-[#f2ead8] mb-8">
                Informações de Contato
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    label: 'Telefone / WhatsApp',
                    value: '(61) 9 9999-9999',
                  },
                  {
                    icon: Mail,
                    label: 'E-mail',
                    value: 'contato@irismanbarbosa.com.br',
                  },
                  {
                    icon: MapPin,
                    label: 'Localização',
                    value: 'Atendimento presencial e online',
                  },
                  {
                    icon: Clock,
                    label: 'Horários',
                    value: 'Seg–Sex: 8h–19h | Sáb: 8h–13h',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 border border-[rgba(201,168,76,0.18)] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-[#c9a84c]" />
                    </div>
                    <div>
                      <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#a89f8c] mb-1">
                        {item.label}
                      </p>
                      <p className="text-sm text-[#f2ead8]">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all"
                      placeholder="(00) 9 0000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
                    Mensagem
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all resize-none"
                    placeholder="Conte um pouco sobre o que busca..."
                  />
                </div>

                <GoldenButton type="submit" disabled={loading} className="w-full">
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </GoldenButton>

                {message && (
                  <p className={`text-sm text-center ${message.includes('sucesso') ? 'text-[#c9a84c]' : 'text-[#a89f8c]'}`}>
                    {message}
                  </p>
                )}

                <p className="text-[0.68rem] text-[#a89f8c] opacity-60 text-center">
                  Sigilo e ética garantidos. Retorno em até 24h úteis.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
