module.exports = {
  // publicPath: './',
  devServer: {
    port: 9001, //  端口号的配置
    open: true, // 自动打开浏览器
    // proxy: {
    //   '/api':{                                // 要代理的接口名
    //     target:'http://localhost:8002',   // 要代理的接口地址
    //     changeOrigin:true,                            // 允许跨域
    //     pathRewrite:{'^/api':''}            // 接口名重写
    //   }
    // }
    // proxy: {
    //   // proxy all requests starting with /api to jsonplaceholder
    //   '/api': {
    //     target: 'http://localhost:8002/',   //代理接口
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''    //代理的路径
    //     }
    //   }
    // }

  },
}
