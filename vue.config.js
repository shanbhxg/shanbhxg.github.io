const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: '/',  // Replace this with your desired base path
  transpileDependencies: true,
  chainWebpack(config) {
    // Add rule to handle .md files as raw text
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')  // Use raw-loader to load .md files as raw text
      .loader('raw-loader')
      .end();
  }
});
