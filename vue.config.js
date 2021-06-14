module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://open.douyucdn.cn/api/RoomApi',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
    
  }
}
// module.exports = {
//   dev: {
//     // Paths
//     assetsSubDirectory: 'static',
//     assetsPublicPath: '/',
//     proxyTable: {
//        '/api': { //使用"/api"来代替"真实地址" 
//        target: 'http://open.douyucdn.cn/api/RoomApi',//真实地址
//        secure: false,//https:
//        changeOrigin: true,//改变源 
//        pathRewrite: {
//        '^/api/': ''//路径重写 
//         }
//       }
//     }
//   }}

//   module.exports = {
    
//    devServer: {
//      proxy: {
//        '/api': {
//          changeOrigin: true,
//          target: 'http://open.douyucdn.cn/api/RoomApi'
//        },
       
//      }
//    }
  
//  }
