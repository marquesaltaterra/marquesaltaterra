import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { cidades, formatarPreco } from '../data/cidades';

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
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export default function Home() {
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

  const WHATSAPP_GERAL = '5511913572902';
  const MSG_GERAL = encodeURIComponent(
    'Olá! Vi o site da Marques Alta Terra e quero saber mais sobre os terrenos disponíveis.'
  );
  const LINK_WHATSAPP = `https://wa.me/${WHATSAPP_GERAL}?text=${MSG_GERAL}`;

  const pilares = [
    {
      icone: '🔍',
      titulo: 'Curadoria de verdade',
      texto:
        'Cada terreno é visitado e analisado antes de entrar no site. Sem surpresa, sem dor de cabeça.',
    },
    {
      icone: '📜',
      titulo: 'Transparência total',
      texto:
        'Toda a documentação histórica é apresentada ao comprador. Você sabe exatamente o que está comprando.',
    },
    {
      icone: '🤝',
      titulo: 'Atendimento direto',
      texto:
        'Você fala direto com quem vende. Sem intermediário, sem enrolação, sem taxa escondida.',
    },
    {
      icone: '🌄',
      titulo: 'Refúgio no interior',
      texto:
        'Selecionamos terrenos em regiões de natureza, tranquilidade e potencial de valorização.',
    },
  ];

  // Espaçamentos responsivos
  const sectionPadding = isMobile ? '50px 16px' : '90px 20px';
  const sectionPaddingLarge = isMobile ? '60px 16px' : '110px 20px';

  return (
    <>
<Head>
  {/* ====== TÍTULO PRINCIPAL ====== */}
  <title>Terrenos à Venda no Interior de SP e MG | Marques Alta Terra</title>
  
  {/* ====== META DESCRIPTION (SEO forte) ====== */}
  <meta
    name="description"
    content="Terrenos à venda no interior de SP e MG com curadoria de verdade. Lotes em Joanópolis, Bragança Paulista e Itapeva (Quinta do Arvoredo). Atendimento direto, documentação transparente e regiões de natureza preservada. Fale com a Marques Alta Terra."
  />
  
  <meta
    name="keywords"
    content="terreno interior SP, terreno Minas Gerais, terreno à venda interior, lote Joanópolis, terreno Bragança Paulista, Quinta do Arvoredo Itapeva, comprar terreno interior, investimento imobiliário interior, terreno condomínio fechado"
  />
  
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <meta charSet="utf-8" />
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="googlebot" content="index, follow" />
  <meta name="author" content="Marques Alta Terra" />
  <link rel="canonical" href="https://www.marquesaltaterra.shop" />

  {/* ====== OPEN GRAPH (WhatsApp/Facebook) ====== */}
  <meta property="og:title" content="Terrenos à Venda no Interior de SP e MG | Marques Alta Terra" />
  <meta
    property="og:description"
    content="Terrenos selecionados com curadoria no interior de SP e MG. Lotes em Joanópolis, Bragança Paulista e Quinta do Arvoredo (Itapeva). Atendimento direto e documentação transparente."
  />
  <meta property="og:image" content="https://www.marquesaltaterra.shop/images/logo.png" />
  <meta property="og:image:secure_url" content="https://www.marquesaltaterra.shop/images/logo.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Marques Alta Terra - Terrenos no interior de SP e MG" />
  <meta property="og:url" content="https://www.marquesaltaterra.shop" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Marques Alta Terra" />
  <meta property="og:locale" content="pt_BR" />

  {/* ====== TWITTER CARD ====== */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Terrenos à Venda no Interior de SP e MG | Marques Alta Terra" />
  <meta
    name="twitter:description"
    content="Terrenos selecionados com curadoria no interior de SP e MG. Lotes em Joanópolis, Bragança Paulista e Quinta do Arvoredo."
  />
  <meta name="twitter:image" content="https://www.marquesaltaterra.shop/images/logo.png" />

  {/* ====== SCHEMA.ORG - ORGANIZATION ====== */}
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'MARZON SOLUÇÕES COMERCIAIS LTDA',
      alternateName: 'Marques Alta Terra',
      url: 'https://www.marquesaltaterra.shop',
      logo: 'https://www.marquesaltaterra.shop/images/logo.png',
      description: 'Curadoria e venda de terrenos no interior de São Paulo e Minas Gerais.',
      taxID: '39.868.744/0001-68',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Joanópolis',
        addressRegion: 'SP',
        addressCountry: 'BR',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+5511913572902',
        contactType: 'sales',
        areaServed: 'BR',
        availableLanguage: 'Portuguese',
      },
    })}
  </script>

  {/* ====== SCHEMA.ORG - ITEMLIST ====== */}
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Regiões com terrenos - Marques Alta Terra',
      itemListElement: cidades.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: `Terrenos em ${c.nome} - ${c.estado}`,
        url: `https://www.marquesaltaterra.shop/${c.slug}`,
      })),
    })}
  </script>

  {/* ====== SCHEMA.ORG - WEBSITE ====== */}
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Marques Alta Terra',
      url: 'https://www.marquesaltaterra.shop',
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://www.marquesaltaterra.shop/?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    })}
  </script>

  {/* ====== FONTES PREMIUM ====== */}
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
              page_title: 'Home - Marques Alta Terra',
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
            backgroundImage: 'url(/images/home1.png)',
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
          {/* Gradiente cinematográfico */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 100%)',
            }}
          />

          {/* Logo */}
