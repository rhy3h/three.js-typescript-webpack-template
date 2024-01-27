import TerserPlugin from 'terser-webpack-plugin';

module.exports = {
    optimization: {
        usedExports: true,
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                three: {
                    test: /[\\/]node_modules[\\/](three[\\/]build)[\\/]/,
                    name: 'three',
                    chunks: 'all',
                }
            },
        },
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: {
                        drop_console: true,
                    },
                },
            }),
        ],
    }
};