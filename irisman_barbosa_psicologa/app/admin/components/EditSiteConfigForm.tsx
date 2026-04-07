'use client';
import { useState } from 'react';

export default function EditSiteConfigForm({ initialConfig }: any) {
  const [form, setForm] = useState({
    aboutText: initialConfig?.aboutText || '',
    whatsappNumber: initialConfig?.whatsappNumber || '',
    instagramUrl: initialConfig?.instagramUrl || '',
  });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMsg('');
    try {
      const res = await fetch('/api/admin/site-config', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) setMsg('Salvo com sucesso!');
      else setMsg('Erro ao salvar no banco.');
    } catch (err) {
      setMsg('Erro de conexão.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '15px' }}>
      <label>
        <strong>Sobre Mim (texto):</strong><br/>
        <textarea 
          style={{ width: '100%', padding: '8px' }} 
          rows={5} 
          value={form.aboutText} 
          onChange={e => setForm({...form, aboutText: e.target.value})} 
        />
      </label>
      <label>
        <strong>WhatsApp (ex: 5511999999999):</strong><br/>
        <input 
          style={{ width: '100%', padding: '8px' }} 
          value={form.whatsappNumber} 
          onChange={e => setForm({...form, whatsappNumber: e.target.value})} 
        />
      </label>
      <label>
        <strong>Instagram (link completo):</strong><br/>
        <input 
          style={{ width: '100%', padding: '8px' }} 
          value={form.instagramUrl} 
          onChange={e => setForm({...form, instagramUrl: e.target.value})} 
        />
      </label>
      <button 
        type="submit" 
        disabled={saving}
        style={{ padding: '10px', background: '#0070f3', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
      >
        {saving ? 'Salvando...' : 'Salvar Alterações'}
      </button>
      {msg && <p style={{ fontWeight: 'bold' }}>{msg}</p>}
    </form>
  );
}