<div
  style={{
    position: 'absolute',
    top: isMobile ? '16px' : '35px',
    left: isMobile ? '16px' : '40px',
    zIndex: 10,
  }}
>
  <img
    src="/images/logo.png"
    alt="Marques Alta Terra"
    style={{
      height: isMobile ? '70px' : '250px',   // ✅ Aumentei
      width: 'auto',
      maxWidth: isMobile ? '180px' : '360px', // ✅ Aumentei
    }}
  />
</div>

          {/* Conteúdo */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              padding: 0,
              maxWidth: '950px',
              width: '100%',
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: isMobile ? '8px' : '12px',
                marginBottom: isMobile ? '20px' : '25px',
                flexWrap: 'nowrap',
              }}
            >
              <span
                style={{
                  width: isMobile ? '20px' : '40px',
                  height: '1px',
                  backgroundColor: '#D48C5B',
                  flexShrink: 0,
                }}
              />
              <span
                style={{
                  color: '#D48C5B',
                  fontSize: isMobile ? '0.65rem' : '0.85rem',
                  fontWeight: '600',
                  letterSpacing: isMobile ? '2px' : '4px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Interior de SP e MG
              </span>
              <span
                style={{
                  width: isMobile ? '20px' : '40px',
                  height: '1px',
                  backgroundColor: '#D48C5B',
                  flexShrink: 0,
                }}
              />
            </div>

            <h1
              style={{
                color: '#fff',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.9rem' : 'clamp(3rem, 6.5vw, 5rem)',
                fontWeight: '600',
                marginBottom: isMobile ? '18px' : '25px',
                lineHeight: '1.15',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                padding: 0,
              }}
            >
              Do caos de São Paulo
              <br />
              <span style={{ fontStyle: 'italic', color: '#F0D5B8' }}>para a paz do interior</span>
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: isMobile ? '0.95rem' : 'clamp(1.05rem, 1.6vw, 1.3rem)',
                marginBottom: isMobile ? '30px' : '40px',
                lineHeight: '1.7',
                maxWidth: '640px',
                margin: isMobile ? '0 auto 30px' : '0 auto 40px',
                fontWeight: '400',
              }}
            >
              Terrenos selecionados com curadoria, transparência e atendimento direto.
              Seu refúgio a poucos minutos da capital.
            </p>

{/* Botões */}
<div
  style={{
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    gap: isMobile ? '10px' : '16px',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: isMobile ? '320px' : 'none',
    margin: '0 auto',
  }}
>
  {/* BOTÃO 1 — Ver terrenos */}
  <a
    href="#terrenos"
    style={{
      padding: isMobile ? '14px 24px' : '17px 44px',
      backgroundColor: '#D48C5B',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      fontSize: isMobile ? '0.85rem' : '0.95rem',
      fontWeight: '600',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      textDecoration: 'none',
      boxShadow: '0 8px 30px rgba(212, 140, 91, 0.5)',
      transition: 'all 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      textAlign: 'center',
      boxSizing: 'border-box',
    }}
  >
    Ver terrenos
  </a>

  {/* BOTÃO 2 — Falar agora */}
  <a
    href={LINK_WHATSAPP}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      padding: isMobile ? '14px 24px' : '17px 44px',
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
      width: isMobile ? '100%' : 'auto',
      textAlign: 'center',
      boxSizing: 'border-box',
    }}
  >
    Falar agora
  </a>

  {/* BOTÃO 3 — Blog (nome longo no PC / curto no mobile) */}
