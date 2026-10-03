// scripts/generate-index.js
// Gera automaticamente o public/index.json a partir dos arquivos em /articles
// Uso: node scripts/generate-index.js
// Ou:  npm run generate-index

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========== CAMINHOS ========== //
const ARTICLES_DIR = path.join(__dirname, '..', 'articles');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'index.json');

// ========== FUNÇÃO PARA GERAR SLUG (igual à do blog.js) ========== //
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

// ========== FUNÇÃO PRINCIPAL ========== //
function generateIndex() {
  console.log('');
  console.log('═══════════════════════════════════════════════════');
  console.log('🚀  GERADOR DE ÍNDICE — BLOG MARQUES ALTA TERRA');
  console.log('═══════════════════════════════════════════════════');
  console.log('');

  // ✅ Verifica se a pasta articles existe
  if (!fs.existsSync(ARTICLES_DIR)) {
    console.error('❌ Pasta /articles não encontrada!');
    console.error(`   Caminho esperado: ${ARTICLES_DIR}`);
    console.error('');
    console.error('💡 Crie a pasta na raiz do projeto:');
    console.error('   terreno/articles/');
    process.exit(1);
  }

  // ✅ Lê todos os arquivos da pasta articles
  const files = fs.readdirSync(ARTICLES_DIR);
  const jsonFiles = files.filter((f) => f.endsWith('.json'));

  if (jsonFiles.length === 0) {
    console.warn('⚠️  Nenhum arquivo .json encontrado em /articles');
    console.warn('   Criando index.json vazio...');
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify([], null, 2));
    console.log('');
    console.log('✅ public/index.json criado vazio.');
    console.log('');
    return;
  }

  const articles = [];
  const errors = [];

  console.log(`📂 Encontrados ${jsonFiles.length} arquivos JSON em /articles`);
  console.log('');

  // ✅ Lê e valida cada arquivo
  for (const file of jsonFiles) {
    const fullPath = path.join(ARTICLES_DIR, file);

    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      const article = JSON.parse(content);

      // Validação básica dos campos obrigatórios
      const requiredFields = ['id', 'title', 'description', 'image', 'content'];
      const missingFields = requiredFields.filter((field) => !article[field]);

      if (missingFields.length > 0) {
        errors.push(`⚠️  ${file} — campos faltando: ${missingFields.join(', ')}`);
        continue;
      }

      // Garante que o ID é um número
      article.id = Number(article.id);

      // Adiciona o slug gerado (útil para debug)
      article.slug = gerarSlug(article.title);

      articles.push(article);

      console.log(
        `   ✅ [ID ${String(article.id).padStart(3, '0')}] ${article.title.substring(0, 60)}${
          article.title.length > 60 ? '...' : ''
        }`
      );
    } catch (error) {
      errors.push(`❌ ${file} — erro ao ler/parsear: ${error.message}`);
    }
  }

  // ✅ Verifica se encontrou algum artigo válido
  if (articles.length === 0) {
    console.error('');
    console.error('❌ Nenhum artigo válido encontrado!');
    if (errors.length > 0) {
      console.error('');
      console.error('Erros encontrados:');
      errors.forEach((e) => console.error(`   ${e}`));
    }
    process.exit(1);
  }

  // ✅ Ordena por ID (crescente)
  articles.sort((a, b) => a.id - b.id);

  // ✅ Verifica IDs duplicados
  const ids = articles.map((a) => a.id);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicateIds.length > 0) {
    console.warn('');
    console.warn(`⚠️  ATENÇÃO: IDs duplicados encontrados: ${[...new Set(duplicateIds)].join(', ')}`);
    console.warn('   Verifique os arquivos JSON e corrija os IDs.');
  }

  // ✅ Cria a pasta public se não existir
  if (!fs.existsSync(PUBLIC_DIR)) {
    fs.mkdirSync(PUBLIC_DIR, { recursive: true });
    console.log('');
    console.log(`📁 Pasta /public criada automaticamente`);
  }

  // ✅ Salva o index.json
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(articles, null, 2));

  // ✅ Exibe relatório final
  console.log('');
  console.log('═══════════════════════════════════════════════════');
  console.log(`✅  SUCESSO — ${articles.length} artigo(s) exportado(s)`);
  console.log(`📄  Arquivo: public/index.json`);
  console.log(`📦  Tamanho: ${(fs.statSync(OUTPUT_FILE).size / 1024).toFixed(2)} KB`);
  console.log('═══════════════════════════════════════════════════');

  // Mostra os erros se houver
  if (errors.length > 0) {
    console.log('');
    console.log('⚠️  Avisos:');
    errors.forEach((e) => console.log(`   ${e}`));
  }

  // Range de IDs
  if (articles.length > 0) {
    console.log('');
    console.log(`🔢  IDs: ${articles[0].id} → ${articles[articles.length - 1].id}`);
    console.log(`📅  Último artigo: ${articles[articles.length - 1].date || 'sem data'}`);
  }

  console.log('');
}

// ========== EXECUTA ========== //
generateIndex();