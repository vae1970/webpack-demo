'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const base = require('./webpack.base.js');
const merge = require('webpack-merge');
const path = require('path');

module.exports = merge(base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '/dev/shm'),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // 配置html入口信息
        new HtmlWebpackPlugin({
            title: '私人啤酒定制',
            filename: 'index.html',
            template: './index.html',
            // favicon: path.resolve(__dirname, '../src/assets/bedtimeStory/image/favicon.svg'),
            // js资源插入位置,true表示插入到body元素底部
            inject: true
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        runtimeChunk: true
    }
});
