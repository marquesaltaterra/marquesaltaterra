import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function Home() {
  // Estados para controlar os modais
  const [modalFotosAberto, setModalFotosAberto] = useState(false);
  const [modalDocumentosAberto, setModalDocumentosAberto] = useState(false);
  const [modalLocalizacaoAberto, setModalLocalizacaoAberto] = useState(false);
  const [modalVideoAberto, setModalVideoAberto] = useState(false);
  const [fotoAtual, setFotoAtual] = useState(0);
  const [videoAtual, setVideoAtual] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar se é mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Lista das fotos da galeria
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

  // Lista de vídeos (YouTube)
  const videos = [
    { 
      id: 1, 
      titulo: 'Marques Alta Terra - Vista Aérea do Terreno', 
      url: 'https://www.youtube.com/embed/POcOq6l7Mq8?autoplay=0&rel=0&modestbranding=1&playsinline=1' 
    },
    { 
      id: 2, 
      titulo: 'Marques Alta Terra - Paisagem e Natureza', 
      url: 'https://www.youtube.com/embed/5Oq8J0M0W7Q?autoplay=0&rel=0&modestbranding=1&playsinline=1' 
    },
    { 
      id: 3, 
      titulo: 'Marques Alta Terra - Drone 4K sobre o Terreno', 
      url: 'https://www.youtube.com/embed/QkmMf2RLSCY?autoplay=0&rel=0&modestbranding=1&playsinline=1' 
    },
    { 
      id: 4, 
      titulo: 'Marques Alta Terra - O Horizonte da Serra', 
      url: 'https://www.youtube.com/embed/M_GLpyBi34E?autoplay=0&rel=0&modestbranding=1&playsinline=1' 
    },
    { 
      id: 5, 
      titulo: 'Marques Alta Terra - Terreno de Esquina', 
      url: 'https://www.youtube.com/embed/BLdqtpRtiX8?autoplay=0&rel=0&modestbranding=1&playsinline=1' 
    },
    { 
      id: 6, 
      titulo: 'Marques Alta Terra - 280m² de Natureza', 
      url: 'https://www.youtube.com/embed/HbUnXcaDXw4?autoplay=0&rel=0&modestbranding=1&playsinline=1' 
    },
    { 
      id: 7, 
      titulo: 'Marques Alta Terra - Vista Panorâmica', 
      url: 'https://www.youtube.com/embed/cFPze7lkvZY?autoplay=0&rel=0&modestbranding=1&playsinline=1' 
    },
    { 
      id: 8, 
      titulo: 'Marques Alta Terra - Por do Sol na Serra', 
      url: 'https://www.youtube.com/embed/l5WO0Wl8Yqs?autoplay=0&rel=0&modestbranding=1&playsinline=1' 
    },
    { 
      id: 9, 
      titulo: 'Marques Alta Terra - Terreno com Luz e Platô', 
      url: 'https://www.youtube.com/embed/sduF7aNPjgU?autoplay=0&rel=0&modestbranding=1&playsinline=1' 
    },
  ];

  // Diferenciais do terreno
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

  // Funções para navegar nas fotos do modal
  const proximaFoto = () => {
    setFotoAtual((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  };

  const fotoAnterior = () => {
    setFotoAtual((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  };

  return (
    <>
      <Head>
        {/* ====== TÍTULO PRINCIPAL ====== */}
        <title>Terreno em Joanópolis SP - 280m² com Luz e Platô | Marques Alta Terra</title>
        
        {/* ====== META DESCRIPTION ====== */}
        <meta 
          name="description" 
          content="Terreno de 280m² em Joanópolis - SP. Platô pronto, padrão de luz instalado. 20 min do centro. R$ 129.000,00. Aceita proposta." 
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.marquesaltaterra.shop" />

        {/* ====== OPEN GRAPH (WhatsApp/Facebook) - IMAGEM ABSOLUTA ====== */}
        <meta property="og:title" content="Terreno em Joanópolis SP - 280m² com Luz e Platô | Marques Alta Terra" />
        <meta property="og:description" content="Terreno de 280m² em Joanópolis - SP. Platô pronto, luz instalada. R$ 129.000,00. Aceita proposta." />
        <meta property="og:image" content="https://www.marquesaltaterra.shop/images/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://www.marquesaltaterra.shop" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Marques Alta Terra" />
        <meta property="og:locale" content="pt_BR" />

        {/* ====== TWITTER CARD ====== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terreno em Joanópolis SP - 280m² com Luz e Platô | Marques Alta Terra" />
        <meta name="twitter:description" content="Terreno de 280m² em Joanópolis - SP. Platô pronto, luz instalada. R$ 129.000,00." />
        <meta name="twitter:image" content="https://www.marquesaltaterra.shop/images/logo.png" />

        {/* ====== SCHEMA.ORG ====== */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Terreno em Joanópolis - Marques Alta Terra",
            "description": "Terreno de 280m² em Joanópolis - SP. Platô pronto, padrão de luz instalado. A 20min do centro. Aceita proposta.",
            "image": "https://www.marquesaltaterra.shop/images/hero.jpeg",
            "offers": {
              "@type": "Offer",
              "price": "129000.00",
              "priceCurrency": "BRL",
              "availability": "https://schema.org/InStock",
              "priceValidUntil": "2026-12-31",
              "url": "https://www.marquesaltaterra.shop"
            },
            "brand": {
              "@type": "Brand",
              "name": "Marques Alta Terra"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "12"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Joanópolis",
              "addressRegion": "SP",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "-22.972333",
              "longitude": "-46.242000"
            }
          })}
        </script>

        {/* Favicon */}
        <link rel="icon" href="/images/logo.png" />
      </Head>

      {/* ====== CONTAINER PRINCIPAL ====== */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0',
          minHeight: '100vh',
          backgroundColor: '#F5F0EB',
          fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        {/* ====== HERO SECTION ====== */}
        <section
          style={{
            position: 'relative',
            height: '100vh',
            minHeight: isMobile ? '500px' : '600px',
            backgroundImage: 'url(/images/hero.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          {/* Overlay escuro para legibilidade */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.4)',
            }}
          />

          {/* Logo no topo - RESPONSIVA */}
          <div
            style={{
              position: 'absolute',
              top: isMobile ? '15px' : '30px',
              left: isMobile ? '15px' : '30px',
              zIndex: 10,
            }}
          >
            <img
              src="/images/logo.png"
              alt="Marques Alta Terra - Terreno em Joanópolis SP"
              style={{ 
                height: isMobile ? '50px' : '100px', 
                width: 'auto' 
              }}
            />
          </div>

          {/* Conteúdo central */}
          <div style={{ position: 'relative', zIndex: 5, padding: isMobile ? '10px' : '20px' }}>
            <h1
              style={{
                color: '#fff',
                fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 8vw, 4.5rem)',
                fontWeight: '700',
                marginBottom: '10px',
                letterSpacing: '2px',
                textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                padding: isMobile ? '0 10px' : '0',
              }}
            >
              Marques Alta Terra
            </h1>
            <p
              style={{
                color: '#fff',
                fontSize: isMobile ? '0.9rem' : 'clamp(1rem, 2vw, 1.4rem)',
                marginBottom: '15px',
                opacity: 0.9,
                padding: isMobile ? '0 10px' : '0',
              }}
            >
              280m² de natureza, luz e vista. A 20min do centro de Joanópolis.
            </p>
            <div
              style={{
                fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '700',
                color: '#D48C5B',
                marginBottom: '25px',
                textShadow: '0 2px 8px rgba(0,0,0,0.5)',
              }}
            >
              R$ 129.000,00
            </div>
            <div style={{ 
              display: 'flex', 
              gap: isMobile ? '10px' : '15px', 
              justifyContent: 'center', 
              flexWrap: 'wrap',
              padding: isMobile ? '0 10px' : '0',
            }}>
              <button
                onClick={() => setModalFotosAberto(true)}
                style={{
                  padding: isMobile ? '12px 20px' : '14px 40px',
                  backgroundColor: '#D48C5B',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(212, 140, 91, 0.4)',
                  flex: isMobile ? '1 1 auto' : '0 0 auto',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#B8784A';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#D48C5B';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                📸 Ver fotos
              </button>
              <button
                onClick={() => setModalVideoAberto(true)}
                style={{
                  padding: isMobile ? '12px 20px' : '14px 40px',
                  backgroundColor: '#E74C3C',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(231, 76, 60, 0.4)',
                  flex: isMobile ? '1 1 auto' : '0 0 auto',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#C0392B';
                  e.target.style.transform = 'scale(1.05)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#E74C3C';
                  e.target.style.transform = 'scale(1)';
                }}
              >
                🎬 Ver vídeo
              </button>
              <a
                href="#sobre"
                style={{
                  padding: isMobile ? '12px 20px' : '14px 40px',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: '2px solid #fff',
                  borderRadius: '30px',
                  fontSize: isMobile ? '0.85rem' : '1rem',
                  fontWeight: '600',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  flex: isMobile ? '1 1 auto' : '0 0 auto',
                  textAlign: 'center',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = 'rgba(255,255,255,0.15)';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                Conhecer
              </a>
            </div>
          </div>

          {/* Indicador de scroll */}
          <div
            style={{
              position: 'absolute',
              bottom: '30px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#fff',
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              animation: 'bounce 2s infinite',
            }}
          >
            ↓
          </div>
        </section>

        {/* ====== SOBRE O TERRENO ====== */}
        <section
          id="sobre"
          style={{
            padding: isMobile ? '40px 15px' : '60px 20px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '30px' : '50px',
              alignItems: 'center',
            }}
          >
            <div>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontSize: isMobile ? '1.6rem' : 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: '600',
                  marginBottom: '20px',
                }}
              >
                O terreno que você esperava
              </h2>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  lineHeight: '1.8',
                  marginBottom: '20px',
                }}
              >
                Terreno de esquina, com 280m² de área, já limpo e terraplanado. 
                Platô pronto para construção, reduzindo custos com preparação. 
                Padrão de energia já instalado.
              </p>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.95rem' : '1rem',
                  lineHeight: '1.8',
                  marginBottom: '30px',
                }}
              >
                Localizado a apenas 20 minutos do centro de Joanópolis, com fácil 
                acesso e cercado pela natureza. Ideal para construir seu refúgio 
                ou investir em uma região em crescimento.
              </p>
              <button
                onClick={() => setModalDocumentosAberto(true)}
                style={{
                  padding: isMobile ? '12px 24px' : '12px 30px',
                  backgroundColor: 'transparent',
                  color: '#5E6C5B',
                  border: '2px solid #5E6C5B',
                  borderRadius: '8px',
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#5E6C5B';
                  e.target.style.color = '#fff';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                  e.target.style.color = '#5E6C5B';
                }}
              >
                📄 Saiba sobre a documentação
              </button>
            </div>
            <div>
              <img
                src="/images/galeria1.jpeg"
                alt="Vista aérea do terreno Marques Alta Terra em Joanópolis SP com 280m²"
                style={{
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Diferenciais em grid - RESPONSIVO */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: isMobile ? '10px' : '15px',
              marginTop: '50px',
            }}
          >
            {diferenciais.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: '#fff',
                  padding: isMobile ? '12px 15px' : '15px 20px',
                  borderRadius: '10px',
                  boxShadow: '0 2px 10px rgba(0,0,0,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: isMobile ? '8px' : '12px',
                  transition: 'all 0.3s ease',
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
                }}
              >
                <span style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>{item.icone}</span>
                <span style={{ color: '#2C2C2C', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>{item.texto}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ====== GALERIA DE FOTOS ====== */}
        <section
          style={{
            padding: isMobile ? '40px 15px' : '60px 20px',
            backgroundColor: '#fff',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <h2
              style={{
                color: '#2C2C2C',
                fontSize: isMobile ? '1.6rem' : 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: '600',
                textAlign: 'center',
                marginBottom: '15px',
              }}
            >
              Veja de cima o seu futuro
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: '#666',
                marginBottom: '40px',
                fontSize: isMobile ? '0.9rem' : '1rem',
              }}
            >
              Fotos aéreas do terreno e região
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: isMobile ? '10px' : '20px',
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
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.03)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.15)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.08)';
                  }}
                >
                  <img
                    src={foto}
                    alt={`Vista aérea do terreno em Joanópolis SP - Marques Alta Terra ${index + 1}`}
                    style={{
                      width: '100%',
                      height: isMobile ? '150px' : '220px',
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
            padding: isMobile ? '40px 15px' : '60px 20px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              color: '#2C2C2C',
              fontSize: isMobile ? '1.6rem' : 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: '600',
              textAlign: 'center',
              marginBottom: '15px',
            }}
          >
            Localização Privilegiada
          </h2>
          <p
            style={{
              textAlign: 'center',
              color: '#666',
              marginBottom: '40px',
              fontSize: isMobile ? '0.9rem' : '1rem',
            }}
          >
            A uma hora e meia de São Paulo, pertinho de tudo
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: isMobile ? '30px' : '40px',
              alignItems: 'center',
            }}
          >
            <div>
              <div
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                }}
              >
                <iframe
                  src="https://www.google.com/maps?q=22%C2%B058%2720.4%22S+46%C2%B014%2731.2%22W&hl=pt-BR&z=15&output=embed"
                  width="100%"
                  height={isMobile ? '250px' : '350px'}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do terreno Marques Alta Terra em Joanópolis SP"
                />
              </div>
              <button
                onClick={() => setModalLocalizacaoAberto(true)}
                style={{
                  marginTop: '15px',
                  padding: isMobile ? '12px 20px' : '12px 30px',
                  backgroundColor: '#5E6C5B',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: isMobile ? '0.9rem' : '0.95rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor = '#4A5A47';
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor = '#5E6C5B';
                }}
              >
                📍 Abrir no Google Maps
              </button>
            </div>
            <div>
              <h3 style={{ color: '#2C2C2C', fontSize: isMobile ? '1.1rem' : '1.3rem', marginBottom: '20px' }}>
                Próximo aos melhores lugares
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  🌄 <strong>15 min</strong> do Mirante de Joanópolis
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  💧 <strong>30 min</strong> da Cachoeira dos Pretos
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  🏞️ <strong>45 min</strong> da Represa dos Cunha
                </li>
                <li style={{ padding: '10px 0', borderBottom: '1px solid #eee', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  🏙️ <strong>20 min</strong> do centro de Joanópolis
                </li>
                <li style={{ padding: '10px 0', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                  🚗 <strong>1h30</strong> de São Paulo
                </li>
              </ul>
              <p style={{ color: '#666', fontSize: isMobile ? '0.8rem' : '0.9rem', marginTop: '15px' }}>
                <strong>Coordenadas:</strong> 22°58'20.4"S 46°14'31.2"W
              </p>
            </div>
          </div>
        </section>

        {/* ====== DOCUMENTAÇÃO ====== */}
        <section
          style={{
            padding: isMobile ? '40px 15px' : '60px 20px',
            backgroundColor: '#F5F0EB',
          }}
        >
          <div
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              backgroundColor: '#fff',
              padding: isMobile ? '30px 20px' : '50px 40px',
              borderRadius: '16px',
              boxShadow: '0 4px 25px rgba(0,0,0,0.06)',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: isMobile ? '2.5rem' : '3rem', display: 'block', marginBottom: '15px' }}>
              📜
            </span>
            <h2
              style={{
                color: '#2C2C2C',
                fontSize: isMobile ? '1.4rem' : 'clamp(1.6rem, 2.5vw, 2.2rem)',
                fontWeight: '600',
                marginBottom: '20px',
              }}
            >
              Negociação Transparente
            </h2>
            <p
              style={{
                color: '#4A4A4A',
                fontSize: isMobile ? '0.9rem' : '1rem',
                lineHeight: '1.8',
                marginBottom: '20px',
              }}
            >
              O terreno é negociado por <strong>Contrato Particular de Compra e Venda</strong>, 
              modalidade bastante utilizada na região.
            </p>
            <p
              style={{
                color: '#4A4A4A',
                fontSize: isMobile ? '0.9rem' : '1rem',
                lineHeight: '1.8',
                marginBottom: '30px',
              }}
            >
              O comprador receberá toda a documentação disponível, incluindo o 
              <strong> histórico completo da cadeia de contratos</strong> (cadeia possessória), 
              proporcionando total transparência na negociação.
            </p>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#5E6C5B',
                color: '#fff',
                padding: isMobile ? '6px 16px' : '8px 20px',
                borderRadius: '20px',
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                fontWeight: '600',
              }}
            >
              ✅ Toda a documentação histórica será entregue ao comprador
            </div>
          </div>
        </section>