<a
  href="/blog"
  style={{
    padding: isMobile ? '14px 24px' : '17px 44px',
    backgroundColor: 'transparent',
    color: '#fff',
    border: '1px solid #D48C5B',
    borderRadius: '4px',
    fontSize: isMobile ? '0.85rem' : '0.95rem',
    fontWeight: '600',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    width: isMobile ? '100%' : 'auto',
    textAlign: 'center',
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
  }}
  onMouseOver={(e) => {
    e.currentTarget.style.backgroundColor = '#D48C5B';
    e.currentTarget.style.boxShadow = '0 8px 30px rgba(212, 140, 91, 0.5)';
  }}
  onMouseOut={(e) => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.boxShadow = 'none';
  }}
>
 🌐 Blog
</a>
</div>
          </div>

          {/* Scroll indicator - escondido no mobile */}
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
              { numero: '03', label: 'Regiões selecionadas' },
              { numero: '100%', label: 'Curadoria própria' },
              { numero: '0', label: 'Intermediários' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  borderLeft:
                    !isMobile && i > 0 ? '1px solid rgba(212,140,91,0.25)' : 'none',
                  borderTop: isMobile && i > 0 ? '1px solid rgba(212,140,91,0.15)' : 'none',
                  padding: isMobile ? '15px 0' : '0 20px',
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '2rem' : '2.6rem',
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

        {/* ====== TERRENOS DISPONÍVEIS ====== */}
        <section
          id="terrenos"
          style={{
            padding: sectionPadding,
            maxWidth: '1150px',
            margin: '0 auto',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <FadeIn>
            <div
              style={{
                textAlign: 'center',
                marginBottom: isMobile ? '35px' : '60px',
              }}
            >
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginBottom: '20px',
                }}
              >
                <span style={{ width: '28px', height: '1px', backgroundColor: '#D48C5B' }} />
                <span
                  style={{
                    color: '#D48C5B',
                    fontSize: isMobile ? '0.65rem' : '0.8rem',
                    fontWeight: '600',
                    letterSpacing: isMobile ? '2px' : '3px',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Nossas regiões
                </span>
                <span style={{ width: '28px', height: '1px', backgroundColor: '#D48C5B' }} />
              </div>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.7rem' : 'clamp(2.3rem, 4vw, 3.2rem)',
                  fontWeight: '600',
                  marginBottom: '18px',
                  lineHeight: '1.2',
                }}
              >
                Escolha o seu refúgio
              </h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1.05rem',
                  maxWidth: '620px',
                  margin: '0 auto',
                  lineHeight: '1.7',
                }}
              >
                Terrenos em regiões de natureza preservada, tranquilidade e alto potencial de valorização.
              </p>
            </div>
          </FadeIn>

          {/* Grid de cards — 1 coluna no mobile, auto-fit no desktop */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: isMobile ? '22px' : '35px',
              width: '100%',
            }}
          >
            {cidades.map((cidade, idx) => {
              const emBreve = cidade.status === 'em-breve';
              const preco = formatarPreco(cidade.precoAPartirDe);
              return (
                <FadeIn key={cidade.slug} delay={idx * 0.1}>
                  <a
                    href={`/${cidade.slug}`}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      backgroundColor: '#fff',
                      borderRadius: '4px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      position: 'relative',
                      cursor: 'pointer',
                      width: '100%',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        height: isMobile ? '220px' : '300px',
                        backgroundImage: `url(${cidade.imagem})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background: emBreve
                            ? 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.85) 100%)'
                            : 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.85) 100%)',
                        }}
                      />
                      {/* Badge */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '16px',
                          left: '16px',
                          backgroundColor: emBreve ? 'rgba(255,255,255,0.15)' : '#D48C5B',
                          backdropFilter: 'blur(10px)',
                          color: '#fff',
                          padding: '6px 14px',
                          borderRadius: '2px',
                          fontSize: '0.65rem',
                          fontWeight: '600',
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                          border: emBreve ? '1px solid rgba(255,255,255,0.4)' : 'none',
                        }}
                      >
                        {emBreve ? 'Em breve' : 'Disponível'}
                      </div>
                      {/* Nome */}
                      <div
                        style={{
                          position: 'absolute',
                          bottom: '20px',
                          left: '20px',
                          right: '20px',
                          color: '#fff',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.65rem',
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                            color: '#D48C5B',
                            marginBottom: '6px',
                            fontWeight: '600',
                          }}
                        >
                          {cidade.estado}
                        </div>
                        <h3
                          style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: isMobile ? '1.5rem' : '2rem',
                            fontWeight: '600',
                            margin: 0,
                            textShadow: '0 2px 15px rgba(0,0,0,0.6)',
                            lineHeight: 1.15,
                          }}
                        >
                          {cidade.nome}
                        </h3>
                      </div>
                    </div>

                    <div
                      style={{
                        padding: isMobile ? '20px' : '30px',
                        boxSizing: 'border-box',
                      }}
                    >
                      <p
                        style={{
                          color: '#4A4A4A',
                          fontSize: isMobile ? '0.88rem' : '0.95rem',
                          lineHeight: '1.7',
                          marginBottom: '18px',
                          minHeight: isMobile ? 'auto' : '60px',
                        }}
                      >
                        {cidade.descricaoCurta}
                      </p>

                      {preco && (
                        <div
                          style={{
                            marginBottom: '18px',
                            paddingBottom: '18px',
                            borderBottom: '1px solid #eee',
                          }}
                        >
                          <div
                            style={{
                              color: '#999',
                              fontSize: '0.65rem',
                              letterSpacing: '2px',
                              textTransform: 'uppercase',
                              marginBottom: '4px',
                            }}
                          >
                            A partir de
                          </div>
                          <div
                            style={{
                              fontFamily: "'Playfair Display', Georgia, serif",
                              color: '#2C2C2C',
                              fontSize: isMobile ? '1.4rem' : '1.7rem',
                              fontWeight: '600',
                            }}
                          >
                            {preco}
                          </div>
                        </div>
                      )}

                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          color: emBreve ? '#888' : '#D48C5B',
                          fontSize: '0.75rem',
                          fontWeight: '600',
                          letterSpacing: '1.5px',
                          textTransform: 'uppercase',
                        }}
                      >
                        {emBreve ? 'Saiba mais' : 'Explorar região'}
                        <span style={{ fontSize: '1rem' }}>→</span>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* ====== POR QUE MARQUES ALTA TERRA ====== */}
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
            <FadeIn>
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: isMobile ? '35px' : '60px',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '20px',
                  }}
                >
                  <span style={{ width: '28px', height: '1px', backgroundColor: '#D48C5B' }} />
                  <span
                    style={{
                      color: '#D48C5B',
                      fontSize: isMobile ? '0.65rem' : '0.8rem',
                      fontWeight: '600',
                      letterSpacing: isMobile ? '2px' : '3px',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Nossa promessa
                  </span>
                  <span style={{ width: '28px', height: '1px', backgroundColor: '#D48C5B' }} />
                </div>
                <h2
                  style={{
                    color: '#2C2C2C',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: isMobile ? '1.7rem' : 'clamp(2.3rem, 4vw, 3.2rem)',
                    fontWeight: '600',
                    marginBottom: '18px',
                    lineHeight: '1.2',
                  }}
                >
                  Por que Marques Alta Terra?
                </h2>
                <p
                  style={{
                    color: '#666',
                    fontSize: isMobile ? '0.9rem' : '1.05rem',
                    maxWidth: '650px',
                    margin: '0 auto',
                    lineHeight: '1.7',
                  }}
                >
                  Não somos uma imobiliária. Somos curadores de terrenos no interior —
                  e tratamos cada negociação como se fosse nossa.
                </p>
              </div>
            </FadeIn>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile
                  ? '1fr'
                  : 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: isMobile ? '18px' : '25px',
                width: '100%',
              }}
            >
              {pilares.map((p, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div
                    style={{
                      backgroundColor: '#FAF7F3',
                      padding: isMobile ? '26px 22px' : '40px 30px',
                      borderRadius: '4px',
                      height: '100%',
                      borderTop: '2px solid #D48C5B',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        fontSize: isMobile ? '1.7rem' : '2.2rem',
                        marginBottom: '16px',
                      }}
                    >
                      {p.icone}
                    </div>
                    <h3
                      style={{
                        color: '#2C2C2C',
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: isMobile ? '1.15rem' : '1.35rem',
                        fontWeight: '600',
                        marginBottom: '10px',
                      }}
                    >
                      {p.titulo}
                    </h3>
                    <p
                      style={{
                        color: '#4A4A4A',
                        fontSize: isMobile ? '0.88rem' : '0.95rem',
                        lineHeight: '1.7',
                        margin: 0,
                      }}
                    >
                      {p.texto}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ====== SEO TEXT ====== */}
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
              maxWidth: '820px',
              margin: '0 auto',
              color: '#4A4A4A',
              fontSize: isMobile ? '0.9rem' : '1.02rem',
              lineHeight: isMobile ? '1.85' : '2',
              width: '100%',
              boxSizing: 'border-box',
            }}
          >
            <h2
              style={{
                color: '#2C2C2C',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.5rem' : 'clamp(1.9rem, 3.5vw, 2.6rem)',
                fontWeight: '600',
                marginBottom: '25px',
                textAlign: 'center',
                lineHeight: '1.3',
              }}
            >
              Terrenos à venda no interior de São Paulo e Minas Gerais
            </h2>
            <p style={{ marginBottom: '18px' }}>
              A <strong>Marques Alta Terra</strong> é especializada em{' '}
              <strong>terrenos no interior</strong> de São Paulo e Minas Gerais. Selecionamos
              propriedades em regiões de natureza preservada, tranquilidade e alto potencial de
              valorização — ideais para quem busca um refúgio a poucos minutos da capital, uma casa
              de campo ou um investimento imobiliário sólido.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Trabalhamos com <strong>curadoria de verdade</strong>: cada terreno é visitado e
              analisado antes de entrar no nosso catálogo. Você não encontra aqui anúncio repetido,
              foto enganosa ou preço escondido. Nosso compromisso é com a{' '}
              <strong>transparência total</strong> — toda a documentação histórica é apresentada ao
              comprador antes da assinatura.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Atuamos em regiões cercadas por serras, cachoeiras, mirantes e belezas naturais, com
              fácil acesso pelas principais rodovias do interior. Do{' '}
              <strong>interior paulista</strong> ao <strong>sul de Minas</strong>, selecionamos
              terrenos que unem qualidade de vida, tranquilidade e potencial de crescimento.
            </p>
            <p style={{ marginBottom: '25px' }}>
              Se você procura <strong>terreno para construir</strong>,{' '}
              <strong>terreno para investir</strong> ou um <strong>lote em região rural</strong>,
              fale com a gente. Atendimento direto com o vendedor, sem intermediários, sem
              enrolação.
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
                Marques Alta Terra — Seu pedaço do céu no interior.
              </p>
            </div>
          </div>
        </section>

        {/* ====== CTA FINAL ====== */}
        <section
          style={{
            padding: sectionPaddingLarge,
            backgroundImage: 'url(/images/home1.png)',
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
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '22px',
              }}
            >
              <span style={{ width: '28px', height: '1px', backgroundColor: '#D48C5B' }} />
              <span
                style={{
                  color: '#D48C5B',
                  fontSize: isMobile ? '0.65rem' : '0.8rem',
                  fontWeight: '600',
                  letterSpacing: isMobile ? '2px' : '3px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Fale com a gente
              </span>
              <span style={{ width: '28px', height: '1px', backgroundColor: '#D48C5B' }} />
            </div>
            <h2
              style={{
                color: '#fff',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.7rem' : 'clamp(2.3rem, 4vw, 3.2rem)',
                fontWeight: '600',
                marginBottom: '18px',
                lineHeight: '1.2',
              }}
            >
              Pronto para sair do caos?
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: isMobile ? '0.95rem' : '1.1rem',
                marginBottom: '32px',
                lineHeight: '1.7',
              }}
            >
              Fale agora com a gente pelo WhatsApp e descubra o terreno ideal para você.
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
                fontSize: isMobile ? '0.85rem' : '1rem',
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
              📲 Falar com a Marques Alta Terra
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
              Atendimento direto · Sem intermediários · Documentação transparente
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
            {/* Logo centralizada */}
<div style={{ textAlign: 'center', marginBottom: '35px' }}>
  <img
    src="/images/logo.png"
    alt="Marques Alta Terra"
    style={{
      height: isMobile ? '70px' : '190px',   // ✅ Aumentei
      width: 'auto',
      maxWidth: isMobile ? '200px' : '230px', // ✅ Aumentei
    }}
  />
</div>

            {/* Linha divisória elegante abaixo da logo */}
            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, #3A3A3A 20%, #3A3A3A 80%, transparent 100%)',
                maxWidth: '900px',
                margin: '0 auto 35px',
              }}
            />

            {/* Colunas do rodapé */}
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
              {/* Coluna 1 */}
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

              {/* Coluna 2 */}
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
                  {cidades.map((c, i) => (
                    <li key={i} style={{ marginBottom: '9px' }}>
                      <a
                        href={`/${c.slug}`}
                        style={{
                          color: '#999',
                          textDecoration: 'none',
                          fontSize: '0.88rem',
                          transition: 'color 0.3s',
                        }}
                      >
                        {c.nome} - {c.estado}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Coluna 3 */}
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
                  Atendimento direto pelo WhatsApp
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
                  (11) 91357-2902
                </a>
              </div>
            </div>

            {/* Linha divisória antes do copyright */}
            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, #2C2C2C 50%, transparent 100%)',
                maxWidth: '900px',
                margin: '0 auto 25px',
              }}
            />

            {/* Copyright */}
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