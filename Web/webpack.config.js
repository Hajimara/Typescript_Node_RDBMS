const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Typescript(타입스크립트)를 빌드할 때 성능을 향상시키기 위한 플러그인를 불러오기
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        proxy: {
            '/': 'http://localhost:10000/api'
        }
    },
    entry: {
        'js/app': ['./src/index.tsx']
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        publicPath: '/',
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|otf|ttf|woff2)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            }
        ]
    },
    resolve: {
        // modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.Webpack.js', '.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        // Typescript(타입스크립트)의 컴파일 속도 향상을 위한 플러그인을 설정
        new ForkTsCheckerWebpackPlugin(),
    ],
}
