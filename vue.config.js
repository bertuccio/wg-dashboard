// vue.config.js
const path = require('path')
const webpack = require('webpack')
const apiClient = process.env.VUE_APP_API_CLIENT // mock or server

module.exports = {
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        'sb-admin-2': path.resolve(__dirname, 'node_modules/startbootstrap-sb-admin-2'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'api-client': path.resolve(__dirname, `src/vuex/api/${apiClient}`)
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