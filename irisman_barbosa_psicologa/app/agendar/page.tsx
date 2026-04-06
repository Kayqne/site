'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { SectionEyebrow } from '@/components/section-eyebrow';
import { GoldenButton } from '@/components/golden-button';
import { useState } from 'react';

export default function BookingPage() {
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
      modality: formData.get('modality'),
      message: formData.get('message'),
      date: formData.get('date') || undefined,
    };

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result?.success) {
        setMessage('Solicitação enviada! Entraremos em contato em breve para confirmar o agendamento.');
        (e.target as HTMLFormElement).reset();
      } else {
        setMessage(result?.message || 'Erro ao enviar solicitação. Tente novamente.');
      }
    } catch (error: any) {
      setMessage('Erro ao enviar solicitação. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <WhatsAppButton />

      <section className="pt-32 pb-16 bg-[#0c0b09]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <SectionEyebrow className="justify-center">
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
            Agendamento
            <span className="w-6 h-[1px] bg-[#c9a84c]"></span>
          </SectionEyebrow>
          <h1 className="font-['Cormorant_Garamond'] text-5xl md:text-7xl font-light leading-tight text-[#faf8f3] mb-6">
            Agende sua<br />
            <em className="italic text-[#e2c97e]">consulta</em>
          </h1>
          <p className="text-base leading-relaxed text-[#a89f8c] max-w-2xl mx-auto">
            Preencha o formulário abaixo e entraremos em contato para confirmar seu agendamento.
          </p>
        </div>
      </section>

      <div className="divider"></div>

      <section className="bg-[#111009] py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
                  Nome *
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
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all"
                  placeholder="(00) 9 0000-0000"
                />
              </div>
            </div>

            <div>
              <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
                E-mail *
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
                Modalidade *
              </label>
              <select
                name="modality"
                required
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all"
              >
                <option value="">Selecione uma modalidade</option>
                <option value="Psicoterapia Individual (Presencial)">Psicoterapia Individual (Presencial)</option>
                <option value="Psicoterapia Individual (Online)">Psicoterapia Individual (Online)</option>
                <option value="Terapia de Casal">Terapia de Casal</option>
                <option value="Orientação Parental">Orientação Parental</option>
                <option value="Primeira Consulta / Triagem">Primeira Consulta / Triagem</option>
              </select>
            </div>

            <div>
              <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
                Data Preferencial (Opcional)
              </label>
              <input
                type="datetime-local"
                name="date"
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-[0.6rem] tracking-[0.2em] uppercase text-[#8a6e2f] mb-2">
                Mensagem (Opcional)
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(201,168,76,0.08)] text-[#f2ead8] text-sm px-4 py-3 focus:border-[#8a6e2f] focus:bg-[rgba(201,168,76,0.03)] outline-none transition-all resize-none"
                placeholder="Conte um pouco sobre o que busca..."
              />
            </div>

            <GoldenButton type="submit" disabled={loading} className="w-full">
              {loading ? 'Enviando...' : 'Solicitar Agendamento'}
            </GoldenButton>

            {message && (
              <p className={`text-sm text-center ${message.includes('Solicitação enviada') ? 'text-[#c9a84c]' : 'text-[#a89f8c]'}`}>
                {message}
              </p>
            )}

            <p className="text-[0.68rem] text-[#a89f8c] opacity-60 text-center">
              Sigilo e ética garantidos. Retorno em até 24h úteis.
            </p>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}
