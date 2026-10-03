/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async rewrites() {
    return [
      // Reescreve /blog/slug-do-artigo ? /blog?slug=slug-do-artigo
      {
        source: '/blog/:slug',
        destination: '/blog?slug=:slug',
      },
      // Mantém compatibilidade com /blog
      {
        source: '/blog',
        destination: '/blog',
      },
    ];
  },
};

export default nextConfig;