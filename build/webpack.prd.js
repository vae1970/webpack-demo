'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const base = require('./webpack.base.js');
const merge = require('webpack-merge');
const path = require('path');
// rm-rf for node
const rm = require('rimraf');
const packageJSON = require('../package');
const buildDir = process.platform === 'linux' ? ('/dev/shm/' + packageJSON.name) : '../dist';
console.log('output dir is ' + buildDir + '\t!!!!!\t!!!!!\t!!!!!\t!!!!!\t!!!!!\t!!!!!');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');

// 指定删除的目录
const rmDir = path.resolve(__dirname, buildDir);
// 拼接路径
function resolve (track) {
    return path.join(__dirname, '..', track);
}

// 构建前清空build目录
rm(rmDir, function (err) {
    if (err) throw err;
});

module.exports = merge(base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, buildDir),
        filename: 'js/[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                include: resolve('src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
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
        new webpack.ProvidePlugin({
            'Promise': 'bluebird'
        }),
        new VueLoaderPlugin(),
        // 配置html入口信息
        new HtmlWebpackPlugin({
            title: 'hello vue',
            filename: 'index.html',
            template: './index.html',
            // favicon: path.resolve(__dirname, '../src/assets/bedtimeStory/image/favicon.svg'),
            // js资源插入位置,true表示插入到body元素底部
            inject: true
        }),
        new BundleAnalyzerPlugin()
    ],
    optimization: {
        splitChunks: {
            // chunks: 'all',
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendors',
                    chunks: 'all',
                    enforce: true,
                    priority: 2
                },
                manifest: {
                    name: 'manifest',
                    minChunks: 3, // 引用次数大于3则打包进manifest
                    minSize: 3000, // chunk大小大于这个值才允许打包进manifest
                    chunks: 'all',
                    enforce: true,
                    priority: 1
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        }
    }
});
