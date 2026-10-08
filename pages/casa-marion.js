// pages/casa-marion.js
// Casa Marion — Imóvel de Alto Padrão no Golf Riviera de São Lourenço
// Página premium com foco em SEO e conversão de cliente AAA

import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';

// Hook para animação de fade-in ao rolar
function useFadeIn() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useFadeIn();
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ========== DADOS DO IMÓVEL ========== //
const IMOVEL = {
  nome: 'Casa Marion',
  construtora: 'MV Obras',
  arquiteta: 'Leila Lemos',
  endereco: 'Rua Aprovada, 377 — Riviera de São Lourenço',
  cidade: 'Bertioga',
  estado: 'SP',
  cep: '11261-639',
  condominio: 'Golf Riviera de São Lourenço',
  areaTerreno: 600,
  areaConstruida: 559,
  quartos: 6,
  suites: 6,
  garagem: 5,
  vagasCobertas: 3,
  preco: 16500000,
  precoFormatado: 'R$ 16.500.000,00',
  iptu: 'R$ 1.195,00/mês',
  condominioMensal: 'R$ 1.147,00/mês',
  whatsapp: '5511940311644',
  mensagemWhatsApp:
    'Olá, Anderson! Vi a Casa Marion no site da Marques Alta Terra e gostaria de mais informações sobre esse imóvel no Golf Riviera de São Lourenço.',
};

// ========== CARACTERÍSTICAS PRINCIPAIS ========== //
const CARACTERISTICAS = [
  {
    icone: '🏛️',
    titulo: 'Projeto de Leila Lemos',
    texto:
      'Projeto contemporâneo assinado pela arquiteta Leila Lemos e executado pela MV Obras, unindo sofisticação, funcionalidade e tecnologia.',
  },
  {
    icone: '🛏️',
    titulo: '6 Suítes Premium',
    texto:
      'Suíte master com closet, iluminação Tensoflex e banheira de imersão. Todas as suítes com acabamento de alto padrão.',
  },
  {
    icone: '📐',
    titulo: 'Pé-direito Duplo',
    texto:
      'Living com pé-direito duplo para 2 ambientes, integrado com sala de estar e jantar. Mobiliário Breton de assinatura.',
  },
  {
    icone: '🏊',
    titulo: 'Lazer Completo',
    texto:
      'Piscina com prainha e SPA, sauna, fireplace, pergolado com TV, espaço gourmet com churrasqueira Alluma a gás e carvão.',
  },
];

// ========== DIFERENCIAIS DE TECNOLOGIA ========== //
const TECNOLOGIA = [
  { icone: '🤖', titulo: 'Casa Inteligente Alexa', texto: 'Automação residencial completa' },
  { icone: '☀️', titulo: 'Energia Fotovoltaica', texto: 'Sustentabilidade e economia' },
  { icone: '🔥', titulo: 'Aquecimento a Gás', texto: 'Sistema Hinai/Rinnai' },
  { icone: '❄️', titulo: 'Climatização Completa', texto: 'Todas as áreas climatizadas' },
  { icone: '🚗', titulo: 'Carregador Komeco', texto: 'Para veículo elétrico' },
  { icone: '💡', titulo: 'Iluminação Tensoflex', texto: 'Na suíte master' },
];

// ========== FORNECEDORES PREMIUM ========== //
const FORNECEDORES = [
  { categoria: 'Construtora', marca: 'MV Obras' },
  { categoria: 'Arquitetura', marca: 'Leila Lemos' },
  { categoria: 'Móveis', marca: 'Breton' },
  { categoria: 'Pisos e Revestimentos', marca: 'Portobello' },
  { categoria: 'Louças', marca: 'Deca' },
  { categoria: 'Metais', marca: 'Jiwi' },
  { categoria: 'Marcenaria', marca: 'Diart' },
  { categoria: 'Esquadrias', marca: 'Bras Esquadrias' },
  { categoria: 'Granito', marca: 'São Gabriel Escovado' },
  { categoria: 'Pedras', marca: 'Moledo · Hijau · Bali Black' },
];

