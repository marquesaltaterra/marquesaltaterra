import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { cidades, imoveis, formatarPreco, formatarPrecoMilhoes } from '../data/cidades';

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
        <title>Terrenos à Venda no Interior de SP e MG | Marques Alta Terra</title>

        <meta
          name="description"
          content="Terrenos à venda no interior de SP e MG com curadoria de verdade. Lotes em Joanópolis, Bragança Paulista e Itapeva (Quinta do Arvoredo). Imóveis de alto padrão na Riviera de São Lourenço. Atendimento direto, documentação transparente."
        />

        <meta
          name="keywords"
          content="terreno interior SP, terreno Minas Gerais, terreno à venda interior, lote Joanópolis, terreno Bragança Paulista, Quinta do Arvoredo Itapeva, comprar terreno interior, investimento imobiliário interior, terreno condomínio fechado, casa de luxo Riviera de São Lourenço, imóvel alto padrão Bertioga"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="googlebot" content="index, follow" />
        <meta name="author" content="Marques Alta Terra" />
        <link rel="canonical" href="https://www.marquesaltaterra.shop" />

        <meta property="og:title" content="Terrenos à Venda no Interior de SP e MG | Marques Alta Terra" />
        <meta
          property="og:description"
          content="Terrenos selecionados com curadoria no interior de SP e MG. Imóveis de alto padrão na Riviera de São Lourenço. Atendimento direto e documentação transparente."
        />
        <meta property="og:image" content="https://www.marquesaltaterra.shop/images/logo.png" />
        <meta property="og:image:secure_url" content="https://www.marquesaltaterra.shop/images/logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Marques Alta Terra - Terrenos e Imóveis de Alto Padrão" />
        <meta property="og:url" content="https://www.marquesaltaterra.shop" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Marques Alta Terra" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terrenos à Venda no Interior de SP e MG | Marques Alta Terra" />
        <meta
          name="twitter:description"
          content="Terrenos com curadoria no interior de SP e MG + Imóveis de alto padrão na Riviera de São Lourenço."
        />
        <meta name="twitter:image" content="https://www.marquesaltaterra.shop/images/logo.png" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'MARZON SOLUÇÕES COMERCIAIS LTDA',
            alternateName: 'Marques Alta Terra',
            url: 'https://www.marquesaltaterra.shop',
            logo: 'https://www.marquesaltaterra.shop/images/logo.png',
            description:
              'Curadoria e venda de terrenos no interior de São Paulo e Minas Gerais, e imóveis de alto padrão no litoral paulista.',
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/images/logo.png" />
      </Head>

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
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 100%)',
            }}
          />

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
                height: isMobile ? '70px' : '250px',
                width: 'auto',
                maxWidth: isMobile ? '180px' : '360px',
              }}
            />
          </div>

          <div
            style={{
              position: 'relative',
              zIndex: 5,
              padding: 0,
              maxWidth: '950px',
              width: '100%',
            }}
          >
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
            padding: isMobile ? '28px 12px' : '45px 20px',
          }}
        >
          <div
            style={{
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'grid',
              // NOVO: mobile 2x2, desktop 4x1
              gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
              gap: isMobile ? '0' : '0',
              textAlign: 'center',
            }}
          >
            {[
              { numero: String(cidades.length).padStart(2, '0'), label: 'Regiões selecionadas' },
              { numero: '100%', label: 'Curadoria própria' },
              { numero: '0', label: 'Intermediários' },
              {
                numero: imoveis[0] ? formatarPrecoMilhoes(imoveis[0].preco) : '—',
                label: 'Imóveis premium',
              },
            ].map((item, i) => {
              // Lógica de bordas para grade 2x2 no mobile
              // Desktop (4x1): borda esquerda em todos menos o primeiro
              // Mobile (2x2):
              //   0 (topo-esq): sem borda
              //   1 (topo-dir): borda esquerda
              //   2 (baixo-esq): borda topo
              //   3 (baixo-dir): borda topo + borda esquerda
              let borderLeft = 'none';
              let borderTop = 'none';

              if (isMobile) {
                const isSegundaColuna = i % 2 === 1;
                const isSegundaLinha = i >= 2;
                if (isSegundaColuna) borderLeft = '1px solid rgba(212,140,91,0.25)';
                if (isSegundaLinha) borderTop = '1px solid rgba(212,140,91,0.2)';
              } else {
                if (i > 0) borderLeft = '1px solid rgba(212,140,91,0.25)';
              }

              return (
                <div
                  key={i}
                  style={{
                    borderLeft,
                    borderTop,
                    padding: isMobile ? '18px 8px' : '0 20px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      // NOVO: fonte reduzida no mobile pra caber 2 por linha
                      fontSize: isMobile ? '1.6rem' : '2.6rem',
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
                      // NOVO: fonte reduzida no mobile
                      fontSize: isMobile ? '0.6rem' : '0.8rem',
                      letterSpacing: isMobile ? '1px' : '2px',
                      textTransform: 'uppercase',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}
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

        {/* ============================================================ */}
        {/* ====== IMÓVEIS DE ALTO PADRÃO (dinâmico) ====== */}
        {/* ============================================================ */}
        {imoveis.length > 0 && (
          <section
            style={{
              backgroundColor: '#0A0A0A',
              padding: isMobile ? '70px 16px 60px' : '120px 20px 100px',
              width: '100%',
              boxSizing: 'border-box',
              position: 'relative',
            }}
          >
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                width: '100%',
              }}
            >
              <FadeIn>
                <div
                  style={{
                    textAlign: 'center',
                    marginBottom: isMobile ? '40px' : '70px',
                  }}
                >
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: isMobile ? '10px' : '14px',
                      marginBottom: '24px',
                    }}
                  >
                    <span
                      style={{
                        width: isMobile ? '25px' : '50px',
                        height: '1px',
                        backgroundColor: '#C9A961',
                      }}
                    />
                    <span
                      style={{
                        color: '#C9A961',
                        fontSize: isMobile ? '0.65rem' : '0.8rem',
                        fontWeight: '500',
                        letterSpacing: isMobile ? '3px' : '5px',
                        textTransform: 'uppercase',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Imóveis de Alto Padrão
                    </span>
                    <span
                      style={{
                        width: isMobile ? '25px' : '50px',
                        height: '1px',
                        backgroundColor: '#C9A961',
                      }}
                    />
                  </div>

                  <h2
                    style={{
                      color: '#fff',
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: isMobile ? '1.8rem' : 'clamp(2.5rem, 4.5vw, 3.5rem)',
                      fontWeight: '500',
                      marginBottom: '20px',
                      lineHeight: '1.2',
                    }}
                  >
                    Excelência para poucos
                  </h2>

                  <p
                    style={{
                      color: 'rgba(255,255,255,0.65)',
                      fontSize: isMobile ? '0.92rem' : '1.05rem',
                      maxWidth: '640px',
                      margin: '0 auto',
                      lineHeight: '1.8',
                      fontWeight: '300',
                    }}
                  >
                    Selecionamos imóveis de arquitetura assinada, localização privilegiada
                    e acabamentos de alto padrão para quem busca o extraordinário.
                  </p>
                </div>
              </FadeIn>

              {imoveis.map((imovel, idx) => (
                <FadeIn key={imovel.slug} delay={0.15 + idx * 0.1}>
                  <a
                    href={`/${imovel.slug}`}
                    style={{
                      display: 'block',
                      textDecoration: 'none',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '2px',
                      boxShadow: '0 30px 80px rgba(0,0,0,0.6)',
                      border: '1px solid rgba(201,169,97,0.2)',
                      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      marginBottom: isMobile ? '30px' : '50px',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 40px 100px rgba(201,169,97,0.25)';
                      e.currentTarget.style.borderColor = 'rgba(201,169,97,0.5)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 30px 80px rgba(0,0,0,0.6)';
                      e.currentTarget.style.borderColor = 'rgba(201,169,97,0.2)';
                    }}
                  >
                    <div
                      style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1.3fr 1fr',
                        width: '100%',
                        minHeight: isMobile ? 'auto' : '520px',
                      }}
                    >
<div
  style={{
    position: 'relative',
    height: isMobile ? '280px' : 'auto',
    minHeight: isMobile ? '280px' : '520px',
    background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #0A0A0A 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  {/* Ícone grande no lugar da foto */}
  <div style={{ fontSize: isMobile ? '4rem' : '6rem', opacity: 0.3 }}>
    🔒
  </div>
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                              'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
                          }}
                        />

                        <div
                          style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            backgroundColor: '#C9A961',
                            color: '#0A0A0A',
                            padding: '8px 18px',
                            fontSize: '0.65rem',
                            fontWeight: '700',
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                          }}
                        >
                          ✦ Exclusividade
                        </div>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#0F0F0F',
                          padding: isMobile ? '30px 24px' : '60px 50px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: '20px',
                        }}
                      >
                        <div
                          style={{
                            color: '#C9A961',
                            fontSize: isMobile ? '0.65rem' : '0.75rem',
                            fontWeight: '500',
                            letterSpacing: isMobile ? '2px' : '4px',
                            textTransform: 'uppercase',
                          }}
                        >
                          {imovel.categoria}
                        </div>

                        <h3
                          style={{
                            color: '#fff',
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: isMobile ? '2rem' : 'clamp(2.2rem, 3.5vw, 3rem)',
                            fontWeight: '500',
                            fontStyle: 'italic',
                            margin: 0,
                            lineHeight: '1.1',
                            letterSpacing: '-1px',
                          }}
                        >
                          {imovel.nome}
                        </h3>

                        <p
                          style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: isMobile ? '0.88rem' : '0.98rem',
                            lineHeight: '1.75',
                            margin: 0,
                            fontWeight: '300',
                          }}
                        >
                          {imovel.descricaoCurta}
                        </p>

                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: isMobile ? '10px' : '16px',
                            paddingTop: '16px',
                            borderTop: '1px solid rgba(201,169,97,0.2)',
                          }}
                        >
                          {imovel.destaques.map((item, i) => (
                            <span
                              key={i}
                              style={{
                                color: 'rgba(255,255,255,0.55)',
                                fontSize: isMobile ? '0.72rem' : '0.8rem',
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase',
                                fontWeight: '500',
                              }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>

                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            gap: '10px',
                            paddingTop: '10px',
                          }}
                        >
                          <span
                            style={{
                              color: 'rgba(255,255,255,0.5)',
                              fontSize: isMobile ? '0.7rem' : '0.78rem',
                              letterSpacing: '1.5px',
                              textTransform: 'uppercase',
                            }}
                          >
                            A partir de
                          </span>
                          <span
                            style={{
                              color: '#C9A961',
                              fontFamily: "'Playfair Display', Georgia, serif",
                              fontSize: isMobile ? '1.5rem' : '1.9rem',
                              fontWeight: '500',
                            }}
                          >
                            {formatarPreco(imovel.preco)}
                          </span>
                        </div>

                        <div
                          style={{
                            marginTop: '10px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: '#C9A961',
                            fontSize: isMobile ? '0.75rem' : '0.82rem',
                            fontWeight: '600',
                            letterSpacing: '2.5px',
                            textTransform: 'uppercase',
                          }}
                        >
                          Explorar Imóvel
                          <span style={{ fontSize: '1.2rem' }}>→</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </FadeIn>
              ))}

              <FadeIn delay={0.3}>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: isMobile ? '10px' : '10px',
                    padding: isMobile ? '20px' : '30px',
                    border: '1px dashed rgba(201,169,97,0.3)',
                    borderRadius: '2px',
                  }}
                >
                  <p
                    style={{
                      color: 'rgba(255,255,255,0.5)',
                      fontSize: isMobile ? '0.8rem' : '0.88rem',
                      margin: 0,
                      letterSpacing: '1px',
                      fontStyle: 'italic',
                      fontWeight: '300',
                    }}
                  >
                    Outros imóveis exclusivos disponíveis sob consulta.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>
        )}

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
                  marginBottom: isMobile ? '30px' : '60px',
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
                // NOVO: mobile 2x2, desktop auto-fit
                gridTemplateColumns: isMobile
                  ? '1fr 1fr'
                  : 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: isMobile ? '12px' : '25px',
                width: '100%',
              }}
            >
              {pilares.map((p, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div
                    style={{
                      backgroundColor: '#FAF7F3',
                      // NOVO: padding reduzido no mobile
                      padding: isMobile ? '18px 14px' : '40px 30px',
                      borderRadius: '4px',
                      height: '100%',
                      borderTop: '2px solid #D48C5B',
                      transition: 'all 0.3s ease',
                      boxSizing: 'border-box',
                    }}
                  >
                    <div
                      style={{
                        // NOVO: ícone menor no mobile
                        fontSize: isMobile ? '1.4rem' : '2.2rem',
                        marginBottom: isMobile ? '10px' : '16px',
                      }}
                    >
                      {p.icone}
                    </div>
                    <h3
                      style={{
                        color: '#2C2C2C',
                        fontFamily: "'Playfair Display', Georgia, serif",
                        // NOVO: título menor no mobile
                        fontSize: isMobile ? '0.95rem' : '1.35rem',
                        fontWeight: '600',
                        marginBottom: '8px',
                        lineHeight: 1.2,
                      }}
                    >
                      {p.titulo}
                    </h3>
                    <p
                      style={{
                        color: '#4A4A4A',
                        // NOVO: texto menor no mobile
                        fontSize: isMobile ? '0.75rem' : '0.95rem',
                        lineHeight: '1.55',
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
              Terrenos e imóveis de alto padrão em SP e MG
            </h2>
            <p style={{ marginBottom: '18px' }}>
              A <strong>Marques Alta Terra</strong> é especializada em{' '}
              <strong>terrenos no interior</strong> de São Paulo e Minas Gerais, e em{' '}
              <strong>imóveis de alto padrão no litoral paulista</strong>. Selecionamos propriedades
              em regiões de natureza preservada, tranquilidade e alto potencial de valorização —
              ideais para quem busca um refúgio a poucos minutos da capital, uma casa de campo ou um
              investimento imobiliário sólido.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Trabalhamos com <strong>curadoria de verdade</strong>: cada imóvel é visitado e
              analisado antes de entrar no nosso catálogo. Você não encontra aqui anúncio repetido,
              foto enganosa ou preço escondido. Nosso compromisso é com a{' '}
              <strong>transparência total</strong> — toda a documentação histórica é apresentada ao
              comprador antes da assinatura.
            </p>
            <p style={{ marginBottom: '18px' }}>
              Atuamos em regiões cercadas por serras, cachoeiras, mirantes e belezas naturais, com
              fácil acesso pelas principais rodovias do interior. Do{' '}
              <strong>interior paulista</strong> ao <strong>sul de Minas</strong>, e também no{' '}
              <strong>litoral paulista</strong>, selecionamos imóveis que unem qualidade de vida,
              tranquilidade e potencial de crescimento.
            </p>
            <p style={{ marginBottom: '25px' }}>
              Se você procura <strong>terreno para construir</strong>,{' '}
              <strong>terreno para investir</strong>, <strong>lote em região rural</strong> ou uma{' '}
              <strong>casa de alto padrão</strong>, fale com a gente. Atendimento direto com o
              vendedor, sem intermediários, sem enrolação.
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
                Marques Alta Terra — Do interior ao litoral, imóveis que inspiram.
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
              Fale agora com a gente pelo WhatsApp e descubra o imóvel ideal para você.
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
            // NOVO: padding mais enxuto
            padding: isMobile ? '35px 14px 22px' : '60px 40px 30px',
            backgroundColor: '#1A1A1A',
            color: '#999',
            width: '100%',
            boxSizing: 'border-box',
          }}
        >
          <div style={{ maxWidth: '1150px', margin: '0 auto', width: '100%' }}>
            {/* ❌ LOGO REMOVIDA — já aparece no hero */}

            {/* Divisor superior */}
            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, #3A3A3A 20%, #3A3A3A 80%, transparent 100%)',
                maxWidth: '900px',
                margin: '0 auto 30px',
              }}
            />

            {/* ====== 3 COLUNAS LADO A LADO (mobile e desktop) ====== */}
            <div
              style={{
                display: 'grid',
                // NOVO: 3 colunas SEMPRE (antes era 1 coluna no mobile)
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: isMobile ? '14px' : '50px',
                marginBottom: isMobile ? '25px' : '35px',
                // NOVO: alinhamento sempre à esquerda (antes centralizava no mobile)
                textAlign: 'left',
                width: '100%',
              }}
            >
              <div>
                <h4
                  style={{
                    color: '#D48C5B',
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
                    color: '#D48C5B',
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
                  {cidades.map((c, i) => (
                    <li key={i} style={{ marginBottom: isMobile ? '7px' : '9px' }}>
                      <a
                        href={`/${c.slug}`}
                        style={{
                          color: '#999',
                          textDecoration: 'none',
                          fontSize: isMobile ? '0.7rem' : '0.88rem',
                          transition: 'color 0.3s',
                          lineHeight: 1.4,
                        }}
                      >
                        {c.nome} - {c.estado}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4
                  style={{
                    color: '#D48C5B',
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
                    fontSize: isMobile ? '0.75rem' : '0.95rem',
                    fontWeight: '600',
                    lineHeight: 1.4,
                  }}
                >
                  (11) 91357-2902
                </a>
              </div>
            </div>

            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, #2C2C2C 50%, transparent 100%)',
                maxWidth: '900px',
                margin: '0 auto 22px',
              }}
            />

            <div style={{ textAlign: 'center', width: '100%' }}>
              <p
                style={{
                  color: '#888',
                  fontSize: isMobile ? '0.68rem' : '0.85rem',
                  marginBottom: '10px',
                  lineHeight: '1.6',
                  padding: '0 8px',
                }}
              >
                <strong style={{ color: '#D48C5B' }}>Marques Alta Terra</strong> — Curadoria de
                terrenos no interior de São Paulo e Minas Gerais, e imóveis de alto padrão no litoral paulista.
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
    </>
  );
}
