import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Joanopolis() {
  // Estados para controlar os modais
  const [modalFotosAberto, setModalFotosAberto] = useState(false);
  const [modalDocumentosAberto, setModalDocumentosAberto] = useState(false);
  const [modalLocalizacaoAberto, setModalLocalizacaoAberto] = useState(false);
  const [modalVideoAberto, setModalVideoAberto] = useState(false);
  const [fotoAtual, setFotoAtual] = useState(0);
  const [videoAtual, setVideoAtual] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTiny, setIsTiny] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      const w = window.innerWidth;
      setIsMobile(w <= 768);
      setIsTiny(w <= 380);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // ====== DADOS DO TERRENO ======
  const WHATSAPP = '5511942956152';
  const MSG = encodeURIComponent(
    'Olá! Vi o terreno de Joanópolis no site da Marques Alta Terra e tenho interesse.'
  );
  const LINK_WHATSAPP = `https://wa.me/${WHATSAPP}?text=${MSG}`;

  const WHATSAPP_GERAL = '5511913572902';
  const MSG_GERAL = encodeURIComponent(
    'Olá! Vi o site da Marques Alta Terra e quero saber mais sobre os terrenos disponíveis.'
  );
  const LINK_WHATSAPP_GERAL = `https://wa.me/${WHATSAPP_GERAL}?text=${MSG_GERAL}`;

  const fotos = [
    '/images/galeria1.jpeg',
    '/images/galeria2.jpeg',
    '/images/galeria3.jpeg',
    '/images/galeria4.jpeg',
    '/images/galeria5.jpeg',
    '/images/galeria6.jpeg',
    '/images/galeria7.jpeg',
    '/images/galeria8.jpeg',
  ];

  const videos = [
    { id: 1, titulo: 'Marques Alta Terra - Vista Aérea do Terreno', url: 'https://www.youtube.com/embed/POcOq6l7Mq8?autoplay=0&rel=0&modestbranding=1&playsinline=1' },
    { id: 2, titulo: 'Marques Alta Terra - Paisagem e Natureza', url: 'https://www.youtube.com/embed/5Oq8J0M0W7Q?autoplay=0&rel=0&modestbranding=1&playsinline=1' },
    { id: 3, titulo: 'Marques Alta Terra - Drone 4K sobre o Terreno', url: 'https://www.youtube.com/embed/QkmMf2RLSCY?autoplay=0&rel=0&modestbranding=1&playsinline=1' },
    { id: 4, titulo: 'Marques Alta Terra - O Horizonte da Serra', url: 'https://www.youtube.com/embed/M_GLpyBi34E?autoplay=0&rel=0&modestbranding=1&playsinline=1' },
    { id: 5, titulo: 'Marques Alta Terra - Terreno de Esquina', url: 'https://www.youtube.com/embed/BLdqtpRtiX8?autoplay=0&rel=0&modestbranding=1&playsinline=1' },
    { id: 6, titulo: 'Marques Alta Terra - 280m² de Natureza', url: 'https://www.youtube.com/embed/HbUnXcaDXw4?autoplay=0&rel=0&modestbranding=1&playsinline=1' },
    { id: 7, titulo: 'Marques Alta Terra - Vista Panorâmica', url: 'https://www.youtube.com/embed/cFPze7lkvZY?autoplay=0&rel=0&modestbranding=1&playsinline=1' },
    { id: 8, titulo: 'Marques Alta Terra - Por do Sol na Serra', url: 'https://www.youtube.com/embed/l5WO0Wl8Yqs?autoplay=0&rel=0&modestbranding=1&playsinline=1' },
    { id: 9, titulo: 'Marques Alta Terra - Terreno com Luz e Platô', url: 'https://www.youtube.com/embed/sduF7aNPjgU?autoplay=0&rel=0&modestbranding=1&playsinline=1' },
  ];

  const diferenciais = [
    { icone: '📐', texto: 'Terreno de esquina' },
    { icone: '📏', texto: '280 m²' },
    { icone: '🏗️', texto: 'Platô executado' },
    { icone: '🧹', texto: 'Terreno limpo' },
    { icone: '⚡', texto: 'Padrão de energia instalado' },
    { icone: '🚗', texto: 'Fácil acesso' },
    { icone: '📈', texto: 'Excelente potencial de valorização' },
    { icone: '📍', texto: 'Próximo aos principais pontos turísticos' },
  ];

  const proximaFoto = () => setFotoAtual((p) => (p === fotos.length - 1 ? 0 : p + 1));
  const fotoAnterior = () => setFotoAtual((p) => (p === 0 ? fotos.length - 1 : p - 1));

  // ====== ESTILOS REUTILIZÁVEIS RESPONSIVOS ======
  const labelEyebrow = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: isMobile ? '8px' : '12px',
    marginBottom: isMobile ? '16px' : '20px',
    flexWrap: 'nowrap',
  };
  const labelLine = {
    width: isMobile ? '22px' : '35px',
    height: '1px',
    backgroundColor: '#D48C5B',
    flexShrink: 0,
  };
  const labelText = {
    color: '#D48C5B',
    fontSize: isMobile ? '0.65rem' : '0.8rem',
    fontWeight: '600',
    letterSpacing: isMobile ? '2px' : '3px',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  };
  const h2Style = {
    color: '#2C2C2C',
    fontFamily: "'Playfair Display', Georgia, serif",
    fontSize: isMobile ? '1.6rem' : 'clamp(2rem, 4vw, 2.8rem)',
    fontWeight: '600',
    marginBottom: '18px',
    lineHeight: '1.2',
  };

  // Espaçamentos responsivos
  const sectionPadding = isMobile ? '55px 16px' : '90px 20px';
  const sectionPaddingLarge = isMobile ? '70px 16px' : '110px 20px';

  return (
    <>
      <Head>
        <title>Terreno em Joanópolis SP - 280m² com Luz e Platô | Marques Alta Terra</title>
        <meta
          name="description"
          content="Terreno de 280m² em Joanópolis - SP. Platô pronto, padrão de luz instalado. 20 min do centro. R$ 129.000,00. Aceita proposta."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://www.marquesaltaterra.shop/joanopolis" />

        {/* Open Graph */}
        <meta property="og:title" content="Terreno em Joanópolis SP - 280m² com Luz e Platô | Marques Alta Terra" />
        <meta property="og:description" content="Terreno de 280m² em Joanópolis - SP. Platô pronto, luz instalada. R$ 129.000,00. Aceita proposta." />
        <meta property="og:image" content="https://www.marquesaltaterra.shop/images/hero.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.marquesaltaterra.shop/joanopolis" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Marques Alta Terra" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terreno em Joanópolis SP - 280m² com Luz e Platô | Marques Alta Terra" />
        <meta name="twitter:description" content="Terreno de 280m² em Joanópolis - SP. Platô pronto, luz instalada. R$ 129.000,00." />
        <meta name="twitter:image" content="https://www.marquesaltaterra.shop/images/hero.jpeg" />

        {/* Schema.org - Produto */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Terreno em Joanópolis - Marques Alta Terra',
            description:
              'Terreno de 280m² em Joanópolis - SP. Platô pronto, padrão de luz instalado. A 20min do centro. Aceita proposta.',
            image: 'https://www.marquesaltaterra.shop/images/hero.jpeg',
            offers: {
              '@type': 'Offer',
              price: '129000.00',
              priceCurrency: 'BRL',
              availability: 'https://schema.org/InStock',
              priceValidUntil: '2026-12-31',
              url: 'https://www.marquesaltaterra.shop/joanopolis',
            },
            brand: { '@type': 'Brand', name: 'Marques Alta Terra' },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '12',
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Joanópolis',
              addressRegion: 'SP',
              addressCountry: 'BR',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: '-22.972333',
              longitude: '-46.242000',
            },
          })}
        </script>

        {/* Schema.org - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MARZON SOLUÇÕES COMERCIAIS LTDA',
            alternateName: 'Marques Alta Terra',
            description:
              'Venda de terreno em Joanópolis - Marques Alta Terra. 280m² com platô e luz.',
            taxID: '39.868.744/0001-68',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Joanópolis',
              addressRegion: 'SP',
              addressCountry: 'BR',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+5511942956152',
              contactType: 'sales',
            },
          })}
        </script>

        {/* Fontes premium */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/images/logo.png" />
      </Head>

      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-89LSRYEHF1" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-89LSRYEHF1', {
              page_title: 'Terreno Joanópolis - Marques Alta Terra',
              page_location: window.location.href
            });
          `,
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0',
          minHeight: '100vh',
          backgroundColor: '#F5F0EB',
          fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
          position: 'relative',
          overflowX: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {/* ====== HERO ====== */}
        <section
          style={{
            position: 'relative',
            minHeight: isMobile ? '100vh' : '700px',
            height: isMobile ? 'auto' : '100vh',
            backgroundImage: 'url(/images/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: isMobile ? '100px 16px 80px' : '0 30px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.85) 100%)',
            }}
          />

          {/* Logo + Breadcrumb */}
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '16px' : '35px',
              left: isMobile ? '16px' : '40px',
              right: isMobile ? '16px' : '40px',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <a href="/" style={{ display: 'inline-block' }}>
              <img
                src="/images/logo.png"
                alt="Marques Alta Terra"
                style={{
                  height: isMobile ? '48px' : '90px',
                  width: 'auto',
                  maxWidth: '150px',
                }}
              />
            </a>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'rgba(255,255,255,0.85)',
                fontSize: isMobile ? '0.65rem' : '0.8rem',
                letterSpacing: isMobile ? '1px' : '1.5px',
                textTransform: 'uppercase',
                fontWeight: '500',
              }}
            >
              <a
                href="/"
                style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
              >
                Início
              </a>
              <span style={{ color: '#D48C5B' }}>/</span>
              <span style={{ color: '#D48C5B' }}>Joanópolis</span>
            </div>
          </div>

          {/* Conteúdo central */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              padding: 0,
              maxWidth: '900px',
              width: '100%',
            }}
          >
            <div style={labelEyebrow}>
              <span style={labelLine} />
              <span style={labelText}>Joanópolis · SP · Serra da Mantiqueira</span>
              <span style={labelLine} />
            </div>
            <h1
              style={{
                color: '#fff',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.9rem' : 'clamp(2.5rem, 5.5vw, 4rem)',
                fontWeight: '600',
                marginBottom: isMobile ? '18px' : '20px',
                lineHeight: '1.15',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              280m² de natureza,
              <br />
              <span style={{ fontStyle: 'italic', color: '#F0D5B8' }}>luz e vista</span>
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: isMobile ? '0.92rem' : '1.15rem',
                marginBottom: isMobile ? '25px' : '25px',
                lineHeight: '1.7',
                maxWidth: '620px',
                margin: '0 auto 25px',
              }}
            >
              Terreno de esquina com platô executado, padrão de luz instalado e vista privilegiada.
              A 20 minutos do centro de Joanópolis.
            </p>

            {/* Preço */}
            <div
              style={{
                display: 'inline-block',
                marginBottom: isMobile ? '28px' : '35px',
                padding: isMobile ? '12px 24px' : '14px 32px',
                backgroundColor: 'rgba(0,0,0,0.4)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212,140,91,0.4)',
                borderRadius: '4px',
              }}
            >
              <div
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: isMobile ? '0.65rem' : '0.7rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}
              >
                Valor
              </div>
              <div
                style={{
                  color: '#D48C5B',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.6rem' : '2.2rem',
                  fontWeight: '600',
                  lineHeight: 1,
                }}
              >
                R$ 129.000,00
              </div>
            </div>

            {/* Botões — empilhados no mobile */}
            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '10px' : '14px',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                maxWidth: isMobile ? '320px' : 'none',
                margin: '0 auto',
              }}
            >
              <button
                onClick={() => setModalFotosAberto(true)}
                style={{
                  padding: isMobile ? '14px 24px' : '16px 38px',
                  backgroundColor: '#D48C5B',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(212, 140, 91, 0.45)',
                  width: isMobile ? '100%' : 'auto',
                  boxSizing: 'border-box',
                }}
              >
                📸 Ver fotos
              </button>
              <button
                onClick={() => setModalVideoAberto(true)}
                style={{
                  padding: isMobile ? '14px 24px' : '16px 38px',
                  backgroundColor: '#E74C3C',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(231, 76, 60, 0.4)',
                  width: isMobile ? '100%' : 'auto',
                  boxSizing: 'border-box',
                }}
              >
                🎬 Ver vídeo
              </button>
              <a
                href="#sobre"
                style={{
                  padding: isMobile ? '14px 24px' : '16px 38px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.85rem' : '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                Conhecer
              </a>
            </div>
          </div>

          {/* Scroll indicator — escondido no mobile */}
          {!isMobile && (
            <div
              style={{
                position: 'absolute',
                bottom: '35px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 5,
              }}
            >
              <div
                style={{
                  width: '1px',
                  height: '50px',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)',
                }}
              />
            </div>
          )}
        </section>

        {/* ====== SOBRE O TERRENO ====== */}
        <section
          id="sobre"
          style={{
            padding: sectionPadding,
            maxWidth: '1100px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '28px' : '60px',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div>
              <div style={labelEyebrow}>
                <span style={labelLine} />
                <span style={labelText}>Sobre o terreno</span>
              </div>
              <h2 style={h2Style}>O terreno que você esperava</h2>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.92rem' : '1.05rem',
                  lineHeight: '1.85',
                  marginBottom: '18px',
                }}
              >
                Terreno de esquina com <strong>280m²</strong> de área, já limpo e terraplanado.
                Platô pronto para construção, reduzindo custos com preparação.
                Padrão de energia já instalado.
              </p>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.92rem' : '1.05rem',
                  lineHeight: '1.85',
                  marginBottom: '26px',
                }}
              >
                Localizado a apenas 20 minutos do centro de Joanópolis, com fácil
                acesso e cercado pela natureza. Ideal para construir seu refúgio
                ou investir em uma região em crescimento.
              </p>
              <button
                onClick={() => setModalDocumentosAberto(true)}
                style={{
                  padding: isMobile ? '14px 22px' : '15px 30px',
                  backgroundColor: 'transparent',
                  color: '#5E6C5B',
                  border: '2px solid #5E6C5B',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.82rem' : '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  boxSizing: 'border-box',
                }}
              >
                📄 Documentação
              </button>
            </div>
            <div>
              <img
                src="/images/galeria1.jpeg"
                alt="Vista aérea do terreno Marques Alta Terra em Joanópolis SP com 280m²"
                style={{
                  width: '100%',
                  borderRadius: '4px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  display: 'block',
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Diferenciais */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile
                ? '1fr 1fr'
                : 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: isMobile ? '10px' : '18px',
              marginTop: isMobile ? '40px' : '60px',
              width: '100%',
            }}
          >
            {diferenciais.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#fff',
                  padding: isMobile ? '12px 14px' : '18px 22px',
                  borderRadius: '3px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '14px',
                  borderLeft: '3px solid #D48C5B',
                  transition: 'all 0.3s ease',
                  boxSizing: 'border-box',
                  minWidth: 0,
                }}
              >
                <span
                  style={{
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    flexShrink: 0,
                  }}
                >
                  {item.icone}
                </span>
                <span
                  style={{
                    color: '#2C2C2C',
                    fontSize: isMobile ? '0.75rem' : '0.9rem',
                    fontWeight: '500',
                    lineHeight: '1.35',
                    wordBreak: 'break-word',
                  }}
                >
                  {item.texto}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ====== GALERIA ====== */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#fff',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '1150px',
              margin: '0 auto',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                marginBottom: isMobile ? '35px' : '60px',
              }}
            >
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Galeria</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>Veja de cima o seu futuro</h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.88rem' : '1rem',
                  maxWidth: '600px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                Fotos aéreas do terreno e região
              </p>
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile
                  ? '1fr 1fr'
                  : 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: isMobile ? '10px' : '20px',
                width: '100%',
              }}
            >
              {fotos.map((foto, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setFotoAtual(index);
                    setModalFotosAberto(true);
                  }}
                  style={{
                    cursor: 'pointer',
                    borderRadius: '3px',
                    overflow: 'hidden',
                    boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    width: '100%',
                  }}
                >
                  <img
                    src={foto}
                    alt={`Vista aérea do terreno em Joanópolis SP - Marques Alta Terra ${index + 1}`}
                    style={{
                      width: '100%',
                      height: isMobile ? '130px' : '230px',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== LOCALIZAÇÃO ====== */}
        <section
          style={{
            padding: sectionPadding,
            maxWidth: '1100px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              marginBottom: isMobile ? '35px' : '60px',
            }}
          >
            <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
              <span style={labelLine} />
              <span style={labelText}>Onde fica</span>
              <span style={labelLine} />
            </div>
            <h2 style={h2Style}>Localização Privilegiada</h2>
            <p
              style={{
                color: '#666',
                fontSize: isMobile ? '0.88rem' : '1rem',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: '1.7',
              }}
            >
              A uma hora e meia de São Paulo, pertinho de tudo
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '28px' : '50px',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <div>
              <div
                style={{
                  borderRadius: '4px',
                  overflow: 'hidden',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.1)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=22%C2%B058%2720.4%22S+46%C2%B014%2731.2%22W&hl=pt-BR&z=15&output=embed"
                  width="100%"
                  height={isMobile ? '260px' : '380px'}
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do terreno Marques Alta Terra em Joanópolis SP"
                />
              </div>
              <button
                onClick={() => setModalLocalizacaoAberto(true)}
                style={{
                  marginTop: '16px',
                  padding: isMobile ? '13px 20px' : '15px 30px',
                  backgroundColor: '#5E6C5B',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.82rem' : '0.9rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                📍 Abrir no Google Maps
              </button>
            </div>
            <div>
              <h3
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.2rem' : '1.6rem',
                  fontWeight: '600',
                  marginBottom: isMobile ? '18px' : '25px',
                  lineHeight: '1.3',
                }}
              >
                Próximo aos melhores lugares
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  { emoji: '🌄', tempo: '15 min', lugar: 'do Mirante de Joanópolis' },
                  { emoji: '💧', tempo: '30 min', lugar: 'da Cachoeira dos Pretos' },
                  { emoji: '🏞️', tempo: '45 min', lugar: 'da Represa dos Cunha' },
                  { emoji: '🏙️', tempo: '20 min', lugar: 'do centro de Joanópolis' },
                  { emoji: '🚗', tempo: '1h30', lugar: 'de São Paulo' },
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      padding: isMobile ? '12px 0' : '14px 0',
                      borderBottom: i < 4 ? '1px solid #eee' : 'none',
                      fontSize: isMobile ? '0.88rem' : '1rem',
                      color: '#4A4A4A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      lineHeight: '1.5',
                    }}
                  >
                    <span style={{ fontSize: isMobile ? '1rem' : '1.1rem', flexShrink: 0 }}>
                      {item.emoji}
                    </span>
                    <span>
                      <strong style={{ color: '#2C2C2C' }}>{item.tempo}</strong> {item.lugar}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                style={{
                  color: '#888',
                  fontSize: isMobile ? '0.72rem' : '0.85rem',
                  marginTop: '18px',
                  letterSpacing: '0.5px',
                  lineHeight: '1.6',
                }}
              >
                <strong style={{ color: '#5E6C5B' }}>Coordenadas:</strong> 22°58'20.4"S 46°14'31.2"W
              </p>
            </div>
          </div>
        </section>

        {/* ====== DOCUMENTAÇÃO ====== */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#fff',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              textAlign: 'center',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ fontSize: isMobile ? '2.2rem' : '3rem', marginBottom: '16px' }}>📜</div>
            <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
              <span style={labelLine} />
              <span style={labelText}>Documentação</span>
              <span style={labelLine} />
            </div>
            <h2 style={h2Style}>Negociação Transparente</h2>
            <p
              style={{
                color: '#4A4A4A',
                fontSize: isMobile ? '0.92rem' : '1.05rem',
                lineHeight: '1.85',
                marginBottom: '18px',
              }}
            >
              O terreno é negociado por <strong>Contrato Particular de Compra e Venda</strong>,
              modalidade bastante utilizada na região.
            </p>
            <p
              style={{
                color: '#4A4A4A',
                fontSize: isMobile ? '0.92rem' : '1.05rem',
                lineHeight: '1.85',
                marginBottom: '30px',
              }}
            >
              O comprador receberá toda a documentação disponível, incluindo o{' '}
              <strong>histórico completo da cadeia de contratos</strong> (cadeia possessória),
              proporcionando total transparência na negociação.
            </p>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#5E6C5B',
                color: '#fff',
                padding: isMobile ? '10px 18px' : '12px 26px',
                borderRadius: '4px',
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                fontWeight: '600',
                letterSpacing: '1px',
                lineHeight: '1.5',
                maxWidth: '100%',
              }}
            >
              ✅ Toda a documentação histórica será entregue
            </div>
          </div>
        </section>

        {/* ====== CTA FINAL ====== */}
        <section
          style={{
            padding: sectionPaddingLarge,
            backgroundImage: 'url(/images/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)',
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              textAlign: 'center',
              maxWidth: '700px',
              margin: '0 auto',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
              <span style={labelLine} />
              <span style={labelText}>Fale com o vendedor</span>
              <span style={labelLine} />
            </div>
            <h2
              style={{
                color: '#fff',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.7rem' : 'clamp(2.2rem, 4vw, 3rem)',
                fontWeight: '600',
                marginBottom: '18px',
                lineHeight: '1.2',
              }}
            >
              Quer agendar uma visita?
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: isMobile ? '0.95rem' : '1.1rem',
                marginBottom: '32px',
                lineHeight: '1.7',
              }}
            >
              Fale direto com quem vende. Atendimento pessoal, sem intermediário.
            </p>
            <a
              href={LINK_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: isMobile ? '15px 26px' : '18px 55px',
                backgroundColor: '#25D366',
                color: '#fff',
                borderRadius: '4px',
                fontSize: isMobile ? '0.88rem' : '1rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
                width: isMobile ? '100%' : 'auto',
                maxWidth: isMobile ? '320px' : 'none',
                boxSizing: 'border-box',
              }}
            >
              📲 Fale agora no WhatsApp
            </a>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                marginTop: '22px',
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                letterSpacing: '1px',
                lineHeight: '1.6',
              }}
            >
              💰 Aceita proposta · Negocie conosco
            </p>
          </div>
        </section>

        {/* ====== SEO TEXT ====== */}
        <section
          style={{
            padding: isMobile ? '55px 16px' : '80px 20px',
            backgroundColor: '#F5F0EB',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '820px',
              margin: '0 auto',
              color: '#4A4A4A',
              fontSize: isMobile ? '0.88rem' : '1rem',
              lineHeight: isMobile ? '1.85' : '2',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <h2
              style={{
                color: '#2C2C2C',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.4rem' : 'clamp(1.7rem, 3vw, 2.2rem)',
                fontWeight: '600',
                marginBottom: '22px',
                textAlign: 'center',
                lineHeight: '1.3',
              }}
            >
              Por que investir em um terreno em Joanópolis?
            </h2>
            <p style={{ marginBottom: '15px' }}>
              Joanópolis é um dos destinos mais procurados do interior de São Paulo para quem busca
              tranquilidade, contato com a natureza e qualidade de vida. O terreno Marques Alta Terra
              oferece 280m² de área, com platô pronto, padrão de luz instalado e localização
              privilegiada a apenas 20 minutos do centro da cidade.
            </p>
            <p style={{ marginBottom: '15px' }}>
              Com fácil acesso pela Rodovia Fernão Dias, a região é cercada por mirantes, cachoeiras
              e represas, sendo ideal para construção de casa de campo, chácara ou investimento
              imobiliário.
            </p>
            <p
              style={{
                fontWeight: '600',
                color: '#2C2C2C',
                textAlign: 'center',
                marginTop: '25px',
                lineHeight: '1.6',
              }}
            >
              Marques Alta Terra — Seu pedaço do céu em Joanópolis.
            </p>
          </div>
        </section>

        {/* ====== FOOTER ====== */}
        <footer
          style={{
            padding: isMobile ? '40px 16px 25px' : '60px 40px 30px',
            backgroundColor: '#1A1A1A',
            color: '#999',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ maxWidth: '1150px', margin: '0 auto', width: '100%' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <img
                src="/images/logo.png"
                alt="Marques Alta Terra"
                style={{
                  height: isMobile ? '48px' : '70px',
                  width: 'auto',
                  maxWidth: '160px',
                }}
              />
            </div>

            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, #3A3A3A 20%, #3A3A3A 80%, transparent 100%)',
                maxWidth: '900px',
                margin: '0 auto 35px',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: isMobile ? '28px' : '50px',
                marginBottom: '35px',
                textAlign: isMobile ? 'center' : 'left',
                width: '100%',
              }}
            >
              <div>
                <h4
                  style={{
                    color: '#D48C5B',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  Navegação
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'Início', href: '/' },
                    { label: 'Nossos terrenos', href: '/#terrenos' },
                    { label: 'Quem Somos', href: '/quem-somos' },
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: '9px' }}>
                      <a
                        href={item.href}
                        style={{
                          color: '#999',
                          textDecoration: 'none',
                          fontSize: '0.88rem',
                          transition: 'color 0.3s',
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  style={{
                    color: '#D48C5B',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  Regiões
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'Joanópolis - SP', href: '/joanopolis', ativo: true },
                    { label: 'Bragança Paulista - SP', href: '/braganca' },
                    { label: 'Itapeva - MG', href: '/itapeva' },
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: '9px' }}>
                      <a
                        href={item.href}
                        style={{
                          color: item.ativo ? '#D48C5B' : '#999',
                          textDecoration: 'none',
                          fontSize: '0.88rem',
                          fontWeight: item.ativo ? '600' : '400',
                        }}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  style={{
                    color: '#D48C5B',
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                  }}
                >
                  Contato
                </h4>
                <p
                  style={{
                    color: '#999',
                    fontSize: '0.88rem',
                    marginBottom: '10px',
                    lineHeight: '1.6',
                  }}
                >
                  Vendedor direto deste terreno
                </p>
                <a
                  href={LINK_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#25D366',
                    textDecoration: 'none',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                  }}
                >
                  (11) 94295-6152
                </a>
                <p
                  style={{
                    color: '#777',
                    fontSize: '0.78rem',
                    marginTop: '12px',
                    lineHeight: '1.6',
                  }}
                >
                  Outras regiões:{' '}
                  <a
                    href={LINK_WHATSAPP_GERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#D48C5B', textDecoration: 'none' }}
                  >
                    (11) 91357-2902
                  </a>
                </p>
              </div>
            </div>

            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, #2C2C2C 50%, transparent 100%)',
                maxWidth: '900px',
                margin: '0 auto 25px',
              }}
            />

            <div style={{ textAlign: 'center', width: '100%' }}>
              <p
                style={{
                  color: '#888',
                  fontSize: isMobile ? '0.72rem' : '0.85rem',
                  marginBottom: '10px',
                  lineHeight: '1.7',
                  padding: '0 8px',
                }}
              >
                <strong style={{ color: '#D48C5B' }}>Marques Alta Terra</strong> — Curadoria e
                venda de terrenos no interior de São Paulo e Minas Gerais.
              </p>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.68rem' : '0.75rem',
                  marginBottom: '6px',
                  padding: '0 8px',
                }}
              >
                CNPJ: 39.868.744/0001-68 — MARZON SOLUÇÕES COMERCIAIS LTDA
              </p>
              <p
                style={{
                  color: '#555',
                  fontSize: isMobile ? '0.62rem' : '0.7rem',
                  margin: 0,
                  padding: '0 8px',
                }}
              >
                © {new Date().getFullYear()} Marques Alta Terra. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>

        {/* ====== MODAL FOTOS ====== */}
        {modalFotosAberto && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '10px' : '20px',
              boxSizing: 'border-box',
            }}
            onClick={() => setModalFotosAberto(false)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalFotosAberto(false)}
                style={{
                  position: 'absolute',
                  top: isMobile ? '-45px' : '-50px',
                  right: '0',
                  color: '#fff',
                  fontSize: '2rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0 10px',
                  zIndex: 10,
                }}
              >
                ✕
              </button>

              <img
                src={fotos[fotoAtual]}
                alt={`Foto ${fotoAtual + 1} do terreno em Joanópolis`}
                style={{
                  maxWidth: '100%',
                  maxHeight: isMobile ? '60vh' : '70vh',
                  borderRadius: '4px',
                  objectFit: 'contain',
                }}
              />

              {fotos.length > 1 && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: isMobile ? '14px' : '20px',
                    marginTop: isMobile ? '16px' : '20px',
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      fotoAnterior();
                    }}
                    style={{
                      color: '#fff',
                      fontSize: '1.4rem',
                      background: 'rgba(255,255,255,0.15)',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: '50%',
                      width: isMobile ? '50px' : '60px',
                      height: isMobile ? '50px' : '60px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      touchAction: 'manipulation',
                    }}
                  >
                    ❮
                  </button>
                  <span
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: isMobile ? '0.8rem' : '1rem',
                      minWidth: '70px',
                      textAlign: 'center',
                    }}
                  >
                    {fotoAtual + 1} / {fotos.length}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      proximaFoto();
                    }}
                    style={{
                      color: '#fff',
                      fontSize: '1.4rem',
                      background: 'rgba(255,255,255,0.15)',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: '50%',
                      width: isMobile ? '50px' : '60px',
                      height: isMobile ? '50px' : '60px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      touchAction: 'manipulation',
                    }}
                  >
                    ❯
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ====== MODAL VÍDEO ====== */}
        {modalVideoAberto && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '10px' : '20px',
              boxSizing: 'border-box',
            }}
            onClick={() => setModalVideoAberto(false)}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: '900px',
                width: '100%',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalVideoAberto(false)}
                style={{
                  position: 'absolute',
                  top: isMobile ? '-45px' : '-50px',
                  right: '0',
                  color: '#fff',
                  fontSize: '2rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0 10px',
                  zIndex: 10,
                }}
              >
                ✕
              </button>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src={videos[videoAtual].url}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: '4px',
                    border: 'none',
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={videos[videoAtual].titulo}
                />
              </div>
              {videos.length > 1 && (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: isMobile ? '14px' : '20px',
                    marginTop: isMobile ? '16px' : '20px',
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setVideoAtual((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
                    }}
                    style={{
                      color: '#fff',
                      fontSize: '1.4rem',
                      background: 'rgba(255,255,255,0.15)',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: '50%',
                      width: isMobile ? '50px' : '60px',
                      height: isMobile ? '50px' : '60px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      touchAction: 'manipulation',
                    }}
                  >
                    ❮
                  </button>
                  <span
                    style={{
                      color: 'rgba(255,255,255,0.7)',
                      fontSize: isMobile ? '0.8rem' : '1rem',
                      minWidth: '100px',
                      textAlign: 'center',
                    }}
                  >
                    {videoAtual + 1} / {videos.length}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setVideoAtual((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
                    }}
                    style={{
                      color: '#fff',
                      fontSize: '1.4rem',
                      background: 'rgba(255,255,255,0.15)',
                      border: '2px solid rgba(255,255,255,0.3)',
                      borderRadius: '50%',
                      width: isMobile ? '50px' : '60px',
                      height: isMobile ? '50px' : '60px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      touchAction: 'manipulation',
                    }}
                  >
                    ❯
                  </button>
                </div>
              )}
              {videos.length > 1 && (
                <div
                  style={{
                    textAlign: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: isMobile ? '0.7rem' : '0.85rem',
                    marginTop: '10px',
                    padding: '0 10px',
                    lineHeight: '1.5',
                  }}
                >
                  {videos[videoAtual].titulo}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ====== MODAL DOCUMENTOS ====== */}
        {modalDocumentosAberto && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.75)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '15px' : '20px',
              boxSizing: 'border-box',
            }}
            onClick={() => setModalDocumentosAberto(false)}
          >
            <div
              style={{
                backgroundColor: '#fff',
                maxWidth: '600px',
                width: '100%',
                padding: isMobile ? '28px 20px' : '45px 40px',
                borderRadius: '4px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxSizing: 'border-box',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalDocumentosAberto(false)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '16px',
                  fontSize: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#999',
                  padding: '4px',
                }}
              >
                ✕
              </button>
              <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '16px' }}>📄</div>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.3rem' : '1.7rem',
                  fontWeight: '600',
                  marginBottom: '18px',
                }}
              >
                Documentação
              </h2>
              <p
                style={{
                  color: '#4A4A4A',
                  lineHeight: '1.85',
                  marginBottom: '16px',
                  fontSize: isMobile ? '0.88rem' : '1rem',
                }}
              >
                O terreno é negociado por <strong>Contrato Particular de Compra e Venda</strong>,
                modalidade bastante utilizada na região de Joanópolis para negociações imobiliárias.
              </p>
              <p
                style={{
                  color: '#4A4A4A',
                  lineHeight: '1.85',
                  marginBottom: '22px',
                  fontSize: isMobile ? '0.88rem' : '1rem',
                }}
              >
                O comprador receberá toda a documentação disponível, incluindo o{' '}
                <strong>histórico completo da cadeia de contratos</strong> (cadeia possessória),
                proporcionando total transparência na negociação.
              </p>
              <div
                style={{
                  backgroundColor: '#F5F0EB',
                  padding: '16px',
                  borderRadius: '4px',
                  borderLeft: '4px solid #5E6C5B',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    color: '#2C2C2C',
                    fontSize: isMobile ? '0.82rem' : '0.9rem',
                    lineHeight: '1.6',
                  }}
                >
                  ✅ Toda a documentação histórica será entregue ao comprador antes da assinatura do contrato.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ====== MODAL LOCALIZAÇÃO ====== */}
        {modalLocalizacaoAberto && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.75)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '15px' : '20px',
              boxSizing: 'border-box',
            }}
            onClick={() => setModalLocalizacaoAberto(false)}
          >
            <div
              style={{
                backgroundColor: '#fff',
                maxWidth: '750px',
                width: '100%',
                padding: isMobile ? '22px 18px' : '35px',
                borderRadius: '4px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxSizing: 'border-box',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalLocalizacaoAberto(false)}
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '16px',
                  fontSize: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#999',
                  padding: '4px',
                }}
              >
                ✕
              </button>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.3rem' : '1.7rem',
                  fontWeight: '600',
                  marginBottom: '18px',
                }}
              >
                📍 Localização
              </h2>
              <div style={{ borderRadius: '4px', overflow: 'hidden', marginBottom: '16px' }}>
                <iframe
                  src="https://www.google.com/maps?q=22%C2%B058%2720.4%22S+46%C2%B014%2731.2%22W&hl=pt-BR&z=15&output=embed"
                  width="100%"
                  height={isMobile ? '280px' : '420px'}
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do terreno Marques Alta Terra em Joanópolis SP"
                />
              </div>
              <p style={{ color: '#666', fontSize: isMobile ? '0.78rem' : '0.9rem', lineHeight: '1.6' }}>
                <strong>Coordenadas:</strong> 22°58'20.4"S 46°14'31.2"W
              </p>
              <a
                href="https://www.google.com/maps?q=22%C2%B058%2720.4%22S+46%C2%B014%2731.2%22W"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: isMobile ? '13px 22px' : '14px 28px',
                  backgroundColor: '#5E6C5B',
                  color: '#fff',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  marginTop: '14px',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.82rem' : '0.9rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          width: 100%;
          max-width: 100%;
        }
        html {
          scroll-behavior: smooth;
        }
        body {
          font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}