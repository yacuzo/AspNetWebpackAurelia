const easyWebpack = require('@easy-webpack/core');
const generateConfig = easyWebpack.default;
const path = require('path');
const AureliaWebpackPlugin = require('aurelia-webpack-plugin');

const coreBundles = {
    bootstrap: [
        'aurelia-bootstrapper-webpack',
        'aurelia-polyfills',
        'aurelia-pal',
        'aurelia-pal-browser',
        'regenerator-runtime',
        'bluebird'
    ],
    // these will be included in the 'aurelia' bundle (except for the above bootstrap packages)
    aurelia: [
        'aurelia-bootstrapper-webpack',
        'aurelia-binding',
        'aurelia-dependency-injection',
        'aurelia-event-aggregator',
        'aurelia-framework',
        'aurelia-history',
        'aurelia-history-browser',
        'aurelia-loader',
        'aurelia-loader-webpack',
        'aurelia-logging',
        'aurelia-logging-console',
        'aurelia-metadata',
        'aurelia-pal',
        'aurelia-pal-browser',
        'aurelia-path',
        'aurelia-polyfills',
        'aurelia-route-recognizer',
        'aurelia-router',
        'aurelia-task-queue',
        'aurelia-templating',
        'aurelia-templating-binding',
        'aurelia-templating-router',
        'aurelia-templating-resources'
    ]
}

const baseConfig = {
    entry: {
        'app': [/* this is filled by the aurelia-webpack-plugin */],
        'aurelia-bootstrap': coreBundles.bootstrap,
        'aurelia': coreBundles.aurelia.filter(pkg => coreBundles.bootstrap.indexOf(pkg) === -1)
    },
    output: {
        // ... and emit the built result in this location
        path: path.resolve('./wwwroot/dist'),
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            },
            {
                test: /\.css$/,
                loaders: ["style", "css"]
            }
        ]
    },
    resolve: { extensions: ['', '.js', '.css', '.scss'] },
    plugins: [
    ]
}

const devConfig = {
    devtool: 'inline-source-map'
}

var completeConfig = generateConfig(
    baseConfig,
    require('@easy-webpack/config-aurelia')({ src: path.resolve('./ClientApp') }),
    require('@easy-webpack/config-typescript')(),
    require('@easy-webpack/config-tslint')(),
    require('@easy-webpack/config-html')(),
     require('@easy-webpack/config-fonts-and-images')(),
    require('@easy-webpack/config-global-regenerator')(),
    require('@easy-webpack/config-common-chunks-simple')
        ({appChunkName: 'app', firstChunk: 'aurelia-bootstrap'}),

    devConfig
);
module.exports = completeConfig;
