// pages/blog.js
// Blog Marques Alta Terra - Estilo Marques Alta Terra
// URL: https://www.marquesaltaterra.shop/blog

import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import ShareButtons from '../components/ShareButtons';
import useTrackUser from '../hook/useTrackUser';

// ========== FUNÇÃO PARA CRIAR SLUGS ========== //
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

function getArticleUrl(article) {
  if (!article || !article.title) return '/blog';
  const slug = gerarSlug(article.title);
  return `/blog/${slug}`;
}

// ========== COMPONENTE FADE IN ========== //
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

// ========== SCHEMA MARKUP ========== //
const organizationSchema = {
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
};

// ⬇️⬇️⬇️ getServerSideProps ⬇️⬇️⬇️ //
export async function getServerSideProps(context) {
  const { query, req } = context;
  const slug = query.slug;

  let allArticles = [];

  try {
    let baseUrl;
    if (process.env.NODE_ENV === 'production') {
      baseUrl = 'https://www.marquesaltaterra.shop';
    } else {
      const host = req.headers.host || 'localhost:3001';
      const protocol = host.includes('localhost') ? 'http' : 'https';
      baseUrl = `${protocol}://${host}`;
    }

    const response = await fetch(`${baseUrl}/index.json`);
    if (response.ok) {
      const data = await response.json();
      allArticles = Array.isArray(data) ? data : [];
    } else {
      console.warn('⚠️ index.json não encontrado ou vazio:', response.status);
    }
  } catch (error) {
    console.error('❌ Erro ao carregar artigos:', error);
  }

  if (slug && allArticles.length > 0) {
    const article = allArticles.find((a) => gerarSlug(a.title) === slug);
    if (article) {
      return {
        props: {
          initialPage: article.id,
          allArticles: allArticles,
          currentSlug: slug,
        },
      };
    }
  }

  return {
    props: {
      initialPage: allArticles[0]?.id || 0,
      allArticles: allArticles,
      currentSlug: null,
    },
  };
}