export default function CasaMarion() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  // Fecha o menu ao clicar fora
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  const LINK_WHATSAPP = `https://wa.me/${IMOVEL.whatsapp}?text=${encodeURIComponent(
    IMOVEL.mensagemWhatsApp
  )}`;

  const sectionPadding = isMobile ? '60px 16px' : '110px 20px';
  const sectionPaddingLarge = isMobile ? '80px 16px' : '140px 20px';
  const COR_DESTAQUE = '#D4AF7A'; // champagne/platina

  return (
    <>
      <Head>
        {/* ====== SEO PREMIUM ====== */}
        <title>
          Casa Marion — Casa de Luxo no Golf Riviera de São Lourenço | 6 Suítes, 559m² | Marques Alta Terra
        </title>

        <meta
          name="description"
          content="Casa Marion: imóvel de alto padrão no Golf Riviera de São Lourenço, assinado pela arquiteta Leila Lemos e executado pela MV Obras. 6 suítes, 559m², piscina com prainha, SPA, sauna, casa inteligente com Alexa, energia fotovoltaica. R$ 16.500.000,00. Atendimento direto com Anderson Vezzani."
        />

        <meta
          name="keywords"
          content="casa de luxo Golf Riviera, imóvel alto padrão Riviera de São Lourenço, Casa Marion, Golf Riviera Bertioga, casa 6 suítes Riviera, imóvel de luxo litoral paulista, casa Leila Lemos, casa MV Obras, casa piscina prainha Riviera, imóvel R$ 16 milhões Riviera, casa de praia de luxo Bertioga, casa inteligente Alexa Riviera"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Marques Alta Terra" />
        <link rel="canonical" href="https://www.marquesaltaterra.shop/casa-marion" />

        {/* ====== OPEN GRAPH ====== */}
        <meta
          property="og:title"
          content="Casa Marion — Imóvel de Alto Padrão no Golf Riviera de São Lourenço"
        />
        <meta
          property="og:description"
          content="Assinada pela arquiteta Leila Lemos. 6 suítes, 559m², piscina com prainha, SPA, sauna, casa inteligente com Alexa. O refúgio de luxo no Golf Riviera de São Lourenço. R$ 16.500.000,00."
        />
        <meta property="og:image" content="https://www.marquesaltaterra.shop/images/logo.png" />
        <meta property="og:image:secure_url" content="https://www.marquesaltaterra.shop/images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Casa Marion — Casa de Luxo no Golf Riviera de São Lourenço" />
        <meta property="og:url" content="https://www.marquesaltaterra.shop/casa-marion" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Marques Alta Terra" />
        <meta property="og:locale" content="pt_BR" />

        {/* ====== TWITTER CARD ====== */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Casa Marion — Casa de Luxo no Golf Riviera de São Lourenço"
        />
        <meta
          name="twitter:description"
          content="Imóvel de alto padrão com 6 suítes, 559m², piscina com prainha, SPA e sauna no Golf Riviera de São Lourenço."
        />
        <meta name="twitter:image" content="https://www.marquesaltaterra.shop/images/logo.png" />

        {/* ====== SCHEMA.ORG — RESIDENCE ====== */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Residence',
            name: 'Casa Marion',
            description:
              'Imóvel de alto padrão no Golf Riviera de São Lourenço, assinado pela arquiteta Leila Lemos e executado pela MV Obras. 6 suítes, 559m², piscina com prainha, SPA, sauna, casa inteligente com Alexa.',
            image: 'https://www.marquesaltaterra.shop/images/logo.png',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Rua Aprovada, 377',
              addressLocality: 'Bertioga',
              addressRegion: 'SP',
              postalCode: '11261-639',
              addressCountry: 'BR',
            },
            numberOfRooms: 6,
            numberOfBedrooms: 6,
            numberOfBathroomsTotal: 6,
            floorSize: {
              '@type': 'QuantitativeValue',
              value: 559,
              unitCode: 'MTK',
            },
            offers: {
              '@type': 'Offer',
              price: 16500000,
              priceCurrency: 'BRL',
              availability: 'https://schema.org/InStock',
            },
          })}
        </script>

        {/* ====== SCHEMA.ORG — REALESTATELISTING ====== */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateListing',
            name: 'Casa Marion',
            url: 'https://www.marquesaltaterra.shop/casa-marion',
            image: 'https://www.marquesaltaterra.shop/images/logo.png',
            datePosted: '2026-10-05',
            description:
              'Casa de luxo no Golf Riviera de São Lourenço. 6 suítes, 559m², piscina com prainha, SPA, sauna, casa inteligente com Alexa, energia fotovoltaica.',
            offers: {
              '@type': 'Offer',
              price: 16500000,
              priceCurrency: 'BRL',
            },
          })}
        </script>

        {/* ====== SCHEMA.ORG — REALESTATEAGENT ====== */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Marques Alta Terra',
            alternateName: 'MARZON SOLUÇÕES COMERCIAIS LTDA',
            url: 'https://www.marquesaltaterra.shop',
            logo: 'https://www.marquesaltaterra.shop/images/logo.png',
            telephone: '+5511913572902',
            taxID: '39.868.744/0001-68',
            areaServed: ['Riviera de São Lourenço', 'Bertioga', 'Litoral Paulista'],
            priceRange: '$$$$',
          })}
        </script>

        {/* ====== SCHEMA.ORG — ORGANIZATION ====== */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MARZON SOLUÇÕES COMERCIAIS LTDA',
            alternateName: 'Marques Alta Terra',
            url: 'https://www.marquesaltaterra.shop',
            logo: 'https://www.marquesaltaterra.shop/images/logo.png',
            description:
              'Curadoria e venda de terrenos e imóveis de alto padrão no interior de São Paulo e Minas Gerais, e no litoral paulista.',
            taxID: '39.868.744/0001-68',
          })}
        </script>

        {/* ====== SCHEMA.ORG — BREADCRUMB ====== */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://www.marquesaltaterra.shop',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Imóveis',
                item: 'https://www.marquesaltaterra.shop',
              },
              {
                '@type': 'ListItem',
                position: 3,
                name: 'Casa Marion',
                item: 'https://www.marquesaltaterra.shop/casa-marion',
              },
            ],
          })}
        </script>

        {/* ====== FONTES PREMIUM ====== */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/images/logo.png" />
      </Head>

      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-89LSRYEHF1"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-89LSRYEHF1', {
              page_title: 'Casa Marion - Golf Riviera de São Lourenço',
              page_location: window.location.href
            });
          `,
        }}
      />

      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: '#0A0A0A',
          fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
          color: '#fff',
          overflowX: 'hidden',
        }}
      >
        {/* ============================================================ */}
        {/* ====== HEADER FIXO PREMIUM ====== */}
        {/* ============================================================ */}
        <header
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 100,
            padding: isMobile ? '12px 20px' : '15px 40px',
            backgroundColor: 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(15px)',
            borderBottom: '1px solid rgba(212,175,122,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="/"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <img
              src="/images/logo.png"
              alt="Marques Alta Terra"
              style={{
                height: isMobile ? '50px' : '75px',
                width: 'auto',
              }}
            />
          </a>

          {!isMobile && (
            <a
              href={LINK_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                backgroundColor: '#25D366',
                color: '#fff',
                padding: '12px 26px',
                borderRadius: '4px',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 8px 25px rgba(37, 211, 102, 0.35)',
                transition: 'all 0.3s ease',
              }}
            >
              📲 Falar com Anderson
            </a>
          )}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: `1px solid ${COR_DESTAQUE}80`,
                color: COR_DESTAQUE,
                padding: '8px 14px',
                borderRadius: '4px',
                fontSize: '0.75rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                cursor: 'pointer',
                textTransform: 'uppercase',
              }}
            >
              {menuOpen ? '✕' : '☰ Menu'}
            </button>
          )}
        </header>

        {/* Menu mobile expandido */}
        {menuOpen && isMobile && (
          <div
            style={{
              position: 'fixed',
              top: '74px',
              left: 0,
              right: 0,
              zIndex: 99,
              backgroundColor: 'rgba(10,10,10,0.98)',
              backdropFilter: 'blur(20px)',
              padding: '30px 20px',
              borderBottom: `1px solid ${COR_DESTAQUE}30`,
            }}
          >
            <nav
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                textAlign: 'center',
              }}
            >
              {[
                { label: 'Home', href: '/' },
                { label: 'Terrenos', href: '/#terrenos' },
                { label: 'Imóveis de Alto Padrão', href: '/#imoveis' },
                { label: 'Blog', href: '/blog' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  style={{
                    color: COR_DESTAQUE,
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontWeight: '600',
                  }}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#fff',
                  padding: '14px 26px',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  marginTop: '10px',
                }}
              >
                📲 Falar com Anderson
              </a>
            </nav>
          </div>
        )}

        {/* ============================================================ */}
        {/* ====== HERO CINEMATOGRÁFICO (SEM FOTO) ====== */}
        {/* ============================================================ */}
        <section
          style={{
            position: 'relative',
            minHeight: '100vh',
            height: '100vh',
            background:
              'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '80px 20px 60px' : '0 40px',
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at center, rgba(212,175,122,0.08) 0%, transparent 70%)',
            }}
          />

          <div
            style={{
              position: 'relative',
              zIndex: 5,
              maxWidth: '1100px',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: isMobile ? '10px' : '16px',
                marginBottom: isMobile ? '20px' : '30px',
              }}
            >
              <span
                style={{
                  width: isMobile ? '30px' : '60px',
                  height: '1px',
                  backgroundColor: COR_DESTAQUE,
                }}
              />
              <span
                style={{
                  color: COR_DESTAQUE,
                  fontSize: isMobile ? '0.65rem' : '0.85rem',
                  fontWeight: '500',
                  letterSpacing: isMobile ? '3px' : '6px',
                  textTransform: 'uppercase',
                }}
              >
                Golf Riviera de São Lourenço
              </span>
              <span
                style={{
                  width: isMobile ? '30px' : '60px',
                  height: '1px',
                  backgroundColor: COR_DESTAQUE,
                }}
              />
            </div>

            <h1
              style={{
                color: '#fff',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '3.5rem' : 'clamp(5rem, 11vw, 9rem)',
                fontWeight: '500',
                fontStyle: 'italic',
                margin: '0 0 20px 0',
                lineHeight: '0.95',
                textShadow: '0 4px 40px rgba(0,0,0,0.7)',
                letterSpacing: '-2px',
              }}
            >
              Casa Marion
            </h1>

            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: isMobile ? '0.95rem' : 'clamp(1.05rem, 1.5vw, 1.3rem)',
                marginBottom: isMobile ? '28px' : '40px',
                lineHeight: '1.7',
                maxWidth: '720px',
                margin: '0 auto 40px',
                fontWeight: '300',
                letterSpacing: '0.5px',
              }}
            >
              Assinada pela arquiteta Leila Lemos. Uma obra contemporânea no Módulo do Golf,
              onde a sofisticação encontra o mar.
            </p>

            <div
              style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '12px' : '16px',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: isMobile ? '340px' : 'none',
                margin: '0 auto',
              }}
            >
              <a
                href="#sobre"
                style={{
                  padding: isMobile ? '16px 32px' : '18px 44px',
                  backgroundColor: COR_DESTAQUE,
                  color: '#0A0A0A',
                  border: 'none',
                  fontSize: isMobile ? '0.78rem' : '0.85rem',
                  fontWeight: '700',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                Conhecer o Imóvel
              </a>
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: isMobile ? '16px 32px' : '18px 44px',
                  backgroundColor: 'transparent',
                  color: '#fff',
                  border: `1px solid ${COR_DESTAQUE}CC`,
                  fontSize: isMobile ? '0.78rem' : '0.85rem',
                  fontWeight: '600',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                Falar com Anderson
              </a>
            </div>
          </div>

          {!isMobile && (
            <div
              style={{
                position: 'absolute',
                bottom: '15px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <span
                style={{
                  color: `${COR_DESTAQUE}B3`,
                  fontSize: '0.6rem',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                }}
              >
                Explore
              </span>
              <div
                style={{
                  width: '1px',
                  height: '35px',
                  background: `linear-gradient(180deg, ${COR_DESTAQUE}CC 0%, ${COR_DESTAQUE}00 100%)`,
                }}
              />
            </div>
          )}
        </section>

        {/* ============================================================ */}
        {/* ====== BARRA DE DESTAQUES ====== */}
        {/* ============================================================ */}
        <section
          style={{
            backgroundColor: '#0A0A0A',
            padding: isMobile ? '40px 20px' : '60px 40px',
            borderBottom: `1px solid ${COR_DESTAQUE}26`,
          }}
        >
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '30px 20px' : '0',
              textAlign: 'center',
            }}
          >
            {[
              { numero: `${IMOVEL.suites}`, label: 'Suítes' },
              { numero: `${IMOVEL.areaConstruida}m²`, label: 'Área Construída' },
              { numero: `${IMOVEL.garagem}`, label: 'Vagas' },
              { numero: 'Golf', label: 'Riviera' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft: !isMobile && i > 0 ? `1px solid ${COR_DESTAQUE}33` : 'none',
                  padding: isMobile ? '0' : '0 20px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '2rem' : '2.6rem',
                    fontWeight: '500',
                    color: COR_DESTAQUE,
                    marginBottom: '8px',
                    lineHeight: 1,
                  }}
                >
                  {item.numero}
                </div>
                <div
                  style={{
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: isMobile ? '0.65rem' : '0.75rem',
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* ====== SOBRE O PROJETO ====== */}
        {/* ============================================================ */}
        <section
          id="sobre"
          style={{
            padding: sectionPadding,
            backgroundColor: '#0A0A0A',
            position: 'relative',
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <FadeIn>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '28px',
                }}
              >
                <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                <span
                  style={{
                    color: COR_DESTAQUE,
                    fontSize: isMobile ? '0.65rem' : '0.8rem',
                    fontWeight: '500',
                    letterSpacing: isMobile ? '3px' : '5px',
                    textTransform: 'uppercase',
                  }}
                >
                  Sobre o Projeto
                </span>
                <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
              </div>

              <h2
                style={{
                  color: '#fff',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 4.5vw, 3.5rem)',
                  fontWeight: '500',
                  marginBottom: '32px',
                  lineHeight: '1.2',
                }}
              >
                Assinada por{' '}
                <span style={{ fontStyle: 'italic', color: COR_DESTAQUE }}>Leila Lemos</span>
                <br />
                <span style={{ fontSize: '0.65em', color: 'rgba(255,255,255,0.6)', fontWeight: '400' }}>
                  executada pela MV Obras
                </span>
              </h2>

              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  fontSize: isMobile ? '1rem' : '1.15rem',
                  lineHeight: '1.9',
                  marginBottom: '24px',
                  fontWeight: '300',
                }}
              >
                A <strong style={{ color: COR_DESTAQUE, fontWeight: '500' }}>Casa Marion</strong>{' '}
                é uma residência contemporânea de{' '}
                <strong style={{ color: '#fff', fontWeight: '500' }}>600 m² de terreno</strong> e{' '}
                <strong style={{ color: '#fff', fontWeight: '500' }}>559 m² de área útil</strong>,
                projetada para unir sofisticação arquitetônica, funcionalidade e tecnologia.
              </p>

              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: isMobile ? '0.95rem' : '1.05rem',
                  lineHeight: '1.9',
                  marginBottom: '30px',
                  fontWeight: '300',
                }}
              >
                Localizada em <strong style={{ color: '#fff', fontWeight: '500' }}>rua larga no Módulo do Golf</strong>,
                a casa tem fachada exclusiva com revestimento em{' '}
                <strong style={{ color: COR_DESTAQUE, fontWeight: '500' }}>Pedra Moledo</strong> e{' '}
                <strong style={{ color: COR_DESTAQUE, fontWeight: '500' }}>ripado em alumínio</strong>{' '}
                com pintura eletrostática imitando madeira. Totalmente climatizada, mobiliada e decorada.
              </p>

              <div
                style={{
                  width: '80px',
                  height: '1px',
                  backgroundColor: COR_DESTAQUE,
                  margin: '0 auto',
                  opacity: 0.5,
                }}
              />
            </FadeIn>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ====== CTA INTERMEDIÁRIO (no lugar das fotos) ====== */}
        {/* ============================================================ */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#0F0F0F',
            borderTop: `1px solid ${COR_DESTAQUE}1A`,
            borderBottom: `1px solid ${COR_DESTAQUE}1A`,
          }}
        >
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            <FadeIn>
              <div
                style={{
                  backgroundColor: `${COR_DESTAQUE}0D`,
                  border: `1px solid ${COR_DESTAQUE}4D`,
                  padding: isMobile ? '40px 24px' : '60px 50px',
                  borderRadius: '2px',
                }}
              >
                <div
                  style={{
                    fontSize: isMobile ? '2.5rem' : '3.5rem',
                    marginBottom: '20px',
                  }}
                >
                  🔒
                </div>
                <h3
                  style={{
                    color: '#fff',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.4rem' : 'clamp(1.8rem, 3vw, 2.3rem)',
                    fontWeight: '500',
                    fontStyle: 'italic',
                    marginBottom: '20px',
                    lineHeight: '1.3',
                  }}
                >
                  Galeria exclusiva sob consulta
                </h3>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: isMobile ? '0.92rem' : '1.05rem',
                    lineHeight: '1.8',
                    fontWeight: '300',
                    marginBottom: '35px',
                    maxWidth: '600px',
                    margin: '0 auto 35px',
                  }}
                >
                  Por questões de privacidade dos proprietários, as fotografias completas
                  da Casa Marion são disponibilizadas apenas para interessados sérios, durante
                  o atendimento personalizado com o corretor responsável.
                </p>
                <a
                  href={LINK_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    padding: isMobile ? '16px 32px' : '18px 44px',
                    backgroundColor: '#25D366',
                    color: '#fff',
                    fontSize: isMobile ? '0.78rem' : '0.85rem',
                    fontWeight: '700',
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    boxShadow: '0 15px 50px rgba(37, 211, 102, 0.35)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  📲 Solicitar Galeria Completa
                </a>
                <p
                  style={{
                    color: 'rgba(255,255,255,0.4)',
                    marginTop: '22px',
                    fontSize: isMobile ? '0.7rem' : '0.78rem',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    fontWeight: '400',
                  }}
                >
                  Atendimento direto · Sem intermediários · Estuda permuta
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ====== CARACTERÍSTICAS PRINCIPAIS ====== */}
        {/* ============================================================ */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#0A0A0A',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <FadeIn>
              <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '70px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '24px',
                  }}
                >
                  <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                  <span
                    style={{
                      color: COR_DESTAQUE,
                      fontSize: isMobile ? '0.65rem' : '0.8rem',
                      fontWeight: '500',
                      letterSpacing: isMobile ? '3px' : '5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Diferenciais
                  </span>
                  <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                </div>
                <h2
                  style={{
                    color: '#fff',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 4.5vw, 3.5rem)',
                    fontWeight: '500',
                    lineHeight: '1.2',
                  }}
                >
                  Excelência em cada detalhe
                </h2>
              </div>
            </FadeIn>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: isMobile ? '20px' : '30px',
              }}
            >
              {CARACTERISTICAS.map((c, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div
                    style={{
                      backgroundColor: `${COR_DESTAQUE}0D`,
                      border: `1px solid ${COR_DESTAQUE}33`,
                      padding: isMobile ? '28px 24px' : '40px 36px',
                      height: '100%',
                      transition: 'all 0.4s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = `${COR_DESTAQUE}1A`;
                      e.currentTarget.style.borderColor = `${COR_DESTAQUE}80`;
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = `${COR_DESTAQUE}0D`;
                      e.currentTarget.style.borderColor = `${COR_DESTAQUE}33`;
                    }}
                  >
                    <div
                      style={{
                        fontSize: isMobile ? '2rem' : '2.5rem',
                        marginBottom: '18px',
                      }}
                    >
                      {c.icone}
                    </div>
                    <h3
                      style={{
                        color: COR_DESTAQUE,
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: isMobile ? '1.25rem' : '1.5rem',
                        fontWeight: '500',
                        marginBottom: '12px',
                      }}
                    >
                      {c.titulo}
                    </h3>
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.7)',
                        fontSize: isMobile ? '0.9rem' : '0.98rem',
                        lineHeight: '1.75',
                        margin: 0,
                        fontWeight: '300',
                      }}
                    >
                      {c.texto}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ====== TECNOLOGIA E DIFERENCIAIS ====== */}
        {/* ============================================================ */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#0F0F0F',
            borderTop: `1px solid ${COR_DESTAQUE}1A`,
            borderBottom: `1px solid ${COR_DESTAQUE}1A`,
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <FadeIn>
              <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '70px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '24px',
                  }}
                >
                  <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                  <span
                    style={{
                      color: COR_DESTAQUE,
                      fontSize: isMobile ? '0.65rem' : '0.8rem',
                      fontWeight: '500',
                      letterSpacing: isMobile ? '3px' : '5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Tecnologia
                  </span>
                  <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                </div>
                <h2
                  style={{
                    color: '#fff',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 4.5vw, 3.5rem)',
                    fontWeight: '500',
                    lineHeight: '1.2',
                  }}
                >
                  Casa inteligente e sustentável
                </h2>
              </div>
            </FadeIn>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                gap: isMobile ? '16px' : '24px',
              }}
            >
              {TECNOLOGIA.map((t, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${COR_DESTAQUE}26`,
                      padding: isMobile ? '22px 18px' : '30px 24px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.borderColor = `${COR_DESTAQUE}66`;
                      e.currentTarget.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.borderColor = `${COR_DESTAQUE}26`;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      style={{
                        fontSize: isMobile ? '1.8rem' : '2.2rem',
                        marginBottom: '12px',
                      }}
                    >
                      {t.icone}
                    </div>
                    <h4
                      style={{
                        color: '#fff',
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: isMobile ? '0.95rem' : '1.1rem',
                        fontWeight: '500',
                        marginBottom: '6px',
                      }}
                    >
                      {t.titulo}
                    </h4>
                    <p
                      style={{
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: isMobile ? '0.75rem' : '0.85rem',
                        margin: 0,
                        lineHeight: '1.5',
                        fontWeight: '300',
                      }}
                    >
                      {t.texto}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ====== FORNECEDORES PREMIUM ====== */}
        {/* ============================================================ */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#0A0A0A',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <FadeIn>
              <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '70px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '24px',
                  }}
                >
                  <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                  <span
                    style={{
                      color: COR_DESTAQUE,
                      fontSize: isMobile ? '0.65rem' : '0.8rem',
                      fontWeight: '500',
                      letterSpacing: isMobile ? '3px' : '5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Fornecedores
                  </span>
                  <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                </div>
                <h2
                  style={{
                    color: '#fff',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 4.5vw, 3.5rem)',
                    fontWeight: '500',
                    lineHeight: '1.2',
                  }}
                >
                  Marcas de excelência
                </h2>
              </div>
            </FadeIn>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(5, 1fr)',
                gap: isMobile ? '12px' : '16px',
              }}
            >
              {FORNECEDORES.map((f, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div
                    style={{
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${COR_DESTAQUE}26`,
                      padding: isMobile ? '18px 12px' : '24px 16px',
                      textAlign: 'center',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        color: `${COR_DESTAQUE}99`,
                        fontSize: isMobile ? '0.6rem' : '0.68rem',
                        fontWeight: '500',
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}
                    >
                      {f.categoria}
                    </div>
                    <div
                      style={{
                        color: '#fff',
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: isMobile ? '0.95rem' : '1.1rem',
                        fontWeight: '500',
                      }}
                    >
                      {f.marca}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ====== FICHA TÉCNICA ====== */}
        {/* ============================================================ */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#0F0F0F',
            borderTop: `1px solid ${COR_DESTAQUE}1A`,
            borderBottom: `1px solid ${COR_DESTAQUE}1A`,
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <FadeIn>
              <div style={{ textAlign: 'center', marginBottom: isMobile ? '40px' : '70px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '14px',
                    marginBottom: '24px',
                  }}
                >
                  <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                  <span
                    style={{
                      color: COR_DESTAQUE,
                      fontSize: isMobile ? '0.65rem' : '0.8rem',
                      fontWeight: '500',
                      letterSpacing: isMobile ? '3px' : '5px',
                      textTransform: 'uppercase',
                    }}
                  >
                    Ficha Técnica
                  </span>
                  <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                </div>
                <h2
                  style={{
                    color: '#fff',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 4.5vw, 3.5rem)',
                    fontWeight: '500',
                    lineHeight: '1.2',
                  }}
                >
                  Números que impressionam
                </h2>
              </div>
            </FadeIn>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: isMobile ? '0' : '60px',
              }}
            >
              <FadeIn>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { label: 'Área do Terreno', valor: `${IMOVEL.areaTerreno} m²` },
                    { label: 'Área Construída', valor: `${IMOVEL.areaConstruida} m²` },
                    { label: 'Quartos', valor: `${IMOVEL.quartos}` },
                    { label: 'Suítes', valor: `${IMOVEL.suites}` },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: isMobile ? '18px 0' : '24px 0',
                        borderBottom: `1px solid ${COR_DESTAQUE}26`,
                      }}
                    >
                      <span
                        style={{
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: isMobile ? '0.85rem' : '0.95rem',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          fontWeight: '400',
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          color: COR_DESTAQUE,
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: isMobile ? '1.3rem' : '1.6rem',
                          fontWeight: '500',
                        }}
                      >
                        {item.valor}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>

              <FadeIn delay={0.15}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { label: 'Garagem', valor: `${IMOVEL.garagem} vagas` },
                    { label: 'Vagas Cobertas', valor: `${IMOVEL.vagasCobertas}` },
                    { label: 'Arquiteta', valor: IMOVEL.arquiteta },
                    { label: 'Localização', valor: 'Golf Riviera' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: isMobile ? '18px 0' : '24px 0',
                        borderBottom: `1px solid ${COR_DESTAQUE}26`,
                      }}
                    >
                      <span
                        style={{
                          color: 'rgba(255,255,255,0.6)',
                          fontSize: isMobile ? '0.85rem' : '0.95rem',
                          letterSpacing: '1px',
                          textTransform: 'uppercase',
                          fontWeight: '400',
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          color: COR_DESTAQUE,
                          fontFamily: "'Playfair Display', Georgia, serif",
                          fontSize: isMobile ? '1.3rem' : '1.6rem',
                          fontWeight: '500',
                        }}
                      >
                        {item.valor}
                      </span>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ====== LOCALIZAÇÃO ====== */}
        {/* ============================================================ */}
        <section
          style={{
            padding: sectionPadding,
            backgroundColor: '#0A0A0A',
          }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <FadeIn>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '24px',
                }}
              >
                <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                <span
                  style={{
                    color: COR_DESTAQUE,
                    fontSize: isMobile ? '0.65rem' : '0.8rem',
                    fontWeight: '500',
                    letterSpacing: isMobile ? '3px' : '5px',
                    textTransform: 'uppercase',
                  }}
                >
                  Localização
                </span>
                <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
              </div>

              <h2
                style={{
                  color: '#fff',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 4.5vw, 3.5rem)',
                  fontWeight: '500',
                  marginBottom: '24px',
                  lineHeight: '1.2',
                }}
              >
                No coração do{' '}
                <span style={{ fontStyle: 'italic', color: COR_DESTAQUE }}>Golf Riviera</span>
              </h2>

              <p
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: isMobile ? '0.95rem' : '1.05rem',
                  lineHeight: '1.9',
                  marginBottom: '20px',
                  fontWeight: '300',
                  maxWidth: '700px',
                  margin: '0 auto 20px',
                }}
              >
                O Módulo do Golf é uma das áreas mais exclusivas da Riviera de São Lourenço,
                com ruas largas, segurança 24h e infraestrutura de altíssimo padrão.
              </p>

              <p
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  lineHeight: '1.8',
                  fontWeight: '300',
                  marginBottom: '40px',
                }}
              >
                {IMOVEL.endereco}
                <br />
                {IMOVEL.cidade} — {IMOVEL.estado}, CEP {IMOVEL.cep}
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  IMOVEL.endereco + ', ' + IMOVEL.cidade + ' - ' + IMOVEL.estado
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: isMobile ? '14px 28px' : '16px 40px',
                  backgroundColor: 'transparent',
                  color: COR_DESTAQUE,
                  border: `1px solid ${COR_DESTAQUE}`,
                  fontSize: isMobile ? '0.72rem' : '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
              >
                Ver no Google Maps
              </a>
            </FadeIn>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ====== CTA FINAL ====== */}
        {/* ============================================================ */}
        <section
          style={{
            padding: sectionPaddingLarge,
            background:
              'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at center, rgba(212,175,122,0.1) 0%, transparent 70%)',
            }}
          />
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              maxWidth: '800px',
              margin: '0 auto',
              textAlign: 'center',
            }}
          >
            <FadeIn>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginBottom: '28px',
                }}
              >
                <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
                <span
                  style={{
                    color: COR_DESTAQUE,
                    fontSize: isMobile ? '0.65rem' : '0.8rem',
                    fontWeight: '500',
                    letterSpacing: isMobile ? '3px' : '5px',
                    textTransform: 'uppercase',
                  }}
                >
                  Atendimento Exclusivo
                </span>
                <span style={{ width: '50px', height: '1px', backgroundColor: COR_DESTAQUE }} />
              </div>

              <h2
                style={{
                  color: '#fff',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.9rem' : 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '500',
                  fontStyle: 'italic',
                  marginBottom: '24px',
                  lineHeight: '1.15',
                }}
              >
                Sua próxima obra-prima
                <br />
                <span style={{ color: COR_DESTAQUE }}>espera por você</span>
              </h2>

              <p
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  fontSize: isMobile ? '0.95rem' : '1.1rem',
                  marginBottom: '40px',
                  lineHeight: '1.8',
                  fontWeight: '300',
                  maxWidth: '600px',
                  margin: '0 auto 40px',
                }}
              >
                Agende uma visita exclusiva e conheça pessoalmente cada detalhe da Casa Marion.
                Atendimento direto com o corretor responsável.
              </p>

              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: isMobile ? '18px 36px' : '22px 60px',
                  backgroundColor: '#25D366',
                  color: '#fff',
                  fontSize: isMobile ? '0.85rem' : '0.95rem',
                  fontWeight: '700',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 15px 50px rgba(37, 211, 102, 0.35)',
                  transition: 'all 0.3s ease',
                }}
              >
                📲 Agendar Visita com Anderson
              </a>

              <p
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  marginTop: '28px',
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  fontWeight: '400',
                }}
              >
                Atendimento direto · Sem intermediários · Estuda permuta
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ============================================================ */}
        {/* ====== FOOTER PREMIUM ====== */}
        {/* ============================================================ */}
        <footer
          style={{
            padding: isMobile ? '35px 14px 22px' : '70px 40px 40px',
            backgroundColor: '#050505',
            color: '#999',
            borderTop: '1px solid rgba(201,169,97,0.15)',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(201,169,97,0.3) 50%, transparent 100%)',
                maxWidth: '900px',
                margin: '0 auto 30px',
              }}
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: isMobile ? '14px' : '50px',
                marginBottom: isMobile ? '25px' : '35px',
                textAlign: 'left',
                width: '100%',
              }}
            >
              <div>
                <h4
                  style={{
                    color: '#C9A961',
                    fontSize: isMobile ? '0.6rem' : '0.7rem',
                    fontWeight: '600',
                    letterSpacing: isMobile ? '1.5px' : '2.5px',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? '12px' : '16px',
                  }}
                >
                  Navegação
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'Início', href: '/' },
                    { label: 'Nossos terrenos', href: '/#terrenos' },
                    { label: 'Blog', href: '/blog' },
                    { label: 'Quem Somos', href: '/quem-somos' },
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: isMobile ? '7px' : '9px' }}>
                      <a
                        href={item.href}
                        style={{
                          color: '#999',
                          textDecoration: 'none',
                          fontSize: isMobile ? '0.7rem' : '0.88rem',
                          transition: 'color 0.3s',
                          lineHeight: 1.4,
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
                    color: '#C9A961',
                    fontSize: isMobile ? '0.6rem' : '0.7rem',
                    fontWeight: '600',
                    letterSpacing: isMobile ? '1.5px' : '2.5px',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? '12px' : '16px',
                  }}
                >
                  Regiões
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { label: 'Joanópolis - SP', href: '/joanopolis' },
                    { label: 'Bragança Paulista - SP', href: '/braganca' },
                    { label: 'Itapeva - MG', href: '/itapeva' },
                    { label: 'Casa Nero - Riviera', href: '/casa-nero' },
                    { label: 'Casa Marion - Golf', href: '/casa-marion' },
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: isMobile ? '7px' : '9px' }}>
                      <a
                        href={item.href}
                        style={{
                          color: '#999',
                          textDecoration: 'none',
                          fontSize: isMobile ? '0.7rem' : '0.88rem',
                          transition: 'color 0.3s',
                          lineHeight: 1.4,
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
                    color: '#C9A961',
                    fontSize: isMobile ? '0.6rem' : '0.7rem',
                    fontWeight: '600',
                    letterSpacing: isMobile ? '1.5px' : '2.5px',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? '12px' : '16px',
                  }}
                >
                  Contato
                </h4>
                <p
                  style={{
                    color: '#999',
                    fontSize: isMobile ? '0.7rem' : '0.88rem',
                    marginBottom: '8px',
                    lineHeight: 1.5,
                  }}
                >
                  Atendimento direto pelo WhatsApp
                </p>
                <a
                  href={LINK_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#25D366',
                    textDecoration: 'none',
                    fontSize: isMobile ? '0.72rem' : '0.95rem',
                    fontWeight: '600',
                    lineHeight: 1.4,
                    display: 'block',
                  }}
                >
                  Anderson Vezzani
                </a>
                <a
                  href={LINK_WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#25D366',
                    textDecoration: 'none',
                    fontSize: isMobile ? '0.72rem' : '0.9rem',
                    fontWeight: '600',
                    lineHeight: 1.4,
                    display: 'block',
                  }}
                >
                  (11) 94031-1644
                </a>
              </div>
            </div>

            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(201,169,97,0.2) 50%, transparent 100%)',
                maxWidth: '900px',
                margin: '0 auto 22px',
              }}
            />

            <div style={{ textAlign: 'center', width: '100%' }}>
              <p
                style={{
                  color: '#888',
                  fontSize: isMobile ? '0.68rem' : '0.82rem',
                  marginBottom: '10px',
                  lineHeight: '1.6',
                  padding: '0 8px',
                }}
              >
                <strong style={{ color: '#C9A961' }}>Marques Alta Terra</strong> — Curadoria de
                terrenos no interior de São Paulo e Minas Gerais, e imóveis de alto padrão no
                litoral paulista.
              </p>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.62rem' : '0.75rem',
                  marginBottom: '6px',
                  padding: '0 8px',
                }}
              >
                CNPJ: 39.868.744/0001-68 — MARZON SOLUÇÕES COMERCIAIS LTDA
              </p>
              <p
                style={{
                  color: '#555',
                  fontSize: isMobile ? '0.58rem' : '0.7rem',
                  margin: 0,
                  padding: '0 8px',
                }}
              >
                © {new Date().getFullYear()} Marques Alta Terra. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
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
          background-color: #0a0a0a;
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
        a {
          text-decoration: none;
        }
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #0a0a0a;
        }
        ::-webkit-scrollbar-thumb {
          background: #d4af7a;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
}
