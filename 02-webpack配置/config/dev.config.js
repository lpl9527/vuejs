/*
    开发阶段webpack打包配置文件*/

const WebpackMerge = require('webpack-merge')   //导入合并依赖
const baseConfig = require('./base.config')   //获取webpack基础配置文件


//commonJS导出
module.exports = WebpackMerge(baseConfig, module.exports = {  //将分离的配置文件进行合并

    devServer: {    //配置修改就直接打包到内存，不同手动打包，以服务的方式进行访问：localhost:8080。开发阶段使用，部署阶段去掉
        contentBase: './dist',
        inline: true
    }
})

