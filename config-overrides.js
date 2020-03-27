const fs = require('fs')
const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const paths = require("react-scripts/config/paths");
paths.appSrc = path.join(__dirname, '/client')
paths.appIndexJs = path.join(paths.appSrc, '/entry.js')
/* config-overrides.js */
module.exports = function override(config, env) {
  console.log(config)
  config.plugins.push(new BundleAnalyzerPlugin())
  // throw new Error()

  //do stuff with the webpack config...
  return config;
}