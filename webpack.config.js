'use strict'
const base = require('./build/webpack.base.js');
const dev = require('./build/webpack.dev');
const prd = require('./build/webpack.prd');

const merge = require('webpack-merge');

module.exports = env => {
    if (env.NODE_ENV === 'prd') {
        return merge(prd, base);
    } else {
        return merge(dev, base);
    }
};
