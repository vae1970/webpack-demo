module.exports = {
    mode: 'production',
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
