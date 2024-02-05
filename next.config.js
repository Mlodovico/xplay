module.exports = {
    // Desativa o SSR globalmente
    ssr: false,
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home',
          permanent: true,
        },
      ];
    },
  };