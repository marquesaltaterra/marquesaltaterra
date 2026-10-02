import { useState, useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { getCidadePorSlug, cidades } from '../data/cidades';

export default function Braganca() {
  const [isMobile, setIsMobile] = useState(false);
  const cidade = getCidadePorSlug('braganca');

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const LINK_WHATSAPP = `https://wa.me/${cidade.whatsapp}?text=${encodeURIComponent(cidade.whatsappMensagem)}`;

  return (
    <>
      <Head>
        <title>Terrenos em Bragança Paulista - SP | Em Breve | Marques Alta Terra</title>
        <meta
          name="description"
          content="Novos terrenos chegando em Bragança Paulista - SP. Cadastre-se para ser avisado em primeira mão. Marques Alta Terra — curadoria de terrenos no interior."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.marquesaltaterra.shop/braganca" />

        <meta property="og:title" content="Terrenos em Bragança Paulista - SP | Em Breve" />
        <meta property="og:description" content="Novos terrenos chegando em Bragança Paulista. Seja avisado em primeira mão." />
        <meta property="og:image" content="https://www.marquesaltaterra.shop/images/logo.png" />
        <meta property="og:url" content="https://www.marquesaltaterra.shop/braganca" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />

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
              page_title: 'Bragança Paulista - Em Breve',
              page_location: window.location.href
            });
          `,
        }}
      />

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: '#F5F0EB',
          fontFamily: "'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif",
        }}
      >
        <section
          style={{
            position: 'relative',
            height: '100vh',
            minHeight: isMobile ? '600px' : '650px',
            backgroundImage: `url(${cidade.imagem})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.7)' }} />

          <div style={{ position: 'absolute', top: isMobile ? '15px' : '30px', left: isMobile ? '15px' : '30px', zIndex: 10 }}>
            <a href="/">
              <img
                src="/images/logo.png"
                alt="Marques Alta Terra"
                style={{ height: isMobile ? '50px' : '80px', width: 'auto' }}
              />
            </a>
          </div>

          <div style={{ position: 'relative', zIndex: 5, padding: isMobile ? '20px' : '30px', maxWidth: '800px' }}>
            <div
              style={{
                display: 'inline-block',
                backgroundColor: '#D48C5B',
                color: '#fff',
                padding: '8px 20px',
                borderRadius: '20px',
                fontSize: isMobile ? '0.75rem' : '0.85rem',
                fontWeight: '700',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              🔔 Em breve
            </div>
            <h1
              style={{
                color: '#fff',
                fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 6vw, 4rem)',
                fontWeight: '700',
                marginBottom: '20px',
                lineHeight: '1.15',
              }}
            >
              Terrenos em
              <br />
              Bragança Paulista - SP
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: isMobile ? '1rem' : '1.2rem',
                marginBottom: '35px',
                lineHeight: '1.6',
              }}
            >
              Estamos selecionando os melhores terrenos da região. Em breve novidades por aqui.
            </p>
            <a
              href={LINK_WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: isMobile ? '16px 30px' : '18px 50px',
                backgroundColor: '#25D366',
                color: '#fff',
                borderRadius: '30px',
                fontSize: isMobile ? '1rem' : '1.15rem',
                fontWeight: '700',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
                width: isMobile ? '100%' : 'auto',
                boxSizing: 'border-box',
              }}
            >
              🔔 Quero ser avisado
            </a>
            <div style={{ marginTop: '25px' }}>
              <a href="/" style={{ color: 'rgba(255,255,255,0.8)', textDecoration: 'none', fontSize: '0.9rem' }}>
                ← Voltar para a página inicial
              </a>
            </div>
          </div>
        </section>

        <section style={{ padding: isMobile ? '50px 15px' : '70px 20px', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2
            style={{
              color: '#2C2C2C',
              fontSize: isMobile ? '1.5rem' : 'clamp(1.7rem, 3vw, 2.3rem)',
              fontWeight: '700',
              marginBottom: '20px',
            }}
          >
            Enquanto isso, veja nossos terrenos disponíveis
          </h2>
          <p style={{ color: '#666', fontSize: isMobile ? '0.95rem' : '1.05rem', lineHeight: '1.7', marginBottom: '35px' }}>
            Já temos terrenos prontos em Joanópolis - SP e uma grande oportunidade chegando em Itapeva - MG.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '20px',
              maxWidth: '700px',
              margin: '0 auto',
            }}
          >
            {cidades.filter((c) => c.slug !== 'braganca').map((c) => (
              <a
                key={c.slug}
                href={`/${c.slug}`}
                style={{
                  display: 'block',
                  padding: '25px 20px',
                  backgroundColor: '#fff',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>
                  {c.status === 'disponivel' ? '🏞️' : '⏳'}
                </div>
                <h3 style={{ color: '#2C2C2C', fontSize: '1.1rem', fontWeight: '700', marginBottom: '5px' }}>
                  {c.nome} - {c.estado}
                </h3>
                <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>
                  {c.status === 'disponivel' ? 'Disponível agora' : 'Em breve'}
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer
          style={{
            padding: isMobile ? '30px 15px' : '40px 20px',
            backgroundColor: '#2C2C2C',
            color: '#999',
            textAlign: 'center',
          }}
        >
          <img
            src="/images/logo.png"
            alt="Marques Alta Terra"
            style={{ height: isMobile ? '40px' : '60px', width: 'auto', marginBottom: '20px' }}
          />
          <p style={{ fontSize: isMobile ? '0.65rem' : '0.8rem', margin: '3px 0' }}>
            © {new Date().getFullYear()} Marques Alta Terra — Joanópolis/SP
          </p>
          <p style={{ fontSize: isMobile ? '0.6rem' : '0.7rem', color: '#666', margin: '3px 0' }}>
            📞 WhatsApp: (11) 91357-2902 | CNPJ: 39.868.744/0001-68
          </p>
          <p style={{ fontSize: isMobile ? '0.55rem' : '0.65rem', color: '#555', marginTop: '5px' }}>
            MARZON SOLUÇÕES COMERCIAIS LTDA
          </p>
        </footer>
      </div>
    </>
  );
}