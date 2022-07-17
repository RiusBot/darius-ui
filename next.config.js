const { public: publicEnv } = require('./environments');
const { i18n } = require('./next-i18next.config');

module.exports = {
  publicEnv,
  distDir: 'build',
  i18n,
}