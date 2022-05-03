module.exports = {
  exportTralingSlash: true,
  trailingSlash: true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/login': { page: '/login' },
      '/account': { page: '/account' },
      '/forgot': { page: '/forgot' },
      '/login': { page: '/login' },
      '/register': { page: '/register' },
    }
  },
  images: {
    loader: 'akamai',
    path: '',
  }
}
