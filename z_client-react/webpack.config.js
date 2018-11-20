const path = require('path')

module.exports = {
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{ // rules ? vs loaders? same ?
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }]
        // loaders: [{
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     use: {
        //         loader: "babel-loader"
        //     }
        // }]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
