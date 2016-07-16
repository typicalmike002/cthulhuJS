var webpack = require('webpack'),
    fs      = require('fs'),
    path    = require('path');

module.exports = {
    debug: true,
    entry: './source/cthulhu.js',
    output: {
        path: __dirname,
        filename: 'cthulhu.min.js'
    },
    module: {
        loaders: [{
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: path.join(__dirname, '/source/'),
                loader: 'babel'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            mangle: false,
            compress: { warnings: false },
            output: { comments: false }
        })
    ]
};