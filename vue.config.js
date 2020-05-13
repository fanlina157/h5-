const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: '<url>',
        ws: true,
        changeOrigin: true
        // pathRewrite: {
        //   '^/api': '/'
        // }
      },
      '/foo': {
        target: '<other_url>'
      }
    },
    hot: true,
    clientLogLevel: 'warning'
  },
  chainWebpack: config => {
    // 添加别名
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('api', resolve('src/api'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'));
  }
};
