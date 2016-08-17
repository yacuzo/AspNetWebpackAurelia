const easyWebpack = require('@easy-webpack/core');
const generateConfig = easyWebpack.default;
const path = require('path');

const baseConfig = {
    entry: {
        // The loader will follow all chains of reference from this entry point...
        main: [path.resolve('ClientApp/app.ts')]
    },
    output: {
        // ... and emit the built result in this location
        path: __dirname + '/wwwroot/dist',
        publicPath: '/dist',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css", "sass"]
            }
        ]
    },
    resolve: { extensions: ['', '.scss'] }
}

const devConfig = {
    devtool: 'inline-source-map'
}

var completeConfig = generateConfig(
    baseConfig,
    require('@easy-webpack/config-typescript')(),
    require('@easy-webpack/config-tslint')(),
    require('@easy-webpack/config-html')(),
    devConfig
);
module.exports = completeConfig;