{/* ====== CONTATO (CTA FINAL) ====== */}
<section
  style={{
    padding: isMobile ? '60px 15px' : '80px 20px',
    backgroundImage: 'url(/images/hero.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box',
    overflow: 'hidden',
  }}
>
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)',
    }}
  />
  <div
    style={{
      position: 'relative',
      zIndex: 5,
      textAlign: 'center',
      maxWidth: '600px',
      margin: '0 auto',
    }}
  >
    <h2
      style={{
        color: '#fff',
        fontSize: isMobile ? '1.6rem' : 'clamp(1.8rem, 3vw, 2.5rem)',
        fontWeight: '700',
        marginBottom: '15px',
      }}
    >
      Quer saber mais ou agendar uma visita?
    </h2>
    <p
      style={{
        color: 'rgba(255,255,255,0.85)',
        fontSize: isMobile ? '1rem' : '1.1rem',
        marginBottom: '30px',
      }}
    >
      Fale com o vendedor diretamente pelo WhatsApp
    </p>
    <a
      href="https://wa.me/5511918454543?text=Olá! Vi o terreno da Marques Alta Terra no site e tenho interesse."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-block',
        padding: isMobile ? '16px 30px' : '18px 50px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '30px',
        fontSize: isMobile ? '1rem' : '1.2rem',
        fontWeight: '700',
        textDecoration: 'none',
        boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
        transition: 'all 0.3s ease',
        width: isMobile ? '100%' : 'auto',
        boxSizing: 'border-box',
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 6px 30px rgba(37, 211, 102, 0.5)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)';
      }}
    >
      📲 Fale agora no WhatsApp
    </a>
    <p
      style={{
        color: 'rgba(255,255,255,0.7)',
        marginTop: '15px',
        fontSize: isMobile ? '0.85rem' : '0.9rem',
      }}
    >
      💰 Aceita proposta - negocie conosco
    </p>
  </div>
