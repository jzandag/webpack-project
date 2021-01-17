
const path = require('path')

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
            }
        ]
    }
}