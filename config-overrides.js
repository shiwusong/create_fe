const fs = require('fs')
const path = require('path')

const paths = require("react-scripts/config/paths");
paths.appSrc = path.join(__dirname, '/client')
paths.appIndexJs = path.join(paths.appSrc, '/entry.js')
/* config-overrides.js */
module.exports = function override(config, env) {
  console.log(config)
  // throw new Error()
  // config.entry[1] = 
  //do stuff with the webpack config...
  return config;
}