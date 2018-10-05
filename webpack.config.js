const common = require('./config/webpack.common.js');
const dev = require('./config/webpack.dev');
const prd = require('./config/webpack.prd');

const merge = require('webpack-merge');

module.exports = env => {
    if (env.NODE_ENV === 'prd') {
        return merge(prd, common);
    } else {
        return merge(dev, common);
    }
};
