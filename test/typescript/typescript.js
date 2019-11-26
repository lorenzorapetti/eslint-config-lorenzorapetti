/* eslint-disable */
const typescriptRules = require('../../typescript');

const [{ files, ...rules }] = typescriptRules.overrides;

module.exports = { ...rules };