</section>

        {/* ====== TEXTO SEO ====== */}
        <div style={{ 
          maxWidth: '1100px', 
          margin: '40px auto 20px', 
          padding: isMobile ? '0 15px' : '0 20px',
          color: '#666',
          fontSize: isMobile ? '0.8rem' : '0.9rem',
          lineHeight: '1.6',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: isMobile ? '1.1rem' : '1.2rem', color: '#2C2C2C', marginBottom: '15px' }}>
            Por que investir em um terreno em Joanópolis?
          </h2>
          <p>
            Joanópolis é um dos destinos mais procurados do interior de São Paulo para quem busca 
            tranquilidade, contato com a natureza e qualidade de vida. O terreno Marques Alta Terra 
            oferece 280m² de área, com platô pronto, padrão de luz instalado e localização privilegiada 
            a apenas 20 minutos do centro da cidade.
          </p>
          <p style={{ marginTop: '10px' }}>
            Com fácil acesso pela Rodovia Fernão Dias, a região é cercada por mirantes, cachoeiras e 
            represas, sendo ideal para construção de casa de campo, chácara ou investimento imobiliário.
          </p>
          <p style={{ marginTop: '10px' }}>
            <strong>Marques Alta Terra</strong> - Seu pedaço do céu em Joanópolis. 
            <br />
            📞 WhatsApp: (11) 91845-4543
          </p>
        </div>

        {/* ====== FOOTER ====== */}
        <footer
          style={{
            padding: isMobile ? '30px 15px' : '40px 20px',
            backgroundColor: '#2C2C2C',
            color: '#999',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
            <img
              src="/images/logo.png"
              alt="Marques Alta Terra - Terreno em Joanópolis SP"
              style={{ 
                height: isMobile ? '40px' : '60px', 
                width: 'auto', 
                marginBottom: '20px' 
              }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: isMobile ? '15px' : '25px',
                flexWrap: 'wrap',
                marginBottom: '20px',
              }}
            >
              <a href="#sobre" style={{ color: '#999', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem' }}>
                Sobre
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModalFotosAberto(true);
                }}
                style={{ color: '#999', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', cursor: 'pointer' }}
              >
                Fotos
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModalLocalizacaoAberto(true);
                }}
                style={{ color: '#999', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', cursor: 'pointer' }}
              >
                Localização
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setModalDocumentosAberto(true);
                }}
                style={{ color: '#999', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem', cursor: 'pointer' }}
              >
                Documentação
              </a>
              <a
                href="https://wa.me/5511918454543"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#999', textDecoration: 'none', fontSize: isMobile ? '0.75rem' : '0.85rem' }}
              >
                Contato
              </a>
            </div>
            <div
              style={{
                height: '1px',
                backgroundColor: '#444',
                maxWidth: '300px',
                margin: '0 auto 20px',
              }}
            />
            <p style={{ fontSize: isMobile ? '0.7rem' : '0.8rem', margin: '5px 0' }}>
              © {new Date().getFullYear()} Marques Alta Terra - Joanópolis/SP
            </p>
            <p style={{ fontSize: isMobile ? '0.65rem' : '0.7rem', color: '#666' }}>
              📞 WhatsApp: (11) 91845-4543
            </p>
          </div>
        </footer>

{/* ====== MODAL FOTOS - COM BOTÕES EMBAIXO ====== */}
{modalFotosAberto && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.92)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '10px' : '20px',
    }}
    onClick={() => setModalFotosAberto(false)}
  >
    <div
      style={{
        position: 'relative',
        maxWidth: '90vw',
        maxHeight: '90vh',
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* FECHAR */}
      <button
        onClick={() => setModalFotosAberto(false)}
        style={{
          position: 'absolute',
          top: '-50px',
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

      {/* IMAGEM */}
      <img
        src={fotos[fotoAtual]}
        alt={`Vista aérea do terreno em Joanópolis SP - Marques Alta Terra ${fotoAtual + 1}`}
        style={{
          maxWidth: '100%',
          maxHeight: '70vh',
          borderRadius: '8px',
          objectFit: 'contain',
        }}
      />

      {/* BOTÕES DE NAVEGAÇÃO EMBAIXO DA IMAGEM */}
      {fotos.length > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '20px',
            padding: '10px 0',
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              fotoAnterior();
            }}
            style={{
              color: '#fff',
              fontSize: '1.5rem',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              width: isMobile ? '55px' : '60px',
              height: isMobile ? '55px' : '60px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              touchAction: 'manipulation',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ❮
          </button>
          
          <span
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: isMobile ? '0.8rem' : '1rem',
              textAlign: 'center',
              minWidth: '80px',
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
              fontSize: '1.5rem',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              width: isMobile ? '55px' : '60px',
              height: isMobile ? '55px' : '60px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              touchAction: 'manipulation',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ❯
          </button>
        </div>
      )}
    </div>
  </div>
)}

{/* ====== MODAL VÍDEO - COM BOTÕES EMBAIXO ====== */}
{modalVideoAberto && (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.92)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '10px' : '20px',
    }}
    onClick={() => setModalVideoAberto(false)}
  >
    <div
      style={{
        position: 'relative',
        maxWidth: '800px',
        width: '100%',
        backgroundColor: 'transparent',
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* BOTÃO FECHAR */}
      <button
        onClick={() => setModalVideoAberto(false)}
        style={{
          position: 'absolute',
          top: '-50px',
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
      
      {/* VÍDEO */}
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={videos[videoAtual].url}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            border: 'none',
          }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={videos[videoAtual].titulo}
        />
      </div>
      
      {/* BOTÕES DE NAVEGAÇÃO EMBAIXO DO VÍDEO */}
      {videos.length > 1 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '20px',
            marginTop: '20px',
            padding: '10px 0',
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setVideoAtual((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
            }}
            style={{
              color: '#fff',
              fontSize: '1.5rem',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              width: isMobile ? '55px' : '60px',
              height: isMobile ? '55px' : '60px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              touchAction: 'manipulation',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ❮
          </button>
          
          <span
            style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: isMobile ? '0.8rem' : '1rem',
              textAlign: 'center',
              minWidth: '120px',
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
              fontSize: '1.5rem',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.3)',
              borderRadius: '50%',
              width: isMobile ? '55px' : '60px',
              height: isMobile ? '55px' : '60px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.3s ease',
              touchAction: 'manipulation',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.3)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.15)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ❯
          </button>
        </div>
      )}
      
      {/* TÍTULO DO VÍDEO EMBAIXO */}
      {videos.length > 1 && (
        <div
          style={{
            textAlign: 'center',
            color: 'rgba(255,255,255,0.5)',
            fontSize: isMobile ? '0.7rem' : '0.85rem',
            marginTop: '5px',
            padding: '0 10px',
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
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '15px' : '20px',
            }}
            onClick={() => setModalDocumentosAberto(false)}
          >
            <div
              style={{
                backgroundColor: '#fff',
                maxWidth: '600px',
                width: '100%',
                padding: isMobile ? '25px 20px' : '40px',
                borderRadius: '16px',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalDocumentosAberto(false)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  fontSize: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#999',
                }}
              >
                ✕
              </button>
              <h2 style={{ color: '#2C2C2C', marginBottom: '20px', fontSize: isMobile ? '1.3rem' : '1.8rem' }}>
                📄 Documentação
              </h2>
              <p style={{ color: '#4A4A4A', lineHeight: '1.8', marginBottom: '15px', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                O terreno é negociado por <strong>Contrato Particular de Compra e Venda</strong>, 
                modalidade bastante utilizada na região de Joanópolis para negociações imobiliárias.
              </p>
              <p style={{ color: '#4A4A4A', lineHeight: '1.8', marginBottom: '20px', fontSize: isMobile ? '0.9rem' : '1rem' }}>
                O comprador receberá toda a documentação disponível, incluindo o 
                <strong> histórico completo da cadeia de contratos</strong> (cadeia possessória), 
                proporcionando total transparência na negociação.
              </p>
              <div
                style={{
                  backgroundColor: '#F5F0EB',
                  padding: '15px',
                  borderRadius: '8px',
                  borderLeft: '4px solid #5E6C5B',
                }}
              >
                <p style={{ margin: 0, color: '#2C2C2C', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
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
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.6)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: isMobile ? '15px' : '20px',
            }}
            onClick={() => setModalLocalizacaoAberto(false)}
          >
            <div
              style={{
                backgroundColor: '#fff',
                maxWidth: '700px',
                width: '100%',
                padding: isMobile ? '20px 15px' : '30px',
                borderRadius: '16px',
                position: 'relative',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setModalLocalizacaoAberto(false)}
                style={{
                  position: 'absolute',
                  top: '15px',
                  right: '20px',
                  fontSize: '1.5rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#999',
                }}
              >
                ✕
              </button>
              <h2 style={{ color: '#2C2C2C', marginBottom: '15px', fontSize: isMobile ? '1.3rem' : '1.8rem' }}>
                📍 Localização
              </h2>
              <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '15px' }}>
                <iframe
                  src="https://www.google.com/maps?q=22%C2%B058%2720.4%22S+46%C2%B014%2731.2%22W&hl=pt-BR&z=15&output=embed"
                  width="100%"
                  height={isMobile ? '300px' : '400px'}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do terreno Marques Alta Terra em Joanópolis SP"
                />
              </div>
              <p style={{ color: '#666', fontSize: isMobile ? '0.8rem' : '0.9rem' }}>
                <strong>Coordenadas:</strong> 22°58'20.4"S 46°14'31.2"W
              </p>
              <a
                href="https://www.google.com/maps?q=22%C2%B058%2720.4%22S+46%C2%B014%2731.2%22W"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: isMobile ? '10px 20px' : '10px 25px',
                  backgroundColor: '#5E6C5B',
                  color: '#fff',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  marginTop: '10px',
                  fontWeight: '600',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center',
                }}
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Animação do scroll bounce */}
      <style jsx global>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
