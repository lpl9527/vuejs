/*
    webpack打包基础配置*/

const path = require('path')    //从node包中导入对象，这里要导入node环境，使用命令 npm init。执行完成后会生成package.json文件。若此
                                // 文件还依赖于其它配置，则使用npm install 安装更新。
const webpack = require('webpack')  //导入webpack
const HtmlWebpackPlugin = require('html-webpack-plugin')    //引入入口文件打包插件

//commonJS导出
module.exports = {

    entry: './src/main.js',  //定义打包入口文件
    output: {           //定义导出文件
        path: path.resolve(__dirname, '../dist'),    //注意：这里是绝对路径。我们可以使用node的path动态获取路径。其中__dirname是node上下
                                                  // 文中定义的表示webpack.config.js所在绝对路径。resolve可以将两个路径拼接起来。
        filename: 'bundle.js',
        //publicPath: 'dist/'     //任何url在package.json中配置的入口文件根路径的基础上都会加上此路径
    },
    module: {
        rules: [
            {   //配置css打包loader
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //css-loader只负责将css文件进行加载，style-loader负责将样式添加到dom
            },
            {   //配置less打包loader
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {   //配置url图片引入打包loader依赖
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片小于limit时，会将图片名称改为32位哈希值，使用base64将图片文件加密。
                            //当加载的图片大于limit时，会将图片加载到发布目录下。会使用file-loader加载图片，file-loader不需要配置，只安装即可
                            limit: 20000     //限制图片大小，默认8KB
                        }
                    }
                ]
            }

        ]
    },
    resolve: {
        alias: {    //寻找node_modules下面的可编译template的Vue版本，解决Vue template使用失败问题
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin('最终版权归lpl所有'),      //配置打包文件版权信息
        new HtmlWebpackPlugin({     //将index.html打包到发布目录
            template: 'index.html'  //指定入口文件打包参考文件
        }),
    ]
}
