// /data/cidades.js
// ============================================================
// FONTE ÚNICA DE VERDADE
// - cidades: terrenos por região (Joanópolis, Bragança, Itapeva)
// - imoveis: imóveis de alto padrão (Casa Nero, futuros imóveis)
// ============================================================

// ============================================================
// TERRENOS — CIDADES / REGIÕES
// ============================================================
export const cidades = [
  {
    slug: 'joanopolis',
    nome: 'Joanópolis',
    estado: 'SP',
    status: 'disponivel', // 'disponivel' | 'em-breve'
    imagem: '/images/hero.jpeg',
    descricaoCurta:
      '280m² de natureza, luz e vista. A 20min do centro de Joanópolis e 1h30 de São Paulo.',
    precoAPartirDe: 129000,
    quantidadeTerrenos: 1,
    destaques: ['Platô pronto', 'Luz instalada', 'Terreno de esquina'],
    whatsapp: '5511942956152',
    whatsappMensagem:
      'Olá! Vi o site da Marques Alta Terra e me interessei pelo terreno de Joanópolis. Pode me passar mais informações?',
  },
  {
    slug: 'braganca',
    nome: 'Bragança Paulista',
    estado: 'SP',
    status: 'em-breve',
    imagem: '/images/home2.png',
    descricaoCurta:
      'Novos terrenos chegando na região de Bragança Paulista. Em breve mais detalhes.',
    precoAPartirDe: null,
    quantidadeTerrenos: 0,
    destaques: ['Em breve'],
    whatsapp: '5511913572902',
    whatsappMensagem:
      'Olá! Vi no site da Marques Alta Terra que terrenos em Bragança Paulista estão chegando. Quero ser avisado quando estiverem disponíveis.',
  },
  {
    slug: 'itapeva',
    nome: 'Itapeva',
    estado: 'MG',
    status: 'disponivel',
    imagem: '/images/itapeva001.jpeg',
    descricaoCurta:
      'Quinta do Arvoredo: condomínio fechado com lotes a partir de 600m². A 30 min de Bragança Paulista.',
    precoAPartirDe: 165000,
    quantidadeTerrenos: 210,
    destaques: ['A partir de 600m²', 'Condomínio fechado', 'Parcelas de R$ 1.750'],
    whatsapp: '5511940311644',
    whatsappMensagem:
      'Olá, Anderson! Vim pelo site Marques Alta Terra e quero saber mais sobre os lotes do Quinta do Arvoredo em Itapeva - MG.',
  },
];

// ============================================================
// IMÓVEIS DE ALTO PADRÃO
// ============================================================
// Para adicionar um novo imóvel:
// 1. Adicione um objeto neste array
// 2. Crie a página correspondente em /pages/[slug].js
// 3. Coloque a imagem em /public/images/
// ============================================================
export const imoveis = [
  {
    slug: 'casa-nero',
    nome: 'Casa Nero',
    tipo: 'Casa de Alto Padrão',
    status: 'disponivel', // 'disponivel' | 'em-breve' | 'vendido'
    categoria: 'Riviera de São Lourenço',
    localizacao: 'Bertioga — SP',
    condominio: 'Riviera de São Lourenço',
    arquiteto: 'Dalber Aguero',
    imagem: '/images/casa-nero1.jpg',
    imagens: [
      '/images/casa-nero1.jpg',
      '/images/casa-nero2.jpg',
      '/images/casa-nero3.jpg',
      '/images/casa-nero4.jpg',
      '/images/casa-nero5.jpg',
    ],
    descricaoCurta:
      'Assinada pelo arquiteto Dalber Aguero. Uma obra de arquitetura contemporânea onde a pedra Nero encontra o mar.',
    preco: 7800000,
    areaTerreno: 369,
    areaConstruida: 331.68,
    quartos: 5,
    suites: 5,
    garagem: 4,
    destaques: ['5 Suítes', '331,68m²', 'Piscina Aquecida', 'Sauna'],
    whatsapp: '5511940311644',
    whatsappMensagem:
      'Olá, Anderson! Vi a Casa Nero no site da Marques Alta Terra e gostaria de mais informações sobre esse imóvel na Riviera de São Lourenço.',
  },
{
  slug: 'casa-marion',
  nome: 'Casa Marion',
  tipo: 'Casa de Alto Padrão',
  status: 'disponivel',
  categoria: 'Golf Riviera de São Lourenço',
  localizacao: 'Bertioga — SP',
  condominio: 'Golf Riviera de São Lourenço',
  arquiteta: 'Leila Lemos',
  construtora: 'MV Obras',
  imagem: '/images/casa-marion1.jpg',
  descricaoCurta:
    'Assinada pela arquiteta Leila Lemos. Uma obra contemporânea no Módulo do Golf, onde a sofisticação encontra o mar.',
  preco: 16500000,
  areaTerreno: 600,
  areaConstruida: 559,
  quartos: 6,
  suites: 6,
  garagem: 5,
  destaques: ['6 Suítes', '559m²', 'Piscina com Prainha', 'Casa Inteligente Alexa'],
  whatsapp: '5511940311644',
  whatsappMensagem:
    'Olá, Anderson! Vi a Casa Marion no site da Marques Alta Terra e gostaria de mais informações sobre esse imóvel no Golf Riviera de São Lourenço.',
},
];

// ============================================================
// HELPERS
// ============================================================

// Cidades
export const cidadesDisponiveis = cidades.filter((c) => c.status === 'disponivel');
export const cidadesEmBreve = cidades.filter((c) => c.status === 'em-breve');
export const getCidadePorSlug = (slug) => cidades.find((c) => c.slug === slug);

// Imóveis
export const imoveisDisponiveis = imoveis.filter((i) => i.status === 'disponivel');
export const imoveisEmBreve = imoveis.filter((i) => i.status === 'em-breve');
export const getImovelPorSlug = (slug) => imoveis.find((i) => i.slug === slug);

// ============================================================
// FORMATAÇÃO
// ============================================================

// Formata preço em BRL
export const formatarPreco = (valor) => {
  if (!valor) return null;
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  });
};

// Formata preço em milhões (ex: R$ 7.8M)
export const formatarPrecoMilhoes = (valor) => {
  if (!valor) return null;
  const milhoes = valor / 1000000;
  return `R$ ${milhoes.toFixed(1).replace('.0', '')}M`;
};