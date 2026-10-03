<<<<<<< HEAD
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Itapeva() {
  // Estados dos modais
  const [modalFotosAberto, setModalFotosAberto] = useState(false);
  const [modalLocalizacaoAberto, setModalLocalizacaoAberto] = useState(false);
  const [modalVideoAberto, setModalVideoAberto] = useState(false);
  const [modalLotesAberto, setModalLotesAberto] = useState(false);
  const [fotoAtual, setFotoAtual] = useState(0);
  const [videoAtual, setVideoAtual] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // ====== CONTATOS ======
  const WHATSAPP_VENDEDOR = '5511940311644';
  const MSG_VENDEDOR = encodeURIComponent(
    'Olá, Anderson! Vim pelo site Marques Alta Terra e quero saber mais sobre os lotes do Quinta do Arvoredo em Itapeva - MG.'
  );
  const LINK_WHATSAPP = `https://wa.me/${WHATSAPP_VENDEDOR}?text=${MSG_VENDEDOR}`;

  const WHATSAPP_GERAL = '5511913572902';
  const MSG_GERAL = encodeURIComponent(
    'Olá! Vi o site da Marques Alta Terra e quero saber mais sobre os terrenos disponíveis.'
  );
  const LINK_WHATSAPP_GERAL = `https://wa.me/${WHATSAPP_GERAL}?text=${MSG_GERAL}`;

  // ====== ENDEREÇO E MAPA ======
  const ENDERECO_COMPLETO =
    'Rod. Tancredo Neves, 123, Estrada Municipal da Capitinga, Bairro Pedrosos, Itapeva/MG';
  const COORDENADAS_MAPS = 'Estrada Da Capitinga - Itapeva, MG, 37655-000';
  const MAPA_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
    COORDENADAS_MAPS
  )}&hl=pt-BR&z=13&output=embed`;
  const MAPA_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    COORDENADAS_MAPS
  )}`;

  // ====== DISTÂNCIAS ======
  const distancias = [
    { emoji: '🏙️', destino: 'Centro de Itapeva', tempo: '10 min', desc: 'natureza, cachoeiras e tranquilidade' },
    { emoji: '🌄', destino: 'Camanducaia', tempo: '18 min' },
    { emoji: '🏭', destino: 'Extrema', tempo: '35 min', desc: 'polo logístico e ecoturismo' },
    { emoji: '🌿', destino: 'Cambuí', tempo: '35 min' },
    { emoji: '🏬', destino: 'Bragança Paulista', tempo: '40 min', desc: 'compras, saúde e hospitais' },
    { emoji: '⛰️', destino: 'Monte Verde', tempo: '50 min', desc: 'turismo, gastronomia e compras' },
    { emoji: '✈️', destino: 'Guarulhos', tempo: '50 min' },
    { emoji: '🌆', destino: 'São Paulo', tempo: '85 min' },
  ];

  // ====== VÍDEOS ======
  const videos = [
    {
      id: 1,
      titulo: 'Quinta do Arvoredo - Apresentação do Empreendimento',
      url: 'https://www.youtube.com/embed/CwgQ06RQNaU?autoplay=0&rel=0&modestbranding=1&playsinline=1',
    },
    {
      id: 2,
      titulo: 'Quinta do Arvoredo - Vista Aérea e Estrutura',
      url: 'https://www.youtube.com/embed/Rod4IAZCnlA?autoplay=0&rel=0&modestbranding=1&playsinline=1',
    },
  ];

  // ====== FOTOS ======
  const fotos = [
    '/images/itapeva1.jpeg',
    '/images/itapeva2.jpeg',
    '/images/itapeva3.jpeg',
    '/images/itapeva4.jpeg',
  ];

  // ====== DIFERENCIAIS DO EMPREENDIMENTO ======
  const infraestrutura = [
    { icone: '🎾', texto: 'Quadra de Beach Tennis' },
    { icone: '🏀', texto: 'Quadra Poliesportiva' },
    { icone: '🛝', texto: 'Playground' },
    { icone: '🐾', texto: 'Pet Place' },
    { icone: '💪', texto: 'Academia' },
    { icone: '🧘', texto: 'Espaço Zen' },
    { icone: '🌱', texto: 'Horta Comunitária' },
    { icone: '🍎', texto: 'Pomar' },
    { icone: '🐔', texto: 'Galinheiro Orgânico' },
    { icone: '🛒', texto: 'Espaço para Minimercado' },
    { icone: '🍽️', texto: 'Espaço Gourmet' },
    { icone: '⛪', texto: 'Capela' },
    { icone: '💧', texto: 'Cachoeira' },
    { icone: '🌳', texto: 'Área de Preservação' },
  ];

  // ====== VANTAGENS DO LOTE ======
  const vantagensLote = [
    { icone: '📏', titulo: 'Lotes a partir de 600m²', texto: 'Espaço de sobra para construir a casa dos seus sonhos.' },
    { icone: '🏘️', titulo: 'Condomínio Fechado', texto: 'Segurança, tranquilidade e valorização garantida.' },
    { icone: '💵', titulo: 'Parcelas a partir de R$ 1.750', texto: 'Facilidade de pagamento direto com o empreendedor.' },
    { icone: '📈', titulo: 'Alto Potencial de Valorização', texto: 'Região em pleno crescimento no sul de Minas.' },
    { icone: '🌄', titulo: 'Natureza Preservada', texto: 'Cercado por mata nativa, cachoeira e belezas naturais.' },
    { icone: '🚗', titulo: 'Fácil Acesso', texto: 'Pela Rodovia Fernão Dias, a 1h30 de São Paulo.' },
  ];

  // ====== NAVEGAÇÃO DE FOTOS ======
  const proximaFoto = () => setFotoAtual((p) => (p === fotos.length - 1 ? 0 : p + 1));
  const fotoAnterior = () => setFotoAtual((p) => (p === 0 ? fotos.length - 1 : p - 1));

  // ====== ESTILOS REUTILIZÁVEIS ======
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

  const sectionPadding = isMobile ? '55px 16px' : '90px 20px';
  const sectionPaddingLarge = isMobile ? '70px 16px' : '110px 20px';

  return (
    <>
      <Head>
        <title>Quinta do Arvoredo - Lotes em Itapeva MG a partir de 600m² | Marques Alta Terra</title>
        <meta
          name="description"
          content="Lotes a partir de 600m² no Quinta do Arvoredo, condomínio fechado em Itapeva - MG. A partir de R$ 165 mil, parcelas de R$ 1.750. Beach tennis, cachoeira, capela e mais. A 30 min de Bragança Paulista."
        />
        <meta
          name="keywords"
          content="terreno Itapeva MG, lote Itapeva MG, Quinta do Arvoredo, condomínio fechado Itapeva, terreno sul de Minas, lote 600m2, investimento imobiliário Minas, terreno próximo Bragança Paulista, lote condomínio fechado SP MG, Estrada da Capitinga, Pedrosos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://www.marquesaltaterra.shop/itapeva" />

        {/* Open Graph */}
        <meta property="og:title" content="Quinta do Arvoredo - Lotes em Itapeva MG a partir de 600m²" />
        <meta property="og:description" content="Condomínio fechado no sul de Minas. Lotes a partir de 600m², R$ 165 mil, parcelas de R$ 1.750. Beach tennis, cachoeira, capela e mais." />
        <meta property="og:image" content="https://www.marquesaltaterra.shop/images/itapeva001.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.marquesaltaterra.shop/itapeva" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Marques Alta Terra" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quinta do Arvoredo - Lotes em Itapeva MG a partir de 600m²" />
        <meta name="twitter:description" content="Condomínio fechado no sul de Minas. Lotes a partir de 600m², R$ 165 mil, parcelas de R$ 1.750." />
        <meta name="twitter:image" content="https://www.marquesaltaterra.shop/images/itapeva001.jpeg" />

        {/* Schema.org - Produto */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Quinta do Arvoredo - Lotes em Itapeva MG',
            description:
              'Lotes a partir de 600m² no Quinta do Arvoredo, condomínio fechado em Itapeva - MG. A partir de R$ 165 mil, parcelas de R$ 1.750. Estrutura completa de lazer.',
            image: [
              'https://www.marquesaltaterra.shop/images/itapeva1.jpeg',
              'https://www.marquesaltaterra.shop/images/itapeva2.jpeg',
              'https://www.marquesaltaterra.shop/images/itapeva3.jpeg',
              'https://www.marquesaltaterra.shop/images/itapeva4.jpeg',
            ],
            offers: {
              '@type': 'Offer',
              price: '165000.00',
              priceCurrency: 'BRL',
              availability: 'https://schema.org/InStock',
              priceValidUntil: '2026-12-31',
              url: 'https://www.marquesaltaterra.shop/itapeva',
            },
            brand: { '@type': 'Brand', name: 'Marques Alta Terra' },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Rod. Tancredo Neves, 123, Estrada Municipal da Capitinga, Bairro Pedrosos',
              addressLocality: 'Itapeva',
              addressRegion: 'MG',
              postalCode: '37655-000',
              addressCountry: 'BR',
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
              'Curadoria e venda de terrenos no interior de São Paulo e Minas Gerais. Quinta do Arvoredo em Itapeva - MG.',
            taxID: '39.868.744/0001-68',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Itapeva',
              addressRegion: 'MG',
              addressCountry: 'BR',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+5511940311644',
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
              page_title: 'Quinta do Arvoredo - Itapeva MG',
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
            backgroundImage: 'url(/images/itapeva001.jpeg)',
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
      height: isMobile ? '65px' : '150px',   // ✅
      width: 'auto',
      maxWidth: isMobile ? '170px' : '240px',
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
              <a href="/" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>
                Início
              </a>
              <span style={{ color: '#D48C5B' }}>/</span>
              <span style={{ color: '#D48C5B' }}>Itapeva</span>
            </div>
          </div>

          {/* Conteúdo central */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              padding: 0,
              maxWidth: '950px',
              width: '100%',
            }}
          >
            <div style={labelEyebrow}>
              <span style={labelLine} />
              <span style={labelText}>Lançamento · Itapeva · MG</span>
              <span style={labelLine} />
            </div>
            <h1
              style={{
                color: '#fff',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: '600',
                marginBottom: isMobile ? '18px' : '22px',
                lineHeight: '1.12',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              Quinta do Arvoredo
              <br />
              <span style={{ fontStyle: 'italic', color: '#F0D5B8' }}>sua morada no campo</span>
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: isMobile ? '0.95rem' : 'clamp(1.05rem, 1.6vw, 1.25rem)',
                marginBottom: isMobile ? '25px' : '32px',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto 25px',
              }}
            >
              Condomínio fechado no sul de Minas Gerais com lotes a partir de 600m².
              Estrutura completa, natureza preservada e cachoeira.
              A 30 minutos de Bragança Paulista.
            </p>

            {/* Caixa de destaque do preço */}
            <div
              style={{
                display: 'inline-block',
                marginBottom: isMobile ? '28px' : '35px',
                padding: isMobile ? '14px 22px' : '18px 36px',
                backgroundColor: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212,140,91,0.5)',
                borderRadius: '4px',
                maxWidth: '100%',
              }}
            >
              <div
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: isMobile ? '0.62rem' : '0.7rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                Lotes a partir de
              </div>
              <div
                style={{
                  color: '#D48C5B',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.7rem' : '2.3rem',
                  fontWeight: '600',
                  lineHeight: 1.1,
                }}
              >
                R$ 165.000
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: isMobile ? '0.78rem' : '0.9rem',
                  marginTop: '8px',
                  lineHeight: '1.5',
                }}
              >
                ou parcelas de <strong style={{ color: '#fff' }}>R$ 1.750</strong> + entrada
              </div>
            </div>

            {/* Botões */}
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
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: isMobile ? '15px 26px' : '17px 42px',
                  backgroundColor: '#25D366',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
                  textDecoration: 'none',
                  textAlign: 'center',
                  width: isMobile ? '100%' : 'auto',
                  boxSizing: 'border-box',
                }}
              >
                📲 Falar com o vendedor
              </a>
              <a
                href="#video"
                style={{
                  padding: isMobile ? '15px 26px' : '17px 42px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  width: isMobile ? '100%' : 'auto',
                  boxSizing: 'border-box',
                }}
              >
                ▶ Ver o vídeo
              </a>
            </div>
          </div>

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

        {/* ====== BARRA DE NÚMEROS ====== */}
        <section
          style={{
            backgroundColor: '#1A1A1A',
            padding: isMobile ? '30px 16px' : '45px 20px',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '20px' : '0',
              textAlign: 'center',
            }}
          >
            {[
              { numero: '210', label: 'Lotes disponíveis' },
              { numero: '600m²', label: 'A partir de' },
              { numero: 'R$ 1.750', label: 'Parcelas mensais' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft: !isMobile && i > 0 ? '1px solid rgba(212,140,91,0.25)' : 'none',
                  borderTop: isMobile && i > 0 ? '1px solid rgba(212,140,91,0.15)' : 'none',
                  padding: isMobile ? '15px 0' : '0 20px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.9rem' : '2.5rem',
                    fontWeight: '600',
                    color: '#D48C5B',
                    marginBottom: '6px',
                    lineHeight: 1,
                  }}
                >
                  {item.numero}
                </div>
                <div
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== VÍDEO PRINCIPAL ====== */}
        <section
          id="video"
          style={{
            padding: sectionPadding,
            backgroundColor: '#fff',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Conheça o projeto</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>O Quinta do Arvoredo em vídeo</h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                Assista à apresentação do empreendimento e veja o que espera por você
              </p>
            </div>

            {/* Vídeo principal centralizado */}
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                marginBottom: isMobile ? '30px' : '45px',
                backgroundColor: '#000',
              }}
            >
              <iframe
                src={videos[0].url}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={videos[0].titulo}
              />
            </div>

            {/* Outros vídeos - carrossel */}
            {videos.length > 1 && (
              <>
                <h3
                  style={{
                    color: '#2C2C2C',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    fontWeight: '600',
                    marginBottom: isMobile ? '20px' : '25px',
                    textAlign: 'center',
                  }}
                >
                  Mais vídeos do empreendimento
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: isMobile ? '16px' : '20px',
                  }}
                >
                  {videos.slice(1).map((video, index) => (
                    <div
                      key={video.id}
                      onClick={() => {
                        setVideoAtual(index + 1);
                        setModalVideoAberto(true);
                      }}
                      style={{
                        cursor: 'pointer',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#000',
                        position: 'relative',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.18)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          paddingBottom: '56.25%',
                          height: 0,
                        }}
                      >
                        <iframe
                          src={video.url}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            pointerEvents: 'none',
                          }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.titulo}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <div
                            style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(212,140,91,0.95)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                              fontSize: '1.5rem',
                              boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                            }}
                          >
                            ▶
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '14px 16px',
                          backgroundColor: '#fff',
                        }}
                      >
                        <p
                          style={{
                            color: '#2C2C2C',
                            fontSize: isMobile ? '0.82rem' : '0.88rem',
                            fontWeight: '500',
                            margin: 0,
                            lineHeight: '1.4',
                          }}
                        >
                          {video.titulo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ====== SOBRE O EMPREENDIMENTO ====== */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#F5F0EB',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
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
                  <span style={labelText}>Sobre o Quinta do Arvoredo</span>
                </div>
                <h2 style={h2Style}>Um novo jeito de viver no campo</h2>
                <p
                  style={{
                    color: '#4A4A4A',
                    fontSize: isMobile ? '0.92rem' : '1.05rem',
                    lineHeight: '1.85',
                    marginBottom: '18px',
                  }}
                >
                  Está nascendo no <strong>sul de Minas Gerais</strong> um lugar onde a vida
                  acontece em outro ritmo. O <strong>Quinta do Arvoredo</strong> é um condomínio
                  fechado com <strong>lotes a partir de 600m²</strong>, pensado para quem busca
                  tranquilidade, contato com a natureza e qualidade de vida.
                </p>
                <p
                  style={{
                    color: '#4A4A4A',
                    fontSize: isMobile ? '0.92rem' : '1.05rem',
                    lineHeight: '1.85',
                    marginBottom: '18px',
                  }}
                >
                  Com localização privilegiada a <strong>30 minutos de Bragança Paulista</strong> e
                  fácil acesso pela Rodovia Fernão Dias, o empreendimento une o melhor dos dois
                  mundos: proximidade com os grandes centros e o sossego do interior mineiro.
                </p>
                <p
                  style={{
                    color: '#4A4A4A',
                    fontSize: isMobile ? '0.92rem' : '1.05rem',
                    lineHeight: '1.85',
                    marginBottom: '0',
                  }}
                >
                  Aqui a gente não vende espaço. A gente entrega <strong>um estilo de vida</strong> —
                  a tranquilidade que você e sua família merecem.
                </p>
              </div>
              <div>
                <img
                  src="/images/itapeva002.jpeg"
                  alt="Vista aérea do Quinta do Arvoredo em Itapeva MG"
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
          </div>
        </section>

        {/* ====== INFRAESTRUTURA ====== */}
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
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '35px' : '60px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Estrutura completa</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>Tudo o que você precisa, dentro do condomínio</h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                Áreas de lazer, esporte e convivência para toda a família
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile
                  ? '1fr 1fr'
                  : 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: isMobile ? '10px' : '16px',
                width: '100%',
              }}
            >
              {infraestrutura.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#FAF7F3',
                    padding: isMobile ? '14px 12px' : '20px 22px',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '8px' : '12px',
                    borderLeft: '3px solid #D48C5B',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                    minWidth: 0,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? '1.3rem' : '1.6rem',
                      flexShrink: 0,
                    }}
                  >
                    {item.icone}
                  </span>
                  <span
                    style={{
                      color: '#2C2C2C',
                      fontSize: isMobile ? '0.78rem' : '0.9rem',
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
          </div>
        </section>

        {/* ====== VANTAGENS DO LOTE ====== */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#F5F0EB',
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
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '35px' : '60px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Por que investir aqui</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>Vantagens de garantir o seu lote agora</h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile
                  ? '1fr'
                  : 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: isMobile ? '18px' : '24px',
                width: '100%',
              }}
            >
              {vantagensLote.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#fff',
                    padding: isMobile ? '24px 22px' : '32px 28px',
                    borderRadius: '4px',
                    borderTop: '3px solid #D48C5B',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? '1.8rem' : '2.2rem',
                      marginBottom: '16px',
                    }}
                  >
                    {item.icone}
                  </div>
                  <h3
                    style={{
                      color: '#2C2C2C',
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: isMobile ? '1.1rem' : '1.25rem',
                      fontWeight: '600',
                      marginBottom: '10px',
                      lineHeight: '1.3',
                    }}
                  >
                    {item.titulo}
                  </h3>
                  <p
                    style={{
                      color: '#4A4A4A',
                      fontSize: isMobile ? '0.88rem' : '0.95rem',
                      lineHeight: '1.7',
                      margin: 0,
                    }}
                  >
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== GALERIA DE FOTOS ====== */}
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
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '35px' : '60px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Galeria</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>Veja o Quinta do Arvoredo de perto</h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                Imagens do terreno, natureza e estrutura do condomínio
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
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.18)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                  }}
                >
                  <img
                    src={foto}
                    alt={`Quinta do Arvoredo em Itapeva MG - Foto ${index + 1}`}
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
            backgroundColor: '#F5F0EB',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '35px' : '60px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Onde fica</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>Localização Privilegiada</h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                No coração do sul de Minas, perto de tudo o que importa
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
                    src={MAPA_EMBED_URL}
                    width="100%"
                    height={isMobile ? '280px' : '420px'}
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Quinta do Arvoredo em Itapeva MG"
                  />
                </div>
                <a
                  href={MAPA_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
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
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  📍 Abrir no Google Maps
                </a>
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
                  Perto de tudo o que importa
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {distancias.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        padding: isMobile ? '12px 0' : '14px 0',
                        borderBottom: i < distancias.length - 1 ? '1px solid #e5ddd3' : 'none',
                        fontSize: isMobile ? '0.88rem' : '1rem',
                        color: '#4A4A4A',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span style={{ fontSize: isMobile ? '1rem' : '1.1rem', flexShrink: 0 }}>
                        {item.emoji}
                      </span>
                      <span>
                        <strong style={{ color: '#2C2C2C' }}>{item.tempo}</strong> · {item.destino}
                        {item.desc && (
                          <span style={{ color: '#888', display: 'block', fontSize: '0.85em', marginTop: '2px' }}>
                            {item.desc}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: '20px',
                    padding: '14px 16px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    borderLeft: '3px solid #D48C5B',
                  }}
                >
                  <div
                    style={{
                      color: '#888',
                      fontSize: isMobile ? '0.65rem' : '0.72rem',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      fontWeight: '600',
                      marginBottom: '6px',
                    }}
                  >
                    Endereço
                  </div>
                  <div
                    style={{
                      color: '#2C2C2C',
                      fontSize: isMobile ? '0.82rem' : '0.9rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {ENDERECO_COMPLETO}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== CONDIÇÕES / TABELA ====== */}
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
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
              <span style={labelLine} />
              <span style={labelText}>Condições</span>
              <span style={labelLine} />
            </div>
            <h2 style={h2Style}>Invista com facilidade</h2>
            <p
              style={{
                color: '#666',
                fontSize: isMobile ? '0.9rem' : '1.05rem',
                maxWidth: '620px',
                margin: '0 auto 40px',
                lineHeight: '1.7',
              }}
            >
              Condições de pagamento direto com o empreendedor
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: isMobile ? '16px' : '20px',
                width: '100%',
              }}
            >
              {[
                { label: 'Lotes a partir de', valor: 'R$ 165.000', detalhe: 'a partir de 600m²' },
                { label: 'Ou em parcelas de', valor: 'R$ 1.750', detalhe: '+ pequena entrada' },
                { label: 'Condomínio mensal', valor: 'R$ 200', detalhe: 'por lote' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FAF7F3',
                    padding: isMobile ? '24px 20px' : '32px 24px',
                    borderRadius: '4px',
                    borderTop: '3px solid #D48C5B',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      color: '#888',
                      fontSize: isMobile ? '0.7rem' : '0.78rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      fontWeight: '600',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      color: '#2C2C2C',
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: isMobile ? '1.7rem' : '2.1rem',
                      fontWeight: '600',
                      lineHeight: 1.1,
                      marginBottom: '8px',
                    }}
                  >
                    {item.valor}
                  </div>
                  <div
                    style={{
                      color: '#666',
                      fontSize: isMobile ? '0.82rem' : '0.9rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {item.detalhe}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setModalLotesAberto(true)}
              style={{
                marginTop: isMobile ? '25px' : '35px',
                padding: isMobile ? '14px 24px' : '16px 36px',
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
              📋 Mais informações sobre os lotes
            </button>
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
              Lotes à venda em Itapeva - MG
            </h2>
            <p style={{ marginBottom: '15px' }}>
              O <strong>Quinta do Arvoredo</strong> é um dos empreendimentos mais aguardados do{' '}
              <strong>sul de Minas Gerais</strong>. Localizado em <strong>Itapeva - MG</strong>, na
              Estrada da Capitinga (Bairro Pedrosos), a apenas 30 minutos de Bragança Paulista e
              1h30 de São Paulo pela Rodovia Fernão Dias, o condomínio fechado oferece{' '}
              <strong>210 lotes a partir de 600m²</strong>, com toda a infraestrutura para quem
              busca uma segunda moradia, casa de campo ou um investimento imobiliário sólido.
            </p>
            <p style={{ marginBottom: '15px' }}>
              Se você procura <strong>terreno em condomínio fechado</strong>,{' '}
              <strong>lote em Minas Gerais</strong> ou uma oportunidade de{' '}
              <strong>investimento no interior</strong>, o Quinta do Arvoredo une localização
              estratégica, natureza preservada e alto potencial de valorização. A região do sul de
              Minas é uma das que mais cresce no mercado imobiliário, atraindo famílias de São
              Paulo e do interior paulista em busca de qualidade de vida.
            </p>
            <p style={{ marginBottom: '15px' }}>
              Com <strong>lotes a partir de R$ 165.000</strong>, parcelas de{' '}
              <strong>R$ 1.750</strong> e condomínio de apenas <strong>R$ 200/mês</strong>, o
              Quinta do Arvoredo oferece uma oportunidade única para quem quer sair do aluguel,
              construir a casa dos sonhos ou diversificar investimentos.
            </p>
            <p style={{ marginBottom: '25px' }}>
              A estrutura do condomínio inclui quadra de beach tennis, quadra poliesportiva,
              playground, pet place, academia, espaço zen, horta, pomar, galinheiro orgânico,
              espaço gourmet, capela e até uma cachoeira particular. Aqui a gente não vende
              espaço: a gente entrega um estilo de vida.
            </p>
            <div style={{ textAlign: 'center', marginTop: '35px' }}>
              <div
                style={{
                  display: 'inline-block',
                  width: '50px',
                  height: '1px',
                  backgroundColor: '#D48C5B',
                  marginBottom: '18px',
                }}
              />
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  color: '#2C2C2C',
                  fontSize: isMobile ? '1rem' : '1.3rem',
                  fontWeight: '500',
                  margin: 0,
                }}
              >
                Quinta do Arvoredo — Sua morada no campo.
              </p>
            </div>
          </div>
        </section>

        {/* ====== CTA FINAL ====== */}
        <section
          style={{
            padding: sectionPaddingLarge,
            backgroundImage: 'url(/images/home3.png)',
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
              background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)',
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
              Agende sua visita
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: isMobile ? '0.95rem' : '1.1rem',
                marginBottom: '32px',
                lineHeight: '1.7',
              }}
            >
              Venha conhecer de perto o projeto feito para quem busca viver com a alma,
              com conexão e muito significado.
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
              📲 Falar com o Anderson
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
              💰 Aceita proposta · Agende sua visita
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
                    { label: 'Joanópolis - SP', href: '/joanopolis' },
                    { label: 'Bragança Paulista - SP', href: '/braganca' },
                    { label: 'Itapeva - MG', href: '/itapeva', ativo: true },
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
                  Vendedor responsável pelos lotes
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
                  Anderson Vezzani — (11) 94031-1644
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
                alt={`Quinta do Arvoredo - Foto ${fotoAtual + 1}`}
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
            </div>
          </div>
        )}

        {/* ====== MODAL LOTES ====== */}
        {modalLotesAberto && (
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
            onClick={() => setModalLotesAberto(false)}
          >
            <div
              style={{
                backgroundColor: '#fff',
                maxWidth: '650px',
                width: '100%',
                padding: isMobile ? '28px 22px' : '45px 40px',
                borderRadius: '4px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxSizing: 'border-box',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalLotesAberto(false)}
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
              <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '16px' }}>
                📋
              </div>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.3rem' : '1.7rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  lineHeight: '1.3',
                }}
              >
                Sobre os lotes do Quinta do Arvoredo
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: '22px',
                }}
              >
                {[
                  '210 lotes no total, a partir de 600m² cada',
                  'Lotes em condomínio fechado com segurança 24h',
                  'Toda a infraestrutura pronta: energia, água, asfalto',
                  'Acesso pela Rodovia Fernão Dias',
                  'A 30 minutos de Bragança Paulista',
                  'A 1h30 de São Paulo',
                  'Região com alto potencial de valorização',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#4A4A4A',
                      fontSize: isMobile ? '0.88rem' : '0.95rem',
                      lineHeight: '1.7',
                      padding: '10px 0',
                      borderBottom: i < 6 ? '1px solid #f0ebe4' : 'none',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: '#5E6C5B', fontWeight: '700', flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: isMobile ? '14px 22px' : '16px 28px',
                  backgroundColor: '#25D366',
                  color: '#fff',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                📲 Falar com o vendedor
              </a>
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
                  src={MAPA_EMBED_URL}
                  width="100%"
                  height={isMobile ? '300px' : '420px'}
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Quinta do Arvoredo em Itapeva MG"
                />
              </div>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.78rem' : '0.9rem',
                  lineHeight: '1.7',
                  marginBottom: '10px',
                }}
              >
                <strong style={{ color: '#2C2C2C' }}>Endereço:</strong> {ENDERECO_COMPLETO}
              </p>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.78rem' : '0.9rem',
                  lineHeight: '1.7',
                }}
              >
                <strong style={{ color: '#2C2C2C' }}>Itapeva - MG</strong> · Sul de Minas Gerais
                <br />
                A 30 min de Bragança Paulista · 1h30 de São Paulo
              </p>
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
=======
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';

