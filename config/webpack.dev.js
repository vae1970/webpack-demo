module.exports = {
    devServer: {
        host: '127.0.0.1',
        port: '1234',
        hot: true,
        overlay: {
            errors: true
        },
        historyApiFallback: true,
        // publicPath: '/',
        clientLogLevel: 'none',
        compress: true
        // quiet: true
    },
    module: {
        rules: [
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
    resolve: {
        alias: {
            // vue: 'vue/dist/vue.js'
        }
    }
};
