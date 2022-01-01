const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
 
    // production mode
    mode: "production",
 
    // input file
    entry: "./src/config.js",
 
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
    ]
}