const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devServer: {
        port: 3200,
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new ModuleFederationPlugin({
            name: 'customerModule',
            filename:
              'remoteEntry.js',
            exposes: {
                './Counter': './src/components/Counter',
                './ListCustomers': './src/components/ListCustomers',
                './EditCustomer': './src/components/EditCustomer',
                './routes': './src/routes/routes',

            },
            shared: {
              react: { singleton: true, eager: true },
              'react-dom': { singleton: true, eager: true },
              'react-redux': { singleton: true, eager: true },
              redux: { singleton: true, eager: true },
              'react-router-dom': { singleton: true, eager: true },
            }
          })
    ],
};