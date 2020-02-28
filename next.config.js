const withSass = require('@zeit/next-sass');

module.exports = {
  target: 'serverless',
  webpack: (config, options) => {
    config.resolve.modules.push(path.resolve('./'))
    return config;
  },
  ...withSass()
}
