import { merge } from 'webpack-merge';

const commonConfig = require('./config/webpack.common');

module.exports = (env: any, argv: any) => {

    const config = require('./config/webpack.' + argv.mode);
    return merge(commonConfig, config);

};