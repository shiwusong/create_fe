const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const paths = require("react-scripts/config/paths");
const { showWebpackLog, serverPort } = require('./config')

paths.appSrc = path.join(paths.appPath, 'client')
paths.appPublic = path.join(paths.appSrc, 'public')
paths.appHtml = path.join(paths.appPublic, 'index.html')
paths.appIndexJs = path.join(paths.appSrc, 'entry.js')

/* config-overrides.js */
module.exports = {
  webpack: (config, env) => {
    const { ANALYZE } = process.env

    config.resolve.plugins = config.resolve.plugins.filter(plugin => {
      return !(plugin instanceof ModuleScopePlugin)
    })

    if (ANALYZE === '1')
      config.plugins.push(new BundleAnalyzerPlugin())

    //do stuff with the webpack config...
    return config;
  },
  devServer: configFunction => {
    return (proxy, allowedHost) => {
      proxy = {
        '/api': {
          target: `http://localhost:${serverPort}`,
        },
      }
      const config = configFunction(proxy, allowedHost);
      config.overlay = true
      config.quiet = !showWebpackLog
      config.after = (app, server, compiler) => {
        compiler.plugin('done', status => {
          require('./index.js')
        })
      }
      return config;
    }
  }
}
