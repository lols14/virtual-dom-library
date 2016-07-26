var webpack = require('webpack')
module.exports = {
    entry: './src/test/test.js',
    output: {
        filename: './dist/bundle.js'
    },
    devtool: "eval",
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }],
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    },
    plugins : [
      new webpack.ProvidePlugin({
        '_': 'lodash',
        'hash': 'object-hash',
        deepDiff : 'deep-diff'
      })
    ]
};
