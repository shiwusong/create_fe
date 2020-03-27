const fs = require('fs')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const paths = require("react-scripts/config/paths");

paths.appSrc = path.join(paths.appPath, 'client')
paths.appPublic = path.join(paths.appSrc, 'public')
paths.appHtml = path.join(paths.appPublic, 'index.html')
paths.appIndexJs = path.join(paths.appSrc, 'entry.js')

/* config-overrides.js */
module.exports = function override(config, env) {
  const { ANALYZE } = process.env
  if (ANALYZE === '1')
    config.plugins.push(new BundleAnalyzerPlugin())
  // throw new Error()

  //do stuff with the webpack config...
  return config;
}