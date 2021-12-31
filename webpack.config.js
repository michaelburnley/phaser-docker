module.exports = {
 
    // production mode
    mode: "production",
 
    // input file
    entry: "./src/game/index.js",
 
    // output file
    output: {
 
        // file name
        filename: "bundle.js",
 
        // complete path
        path: `${__dirname}/src/dist`
    }
}