const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = {
  target: 'serverless',
  async rewrites() {
    return [
      {
        source: '/privacy.html',
        destination: '/privacy',
      },
      {
        source: '/terms.html',
        destination: '/terms',
      },
    ]
  },
}


module.exports = withPlugins([optimizedImages], nextConfiguration);
