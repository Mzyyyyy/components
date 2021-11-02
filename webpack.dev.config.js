const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',
    entry:{
        index:path.join(__dirname,'examples/main.js'),
        // vendors:['vue','vue-router']
    },
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {test:/\.vue$/,use:['vue-loader']}
        ]
    },
    plugins:[
        
        new HtmlWebpackPlugin(
            {
                inject:true,
                // filename:path.join(__dirname,'./examples/dist/index.html'),
                template:path.join(__dirname,'./examples/index.html'),
            }
        ),
        new VueLoaderPlugin(),
    ],
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 8888,
        historyApiFallback:{
            index:'/examples/index.html'
        }
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue.esm.js'
        }
    }
}