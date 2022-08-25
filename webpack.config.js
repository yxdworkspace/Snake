const path = require('path')

const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',

        environment:{
            arrowFunction:false,
            const:false
        }
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [/*{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            [
                                '@babel/preset-env',
                                {
                                    targets:{
                                        'chrome':'88'
                                    },
                                    'core-js':'3',
                                    'useBuiltIns':'usage'
                                }
                            ]
                        ]
                    }
                },*/'ts-loader'],
                exclude: /node-modules/
            },
            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",
                    {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions:{
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers:'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    //配置webpack的插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title:'这是一个自定义的title'
            template: "./src/index.html"
        }),
    ],
    resolve:{
        extensions:['.ts','.js']
    }
}