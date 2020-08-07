const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = ({ mode }) => {
    return {
        mode,
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
                minify: false
            }),
            new CopyPlugin({
                patterns: [
                    {
                        context: 'node_modules/@webcomponents/webcomponentsjs',
                        from: '**/*.js',
                        to: 'webcomponents'
                    }
                ],
            }),
        ],
        devServer: {
            historyApiFallback: true,
        },
        devtool: mode === 'development' ? 'source-map' : 'none'
    };
};