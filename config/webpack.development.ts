import path from 'path';

module.exports = {
    devServer: {
        static: path.join('./dist'),
        port: 4000,
        open: true,
    },
};