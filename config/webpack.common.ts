import path from 'path';

import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

module.exports = {
    entry:  path.resolve('./src/index.ts'),
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            }
        ],
    },
    resolve: {
        alias: {
            '@': path.resolve('./src'),
        },
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].[chunkhash].bundle.js',
        path: path.resolve('./dist'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            favicon: './public/favicon.ico',
        }),
        new MiniCssExtractPlugin({
            filename: './css/[name].[chunkhash].bundle.css',
        }),
    ],
};