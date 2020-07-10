/*
    生产webpack打包配置文件*/


const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')    //导入js压缩
const WebpackMerge = require('webpack-merge')   //导入合并依赖
const baseConfig = require('./base.config')   //获取webpack基础配置文件


//commonJS导出
module.exports = WebpackMerge(baseConfig, {     //将分离的配置文件进行合并

    plugins: [
        new UglifyJsWebpackPlugin()     //开发阶段关闭，部署生产阶段打开
    ]
})
