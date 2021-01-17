
const path = require('path')
const autoprefixer = require('autoprefixer')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',                        //tells webpack how it should bundle our code
    entry: './src/index.js',                    //entry point of webpack
    output: {
        path: path.resolve(__dirname, 'dist'),  //path of the generated output
        filename: 'bundle.js',                   //filename of generated file
        publicPath: ''
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_module/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader', options: {
                        importLoaders: 1,
                        modules: {
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                    }},
                    { loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: () => [autoprefixer() ]
                    }}
                ] 
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: __dirname + '/src/index.html',                 //starting point for html plugin
            inject: 'body'
        })
    ]
}