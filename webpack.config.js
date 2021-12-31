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
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                { from: './src/*.html', to: "index.html"},
                { from: './src/assets', to: "assets" }
            ]
        })
    ]
}