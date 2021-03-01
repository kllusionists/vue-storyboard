module.exports = {
  publicPath: process.env.NODE_ENV !== 'production' ? '/' : '/vue-storyboard/',

  productionSourceMap: process.env.NODE_ENV !== 'production',

  chainWebpack: config => {
    config.plugin('html')
      .tap(args => {
        args[0].title = 'Vue-StoryBoard'
        return args
      })
  },
  // 配置sass、less
  css: {
    extract: false,
    sourceMap: process.env.NODE_ENV !== 'production',
    loaderOptions: {
      sass: {
        prependData: '@import "@/style/index.scss";'
      },
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
}
