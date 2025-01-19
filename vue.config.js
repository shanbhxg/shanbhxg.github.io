const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/', 
  transpileDependencies: true,
  chainWebpack(config) {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader') 
      .loader('raw-loader')
      .end();
  }
});
