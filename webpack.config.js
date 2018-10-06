const base = require('./config/webpack.base.js');
const dev = require('./config/webpack.dev');
const prd = require('./config/webpack.prd');

const merge = require('webpack-merge');

module.exports = env => {
    if (env.NODE_ENV === 'prd') {
        return merge(prd, base);
    } else {
        return merge(dev, base);
    }
};
