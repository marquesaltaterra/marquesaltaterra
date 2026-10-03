// components/ShareButtons.js
// Botões de compartilhamento - Blog Marques Alta Terra
// URL base: https://www.marquesaltaterra.shop/blog/{slug}

import React, { useEffect, useState } from 'react';

// Função para gerar slug (MESMA do blog.js)
function gerarSlug(texto) {
  if (!texto) return '';
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .substring(0, 80);
}

export default function ShareButtons(props) {
  const { articleTitle, articleId } = props;
  const [shareUrl, setShareUrl] = useState('');
  const [isReady, setIsReady] = useState(false);
  const [copied, setCopied] = useState(false);

  // Geração da URL com slug amigável para o blog do Alta Terra
  useEffect(() => {
    if (typeof window !== 'undefined' && articleId && articleTitle) {
      const slug = gerarSlug(articleTitle);
      const url = `${window.location.origin}/blog/${slug}`;
      setShareUrl(url);
      setIsReady(true);
    }
  }, [articleId, articleTitle]);

  const message = `📖 "${articleTitle}" — Blog Marques Alta Terra\n${shareUrl}`;

  const copyLink = () => {
    if (!shareUrl) return;
    navigator.clipboard
      .writeText(shareUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      })
      .catch((err) => console.error('Erro ao copiar:', err));
  };

  const btnStyle = {
    color: '#fff',
    padding: '8px 10px',
    borderRadius: '2px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    flex: 1,
    textAlign: 'center',
    transition: 'opacity 0.2s ease',
    fontFamily: "'Inter', sans-serif",
  };

  if (!isReady) {
    return (
      <div
        style={{
          marginTop: '12px',
          padding: '12px 0 0 0',
          borderTop: '1px solid #eee',
        }}
      >
        <p
          style={{
            fontSize: '11px',
            color: '#999',
            marginBottom: '8px',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            fontWeight: '600',
          }}
        >
          Compartilhe
        </p>
        <div style={{ display: 'flex', gap: '6px' }}>
          <div style={{ ...btnStyle, backgroundColor: '#ccc', opacity: 0.5 }}>
            WhatsApp
          </div>
          <div style={{ ...btnStyle, backgroundColor: '#ccc', opacity: 0.5 }}>
            Facebook
          </div>
          <div style={{ ...btnStyle, backgroundColor: '#ccc', opacity: 0.5 }}>
            Copiar
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        marginTop: '12px',
        padding: '12px 0 0 0',
        borderTop: '1px solid #eee',
      }}
    >
      <p
        style={{
          fontSize: '11px',
          color: '#999',
          marginBottom: '8px',
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          fontWeight: '600',
        }}
      >
        Compartilhe
      </p>

      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {/* WhatsApp */}
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...btnStyle, backgroundColor: '#25D366' }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          WhatsApp
        </a>

        {/* Facebook */}
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            shareUrl
          )}&quote=${encodeURIComponent(articleTitle)}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...btnStyle, backgroundColor: '#1877F2' }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          Facebook
        </a>

        {/* Copiar Link */}
        <button
          id={`copy-btn-${articleId}`}
          onClick={copyLink}
          style={{
            ...btnStyle,
            backgroundColor: copied ? '#D48C5B' : '#1A1A1A',
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.9')}
          onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}
        >
          {copied ? '✓ Copiado' : 'Copiar Link'}
        </button>
      </div>
    </div>
  );
}