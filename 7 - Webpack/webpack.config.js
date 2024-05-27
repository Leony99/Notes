const mode = process.env.NODE_ENV !== 'production';
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const terserPlugin = require('terser-webpack-plugin')
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: mode ? 'development':'production',
    entry: './src/index.js', //Module to start the dependencies list
    output: {
        path: __dirname + '/dist', //Generated files path
        filename: 'script.js' //.js generated file name
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'style.css' //.css generated file name
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader, //Add .css to .css generated file
                    'css-loader' //Read imports, urls, etc
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'sass-loader', //Add .sass to .css generated file
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader' //Read image files
                ]
            }
        ]
    },
    optimization: {
        minimizer: [
            new terserPlugin(), //.js uglifier(minimizer)
            new cssMinimizerPlugin() //.css uglifier(minimizer)
        ]
    },
    devServer: {
        static: './dist', //Static files to provide
        port: 8080 //Server port
    }
}