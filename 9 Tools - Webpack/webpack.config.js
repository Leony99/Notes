const mode = process.env.NODE_ENV !== 'production';
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const copyPlugin = require('copy-webpack-plugin');
const terserPlugin = require('terser-webpack-plugin')
const cssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: mode ? 'development':'production',
    entry: './src/index.js', //Module to start the dependencies list
    output: {
        filename: 'script.js', //.js generated file name
        path: __dirname + '/dist' //Generated files path
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: 'style.css' //.css generated file name
        }),
        new copyPlugin({
            patterns: [
                {
                    context: 'src', //The directory for resolving 'from'
                    from: '**/*.html', //Copy all .html files and folders structure
                    noErrorOnMissing: true
                },
                {
                    context: 'src', //The directory for resolving 'from'
                    from: './assets', //Copy /assets files
                    to: './assets', //Copy to /assets folder in generated files path
                    noErrorOnMissing: true
                }
            ]
        })
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
                    miniCssExtractPlugin.loader, // Add .sass to .css generated file
                    'css-loader', // Read imports, urls, etc.
                    'sass-loader' //Compile .sass to .css
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    miniCssExtractPlugin.loader, // Add .scss to .css generated file
                    'css-loader', // Read imports, urls, etc.
                    'sass-loader' //Compile .scss to .css
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