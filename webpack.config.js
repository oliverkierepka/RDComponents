// webpack.settings.js - webpack settings config
module.exports = {
    name: "Vertical Web Components",
    copyright: "ZooRoyal GmbH",
    entry: './src/index.js',
    paths: {
        src: {
            base: "./src/",
            css: "./src/css/",
            js: "./src/js/"
        },
        dist: {
            base: "./dist/",
            clean: [
                "./img",
                "./criticalcss",
                "./css",
                "./js"
            ]
        },
        templates: "./templates/"
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/assets/",
        libraryTarget: "umd",
    }
};