// ⬇️⬇️⬇️ COMPONENTE PRINCIPAL ⬇️⬇️⬇️ //
export default function Blog({ initialPage, allArticles: initialArticles, currentSlug }) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTiny, setIsTiny] = useState(false);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [isClient, setIsClient] = useState(false);
  const [showIndex, setShowIndex] = useState(false);
  const [articles, setArticles] = useState(initialArticles || []);

  const articleRefs = useRef([]);
  useTrackUser();

  const WHATSAPP_GERAL = '5511913572902';
  const MSG_GERAL = encodeURIComponent(
    'Olá! Vi o blog da Marques Alta Terra e quero saber mais sobre os terrenos disponíveis.'
  );
  const LINK_WHATSAPP = `https://wa.me/${WHATSAPP_GERAL}?text=${MSG_GERAL}`;

  useEffect(() => {
    setIsClient(true);
    if (typeof window !== 'undefined') {
      const checkSize = () => {
        const w = window.innerWidth;
        setIsMobile(w <= 768);
        setIsTiny(w <= 380);
        setShowIndex(w > 768);
      };
      checkSize();

      if (articles.length > 0) {
        const artigoAtual = articles.find((a) => a.id === currentPage);
        if (artigoAtual) {
          const urlNova = getArticleUrl(artigoAtual);
          const urlAtual = window.location.pathname + window.location.search;
          if (!urlAtual.includes(urlNova) && !urlAtual.includes('slug=')) {
            window.history.replaceState({}, '', urlNova);
          }
        }
      }

      window.addEventListener('resize', checkSize);
      return () => window.removeEventListener('resize', checkSize);
    }
  }, [currentPage, articles]);

  const totalPages = articles.length;
  const currentArticle = articles.find((a) => a.id === currentPage) || articles[0] || null;

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const artigoAtual = articles.find((a) => a.id === pageNumber);
    if (artigoAtual && typeof window !== 'undefined') {
      const novaURL = getArticleUrl(artigoAtual);
      window.history.pushState({}, '', novaURL);
    }
  };

  const goToArticle = (articleId) => {
    handlePageChange(articleId);
    if (isMobile) setShowIndex(false);
  };

  // ========== COMPONENTE ÍNDICE COM BUSCA E FILTROS ========== //
  const ArticleIndex = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState(null);
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [showResults, setShowResults] = useState(false);

    const categories = [
      { id: 'todos', label: '📰 Todos' },
      { id: 'regioes', label: '📍 Regiões' },
      { id: 'dicas', label: '💡 Dicas de Compra' },
      { id: 'investimento', label: '📈 Investimento' },
      { id: 'estilo', label: '🌄 Estilo de Vida' },
    ];

    const getArticleFilterCategory = (articleCategory) => {
      const c = articleCategory?.toLowerCase() || '';
      if (c.includes('regi')) return 'regioes';
      if (c.includes('dica') || c.includes('guia') || c.includes('compra')) return 'dicas';
      if (c.includes('invest')) return 'investimento';
      if (c.includes('estilo') || c.includes('vida')) return 'estilo';
      return 'regioes';
    };

    useEffect(() => {
      let result = articles;

      if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        result = result.filter(
          (a) =>
            a.title.toLowerCase().includes(term) ||
            a.description.toLowerCase().includes(term)
        );
        setShowResults(true);
      } else if (activeFilter !== null) {
        if (activeFilter !== 'todos') {
          result = result.filter(
            (a) => getArticleFilterCategory(a.category) === activeFilter
          );
        }
        setShowResults(true);
      } else {
        setShowResults(false);
        setFilteredArticles([]);
        return;
      }
      setFilteredArticles(result);
    }, [searchTerm, activeFilter, articles]);

    const selectFilter = (filterId) => {
      if (activeFilter === filterId) {
        setActiveFilter(null);
        if (searchTerm.trim() === '') {
          setShowResults(false);
          setFilteredArticles([]);
        }
      } else {
        setActiveFilter(filterId);
      }
    };

    const clearSearch = () => {
      setSearchTerm('');
      if (activeFilter === null) {
        setShowResults(false);
        setFilteredArticles([]);
      }
    };

    const clearAll = () => {
      setSearchTerm('');
      setActiveFilter(null);
      setShowResults(false);
      setFilteredArticles([]);
    };

    return (
      <div
        style={{
          backgroundColor: '#fff',
          borderRadius: '4px',
          padding: isMobile ? '18px 15px' : '28px 25px',
          margin: isMobile ? '0 0 20px 0' : '0 0 35px 0',
          boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          border: '1px solid #eee',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '20px',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <h2
            style={{
              color: '#2C2C2C',
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: isMobile ? '1.2rem' : '1.5rem',
              margin: 0,
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span>📚</span>
            Artigos
            <span
              style={{
                fontSize: '0.7rem',
                backgroundColor: '#FAF7F3',
                padding: '3px 10px',
                borderRadius: '2px',
                color: '#D48C5B',
                fontWeight: '600',
                letterSpacing: '1px',
                border: '1px solid #D48C5B',
              }}
            >
              {articles.length}
            </span>
          </h2>

          {(searchTerm || activeFilter) && (
            <button
              onClick={clearAll}
              style={{
                backgroundColor: '#FAF7F3',
                border: '1px solid #ddd',
                padding: '6px 14px',
                borderRadius: '2px',
                fontSize: '12px',
                cursor: 'pointer',
                color: '#666',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
              }}
            >
              ✕ Limpar
            </button>
          )}
        </div>

        <div style={{ marginBottom: '18px', position: 'relative' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#FAF7F3',
              border: searchTerm ? '1px solid #D48C5B' : '1px solid #e0e0e0',
              borderRadius: '2px',
              padding: '0 15px',
              transition: 'all 0.3s ease',
            }}
          >
            <span style={{ fontSize: '16px', color: '#999' }}>🔍</span>
            <input
              type="text"
              placeholder="Buscar artigos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                flex: 1,
                padding: isMobile ? '12px 10px' : '14px 15px',
                border: 'none',
                backgroundColor: 'transparent',
                fontSize: isMobile ? '14px' : '15px',
                outline: 'none',
                color: '#2C2C2C',
                fontFamily: "'Inter', sans-serif",
              }}
            />
            {searchTerm && (
              <button
                onClick={clearSearch}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '16px',
                  color: '#999',
                  padding: '5px',
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginBottom: showResults ? '22px' : '0',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => selectFilter(cat.id)}
                disabled={!!searchTerm}
                style={{
                  backgroundColor: isActive ? '#D48C5B' : '#FAF7F3',
                  color: isActive ? '#fff' : '#666',
                  border: isActive ? '1px solid #D48C5B' : '1px solid #e0e0e0',
                  padding: isMobile ? '8px 14px' : '10px 18px',
                  borderRadius: '2px',
                  fontSize: isMobile ? '11px' : '12px',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  cursor: searchTerm ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s ease',
                  opacity: searchTerm ? 0.5 : 1,
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {searchTerm && (
          <div
            style={{
              marginBottom: '15px',
              padding: '8px 14px',
              backgroundColor: '#FAF7F3',
              borderLeft: '3px solid #D48C5B',
              fontSize: '12px',
              color: '#666',
            }}
          >
            🔍 Resultados para: <strong>"{searchTerm}"</strong>
          </div>
        )}

        {showResults && (
          <>
            <div
              style={{
                marginBottom: '16px',
                padding: '10px 14px',
                backgroundColor: '#FAF7F3',
                borderRadius: '2px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '8px',
                borderLeft: '3px solid #D48C5B',
              }}
            >
              <span
                style={{
                  fontSize: '12px',
                  color: '#2C2C2C',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                }}
              >
                📄 {filteredArticles.length}{' '}
                {filteredArticles.length === 1 ? 'artigo' : 'artigos'}
              </span>
            </div>

            {filteredArticles.length === 0 && (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  backgroundColor: '#FAF7F3',
                  borderRadius: '2px',
                  color: '#666',
                }}
              >
                <span style={{ fontSize: '42px', display: 'block', marginBottom: '12px' }}>
                  🔍
                </span>
                <p
                  style={{
                    margin: 0,
                    fontSize: '15px',
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: '600',
                  }}
                >
                  Nenhum artigo encontrado
                </p>
                <p style={{ margin: '6px 0 0 0', fontSize: '13px', color: '#999' }}>
                  {searchTerm
                    ? `Nada com "${searchTerm}"`
                    : 'Nenhum artigo nesta categoria'}
                </p>
              </div>
            )}

            {filteredArticles.length > 0 && (
              <div
                style={{
                  maxHeight: isMobile ? '420px' : '520px',
                  overflowY: 'auto',
                  paddingRight: '5px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: isMobile ? '12px' : '14px',
                  }}
                >
                  {filteredArticles.map((article) => (
                    <a
                      key={article.id}
                      href={getArticleUrl(article)}
                      onClick={(e) => {
                        e.preventDefault();
                        goToArticle(article.id);
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: isMobile ? '12px' : '16px',
                        padding: isMobile ? '10px' : '14px',
                        backgroundColor:
                          currentPage === article.id ? '#FAF7F3' : '#fff',
                        border:
                          currentPage === article.id
                            ? '1px solid #D48C5B'
                            : '1px solid #eee',
                        borderRadius: '2px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        textDecoration: 'none',
                        color: 'inherit',
                        width: '100%',
                        boxSizing: 'border-box',
                        position: 'relative',
                        minHeight: isMobile ? '80px' : '95px',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '-6px',
                          left: '-6px',
                          backgroundColor: '#D48C5B',
                          color: '#fff',
                          width: isMobile ? '24px' : '28px',
                          height: isMobile ? '24px' : '28px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: isMobile ? '0.7rem' : '0.8rem',
                          fontWeight: '700',
                          zIndex: 5,
                          border: '2px solid #fff',
                        }}
                      >
                        {article.id}
                      </div>

                      <div
                        style={{
                          width: isMobile ? '80px' : '110px',
                          height: isMobile ? '45px' : '62px',
                          flexShrink: 0,
                          borderRadius: '2px',
                          overflow: 'hidden',
                          backgroundColor: '#F5F0EB',
                          marginLeft: '6px',
                        }}
                      >
                        <img
                          src={article.image}
                          alt={article.title}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </div>

                      <div
                        style={{
                          flex: 1,
                          minWidth: 0,
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'center',
                          gap: '5px',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            flexWrap: 'wrap',
                          }}
                        >
                          <span
                            style={{
                              color: '#D48C5B',
                              fontSize: isMobile ? '0.65rem' : '0.7rem',
                              fontWeight: '600',
                              letterSpacing: '1.5px',
                              textTransform: 'uppercase',
                            }}
                          >
                            {article.category}
                          </span>
                          <span
                            style={{
                              color: '#999',
                              fontSize: isMobile ? '0.6rem' : '0.65rem',
                            }}
                          >
                            {article.readTime}
                          </span>
                        </div>
                        <h4
                          style={{
                            fontSize: isMobile ? '0.82rem' : '0.92rem',
                            margin: 0,
                            color: '#2C2C2C',
                            fontFamily: "'Playfair Display', serif",
                            fontWeight: '600',
                            lineHeight: '1.3',
                            display: '-webkit-box',
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                          }}
                        >
                          {article.title}
                        </h4>
                      </div>

                      <div
                        style={{
                          color: '#D48C5B',
                          fontSize: '16px',
                          marginRight: '4px',
                        }}
                      >
                        →
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

        {!showResults && !searchTerm && activeFilter === null && (
          <div
            style={{
              textAlign: 'center',
              padding: '30px 20px',
              backgroundColor: '#FAF7F3',
              borderRadius: '2px',
              color: '#666',
              marginTop: '10px',
              border: '1px dashed #D48C5B',
            }}
          >
            <span style={{ fontSize: '28px', display: 'block', marginBottom: '10px' }}>
              🔍
            </span>
            <p
              style={{
                margin: 0,
                fontSize: '13px',
                fontWeight: '500',
                color: '#4A4A4A',
              }}
            >
              Digite algo na busca ou clique em uma categoria
            </p>
            <p style={{ margin: '6px 0 0 0', fontSize: '12px', color: '#999' }}>
              Temos {articles.length} artigos no total
            </p>
          </div>
        )}
      </div>
    );
  };

  // ========== NAVEGAÇÃO RÁPIDA ========== //
  const QuickNavigation = () => {
    const currentIndex = articles.findIndex((a) => a.id === currentPage);
    const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
    const nextArticle =
      currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

    if (!prevArticle && !nextArticle) return null;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          margin: isMobile ? '25px 0 0 0' : '40px 0 0 0',
          padding: isMobile ? '15px' : '22px',
          backgroundColor: '#FAF7F3',
          borderRadius: '4px',
          border: '1px solid #eee',
          gap: isMobile ? '12px' : '18px',
        }}
      >
        {prevArticle && (
          <a
            href={getArticleUrl(prevArticle)}
            onClick={(e) => {
              e.preventDefault();
              goToArticle(prevArticle.id);
            }}
            style={{
              flex: isMobile ? '0 0 auto' : 1,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: isMobile ? '12px' : '15px',
              backgroundColor: '#fff',
              border: '1px solid #eee',
              borderRadius: '2px',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'inherit',
              width: '100%',
              boxSizing: 'border-box',
              minHeight: '70px',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ color: '#D48C5B', fontSize: '1.3rem', flexShrink: 0 }}>←</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontSize: '0.65rem',
                  color: '#999',
                  marginBottom: '4px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}
              >
                Anterior
              </div>
              <div
                style={{
                  fontSize: isMobile ? '0.8rem' : '0.88rem',
                  fontWeight: '600',
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: '1.3',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {prevArticle.title}
              </div>
            </div>
          </a>
        )}

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '12px' : '15px',
            backgroundColor: '#fff',
            borderRadius: '2px',
            border: '1px solid #eee',
            minWidth: isMobile ? '100%' : 'auto',
            order: isMobile ? -1 : 0,
            textAlign: 'center',
            gap: '4px',
          }}
        >
          <div
            style={{
              fontSize: '0.65rem',
              color: '#999',
              fontWeight: '600',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            Artigo
          </div>
          <div
            style={{
              fontSize: isMobile ? '1.2rem' : '1.4rem',
              fontWeight: '700',
              color: '#D48C5B',
              fontFamily: "'Playfair Display', serif",
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            {currentPage}
            <span style={{ color: '#ccc', fontWeight: '400' }}>/</span>
            {totalPages}
          </div>
        </div>

        {nextArticle && (
          <a
            href={getArticleUrl(nextArticle)}
            onClick={(e) => {
              e.preventDefault();
              goToArticle(nextArticle.id);
            }}
            style={{
              flex: isMobile ? '0 0 auto' : 1,
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: isMobile ? '12px' : '15px',
              backgroundColor: '#fff',
              border: '1px solid #eee',
              borderRadius: '2px',
              cursor: 'pointer',
              textDecoration: 'none',
              color: 'inherit',
              width: '100%',
              boxSizing: 'border-box',
              minHeight: '70px',
              transition: 'all 0.2s ease',
            }}
          >
            <div style={{ flex: 1, minWidth: 0, textAlign: 'right' }}>
              <div
                style={{
                  fontSize: '0.65rem',
                  color: '#999',
                  marginBottom: '4px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                }}
              >
                Próximo
              </div>
              <div
                style={{
                  fontSize: isMobile ? '0.8rem' : '0.88rem',
                  fontWeight: '600',
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', serif",
                  lineHeight: '1.3',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textAlign: 'right',
                }}
              >
                {nextArticle.title}
              </div>
            </div>
            <div style={{ color: '#D48C5B', fontSize: '1.3rem', flexShrink: 0 }}>→</div>
          </a>
        )}
      </div>
    );
  };

  return (
    <>
      <Head key={`page-${currentPage}`}>
        <title>
          {currentArticle
            ? `${currentArticle.title} | Blog Marques Alta Terra`
            : 'Blog Marques Alta Terra | Terrenos no Interior de SP e MG'}
        </title>
        <meta
          name="description"
          content={
            currentArticle
              ? currentArticle.description
              : 'Blog da Marques Alta Terra: dicas, guias e novidades sobre terrenos no interior de SP e MG.'
          }
        />
        <meta
          name="keywords"
          content="terreno interior SP, terreno Minas Gerais, blog terrenos, comprar terreno interior, investimento imobiliário, Marques Alta Terra"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="Marques Alta Terra" />

        <meta property="og:title" content={currentArticle?.title || 'Blog Marques Alta Terra'} />
        <meta
          property="og:description"
          content={currentArticle?.description || 'Blog Marques Alta Terra'}
        />
        <meta
          property="og:image"
          content={
            currentArticle?.image
              ? `https://www.marquesaltaterra.shop${currentArticle.image}`
              : 'https://www.marquesaltaterra.shop/images/logo.png'
          }
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:secure_url"
          content={
            currentArticle?.image
              ? `https://www.marquesaltaterra.shop${currentArticle.image}`
              : 'https://www.marquesaltaterra.shop/images/logo.png'
          }
        />
        <meta
          property="og:url"
          content={`https://www.marquesaltaterra.shop${getArticleUrl(currentArticle)}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Marques Alta Terra" />
        <meta property="og:locale" content="pt_BR" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentArticle?.title || 'Blog Marques Alta Terra'} />
        <meta
          name="twitter:description"
          content={currentArticle?.description || 'Blog Marques Alta Terra'}
        />
        <meta
          name="twitter:image"
          content={
            currentArticle?.image
              ? `https://www.marquesaltaterra.shop${currentArticle.image}`
              : 'https://www.marquesaltaterra.shop/images/logo.png'
          }
        />

        <link
          rel="canonical"
          href={`https://www.marquesaltaterra.shop${getArticleUrl(currentArticle)}`}
        />

        <link rel="icon" href="/images/logo.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {currentArticle && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Article',
                headline: currentArticle.title,
                description: currentArticle.description,
                image: `https://www.marquesaltaterra.shop${currentArticle.image}`,
                datePublished: currentArticle.date,
                author: {
                  '@type': 'Organization',
                  name: 'Marques Alta Terra',
                },
                publisher: {
                  '@type': 'Organization',
                  name: 'Marques Alta Terra',
                  logo: {
                    '@type': 'ImageObject',
                    url: 'https://www.marquesaltaterra.shop/images/logo.png',
                  },
                },
              }),
            }}
          />
        )}
      </Head>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden !important;
          -webkit-text-size-adjust: 100%;
          margin: 0;
          padding: 0;
          background-color: #f5f0eb;
          font-family: 'Inter', 'Segoe UI', Roboto, sans-serif;
        }
        img {
          max-width: 100% !important;
          height: auto !important;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        ::-webkit-scrollbar-thumb {
          background: #d48c5b;
          border-radius: 3px;
        }
        @media (max-width: 768px) {
          [style*='grid-template-columns'] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* CONTAINER PRINCIPAL */}
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
        {/* ====== HEADER PREMIUM COM IMAGEM DE FUNDO (igual à home) ====== */}
        <header
          style={{
            position: 'relative',
            textAlign: 'center',
            padding: isMobile ? '80px 16px 60px' : '120px 30px 90px',
            backgroundImage: 'url(/images/home1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Overlay escuro cinematográfico */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 40%, rgba(0,0,0,0.85) 100%)',
            }}
          />

          {/* Conteúdo do header */}
          <div
            style={{
              position: 'relative',
              zIndex: 5,
              maxWidth: '900px',
              width: '100%',
            }}
          >
            {/* LOGO GRANDE CENTRALIZADA */}
            <Link href="/" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <img
                src="/images/logo.png"
                alt="Marques Alta Terra"
                style={{
                  height: isMobile ? '90px' : '220px',
                  width: 'auto',
                  maxWidth: isMobile ? '200px' : '400px',
                  margin: isMobile ? '0 0 25px 0' : '0 0 40px 0',
                  cursor: 'pointer',
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  filter: 'drop-shadow(0 4px 20px rgba(0,0,0,0.5))',
                }}
              />
            </Link>

            {/* EYEBROW CENTRALIZADO */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: isMobile ? '10px' : '14px',
                marginBottom: isMobile ? '20px' : '28px',
                width: '100%',
              }}
            >
              <span
                style={{
                  width: isMobile ? '25px' : '45px',
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
                  letterSpacing: isMobile ? '3px' : '5px',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                }}
              >
                Interior de SP e MG
              </span>
              <span
                style={{
                  width: isMobile ? '25px' : '45px',
                  height: '1px',
                  backgroundColor: '#D48C5B',
                  flexShrink: 0,
                }}
              />
            </div>

            {/* TÍTULO PRINCIPAL */}
            <h1
              style={{
                color: '#fff',
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 3.8rem)',
                fontWeight: '600',
                margin: '0 auto 18px',
                lineHeight: '1.15',
                maxWidth: '900px',
                textShadow: '0 4px 20px rgba(0,0,0,0.5)',
                letterSpacing: '-0.5px',
              }}
            >
              Blog Marques Alta Terra
            </h1>

            {/* Subtítulo elegante */}
            <p
              style={{
                color: 'rgba(255,255,255,0.9)',
                fontSize: isMobile ? '0.95rem' : 'clamp(1.05rem, 1.5vw, 1.2rem)',
                margin: '0 auto 30px',
                lineHeight: '1.7',
                maxWidth: '640px',
                fontWeight: '400',
                fontStyle: 'italic',
                fontFamily: "'Playfair Display', Georgia, serif",
              }}
            >
              Conteúdo especializado sobre terrenos, investimento e vida no interior de SP e MG
            </p>

            {/* BREADCRUMB CENTRALIZADO */}
            <nav
              style={{
                fontSize: isMobile ? '0.72rem' : '0.82rem',
                color: 'rgba(255,255,255,0.7)',
                letterSpacing: '1.5px',
                marginBottom: '35px',
                textTransform: 'uppercase',
                fontWeight: '500',
              }}
            >
              <Link
                href="/"
                style={{
                  color: '#D48C5B',
                  textDecoration: 'none',
                  fontWeight: '600',
                }}
              >
                Home
              </Link>
              <span style={{ margin: '0 12px', color: 'rgba(255,255,255,0.4)' }}>›</span>
              <span style={{ color: 'rgba(255,255,255,0.7)' }}>Blog</span>
            </nav>

            {/* LINHA DIVISÓRIA ELEGANTE */}
            <div
              style={{
                width: isMobile ? '80px' : '150px',
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, #D48C5B 50%, transparent 100%)',
                margin: '0 auto 35px',
              }}
            />

            {/* BOTÕES DE AÇÃO */}
            <div
              style={{
                display: 'flex',
                gap: isMobile ? '10px' : '16px',
                justifyContent: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
                maxWidth: '600px',
                margin: '0 auto',
              }}
            >
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: '#25D366',
                  color: '#fff',
                  padding: isMobile ? '14px 26px' : '16px 38px',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.78rem' : '0.88rem',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(37, 211, 102, 0.45)',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                📲 Falar no WhatsApp
              </a>
              <Link
                href="/#terrenos"
                style={{
                  backgroundColor: '#D48C5B',
                  color: '#fff',
                  padding: isMobile ? '14px 26px' : '16px 38px',
                  borderRadius: '4px',
                  fontSize: isMobile ? '0.78rem' : '0.88rem',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  boxShadow: '0 8px 25px rgba(212, 140, 91, 0.5)',
                  transition: 'all 0.3s ease',
                  width: isMobile ? '100%' : 'auto',
                  textAlign: 'center',
                  boxSizing: 'border-box',
                }}
              >
                Ver Terrenos
              </Link>
            </div>
          </div>

          {/* Scroll indicator - escondido no mobile */}
          {!isMobile && (
            <div
              style={{
                position: 'absolute',
                bottom: '25px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 5,
              }}
            >
              <div
                style={{
                  width: '1px',
                  height: '40px',
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 100%)',
                }}
              />
            </div>
          )}
        </header>

        {/* CONTEÚDO PRINCIPAL */}
        <main
          style={{
            padding: isMobile ? '30px 14px 0' : '50px 20px 0',
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
          }}
        >
          <ArticleIndex />

          {articles.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: isMobile ? '50px 20px' : '80px 40px',
                backgroundColor: '#fff',
                borderRadius: '4px',
                border: '1px dashed #D48C5B',
                margin: isMobile ? '20px 0' : '35px 0',
              }}
            >
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '15px' }}>
                📝
              </span>
              <h2
                style={{
                  color: '#2C2C2C',
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: isMobile ? '1.3rem' : '1.6rem',
                  fontWeight: '600',
                  margin: '0 0 12px 0',
                }}
              >
                Em breve, novos artigos
              </h2>
              <p
                style={{
                  color: '#666',
                  fontSize: isMobile ? '0.9rem' : '1rem',
                  margin: '0 auto 25px',
                  lineHeight: '1.7',
                  maxWidth: '500px',
                }}
              >
                Estamos preparando conteúdos especiais sobre terrenos, investimento e vida no
                interior de SP e MG.
              </p>
              <a
                href={LINK_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  backgroundColor: '#D48C5B',
                  color: '#fff',
                  padding: '12px 30px',
                  borderRadius: '4px',
                  fontSize: '0.85rem',
                  fontWeight: '600',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                }}
              >
                Falar com a gente
              </a>
            </div>
          ) : (
            isClient && (
              <>
                {articles.map((article, index) => (
                  <div key={article.id} ref={(el) => (articleRefs.current[index] = el)}>
                    <section
                      id={`artigo-${article.id}`}
                      style={{
                        display: currentPage === article.id ? 'block' : 'none',
                        margin: isMobile ? '20px 0' : '35px 0',
                      }}
                    >
                      <article
                        style={{
                          background: '#fff',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
                          border: '1px solid #eee',
                        }}
                      >
                        <div style={{ padding: isMobile ? '25px 20px' : '40px 35px' }}>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              marginBottom: '20px',
                              fontSize: isMobile ? '0.72rem' : '0.82rem',
                              color: '#999',
                              flexWrap: 'wrap',
                              gap: '10px',
                              paddingBottom: '15px',
                              borderBottom: '1px solid #eee',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'center',
                              }}
                            >
                              <span>
                                {new Date(article.date).toLocaleDateString('pt-BR')}
                              </span>
                              <span style={{ color: '#ccc' }}>•</span>
                              <span>{article.readTime}</span>
                            </div>
                            <span
                              style={{
                                color: '#D48C5B',
                                fontWeight: '600',
                                fontSize: isMobile ? '0.65rem' : '0.72rem',
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase',
                              }}
                            >
                              {article.category}
                            </span>
                          </div>

                          <h2
                            style={{
                              color: '#2C2C2C',
                              fontFamily: "'Playfair Display', Georgia, serif",
                              fontSize: isMobile ? '1.4rem' : 'clamp(1.8rem, 3vw, 2.3rem)',
                              fontWeight: '600',
                              margin: '0 0 18px 0',
                              lineHeight: '1.25',
                            }}
                          >
                            {article.title}
                          </h2>

                          <p
                            style={{
                              color: '#4A4A4A',
                              fontSize: isMobile ? '0.92rem' : '1.05rem',
                              lineHeight: '1.7',
                              margin: '0 0 25px 0',
                            }}
                          >
                            {article.description}
                          </p>

                          <ShareButtons
                            articleTitle={article.title}
                            articleId={article.id}
                            articlesPerPage={1}
                          />
                        </div>

                        <div
                          style={{
                            width: '100%',
                            height: isMobile ? '240px' : '450px',
                            overflow: 'hidden',
                          }}
                        >
                          <img
                            src={article.image}
                            alt={article.title}
                            loading="lazy"
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>

                        <div style={{ padding: isMobile ? '25px 20px' : '40px 35px' }}>
                          <div
                            dangerouslySetInnerHTML={{ __html: article.content }}
                            style={{
                              fontSize: isMobile ? '0.92rem' : '1.02rem',
                              lineHeight: '1.75',
                              color: '#2C2C2C',
                              fontFamily: "'Inter', sans-serif",
                            }}
                          />
                        </div>
                      </article>
                    </section>
                  </div>
                ))}

                <QuickNavigation />
              </>
            )
          )}

          {articles.length > 0 && !isClient && (
            <div style={{ padding: '40px', textAlign: 'center', color: '#999' }}>
              ⏳ Carregando...
            </div>
          )}
        </main>

        {/* CTA FINAL */}
        <section
          style={{
            marginTop: isMobile ? '50px' : '80px',
            padding: isMobile ? '45px 20px' : '70px 40px',
            backgroundImage: 'url(/images/home1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            position: 'relative',
            overflow: 'hidden',
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
                fontSize: isMobile ? '1.6rem' : 'clamp(2rem, 4vw, 2.8rem)',
                fontWeight: '600',
                marginBottom: '16px',
                lineHeight: '1.2',
              }}
            >
              Pronto para sair do caos?
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontSize: isMobile ? '0.92rem' : '1.05rem',
                marginBottom: '30px',
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
                padding: isMobile ? '14px 24px' : '17px 50px',
                backgroundColor: '#25D366',
                color: '#fff',
                borderRadius: '4px',
                fontSize: isMobile ? '0.82rem' : '0.95rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(37, 211, 102, 0.45)',
              }}
            >
              📲 Falar com a Marques Alta Terra
            </a>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            marginTop: isMobile ? '50px' : '80px',
            padding: isMobile ? '40px 20px 25px' : '60px 40px 30px',
            backgroundColor: '#1A1A1A',
            color: '#999',
          }}
        >
          <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '35px' }}>
              <img
                src="/images/logo.png"
                alt="Marques Alta Terra"
                style={{
                  height: isMobile ? '80px' : '180px',
                  width: 'auto',
                  maxWidth: isMobile ? '200px' : '260px',
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
                    { label: 'Blog', href: '/blog' },
                    { label: 'Quem Somos', href: '/quem-somos' },
                  ].map((item, i) => (
                    <li key={i} style={{ marginBottom: '9px' }}>
                      <Link
                        href={item.href}
                        style={{
                          color: '#999',
                          textDecoration: 'none',
                          fontSize: '0.88rem',
                        }}
                      >
                        {item.label}
                      </Link>
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
                  Categorias do Blog
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    '📍 Regiões',
                    '💡 Dicas de Compra',
                    '📈 Investimento',
                    '🌄 Estilo de Vida',
                  ].map((cat, i) => (
                    <li key={i} style={{ marginBottom: '9px' }}>
                      <span style={{ color: '#999', fontSize: '0.88rem' }}>{cat}</span>
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

            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent 0%, #2C2C2C 50%, transparent 100%)',
                maxWidth: '900px',
                margin: '0 auto 25px',
              }}
            />

            <div style={{ textAlign: 'center' }}>
              <p
                style={{
                  color: '#888',
                  fontSize: isMobile ? '0.72rem' : '0.85rem',
                  marginBottom: '10px',
                  lineHeight: '1.7',
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
                }}
              >
                CNPJ: 39.868.744/0001-68 — MARZON SOLUÇÕES COMERCIAIS LTDA
              </p>
              <p
                style={{
                  color: '#555',
                  fontSize: isMobile ? '0.62rem' : '0.7rem',
                  margin: 0,
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