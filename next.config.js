const Dotenv = require('dotenv-webpack');
module.exports = {
  reactStrictMode: true,
  webpack(config, { dev, webpack }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });
    config.plugins.push(
      new webpack.DefinePlugin({
        API_DOMAIN:
          process.env.NODE_ENV === 'production'
            ? JSON.stringify(process.env.API_URL)
            : JSON.stringify(process.env.DEV_API_URL),
      }),
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new Dotenv({ silent: true }),
    );
    return config;
  },
};
