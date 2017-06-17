var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin'),
    PathRewriterPlugin = require('webpack-path-rewriter')
var CleanWebpackPlugin = require('clean-webpack-plugin');
var OfflinePlugin = require('offline-plugin');   
module.exports = {
    entry: [
        'babel-polyfill',
        "./src/index.tsx"
    ],

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: 'inline-source-map',

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {test: /\.tsx?$/, use: ['awesome-typescript-loader'] },

            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                use: ['url-loader?limit=2']
            },
            {
                test: /\.css$/,
                use: [ 'file-loader' ]
            },
            {
              test: /\.(html|json)$/,
              loader: PathRewriterPlugin.rewriteAndEmit({
                name: '[name].[ext]'
              })
            }

        ]
    },

    plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': JSON.stringify('production')
          },
          '__DEVTOOLS__': false,
          '__INCLUDE_SERVICE_WORKER__': true
        }),

        new CleanWebpackPlugin(['dist'], {
        //  root: '/full/project/path',
        //  verbose: true,
        //  dry: false,
        //  exclude: ['shared.js']
        }),

        new webpack.optimize.CommonsChunkPlugin({
          children: true, // Look for common dependencies in all children,
          minChunks: 2 // How many times a dependency must come up before being extracted
        }),




        new webpack.NamedModulesPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new PathRewriterPlugin(),
        new OfflinePlugin()
    ]
};