export default function Itapeva() {
  // Estados dos modais
  const [modalFotosAberto, setModalFotosAberto] = useState(false);
  const [modalLocalizacaoAberto, setModalLocalizacaoAberto] = useState(false);
  const [modalVideoAberto, setModalVideoAberto] = useState(false);
  const [modalLotesAberto, setModalLotesAberto] = useState(false);
  const [fotoAtual, setFotoAtual] = useState(0);
  const [videoAtual, setVideoAtual] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth <= 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // ====== CONTATOS ======
  const WHATSAPP_VENDEDOR = '5511940311644';
  const MSG_VENDEDOR = encodeURIComponent(
    'Olá, Anderson! Vim pelo site Marques Alta Terra e quero saber mais sobre os lotes do Quinta do Arvoredo em Itapeva - MG.'
  );
  const LINK_WHATSAPP = `https://wa.me/${WHATSAPP_VENDEDOR}?text=${MSG_VENDEDOR}`;

  const WHATSAPP_GERAL = '5511913572902';
  const MSG_GERAL = encodeURIComponent(
    'Olá! Vi o site da Marques Alta Terra e quero saber mais sobre os terrenos disponíveis.'
  );
  const LINK_WHATSAPP_GERAL = `https://wa.me/${WHATSAPP_GERAL}?text=${MSG_GERAL}`;

  // ====== ENDEREÇO E MAPA ======
  const ENDERECO_COMPLETO =
    'Rod. Tancredo Neves, 123, Estrada Municipal da Capitinga, Bairro Pedrosos, Itapeva/MG';
  const COORDENADAS_MAPS = 'Estrada Da Capitinga - Itapeva, MG, 37655-000';
  const MAPA_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(
    COORDENADAS_MAPS
  )}&hl=pt-BR&z=13&output=embed`;
  const MAPA_LINK_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    COORDENADAS_MAPS
  )}`;

  // ====== DISTÂNCIAS ======
  const distancias = [
    { emoji: '🏙️', destino: 'Centro de Itapeva', tempo: '10 min', desc: 'natureza, cachoeiras e tranquilidade' },
    { emoji: '🌄', destino: 'Camanducaia', tempo: '18 min' },
    { emoji: '🏭', destino: 'Extrema', tempo: '35 min', desc: 'polo logístico e ecoturismo' },
    { emoji: '🌿', destino: 'Cambuí', tempo: '35 min' },
    { emoji: '🏬', destino: 'Bragança Paulista', tempo: '40 min', desc: 'compras, saúde e hospitais' },
    { emoji: '⛰️', destino: 'Monte Verde', tempo: '50 min', desc: 'turismo, gastronomia e compras' },
    { emoji: '✈️', destino: 'Guarulhos', tempo: '50 min' },
    { emoji: '🌆', destino: 'São Paulo', tempo: '85 min' },
  ];

  // ====== VÍDEOS ======
  const videos = [
    {
      id: 1,
      titulo: 'Quinta do Arvoredo - Apresentação do Empreendimento',
      url: 'https://www.youtube.com/embed/CwgQ06RQNaU?autoplay=0&rel=0&modestbranding=1&playsinline=1',
    },
    {
      id: 2,
      titulo: 'Quinta do Arvoredo - Vista Aérea e Estrutura',
      url: 'https://www.youtube.com/embed/Rod4IAZCnlA?autoplay=0&rel=0&modestbranding=1&playsinline=1',
    },
  ];

  // ====== FOTOS ======
  const fotos = [
    '/images/itapeva1.jpeg',
    '/images/itapeva2.jpeg',
    '/images/itapeva3.jpeg',
    '/images/itapeva4.jpeg',
  ];

  // ====== DIFERENCIAIS DO EMPREENDIMENTO ======
  const infraestrutura = [
    { icone: '🎾', texto: 'Quadra de Beach Tennis' },
    { icone: '🏀', texto: 'Quadra Poliesportiva' },
    { icone: '🛝', texto: 'Playground' },
    { icone: '🐾', texto: 'Pet Place' },
    { icone: '💪', texto: 'Academia' },
    { icone: '🧘', texto: 'Espaço Zen' },
    { icone: '🌱', texto: 'Horta Comunitária' },
    { icone: '🍎', texto: 'Pomar' },
    { icone: '🐔', texto: 'Galinheiro Orgânico' },
    { icone: '🛒', texto: 'Espaço para Minimercado' },
    { icone: '🍽️', texto: 'Espaço Gourmet' },
    { icone: '⛪', texto: 'Capela' },
    { icone: '💧', texto: 'Cachoeira' },
    { icone: '🌳', texto: 'Área de Preservação' },
  ];

  // ====== VANTAGENS DO LOTE ======
  const vantagensLote = [
    { icone: '📏', titulo: 'Lotes a partir de 600m²', texto: 'Espaço de sobra para construir a casa dos seus sonhos.' },
    { icone: '🏘️', titulo: 'Condomínio Fechado', texto: 'Segurança, tranquilidade e valorização garantida.' },
    { icone: '💵', titulo: 'Parcelas a partir de R$ 1.750', texto: 'Facilidade de pagamento direto com o empreendedor.' },
    { icone: '📈', titulo: 'Alto Potencial de Valorização', texto: 'Região em pleno crescimento no sul de Minas.' },
    { icone: '🌄', titulo: 'Natureza Preservada', texto: 'Cercado por mata nativa, cachoeira e belezas naturais.' },
    { icone: '🚗', titulo: 'Fácil Acesso', texto: 'Pela Rodovia Fernão Dias, a 1h30 de São Paulo.' },
  ];

  // ====== NAVEGAÇÃO DE FOTOS ======
  const proximaFoto = () => setFotoAtual((p) => (p === fotos.length - 1 ? 0 : p + 1));
  const fotoAnterior = () => setFotoAtual((p) => (p === 0 ? fotos.length - 1 : p - 1));

  // ====== ESTILOS REUTILIZÁVEIS ======
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

  const sectionPadding = isMobile ? '55px 16px' : '90px 20px';
  const sectionPaddingLarge = isMobile ? '70px 16px' : '110px 20px';

  return (
    <>
      <Head>
        <title>Quinta do Arvoredo - Lotes em Itapeva MG a partir de 600m² | Marques Alta Terra</title>
        <meta
          name="description"
          content="Lotes a partir de 600m² no Quinta do Arvoredo, condomínio fechado em Itapeva - MG. A partir de R$ 165 mil, parcelas de R$ 1.750. Beach tennis, cachoeira, capela e mais. A 30 min de Bragança Paulista."
        />
        <meta
          name="keywords"
          content="terreno Itapeva MG, lote Itapeva MG, Quinta do Arvoredo, condomínio fechado Itapeva, terreno sul de Minas, lote 600m2, investimento imobiliário Minas, terreno próximo Bragança Paulista, lote condomínio fechado SP MG, Estrada da Capitinga, Pedrosos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href="https://www.marquesaltaterra.shop/itapeva" />

        {/* Open Graph */}
        <meta property="og:title" content="Quinta do Arvoredo - Lotes em Itapeva MG a partir de 600m²" />
        <meta property="og:description" content="Condomínio fechado no sul de Minas. Lotes a partir de 600m², R$ 165 mil, parcelas de R$ 1.750. Beach tennis, cachoeira, capela e mais." />
        <meta property="og:image" content="https://www.marquesaltaterra.shop/images/itapeva001.jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.marquesaltaterra.shop/itapeva" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Marques Alta Terra" />
        <meta property="og:locale" content="pt_BR" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quinta do Arvoredo - Lotes em Itapeva MG a partir de 600m²" />
        <meta name="twitter:description" content="Condomínio fechado no sul de Minas. Lotes a partir de 600m², R$ 165 mil, parcelas de R$ 1.750." />
        <meta name="twitter:image" content="https://www.marquesaltaterra.shop/images/itapeva001.jpeg" />

        {/* Schema.org - Produto */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            name: 'Quinta do Arvoredo - Lotes em Itapeva MG',
            description:
              'Lotes a partir de 600m² no Quinta do Arvoredo, condomínio fechado em Itapeva - MG. A partir de R$ 165 mil, parcelas de R$ 1.750. Estrutura completa de lazer.',
            image: [
              'https://www.marquesaltaterra.shop/images/itapeva1.jpeg',
              'https://www.marquesaltaterra.shop/images/itapeva2.jpeg',
              'https://www.marquesaltaterra.shop/images/itapeva3.jpeg',
              'https://www.marquesaltaterra.shop/images/itapeva4.jpeg',
            ],
            offers: {
              '@type': 'Offer',
              price: '165000.00',
              priceCurrency: 'BRL',
              availability: 'https://schema.org/InStock',
              priceValidUntil: '2026-12-31',
              url: 'https://www.marquesaltaterra.shop/itapeva',
            },
            brand: { '@type': 'Brand', name: 'Marques Alta Terra' },
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Rod. Tancredo Neves, 123, Estrada Municipal da Capitinga, Bairro Pedrosos',
              addressLocality: 'Itapeva',
              addressRegion: 'MG',
              postalCode: '37655-000',
              addressCountry: 'BR',
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
              'Curadoria e venda de terrenos no interior de São Paulo e Minas Gerais. Quinta do Arvoredo em Itapeva - MG.',
            taxID: '39.868.744/0001-68',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Itapeva',
              addressRegion: 'MG',
              addressCountry: 'BR',
            },
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+5511940311644',
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
              page_title: 'Quinta do Arvoredo - Itapeva MG',
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
            backgroundImage: 'url(/images/itapeva001.jpeg)',
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
      height: isMobile ? '65px' : '150px',   // ✅
      width: 'auto',
      maxWidth: isMobile ? '170px' : '240px',
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
              <a href="/" style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}>
                Início
              </a>
              <span style={{ color: '#D48C5B' }}>/</span>
              <span style={{ color: '#D48C5B' }}>Itapeva</span>
            </div>
          </div>

          {/* Conteúdo central */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              padding: 0,
              maxWidth: '950px',
              width: '100%',
            }}
          >
            <div style={labelEyebrow}>
              <span style={labelLine} />
              <span style={labelText}>Lançamento · Itapeva · MG</span>
              <span style={labelLine} />
            </div>
            <h1
              style={{
                color: '#fff',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: '600',
                marginBottom: isMobile ? '18px' : '22px',
                lineHeight: '1.12',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              }}
            >
              Quinta do Arvoredo
              <br />
              <span style={{ fontStyle: 'italic', color: '#F0D5B8' }}>sua morada no campo</span>
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.92)',
                fontSize: isMobile ? '0.95rem' : 'clamp(1.05rem, 1.6vw, 1.25rem)',
                marginBottom: isMobile ? '25px' : '32px',
                lineHeight: '1.7',
                maxWidth: '700px',
                margin: '0 auto 25px',
              }}
            >
              Condomínio fechado no sul de Minas Gerais com lotes a partir de 600m².
              Estrutura completa, natureza preservada e cachoeira.
              A 30 minutos de Bragança Paulista.
            </p>

            {/* Caixa de destaque do preço */}
            <div
              style={{
                display: 'inline-block',
                marginBottom: isMobile ? '28px' : '35px',
                padding: isMobile ? '14px 22px' : '18px 36px',
                backgroundColor: 'rgba(0,0,0,0.45)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(212,140,91,0.5)',
                borderRadius: '4px',
                maxWidth: '100%',
              }}
            >
              <div
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: isMobile ? '0.62rem' : '0.7rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                Lotes a partir de
              </div>
              <div
                style={{
                  color: '#D48C5B',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.7rem' : '2.3rem',
                  fontWeight: '600',
                  lineHeight: 1.1,
                }}
              >
                R$ 165.000
              </div>
              <div
                style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: isMobile ? '0.78rem' : '0.9rem',
                  marginTop: '8px',
                  lineHeight: '1.5',
                }}
              >
                ou parcelas de <strong style={{ color: '#fff' }}>R$ 1.750</strong> + entrada
              </div>
            </div>

            {/* Botões */}
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
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: isMobile ? '15px 26px' : '17px 42px',
                  backgroundColor: '#25D366',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
                  textDecoration: 'none',
                  textAlign: 'center',
                  width: isMobile ? '100%' : 'auto',
                  boxSizing: 'border-box',
                }}
              >
                📲 Falar com o vendedor
              </a>
              <a
                href="#video"
                style={{
                  padding: isMobile ? '15px 26px' : '17px 42px',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.6)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  textAlign: 'center',
                  width: isMobile ? '100%' : 'auto',
                  boxSizing: 'border-box',
                }}
              >
                ▶ Ver o vídeo
              </a>
            </div>
          </div>

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

        {/* ====== BARRA DE NÚMEROS ====== */}
        <section
          style={{
            backgroundColor: '#1A1A1A',
            padding: isMobile ? '30px 16px' : '45px 20px',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '20px' : '0',
              textAlign: 'center',
            }}
          >
            {[
              { numero: '210', label: 'Lotes disponíveis' },
              { numero: '600m²', label: 'A partir de' },
              { numero: 'R$ 1.750', label: 'Parcelas mensais' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft: !isMobile && i > 0 ? '1px solid rgba(212,140,91,0.25)' : 'none',
                  borderTop: isMobile && i > 0 ? '1px solid rgba(212,140,91,0.15)' : 'none',
                  padding: isMobile ? '15px 0' : '0 20px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.9rem' : '2.5rem',
                    fontWeight: '600',
                    color: '#D48C5B',
                    marginBottom: '6px',
                    lineHeight: 1,
                  }}
                >
                  {item.numero}
                </div>
                <div
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ====== VÍDEO PRINCIPAL ====== */}
        <section
          id="video"
          style={{
            padding: sectionPadding,
            backgroundColor: '#fff',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '50px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Conheça o projeto</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>O Quinta do Arvoredo em vídeo</h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                Assista à apresentação do empreendimento e veja o que espera por você
              </p>
            </div>

            {/* Vídeo principal centralizado */}
            <div
              style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                borderRadius: '4px',
                overflow: 'hidden',
                boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
                marginBottom: isMobile ? '30px' : '45px',
                backgroundColor: '#000',
              }}
            >
              <iframe
                src={videos[0].url}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={videos[0].titulo}
              />
            </div>

            {/* Outros vídeos - carrossel */}
            {videos.length > 1 && (
              <>
                <h3
                  style={{
                    color: '#2C2C2C',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    fontWeight: '600',
                    marginBottom: isMobile ? '20px' : '25px',
                    textAlign: 'center',
                  }}
                >
                  Mais vídeos do empreendimento
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: isMobile ? '16px' : '20px',
                  }}
                >
                  {videos.slice(1).map((video, index) => (
                    <div
                      key={video.id}
                      onClick={() => {
                        setVideoAtual(index + 1);
                        setModalVideoAberto(true);
                      }}
                      style={{
                        cursor: 'pointer',
                        borderRadius: '4px',
                        overflow: 'hidden',
                        boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                        transition: 'all 0.3s ease',
                        backgroundColor: '#000',
                        position: 'relative',
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.18)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                      }}
                    >
                      <div
                        style={{
                          position: 'relative',
                          paddingBottom: '56.25%',
                          height: 0,
                        }}
                      >
                        <iframe
                          src={video.url}
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            border: 'none',
                            pointerEvents: 'none',
                          }}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          title={video.titulo}
                        />
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <div
                            style={{
                              width: '60px',
                              height: '60px',
                              borderRadius: '50%',
                              backgroundColor: 'rgba(212,140,91,0.95)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: '#fff',
                              fontSize: '1.5rem',
                              boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                            }}
                          >
                            ▶
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          padding: '14px 16px',
                          backgroundColor: '#fff',
                        }}
                      >
                        <p
                          style={{
                            color: '#2C2C2C',
                            fontSize: isMobile ? '0.82rem' : '0.88rem',
                            fontWeight: '500',
                            margin: 0,
                            lineHeight: '1.4',
                          }}
                        >
                          {video.titulo}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* ====== SOBRE O EMPREENDIMENTO ====== */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#F5F0EB',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
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
                  <span style={labelText}>Sobre o Quinta do Arvoredo</span>
                </div>
                <h2 style={h2Style}>Um novo jeito de viver no campo</h2>
                <p
                  style={{
                    color: '#4A4A4A',
                    fontSize: isMobile ? '0.92rem' : '1.05rem',
                    lineHeight: '1.85',
                    marginBottom: '18px',
                  }}
                >
                  Está nascendo no <strong>sul de Minas Gerais</strong> um lugar onde a vida
                  acontece em outro ritmo. O <strong>Quinta do Arvoredo</strong> é um condomínio
                  fechado com <strong>lotes a partir de 600m²</strong>, pensado para quem busca
                  tranquilidade, contato com a natureza e qualidade de vida.
                </p>
                <p
                  style={{
                    color: '#4A4A4A',
                    fontSize: isMobile ? '0.92rem' : '1.05rem',
                    lineHeight: '1.85',
                    marginBottom: '18px',
                  }}
                >
                  Com localização privilegiada a <strong>30 minutos de Bragança Paulista</strong> e
                  fácil acesso pela Rodovia Fernão Dias, o empreendimento une o melhor dos dois
                  mundos: proximidade com os grandes centros e o sossego do interior mineiro.
                </p>
                <p
                  style={{
                    color: '#4A4A4A',
                    fontSize: isMobile ? '0.92rem' : '1.05rem',
                    lineHeight: '1.85',
                    marginBottom: '0',
                  }}
                >
                  Aqui a gente não vende espaço. A gente entrega <strong>um estilo de vida</strong> —
                  a tranquilidade que você e sua família merecem.
                </p>
              </div>
              <div>
                <img
                  src="/images/itapeva002.jpeg"
                  alt="Vista aérea do Quinta do Arvoredo em Itapeva MG"
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
          </div>
        </section>

        {/* ====== INFRAESTRUTURA ====== */}
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
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '35px' : '60px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Estrutura completa</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>Tudo o que você precisa, dentro do condomínio</h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                Áreas de lazer, esporte e convivência para toda a família
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile
                  ? '1fr 1fr'
                  : 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: isMobile ? '10px' : '16px',
                width: '100%',
              }}
            >
              {infraestrutura.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#FAF7F3',
                    padding: isMobile ? '14px 12px' : '20px 22px',
                    borderRadius: '3px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: isMobile ? '8px' : '12px',
                    borderLeft: '3px solid #D48C5B',
                    transition: 'all 0.3s ease',
                    boxSizing: 'border-box',
                    minWidth: 0,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span
                    style={{
                      fontSize: isMobile ? '1.3rem' : '1.6rem',
                      flexShrink: 0,
                    }}
                  >
                    {item.icone}
                  </span>
                  <span
                    style={{
                      color: '#2C2C2C',
                      fontSize: isMobile ? '0.78rem' : '0.9rem',
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
          </div>
        </section>

        {/* ====== VANTAGENS DO LOTE ====== */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#F5F0EB',
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
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '35px' : '60px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Por que investir aqui</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>Vantagens de garantir o seu lote agora</h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile
                  ? '1fr'
                  : 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: isMobile ? '18px' : '24px',
                width: '100%',
              }}
            >
              {vantagensLote.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: '#fff',
                    padding: isMobile ? '24px 22px' : '32px 28px',
                    borderRadius: '4px',
                    borderTop: '3px solid #D48C5B',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                    transition: 'all 0.3s ease',
                    height: '100%',
                    boxSizing: 'border-box',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 20px 45px rgba(0,0,0,0.1)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.06)';
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? '1.8rem' : '2.2rem',
                      marginBottom: '16px',
                    }}
                  >
                    {item.icone}
                  </div>
                  <h3
                    style={{
                      color: '#2C2C2C',
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: isMobile ? '1.1rem' : '1.25rem',
                      fontWeight: '600',
                      marginBottom: '10px',
                      lineHeight: '1.3',
                    }}
                  >
                    {item.titulo}
                  </h3>
                  <p
                    style={{
                      color: '#4A4A4A',
                      fontSize: isMobile ? '0.88rem' : '0.95rem',
                      lineHeight: '1.7',
                      margin: 0,
                    }}
                  >
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ====== GALERIA DE FOTOS ====== */}
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
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '35px' : '60px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Galeria</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>Veja o Quinta do Arvoredo de perto</h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                Imagens do terreno, natureza e estrutura do condomínio
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
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.18)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)';
                  }}
                >
                  <img
                    src={foto}
                    alt={`Quinta do Arvoredo em Itapeva MG - Foto ${index + 1}`}
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
            backgroundColor: '#F5F0EB',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '35px' : '60px' }}>
              <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
                <span style={labelLine} />
                <span style={labelText}>Onde fica</span>
                <span style={labelLine} />
              </div>
              <h2 style={h2Style}>Localização Privilegiada</h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                No coração do sul de Minas, perto de tudo o que importa
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
                    src={MAPA_EMBED_URL}
                    width="100%"
                    height={isMobile ? '280px' : '420px'}
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Quinta do Arvoredo em Itapeva MG"
                  />
                </div>
                <a
                  href={MAPA_LINK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
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
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                >
                  📍 Abrir no Google Maps
                </a>
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
                  Perto de tudo o que importa
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {distancias.map((item, i) => (
                    <li
                      key={i}
                      style={{
                        padding: isMobile ? '12px 0' : '14px 0',
                        borderBottom: i < distancias.length - 1 ? '1px solid #e5ddd3' : 'none',
                        fontSize: isMobile ? '0.88rem' : '1rem',
                        color: '#4A4A4A',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        lineHeight: '1.5',
                      }}
                    >
                      <span style={{ fontSize: isMobile ? '1rem' : '1.1rem', flexShrink: 0 }}>
                        {item.emoji}
                      </span>
                      <span>
                        <strong style={{ color: '#2C2C2C' }}>{item.tempo}</strong> · {item.destino}
                        {item.desc && (
                          <span style={{ color: '#888', display: 'block', fontSize: '0.85em', marginTop: '2px' }}>
                            {item.desc}
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>

                <div
                  style={{
                    marginTop: '20px',
                    padding: '14px 16px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    borderLeft: '3px solid #D48C5B',
                  }}
                >
                  <div
                    style={{
                      color: '#888',
                      fontSize: isMobile ? '0.65rem' : '0.72rem',
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                      fontWeight: '600',
                      marginBottom: '6px',
                    }}
                  >
                    Endereço
                  </div>
                  <div
                    style={{
                      color: '#2C2C2C',
                      fontSize: isMobile ? '0.82rem' : '0.9rem',
                      lineHeight: '1.6',
                    }}
                  >
                    {ENDERECO_COMPLETO}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====== CONDIÇÕES / TABELA ====== */}
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
              maxWidth: '900px',
              margin: '0 auto',
              textAlign: 'center',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ ...labelEyebrow, justifyContent: 'center' }}>
              <span style={labelLine} />
              <span style={labelText}>Condições</span>
              <span style={labelLine} />
            </div>
            <h2 style={h2Style}>Invista com facilidade</h2>
            <p
              style={{
                color: '#666',
                fontSize: isMobile ? '0.9rem' : '1.05rem',
                maxWidth: '620px',
                margin: '0 auto 40px',
                lineHeight: '1.7',
              }}
            >
              Condições de pagamento direto com o empreendedor
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: isMobile ? '16px' : '20px',
                width: '100%',
              }}
            >
              {[
                { label: 'Lotes a partir de', valor: 'R$ 165.000', detalhe: 'a partir de 600m²' },
                { label: 'Ou em parcelas de', valor: 'R$ 1.750', detalhe: '+ pequena entrada' },
                { label: 'Condomínio mensal', valor: 'R$ 200', detalhe: 'por lote' },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#FAF7F3',
                    padding: isMobile ? '24px 20px' : '32px 24px',
                    borderRadius: '4px',
                    borderTop: '3px solid #D48C5B',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    style={{
                      color: '#888',
                      fontSize: isMobile ? '0.7rem' : '0.78rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                      marginBottom: '10px',
                      fontWeight: '600',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      color: '#2C2C2C',
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: isMobile ? '1.7rem' : '2.1rem',
                      fontWeight: '600',
                      lineHeight: 1.1,
                      marginBottom: '8px',
                    }}
                  >
                    {item.valor}
                  </div>
                  <div
                    style={{
                      color: '#666',
                      fontSize: isMobile ? '0.82rem' : '0.9rem',
                      lineHeight: '1.5',
                    }}
                  >
                    {item.detalhe}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setModalLotesAberto(true)}
              style={{
                marginTop: isMobile ? '25px' : '35px',
                padding: isMobile ? '14px 24px' : '16px 36px',
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
              📋 Mais informações sobre os lotes
            </button>
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
              Lotes à venda em Itapeva - MG
            </h2>
            <p style={{ marginBottom: '15px' }}>
              O <strong>Quinta do Arvoredo</strong> é um dos empreendimentos mais aguardados do{' '}
              <strong>sul de Minas Gerais</strong>. Localizado em <strong>Itapeva - MG</strong>, na
              Estrada da Capitinga (Bairro Pedrosos), a apenas 30 minutos de Bragança Paulista e
              1h30 de São Paulo pela Rodovia Fernão Dias, o condomínio fechado oferece{' '}
              <strong>210 lotes a partir de 600m²</strong>, com toda a infraestrutura para quem
              busca uma segunda moradia, casa de campo ou um investimento imobiliário sólido.
            </p>
            <p style={{ marginBottom: '15px' }}>
              Se você procura <strong>terreno em condomínio fechado</strong>,{' '}
              <strong>lote em Minas Gerais</strong> ou uma oportunidade de{' '}
              <strong>investimento no interior</strong>, o Quinta do Arvoredo une localização
              estratégica, natureza preservada e alto potencial de valorização. A região do sul de
              Minas é uma das que mais cresce no mercado imobiliário, atraindo famílias de São
              Paulo e do interior paulista em busca de qualidade de vida.
            </p>
            <p style={{ marginBottom: '15px' }}>
              Com <strong>lotes a partir de R$ 165.000</strong>, parcelas de{' '}
              <strong>R$ 1.750</strong> e condomínio de apenas <strong>R$ 200/mês</strong>, o
              Quinta do Arvoredo oferece uma oportunidade única para quem quer sair do aluguel,
              construir a casa dos sonhos ou diversificar investimentos.
            </p>
            <p style={{ marginBottom: '25px' }}>
              A estrutura do condomínio inclui quadra de beach tennis, quadra poliesportiva,
              playground, pet place, academia, espaço zen, horta, pomar, galinheiro orgânico,
              espaço gourmet, capela e até uma cachoeira particular. Aqui a gente não vende
              espaço: a gente entrega um estilo de vida.
            </p>
            <div style={{ textAlign: 'center', marginTop: '35px' }}>
              <div
                style={{
                  display: 'inline-block',
                  width: '50px',
                  height: '1px',
                  backgroundColor: '#D48C5B',
                  marginBottom: '18px',
                }}
              />
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  color: '#2C2C2C',
                  fontSize: isMobile ? '1rem' : '1.3rem',
                  fontWeight: '500',
                  margin: 0,
                }}
              >
                Quinta do Arvoredo — Sua morada no campo.
              </p>
            </div>
          </div>
        </section>

        {/* ====== CTA FINAL ====== */}
        <section
          style={{
            padding: sectionPaddingLarge,
            backgroundImage: 'url(/images/home3.png)',
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
              background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.85) 100%)',
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
              Agende sua visita
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: isMobile ? '0.95rem' : '1.1rem',
                marginBottom: '32px',
                lineHeight: '1.7',
              }}
            >
              Venha conhecer de perto o projeto feito para quem busca viver com a alma,
              com conexão e muito significado.
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
              📲 Falar com o Anderson
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
              💰 Aceita proposta · Agende sua visita
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
                    { label: 'Joanópolis - SP', href: '/joanopolis' },
                    { label: 'Bragança Paulista - SP', href: '/braganca' },
                    { label: 'Itapeva - MG', href: '/itapeva', ativo: true },
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
                  Vendedor responsável pelos lotes
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
                  Anderson Vezzani — (11) 94031-1644
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
                alt={`Quinta do Arvoredo - Foto ${fotoAtual + 1}`}
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
            </div>
          </div>
        )}

        {/* ====== MODAL LOTES ====== */}
        {modalLotesAberto && (
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
            onClick={() => setModalLotesAberto(false)}
          >
            <div
              style={{
                backgroundColor: '#fff',
                maxWidth: '650px',
                width: '100%',
                padding: isMobile ? '28px 22px' : '45px 40px',
                borderRadius: '4px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
                boxSizing: 'border-box',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalLotesAberto(false)}
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
              <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '16px' }}>
                📋
              </div>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.3rem' : '1.7rem',
                  fontWeight: '600',
                  marginBottom: '20px',
                  lineHeight: '1.3',
                }}
              >
                Sobre os lotes do Quinta do Arvoredo
              </h2>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  marginBottom: '22px',
                }}
              >
                {[
                  '210 lotes no total, a partir de 600m² cada',
                  'Lotes em condomínio fechado com segurança 24h',
                  'Toda a infraestrutura pronta: energia, água, asfalto',
                  'Acesso pela Rodovia Fernão Dias',
                  'A 30 minutos de Bragança Paulista',
                  'A 1h30 de São Paulo',
                  'Região com alto potencial de valorização',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      color: '#4A4A4A',
                      fontSize: isMobile ? '0.88rem' : '0.95rem',
                      lineHeight: '1.7',
                      padding: '10px 0',
                      borderBottom: i < 6 ? '1px solid #f0ebe4' : 'none',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: '#5E6C5B', fontWeight: '700', flexShrink: 0 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  padding: isMobile ? '14px 22px' : '16px 28px',
                  backgroundColor: '#25D366',
                  color: '#fff',
                  borderRadius: '4px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                📲 Falar com o vendedor
              </a>
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
                  src={MAPA_EMBED_URL}
                  width="100%"
                  height={isMobile ? '300px' : '420px'}
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Quinta do Arvoredo em Itapeva MG"
                />
              </div>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.78rem' : '0.9rem',
                  lineHeight: '1.7',
                  marginBottom: '10px',
                }}
              >
                <strong style={{ color: '#2C2C2C' }}>Endereço:</strong> {ENDERECO_COMPLETO}
              </p>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.78rem' : '0.9rem',
                  lineHeight: '1.7',
                }}
              >
                <strong style={{ color: '#2C2C2C' }}>Itapeva - MG</strong> · Sul de Minas Gerais
                <br />
                A 30 min de Bragança Paulista · 1h30 de São Paulo
              </p>
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
>>>>>>> e5ed39193067114662a7b062fa721c73c361b562
