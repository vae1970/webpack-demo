'use strict'
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const base = require('./webpack.base.js');
const merge = require('webpack-merge');

module.exports = merge(base, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(css|less)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
});
