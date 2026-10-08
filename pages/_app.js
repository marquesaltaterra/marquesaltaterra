// ============================================================
// /pages/_app.js
// App global da Marques Alta Terra
// - CSS global injetado via <style jsx global> (sem arquivo externo)
// - Google Analytics centralizado
// - LeadModal global (exceto /blog)
// ============================================================

import Script from 'next/script';

import { useLeadModal } from '../hook/useLeadModal';
import LeadModal from '../components/LeadModal';

export default function MyApp({ Component, pageProps }) {
  const { aberto, fechar, marcarEnviado } = useLeadModal();

  return (
    <>
      {/* ====== GOOGLE ANALYTICS (global) ====== */}
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
              page_path: window.location.pathname,
            });
          `,
        }}
      />

      {/* ====== PÁGINA ATUAL ====== */}
      <Component {...pageProps} />

      {/* ====== LEAD MODAL (global, exceto /blog) ====== */}
      <LeadModal
        aberto={aberto}
        onFechar={fechar}
        onSucesso={marcarEnviado}
      />

      {/* ====== CSS GLOBAL (injetado aqui, sem arquivo externo) ====== */}
      <style jsx global>{`
        /* Reset universal */
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        /* Reset de margens */
        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
        }

        /* Scroll suave */
        html {
          scroll-behavior: smooth;
          -webkit-text-size-adjust: 100%;
        }

        /* Fonte base */
        body {
          font-family: 'Inter', 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
          color: #2C2C2C;
          background-color: #F5F0EB;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
          line-height: 1.5;
        }

        /* Imagens */
        img,
        picture,
        video,
        canvas,
        svg {
          display: block;
          max-width: 100%;
          height: auto;
        }

        /* Inputs e botões herdam fonte */
        input,
        button,
        textarea,
        select {
          font: inherit;
          color: inherit;
        }

        /* Acessibilidade de foco */
        button:focus-visible,
        a:focus-visible,
        input:focus-visible,
        select:focus-visible,
        textarea:focus-visible {
          outline: 2px solid #D48C5B;
          outline-offset: 2px;
        }

        /* Links sem decoração */
        a {
          color: inherit;
          text-decoration: none;
        }

        /* Listas sem estilo */
        ul,
        ol {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        /* Títulos sem margem */
        h1, h2, h3, h4, h5, h6 {
          margin: 0;
          font-weight: inherit;
        }

        p {
          margin: 0;
        }

        /* Scrollbar discreta */
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #F5F0EB;
        }
        ::-webkit-scrollbar-thumb {
          background: #D48C5B;
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #B87647;
        }

        /* Evita scroll quando modal abre */
        body.modal-open {
          overflow: hidden;
        }
      `}</style>
    </>
  );
}