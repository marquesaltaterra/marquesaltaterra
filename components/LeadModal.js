// ============================================================
// /components/LeadModal.js
// Modal global de captura de lead — Marques Alta Terra
// - Logo centralizada no topo
// - Visual premium (dourado, sem quebra de texto)
// - Tela de sucesso após envio
// ============================================================

import { useEffect, useRef, useState } from 'react';
import LeadForm from './LeadForm';

export default function LeadModal({ aberto, onFechar, onSucesso }) {
  const [sucesso, setSucesso] = useState(false);
  const modalRef = useRef(null);

  // Fecha com ESC + trava scroll do body
  useEffect(() => {
    if (!aberto) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onFechar();
    };
    document.addEventListener('keydown', onKey);

    const overflowAntes = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const t = setTimeout(() => {
      const first = modalRef.current?.querySelector('input, select, textarea');
      if (first) first.focus();
    }, 350);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflowAntes;
      clearTimeout(t);
    };
  }, [aberto, onFechar]);

  // Reset do estado de sucesso quando reabrir
  useEffect(() => {
    if (aberto) setSucesso(false);
  }, [aberto]);

  if (!aberto) return null;

  const handleSucesso = () => {
    setSucesso(true);
    if (onSucesso) onSucesso();
    setTimeout(() => onFechar(), 9000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Formulário de contato"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(0,0,0,0.78)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        animation: 'matFadeIn 0.3s ease',
      }}
    >
      <div
        ref={modalRef}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '460px',
          maxHeight: '92vh',
          overflowY: 'auto',
          backgroundColor: '#FFFFFF',
          borderRadius: '6px',
          border: '1px solid rgba(212, 140, 91, 0.35)',
          boxShadow:
            '0 1px 0 rgba(255,255,255,0.9) inset, 0 30px 90px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,140,91,0.08)',
          padding: '38px 32px 30px',
          animation: 'matScaleIn 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
          boxSizing: 'border-box',
        }}
      >
        {/* Botão fechar — discreto */}
        <button
          onClick={onFechar}
          aria-label="Fechar"
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '34px',
            height: '34px',
            borderRadius: '50%',
            border: 'none',
            backgroundColor: '#F5F0EB',
            color: '#999',
            fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'inherit',
            transition: 'all 0.25s ease',
            lineHeight: 1,
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#EDE4D8';
            e.currentTarget.style.color = '#D48C5B';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#F5F0EB';
            e.currentTarget.style.color = '#999';
          }}
        >
          ✕
        </button>

        {!sucesso ? (
          <>
            {/* ====== LOGO CENTRALIZADA ====== */}
            <div
              style={{
                textAlign: 'center',
                marginBottom: '22px',
              }}
            >
              <img
                src="/images/logo.png"
                alt="Marques Alta Terra"
                style={{
                  display: 'block',
                  margin: '0 auto',
                  height: '105px',
                  width: 'auto',
                  maxWidth: '200px',
                }}
              />
            </div>

            {/* ====== EYEBROW DOURADO ====== */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                marginBottom: '14px',
              }}
            >
              <span
                style={{
                  width: '24px',
                  height: '1px',
                  backgroundColor: '#D48C5B',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: '#D48C5B',
                  fontSize: '0.62rem',
                  fontWeight: '600',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Marques Alta Terra
              </span>
              <span
                style={{
                  width: '24px',
                  height: '1px',
                  backgroundColor: '#D48C5B',
                  flexShrink: 0,
                }}
              />
            </div>

            {/* ====== TÍTULO PREMIUM ====== */}
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.55rem',
                fontWeight: '600',
                color: '#2C2C2C',
                textAlign: 'center',
                margin: '0 0 10px',
                lineHeight: '1.25',
                letterSpacing: '-0.3px',
                wordBreak: 'keep-all',
              }}
            >
              Receba os imóveis{' '}
              <em
                style={{
                  color: '#D48C5B',
                  fontStyle: 'italic',
                  fontWeight: '600',
                }}
              >
                em primeira mão
              </em>
            </h2>

            {/* ====== SUBTÍTULO ====== */}
            <p
              style={{
                color: '#7A7A7A',
                fontSize: '0.85rem',
                textAlign: 'center',
                margin: '0 0 20px',
                lineHeight: '1.55',
                fontWeight: '400',
                letterSpacing: '0.1px',
              }}
            >
              Atendimento exclusivo em até 24h.
            </p>

            {/* ====== DIVISOR DECORATIVO ====== */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '22px',
              }}
            >
              <span
                style={{
                  width: '40px',
                  height: '1px',
                  background:
                    'linear-gradient(90deg, transparent 0%, #E8D9B8 100%)',
                }}
              />
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#D48C5B',
                }}
              />
              <span
                style={{
                  width: '40px',
                  height: '1px',
                  background:
                    'linear-gradient(90deg, #E8D9B8 0%, transparent 100%)',
                }}
              />
            </div>

            {/* ====== FORMULÁRIO ====== */}
            <LeadForm onSuccess={handleSucesso} />
          </>
        ) : (
          /* ====== TELA DE SUCESSO PREMIUM ====== */
          <div
            style={{
              textAlign: 'center',
              padding: '14px 0 6px',
            }}
          >
            {/* Ícone circular com check */}
            <div
              style={{
                width: '78px',
                height: '78px',
                borderRadius: '50%',
                background:
                  'linear-gradient(135deg, #F5E6D3 0%, #E8D9B8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 22px',
                fontSize: '2.1rem',
                color: '#B87444',
                boxShadow: '0 12px 30px rgba(212, 140, 91, 0.25)',
                fontWeight: '600',
                lineHeight: 1,
              }}
            >
              ✓
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.65rem',
                fontWeight: '600',
                color: '#2C2C2C',
                margin: '0 0 14px',
                lineHeight: '1.25',
                letterSpacing: '-0.3px',
                wordBreak: 'keep-all',
              }}
            >
              Recebemos seus dados
            </h2>

            <p
              style={{
                color: '#666',
                fontSize: '0.92rem',
                lineHeight: '1.7',
                margin: '0 0 20px',
                fontWeight: '400',
              }}
            >
              Nossa equipe entrará em contato pelo WhatsApp
              <br />
              <strong style={{ color: '#2C2C2C', fontWeight: '600' }}>
                em até 24h
              </strong>
            </p>

            {/* Divisor */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '22px',
              }}
            >
              <span
                style={{
                  width: '40px',
                  height: '1px',
                  background:
                    'linear-gradient(90deg, transparent 0%, #E8D9B8 100%)',
                }}
              />
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: '#D48C5B',
                }}
              />
              <span
                style={{
                  width: '40px',
                  height: '1px',
                  background:
                    'linear-gradient(90deg, #E8D9B8 0%, transparent 100%)',
                }}
              />
            </div>

            <p
              style={{
                color: '#999',
                fontSize: '0.78rem',
                lineHeight: '1.6',
                margin: '0 0 24px',
                fontStyle: 'italic',
              }}
            >
              Enquanto isso, explore nossos terrenos e imóveis disponíveis.
            </p>

            <button
              onClick={onFechar}
              style={{
                padding: '13px 34px',
                backgroundColor: 'transparent',
                color: '#D48C5B',
                border: '1px solid #D48C5B',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                fontFamily: 'inherit',
                transition: 'all 0.25s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#D48C5B';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#D48C5B';
              }}
            >
              Continuar navegando
            </button>
          </div>
        )}
      </div>

      {/* ====== ANIMAÇÕES ====== */}
      <style jsx global>{`
        @keyframes matFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes matScaleIn {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}