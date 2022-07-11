const path = require('path');
const _ = require('lodash');
const dotenv = require('dotenv');

const NEXT_PUBLIC_PREFIX = 'NEXT_PUBLIC_';
const ENV = process.env.ENV || 'dev';

const loadEnv = (filename) => dotenv.config({
  path: path.resolve(__dirname, filename),
});

const baseVars = loadEnv('.env.base');

const envVars = ((env) => {
  switch (env) {
    case 'prod':
      return loadEnv('.env.production');
    case 'dev':
      return loadEnv('.env.development');
  }
})(ENV);

const privateVars = loadEnv('.env.local');

const publicVars = _.pickBy(
  _.assign({}, baseVars.parsed, envVars.parsed, privateVars.parsed),
  (value, key) => _.startsWith(key, NEXT_PUBLIC_PREFIX),
);

module.exports = {
  public: publicVars,
};