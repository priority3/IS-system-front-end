const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 5008, // 端口
  },
  // transpileDependencies: ['@arcgis']
  publicPath: process.env.NODE_ENV === 'production'
    ? '/IS-system-front-end/' // 替换 <repository-name> 为你的仓库名称
    : '/'
})

