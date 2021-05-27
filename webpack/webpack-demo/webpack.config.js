const path = require('path')

module.exports = {
    // entry: 'app.js',
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 8000,
        publicPath: '/dist/',
        hot: true
    }
}