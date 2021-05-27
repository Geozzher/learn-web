const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    module: {
        rule: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                use: {
                    loader: 'bable-loader',
                    options:{
                        bablerc:false,
                        presets:{
                            require.resolve()
                        }
                    }
                }
            }
        ]
    }
}