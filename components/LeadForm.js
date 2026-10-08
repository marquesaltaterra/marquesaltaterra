// /components/LeadForm.js
import { useState, useMemo } from 'react';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import { supabase } from '../lib/supabaseClient';
import { cidades, imoveis } from '../data/cidades';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Lista de interesse montada dinamicamente
function montarOpcoes() {
  const terrenos = cidades.map((c) => ({
    valor: `cidade:${c.slug}`,
    label: `${c.nome} - ${c.estado}${c.status === 'em-breve' ? ' (em breve)' : ''}`,
    grupo: 'Terrenos',
  }));
  const altoPadrao = imoveis.map((i) => ({
    valor: `imovel:${i.slug}`,
    label: `${i.nome} — ${i.categoria || i.localizacao || ''}`,
    grupo: 'Imóveis de Alto Padrão',
  }));
  return {
    terrenos,
    altoPadrao,
    geral: { valor: 'geral', label: 'Ainda não sei / Quero orientação' },
  };
}

export default function LeadForm({ onSuccess, compacto = false }) {
  const opcoes = useMemo(montarOpcoes, []);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [interesse, setInteresse] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState('');

  const inputStyle = {
    width: '100%',
    padding: '13px 14px',
    fontSize: '0.92rem',
    fontFamily: 'inherit',
    border: '1px solid #E0D8CF',
    borderRadius: '4px',
    backgroundColor: '#FAF7F3',
    color: '#2C2C2C',
    outline: 'none',
    boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    color: '#4A4A4A',
    fontSize: '0.75rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    marginBottom: '6px',
  };

  const validar = () => {
    if (nome.trim().length < 2) return 'Digite seu nome completo.';
    if (!EMAIL_REGEX.test(email.trim())) return 'Digite um e-mail válido.';

    // Telefone: tenta BR primeiro, depois internacional
    const telLimpo = telefone.trim();
    let parsed = parsePhoneNumberFromString(telLimpo, 'BR');
    if (!parsed || !parsed.isValid()) {
      // Tenta sem forçar BR (aceita +XX)
      parsed = parsePhoneNumberFromString(telLimpo);
    }
    if (!parsed || !parsed.isValid()) {
      return 'Telefone inválido. Use DDD + número (ex: 11 91357-2902).';
    }
    return { parsed };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErro('');

    const resultado = validar();
    if (typeof resultado === 'string') {
      setErro(resultado);
      return;
    }

    const { parsed } = resultado;
    setEnviando(true);

    try {
      // Captura metadados (invisíveis pro usuário)
      const params = new URLSearchParams(window.location.search);
      const payload = {
        nome: nome.trim(),
        email: email.trim().toLowerCase(),
        telefone: telefone.trim(),
        telefone_e164: parsed.number,       // +5511913572902
        pais: parsed.country || 'BR',
        interesse: interesse || 'geral',
        mensagem: mensagem.trim() || null,
        origem_pagina: window.location.pathname,
        referrer: document.referrer || null,
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        user_agent: navigator.userAgent,
      };

      const { error } = await supabase.from('leads').insert([payload]);
      if (error) throw error;

      // Sucesso
      setNome(''); setEmail(''); setTelefone('');
      setInteresse(''); setMensagem('');
      if (onSuccess) onSuccess();
    } catch (err) {
      console.error(err);
      setErro('Algo deu errado. Tente novamente em instantes.');
    } finally {
      setEnviando(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div>
          <label style={labelStyle}>Nome completo</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Seu nome"
            autoComplete="name"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>WhatsApp</label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="11 91357-2902"
            autoComplete="tel"
            inputMode="tel"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="voce@email.com"
            autoComplete="email"
            style={inputStyle}
            required
          />
        </div>

        <div>
          <label style={labelStyle}>Tenho interesse em</label>
          <select
            value={interesse}
            onChange={(e) => setInteresse(e.target.value)}
            style={{ ...inputStyle, cursor: 'pointer' }}
            required
          >
            <option value="">Selecione…</option>
            <optgroup label="Terrenos">
              {opcoes.terrenos.map((o) => (
                <option key={o.valor} value={o.valor}>{o.label}</option>
              ))}
            </optgroup>
            <optgroup label="Imóveis de Alto Padrão">
              {opcoes.altoPadrao.map((o) => (
                <option key={o.valor} value={o.valor}>{o.label}</option>
              ))}
            </optgroup>
            <option value={opcoes.geral.valor}>{opcoes.geral.label}</option>
          </select>
        </div>

        {!compacto && (
          <div>
            <label style={labelStyle}>Mensagem (opcional)</label>
            <textarea
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              placeholder="Algo que queira adiantar?"
              rows={2}
              maxLength={1000}
              style={{ ...inputStyle, resize: 'vertical', minHeight: '60px' }}
            />
          </div>
        )}

        {erro && (
          <div
            style={{
              backgroundColor: '#FDECEC',
              border: '1px solid #F5B5B5',
              color: '#B00020',
              fontSize: '0.82rem',
              padding: '10px 12px',
              borderRadius: '4px',
            }}
          >
            {erro}
          </div>
        )}

        <button
          type="submit"
          disabled={enviando}
          style={{
            marginTop: '6px',
            padding: '15px 20px',
            backgroundColor: enviando ? '#B8A07A' : '#D48C5B',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontSize: '0.85rem',
            fontWeight: '700',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            cursor: enviando ? 'wait' : 'pointer',
            transition: 'all 0.25s ease',
            fontFamily: 'inherit',
          }}
        >
          {enviando ? 'Enviando…' : 'Quero receber agora'}
        </button>

        <p
          style={{
            color: '#999',
            fontSize: '0.7rem',
            textAlign: 'center',
            margin: 0,
            lineHeight: '1.5',
          }}
        >
          🔒 Seus dados estão seguros. Entraremos em contato em até 24h.
        </p>
      </div>
    </form>
  );
}