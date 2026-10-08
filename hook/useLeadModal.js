// /hooks/useLeadModal.js
import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';

const STORAGE_KEY = 'mat_lead_modal_v1';
const MAX_POR_DIA = 3;
const SCROLL_THRESHOLD = 40;   // %
const TEMPO_FALLBACK = 15000;  // 15s

// Rotas onde NUNCA aparece
const ROTAS_EXCLUIDAS = ['/blog', '/obrigado', '/politica', '/termos'];

function getHoje() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function lerEstado() {
  if (typeof window === 'undefined') return { data: getHoje(), contagem: 0, enviado: false };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { data: getHoje(), contagem: 0, enviado: false };
    const parsed = JSON.parse(raw);
    // Se mudou o dia, reseta contagem (mas preserva "enviado")
    if (parsed.data !== getHoje()) {
      return { data: getHoje(), contagem: 0, enviado: !!parsed.enviado };
    }
    return parsed;
  } catch {
    return { data: getHoje(), contagem: 0, enviado: false };
  }
}

function salvarEstado(estado) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(estado));
  } catch {}
}

export function useLeadModal() {
  const router = useRouter();
  const [aberto, setAberto] = useState(false);
  const [jaDecidiu, setJaDecidiu] = useState(false);

  const podeAbrir = useCallback(() => {
    if (typeof window === 'undefined') return false;
    // Rota excluída?
    if (ROTAS_EXCLUIDAS.some((r) => router.pathname.startsWith(r))) return false;
    const estado = lerEstado();
    if (estado.enviado) return false;                // já preencheu
    if (estado.contagem >= MAX_POR_DIA) return false; // atingiu limite do dia
    return true;
  }, [router.pathname]);

  const abrir = useCallback(() => {
    if (!podeAbrir()) return;
    const estado = lerEstado();
    const novo = { ...estado, contagem: estado.contagem + 1 };
    salvarEstado(novo);
    setAberto(true);
  }, [podeAbrir]);

  const fechar = useCallback(() => setAberto(false), []);

  const marcarEnviado = useCallback(() => {
    const estado = lerEstado();
    salvarEstado({ ...estado, enviado: true, contagem: MAX_POR_DIA });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (jaDecidiu) return;

    // Se não pode abrir, nem instala listeners
    if (!podeAbrir()) {
      setJaDecidiu(true);
      return;
    }

    let disparado = false;

    const disparar = () => {
      if (disparado) return;
      disparado = true;
      setJaDecidiu(true);
      abrir();
    };

    // 1) Scroll 40%
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
      if (alturaTotal <= 0) return;
      const pct = (scrollTop / alturaTotal) * 100;
      if (pct >= SCROLL_THRESHOLD) disparar();
    };

    // 2) Fallback: 15s
    const timer = setTimeout(disparar, TEMPO_FALLBACK);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  return { aberto, abrir, fechar, marcarEnviado };
}