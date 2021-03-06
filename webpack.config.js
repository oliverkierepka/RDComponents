var path = require('path');

module.exports = {
    mode: 'development',
    name: "RD Web Components General Setup",
    entry: './src/[name]',
    output:{
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            // Include ts, tsx, js, and jsx files.
            test: /\.(ts|js)x?$/,
            exclude: "/node_modules/",
            loader: 'babel-loader',
        }]
    }

    
};

  