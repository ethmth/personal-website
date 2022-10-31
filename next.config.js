module.exports = {
  reactStrictMode: true, // was there by default
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.html$/i,
      loader: "html-loader",
    });

    // Important: return the modified config
    return config;
  },
};
