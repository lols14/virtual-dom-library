module.exports = {
    entry: './app/app.js',
    output: {
        filename: './dist/bundle.js'
    },
    devtool: "source-map",
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
    }
};
