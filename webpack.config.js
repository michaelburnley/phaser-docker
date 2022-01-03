const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
 
    // production mode
    mode: "production",
 
    // input file
    entry: "./src/config.js",
    performance: {
        hints: false
    },
 
    // output file
    output: {
 
        // file name
        filename: "bundle.js",
 
        // complete path
        path: `${__dirname}/dist`
    },
    module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {
                name: 'assets/[name].[ext]'
            }
          },
        ],
      },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/*.html', to: "index.html"},
            ]
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        port: 9000,
        compress: false,
        liveReload: false,
        hot: true,
    }
}