module.exports = {
    lintOnSave: false,  //关闭语法检查，比如定义一个对象但是不去用，这时不会报错
    devServer: {
        port: 8089, 
        //配置一：无法配置多个代理，无法控制走不走代理（8080有的话，不走代理）
        //proxy: 'http://localhost:8088'
        //配置二：可以配置多个代理规则
        proxy: {
            '/hjg': {
                target: 'http://localhost:8088',
                pathRewrite: {'^/hjg' : ''},    //路径重写，将/hjg路径换为''
                ws: true, //用于支持websocket
                changeOrigin: true  //决定请求头的host字段
            }
        }
    }
}