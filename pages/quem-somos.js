import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function QuemSomos() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fotos (troque pelas suas)
  const foto1 = '/images/marques-quem-somos-1.jpeg';
  const foto2 = '/images/marques-quem-somos-2.jpeg';

  const WHATSAPP = '5511913572902';
  const MSG = encodeURIComponent(
    'Olá, Marques! Vi o site da Marques Alta Terra e quero conversar sobre os terrenos.'
  );
  const LINK_WHATSAPP = `https://wa.me/${WHATSAPP}?text=${MSG}`;

  return (
    <>
      <Head>
        <title>Quem Somos - Marques Alta Terra | Curadoria de Terrenos no Interior</title>
        <meta
          name="description"
          content="Conheça Marques Antonio, fundador da Marques Alta Terra. Curadoria de terrenos no interior de São Paulo e Minas Gerais com transparência, atendimento direto e documentação completa."
        />
        <meta
          name="keywords"
          content="Marques Alta Terra, quem somos, Marques Antonio, terrenos interior SP, terrenos Minas Gerais, curadoria de terrenos, comprar terreno interior"
        />
        <meta property="og:title" content="Quem Somos - Marques Alta Terra" />
        <meta
          property="og:description"
          content="Conheça a história por trás da Marques Alta Terra. Curadoria de terrenos com transparência e atendimento direto."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.marquesaltaterra.shop/quem-somos" />
        <meta property="og:image" content="https://www.marquesaltaterra.shop/images/logo.png" />
        <meta property="og:site_name" content="Marques Alta Terra" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.marquesaltaterra.shop/quem-somos" />

        {/* Fontes premium */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org - Person (Marques Antonio) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Marques Antonio',
              jobTitle: 'Fundador - Marques Alta Terra',
              worksFor: {
                '@type': 'Organization',
                name: 'MARZON SOLUÇÕES COMERCIAIS LTDA',
                alternateName: 'Marques Alta Terra',
              },
              description:
                'Fundador da Marques Alta Terra. Curadoria e venda de terrenos no interior de São Paulo e Minas Gerais.',
              knowsAbout: [
                'Terrenos no interior',
                'Investimento imobiliário',
                'Joanópolis',
                'Bragança Paulista',
                'Itapeva MG',
              ],
              image: 'https://www.marquesaltaterra.shop/images/marques-quem-somos-1.jpeg',
              url: 'https://www.marquesaltaterra.shop/quem-somos',
            }),
          }}
        />

        {/* Schema.org - AboutPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AboutPage',
              name: 'Quem Somos - Marques Alta Terra',
              url: 'https://www.marquesaltaterra.shop/quem-somos',
              description:
                'Conheça a história de Marques Antonio e da Marques Alta Terra, especializada em curadoria de terrenos no interior.',
            }),
          }}
        />
      </Head>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: '#F5F0EB',
          fontFamily: "'Inter', 'Segoe UI', Roboto, sans-serif",
          position: 'relative',
        }}
      >
        {/* ====== HEADER / HERO ====== */}
        <header
          style={{
            position: 'relative',
            padding: isMobile ? '80px 20px 60px' : '120px 40px 80px',
            backgroundImage: 'url(/images/home1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.75) 100%)',
            }}
          />

          {/* Logo clicável */}
          <Link
            href="/"
            style={{
              position: 'absolute',
              top: isMobile ? '20px' : '35px',
              left: isMobile ? '20px' : '40px',
              zIndex: 10,
              display: 'inline-block',
            }}
          >
            <img
              src="/images/logo.png"
              alt="Marques Alta Terra - Terrenos no interior"
              style={{ height: isMobile ? '50px' : '80px', width: 'auto' }}
            />
          </Link>

          <div style={{ position: 'relative', zIndex: 5, maxWidth: '850px', margin: '0 auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '25px',
              }}
            >
              <span style={{ width: '35px', height: '1px', backgroundColor: '#D48C5B' }} />
              <span
                style={{
                  color: '#D48C5B',
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  fontWeight: '600',
                  letterSpacing: '4px',
                  textTransform: 'uppercase',
                }}
              >
                Quem está por trás
              </span>
              <span style={{ width: '35px', height: '1px', backgroundColor: '#D48C5B' }} />
            </div>
            <h1
              style={{
                color: '#fff',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '600',
                marginBottom: '20px',
                lineHeight: '1.15',
              }}
            >
              Uma pessoa por trás de cada terreno
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: isMobile ? '1rem' : '1.15rem',
                lineHeight: '1.7',
                maxWidth: '650px',
                margin: '0 auto',
              }}
            >
              Antes de ser um site, a Marques Alta Terra é uma pessoa. Aqui você conhece quem
              seleciona, visita e negocia cada terreno com você.
            </p>
          </div>
        </header>

        {/* ====== CONTEÚDO PRINCIPAL ====== */}
        <div
          style={{
            padding: isMobile ? '40px 20px' : '70px 40px',
            maxWidth: '1100px',
            margin: '0 auto',
          }}
        >
          {/* BLOCO 1 — Quem sou eu (foto à direita em desktop) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1.4fr',
              gap: isMobile ? '30px' : '50px',
              alignItems: 'center',
              marginBottom: isMobile ? '60px' : '90px',
            }}
          >
            {/* Foto */}
            <div style={{ order: isMobile ? 1 : 1 }}>
              <img
                src={foto1}
                alt="Marques Antonio - Fundador da Marques Alta Terra"
                style={{
                  width: '100%',
                  borderRadius: '4px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Texto */}
            <div style={{ order: isMobile ? 2 : 2 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <span style={{ width: '30px', height: '1px', backgroundColor: '#D48C5B' }} />
                <span
                  style={{
                    color: '#D48C5B',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                  }}
                >
                  Quem sou eu
                </span>
              </div>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.7rem' : 'clamp(1.9rem, 3.5vw, 2.6rem)',
                  fontWeight: '600',
                  marginBottom: '25px',
                  lineHeight: '1.25',
                }}
              >
                Me chamo Marques Antonio
              </h2>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.95rem' : '1.05rem',
                  lineHeight: '1.9',
                  marginBottom: '18px',
                }}
              >
                Sempre fui apaixonado pelo interior. Pela calma das serras, pelo cheiro de terra
                depois da chuva, pelo silêncio que a cidade grande não tem mais. E foi essa paixão
                que me levou a criar a <strong>Marques Alta Terra</strong>.
              </p>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.95rem' : '1.05rem',
                  lineHeight: '1.9',
                  marginBottom: '18px',
                }}
              >
                Trabalho com terrenos no interior de São Paulo e Minas Gerais, e faço questão de
                conhecer cada propriedade pessoalmente. Não vendo apenas lote — eu apresento um
                lugar que pode se tornar o seu refúgio, sua casa de campo ou um investimento sólido
                para o futuro.
              </p>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.95rem' : '1.05rem',
                  lineHeight: '1.9',
                  marginBottom: 0,
                }}
              >
                Quando você fala comigo, fala direto com quem visita o terreno. Sem call center, sem
                corretor terceirizado, sem enrolação.
              </p>
            </div>
          </div>

          {/* BLOCO 2 — Minha promessa (foto à esquerda em desktop) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1.4fr 1fr',
              gap: isMobile ? '30px' : '50px',
              alignItems: 'center',
              marginBottom: isMobile ? '60px' : '90px',
            }}
          >
            <div style={{ order: isMobile ? 2 : 1 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <span style={{ width: '30px', height: '1px', backgroundColor: '#D48C5B' }} />
                <span
                  style={{
                    color: '#D48C5B',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                  }}
                >
                  Minha promessa
                </span>
              </div>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.7rem' : 'clamp(1.9rem, 3.5vw, 2.6rem)',
                  fontWeight: '600',
                  marginBottom: '25px',
                  lineHeight: '1.25',
                }}
              >
                Curadoria de verdade, sem atalhos
              </h2>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.95rem' : '1.05rem',
                  lineHeight: '1.9',
                  marginBottom: '18px',
                }}
              >
                Não acredito em "anúncio em massa". Cada terreno que entra na Marques Alta Terra
                passa por uma análise real: eu vou até o local, caminho, vejo a vista, converso com
                os vizinhos e entendo o entorno.
              </p>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.95rem' : '1.05rem',
                  lineHeight: '1.9',
                  marginBottom: '18px',
                }}
              >
                Só coloco no site o que eu compraria para mim. E quando você pergunta, eu respondo
                com honestidade — inclusive se aquele terreno não for o ideal para o seu perfil.
              </p>
              <p
                style={{
                  color: '#4A4A4A',
                  fontSize: isMobile ? '0.95rem' : '1.05rem',
                  lineHeight: '1.9',
                  marginBottom: 0,
                }}
              >
                Meu compromisso é com a sua tranquilidade, não com a venda rápida.
              </p>
            </div>

            <div style={{ order: isMobile ? 1 : 2 }}>
              <img
                src={foto2}
                alt="Marques Antonio analisando terrenos - Marques Alta Terra"
                style={{
                  width: '100%',
                  borderRadius: '4px',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                  objectFit: 'cover',
                }}
              />
            </div>
          </div>

          {/* BLOCO 3 — Valores em cards */}
          <div style={{ marginBottom: isMobile ? '60px' : '90px' }}>
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px',
                }}
              >
                <span style={{ width: '35px', height: '1px', backgroundColor: '#D48C5B' }} />
                <span
                  style={{
                    color: '#D48C5B',
                    fontSize: isMobile ? '0.7rem' : '0.8rem',
                    fontWeight: '600',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                  }}
                >
                  No que acredito
                </span>
                <span style={{ width: '35px', height: '1px', backgroundColor: '#D48C5B' }} />
              </div>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.8rem' : 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: '600',
                  marginBottom: '15px',
                }}
              >
                Meus compromissos com você
              </h2>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                gap: '25px',
              }}
            >
              {[
                {
                  icone: '🔍',
                  titulo: 'Visita pessoal',
                  texto:
                    'Eu mesmo vou até cada terreno antes de anunciar. O que você vê no site é o que eu vi ao vivo.',
                },
                {
                  icone: '📜',
                  titulo: 'Documentação transparente',
                  texto:
                    'Toda a cadeia de contratos é apresentada antes da assinatura. Você sabe exatamente o que está comprando.',
                },
                {
                  icone: '🤝',
                  titulo: 'Atendimento direto',
                  texto:
                    'Sem intermediário, sem taxa escondida. Você fala comigo do início ao fim da negociação.',
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: '#fff',
                    padding: '35px 30px',
                    borderRadius: '4px',
                    borderTop: '3px solid #D48C5B',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '20px' }}>{item.icone}</div>
                  <h3
                    style={{
                      color: '#2C2C2C',
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '12px',
                    }}
                  >
                    {item.titulo}
                  </h3>
                  <p
                    style={{
                      color: '#4A4A4A',
                      fontSize: '0.95rem',
                      lineHeight: '1.75',
                      margin: 0,
                    }}
                  >
                    {item.texto}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* BLOCO 4 — CTA final */}
          <div
            style={{
              backgroundColor: '#fff',
              padding: isMobile ? '40px 25px' : '60px 50px',
              borderRadius: '4px',
              boxShadow: '0 15px 50px rgba(0,0,0,0.08)',
              textAlign: 'center',
              borderTop: '3px solid #D48C5B',
            }}
          >
            <h2
              style={{
                color: '#2C2C2C',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '1.6rem' : 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: '600',
                marginBottom: '20px',
                lineHeight: '1.25',
              }}
            >
              Vamos conversar?
            </h2>
            <p
              style={{
                color: '#4A4A4A',
                fontSize: isMobile ? '0.95rem' : '1.05rem',
                lineHeight: '1.8',
                maxWidth: '600px',
                margin: '0 auto 35px',
              }}
            >
              Se você busca um terreno no interior, quer entender melhor as opções ou só quer trocar
              uma ideia, me chama no WhatsApp. Atendo pessoalmente.
            </p>
            <a
              href={LINK_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: isMobile ? '15px 30px' : '17px 45px',
                backgroundColor: '#25D366',
                color: '#fff',
                borderRadius: '4px',
                fontSize: isMobile ? '0.9rem' : '0.95rem',
                fontWeight: '600',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(37, 211, 102, 0.4)',
                width: isMobile ? '100%' : 'auto',
                boxSizing: 'border-box',
              }}
            >
              📲 Falar com o Marques
            </a>
            <div style={{ marginTop: '25px' }}>
              <Link
                href="/"
                style={{
                  color: '#5E6C5B',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                }}
              >
                ← Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>

        {/* ====== FOOTER ====== */}
        <footer
          style={{
            padding: isMobile ? '40px 20px 25px' : '60px 40px 30px',
            backgroundColor: '#1A1A1A',
            color: '#999',
          }}
        >
          <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <img
                src="/images/logo.png"
                alt="Marques Alta Terra"
                style={{ height: isMobile ? '50px' : '70px', width: 'auto' }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                gap: isMobile ? '15px' : '30px',
                marginBottom: '30px',
              }}
            >
              <Link
                href="/"
                style={{ color: '#D48C5B', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: '500' }}
              >
                Início
              </Link>
              <Link
                href="/joanopolis"
                style={{ color: '#D48C5B', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: '500' }}
              >
                Joanópolis
              </Link>
              <Link
                href="/braganca"
                style={{ color: '#D48C5B', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: '500' }}
              >
                Bragança
              </Link>
              <Link
                href="/itapeva"
                style={{ color: '#D48C5B', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: '500' }}
              >
                Itapeva
              </Link>
              <Link
                href="/quem-somos"
                style={{ color: '#D48C5B', textDecoration: 'none', fontSize: isMobile ? '0.8rem' : '0.9rem', fontWeight: '600' }}
              >
                Quem Somos
              </Link>
            </div>

            <div
              style={{
                borderTop: '1px solid #2C2C2C',
                paddingTop: '25px',
                textAlign: 'center',
              }}
            >
              <p style={{ color: '#888', fontSize: isMobile ? '0.75rem' : '0.85rem', marginBottom: '8px' }}>
                <strong style={{ color: '#D48C5B' }}>Marques Alta Terra</strong> — Curadoria de terrenos no interior de SP e MG
              </p>
              <p style={{ color: '#666', fontSize: isMobile ? '0.7rem' : '0.75rem', marginBottom: '6px' }}>
                CNPJ: 39.868.744/0001-68 — MARZON SOLUÇÕES COMERCIAIS LTDA
              </p>
              <p style={{ color: '#555', fontSize: isMobile ? '0.65rem' : '0.7rem', margin: 0 }}>
                © {new Date().getFullYear()} Marques Alta Terra. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        body {
          font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </>
  );
}