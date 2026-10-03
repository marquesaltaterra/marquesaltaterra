<<<<<<< HEAD
// /data/cidades.js
// ============================================================
// FONTE ÚNICA DE VERDADE DAS CIDADES
// Para adicionar uma cidade nova: adicione um objeto neste array
// e crie o arquivo correspondente em /pages/[slug].js
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
    status: 'disponivel', // ✅ Agora disponível
    imagem: '/images/itapeva001.jpeg', // ✅ Imagem do Quinta do Arvoredo
    descricaoCurta:
      'Quinta do Arvoredo: condomínio fechado com lotes a partir de 600m². A 30 min de Bragança Paulista.',
    precoAPartirDe: 165000, // ✅ Preço real
    quantidadeTerrenos: 210,
    destaques: ['A partir de 600m²', 'Condomínio fechado', 'Parcelas de R$ 1.750'],
    whatsapp: '5511940311644', // ✅ WhatsApp do Anderson (vendedor Itapeva)
    whatsappMensagem:
      'Olá, Anderson! Vim pelo site Marques Alta Terra e quero saber mais sobre os lotes do Quinta do Arvoredo em Itapeva - MG.',
  },
];

// Helpers
export const cidadesDisponiveis = cidades.filter((c) => c.status === 'disponivel');
export const cidadesEmBreve = cidades.filter((c) => c.status === 'em-breve');
export const getCidadePorSlug = (slug) => cidades.find((c) => c.slug === slug);

// Formata preço em BRL
export const formatarPreco = (valor) => {
  if (!valor) return null;
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  });
=======
// /data/cidades.js
// ============================================================
// FONTE ÚNICA DE VERDADE DAS CIDADES
// Para adicionar uma cidade nova: adicione um objeto neste array
// e crie o arquivo correspondente em /pages/[slug].js
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
    status: 'disponivel', // ✅ Agora disponível
    imagem: '/images/itapeva001.jpeg', // ✅ Imagem do Quinta do Arvoredo
    descricaoCurta:
      'Quinta do Arvoredo: condomínio fechado com lotes a partir de 600m². A 30 min de Bragança Paulista.',
    precoAPartirDe: 165000, // ✅ Preço real
    quantidadeTerrenos: 210,
    destaques: ['A partir de 600m²', 'Condomínio fechado', 'Parcelas de R$ 1.750'],
    whatsapp: '5511940311644', // ✅ WhatsApp do Anderson (vendedor Itapeva)
    whatsappMensagem:
      'Olá, Anderson! Vim pelo site Marques Alta Terra e quero saber mais sobre os lotes do Quinta do Arvoredo em Itapeva - MG.',
  },
];

// Helpers
export const cidadesDisponiveis = cidades.filter((c) => c.status === 'disponivel');
export const cidadesEmBreve = cidades.filter((c) => c.status === 'em-breve');
export const getCidadePorSlug = (slug) => cidades.find((c) => c.slug === slug);

// Formata preço em BRL
export const formatarPreco = (valor) => {
  if (!valor) return null;
  return valor.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 0,
  });
>>>>>>> e5ed39193067114662a7b062fa721c73c361b562
};