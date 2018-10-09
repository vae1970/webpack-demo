'use strict';
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const base = require('./webpack.base.js');
const merge = require('webpack-merge');

module.exports = merge(base, {
    mode: 'development',
    devServer: {
        // HMR控制台log等级
        clientLogLevel: 'warning',
        host: '0.0.0.0',
        port: '9999',
        // 热加载
        hot: true,
        overlay: {
            errors: true
        },
        // 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        historyApiFallback: true,
        // publicPath: '/',
        // 为你的代码进行压缩。加快开发流程和优化的作用
        compress: true,
        // 终端输出的只有初始启动信息。 webpack 的警告和错误是不输出到终端的
        quiet: true
    },
    module: {
        rules: [
            {
                test: /\.(css)$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                    // 'postcss-loader',
                    // 'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        // 开启HMR(热替换功能,替换更新部分,不重载页面！)
        new webpack.HotModuleReplacementPlugin(),

        // 显示模块相对路径
        // new webpack.NamedModulesPlugin(),

        // 编译出错时,该插件可跳过输出,确保输出资源不会包含错误!
        // new webpack.NoEmitOnErrorsPlugin(),

        // 配置html入口信息
        new HtmlWebpackPlugin({
            title: '私人啤酒定制',
            filename: 'index.html',
            template: './index.html',
            // favicon: path.resolve(__dirname, '../src/assets/bedtimeStory/image/favicon.svg'),
            // js资源插入位置,true表示插入到body元素底部
            inject: true
        }),

        // 编译提示插件
        new FriendlyErrorsPlugin({
            // 编译成功提示！
            compilationSuccessInfo: {
                messages: [
                    // `Your application is running here: http://${devConfig.host}:${devConfig.port}`
                    `Your application is running here`
                ]
            },
            // 编译出错！
            onErrors: function (severity, errors) {
                if (severity !== 'error') {
                    return;
                }
                const error = errors[0];
                const filename = error.file.split('!').pop();
                // 编译出错时,右下角弹出错误提示！
                notifier.notify({
                    title: 'logo',
                    message: severity + ': ' + error.name,
                    subtitle: filename || ''
                    // icon: path.join(__dirname, '../src/assets/bedtimeStory/image/favicon.svg')
                });
            }
        })
    ]
});
