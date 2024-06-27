const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        port: 3600,
        open: true, // Add this line to open the browser automatically
        historyApiFallback: { index: "/", disableDotRule: true },
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Add .jsx extension
    },

    module: {
        rules: [
            {
                test: /\.js$|jsx/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', ['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(sass|css|scss)$/,
                use: ['style-loader', 'css-loader',{
                  loader: "postcss-loader",
                }],
            },
            {
                enforce: 'pre',
                test: /\.tsx$/,
                loader: 'source-map-loader',
                exclude: /node_modules/,
              },
        ],
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist'),
      },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'awesome-app',
            filename:
              'remoteEntry.js',
            remotes:{
                customerRemote: 'customerModule@http://localhost:3200/remoteEntry.js'
            },
            shared: {
              react: { singleton: true, eager: true },
              'react-dom': { singleton: true, eager: true },
              'react-redux': { singleton: true, eager: true },
              redux: { singleton: true, eager: true },
              'react-router-dom': { singleton: true, eager: true },
              
            },
          })
    ],
};