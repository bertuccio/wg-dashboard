// vue.config.js
const path = require('path')
const webpack = require('webpack')
module.exports = {
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        "sb-admin-2": path.resolve(__dirname, 'node_modules/startbootstrap-sb-admin-2'),
        "assets": path.resolve(__dirname, 'src/assets')
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}