const optimizedImages = require("next-optimized-images");

module.exports =
  optimizedImages({
    webpackDevMiddleware: (config) => {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };

      return config;
    },
    images: {
      disableStaticImages: true,
    },
    reactStrictMode: true,
    trailingSlash: true,
  });
