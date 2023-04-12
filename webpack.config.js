/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

const processDefinePlugin = new webpack.DefinePlugin({
    'process.env.APIKEY': JSON.stringify(process.env.NODE_ENV || '04c35731a5ee918f014970082a0088b1')
})

module.exports = {
    entry: ['babel-polyfill', './index.ts'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: './babel.config.js',
                            cacheDirectory: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',
            },
        ],
    },
    mode: 'development',
    devServer: {
        static: path.join(__dirname, ''),
        port: 8000
    },
    devtool: 'source-map',
    plugins: [
        processDefinePlugin
    ]
};
