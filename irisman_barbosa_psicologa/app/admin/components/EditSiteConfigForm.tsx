'use client';
import { useEffect, useState } from 'react';

export default function EditSiteConfigForm({ initialConfig }: any) {
  // inicializa com strings vazias para evitar mismatch SSR/CSR
  const [form, setForm] = useState({
    aboutText: '',
    aboutImage: '',
    contactPhone: '',
    contactEmail: '',
    whatsappNumber: '',
    instagramUrl: '',
  });
  const [initialized, setInitialized] = useState(false);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  // ao montar, popula com os valores vindos do servidor (se existirem)
  useEffect(() => {
    if (initialConfig && !initialized) {
      setForm({
        aboutText: initialConfig.aboutText ?? '',
        aboutImage: initialConfig.aboutImage ?? '',
        contactPhone: initialConfig.contactPhone ?? '',
        contactEmail: initialConfig.contactEmail ?? '',
        whatsappNumber: initialConfig.whatsappNumber ?? '',
        instagramUrl: initialConfig.instagramUrl ?? '',
      });
      setInitialized(true);
      // debug - console para confirmar que o componente montou
      console.log('EditSiteConfigForm initialConfig', initialConfig);
    }
  }, [initialConfig, initialized]);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    try {
      const res = await fetch('/api/admin/site-config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (json.success) setMsg('Salvo com sucesso');
      else setMsg('Erro ao salvar: ' + (json.message || 'unknown'));
    } catch (err) {
      setMsg('Erro de rede');
    } finally {
      setSaving(false);
    }
  }

  // enquanto não inicializou do server, mostra um loader simples
  if (!initialized) {
    return <div>Carregando formulário…</div>;
  }

  return (
    <form onSubmit={submit} style={{ display: 'grid', gap: 12 }}>
      <label>
        Sobre (texto)
        <textarea value={form.aboutText} onChange={e => setForm({...form, aboutText: e.target.value})} rows={6} />
      </label>

      <label>
        Imagem sobre (URL)
        <input value={form.aboutImage} onChange={e => setForm({...form, aboutImage: e.target.value})} />
      </label>

      <label>
        Telefone de contato
        <input value={form.contactPhone} onChange={e => setForm({...form, contactPhone: e.target.value})} />
      </label>

      <label>
        Email de contato
        <input value={form.contactEmail} onChange={e => setForm({...form, contactEmail: e.target.value})} />
      </label>

      <label>
        WhatsApp
        <input value={form.whatsappNumber} onChange={e => setForm({...form, whatsappNumber: e.target.value})} />
      </label>

      <label>
        Instagram
        <input value={form.instagramUrl} onChange={e => setForm({...form, instagramUrl: e.target.value})} />
      </label>

      <div>
        <button type="submit" disabled={saving}>{saving ? 'Salvando...' : 'Salvar'}</button>
        {msg && <span style={{ marginLeft: 12 }}>{msg}</span>}
      </div>
    </form>
  );
}
