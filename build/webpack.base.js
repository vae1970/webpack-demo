'use strict';
const path = require('path');

// 拼接路径
function resolve (track) {
    return path.join(__dirname, '..', track);
}

module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'public/fonts/[name].[ext]'
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'public/images/[name].[ext]'
                    }
                }
            }
        ]
    },
    resolve: {
        // 自动解析文件扩展名(补全文件后缀)(从左->右)
        // import hello from './hello'  （!hello.js? -> !hello.vue? -> !hello.json）
        extensions: ['.js', '.vue', '.json'],
        // 配置别名映射
        alias: {
            // import Vue from 'vue/dist/vue.esm.js'可以写成 import Vue from 'vue'
            // 键后加上$,表示精准匹配！
            vue$: 'vue/dist/vue.esm.js',
            '@': resolve('src'),
            // utils: resolve('src/utils'),
            // components: resolve('src/component'),
            public: resolve('public')
        }
    }

};
