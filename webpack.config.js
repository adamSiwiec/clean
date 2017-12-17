var path = require("path");
var webpack = require("webpack");

var SRC = path.join(__dirname, 'src/');

module.exports = {
    entry: './src/index.js',
    output: {
        publicPath: "dist/",
        path: path.join(__dirname, 'dist/'),
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style-loader', 'css-loader']
        }, {
            test: /\.(jpg|png)$/,
            loaders: ['file-loader?name=img/[name].[ext]','image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}']
            //query: {
            //    name: 'img/[name].[ext]'
            //}

        }, {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "url-loader?limit=10000&minetype=application/font-woff"
        }, {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: "file-loader"
        },{
            test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loaders: ['file-loader','image-webpack-loader?{optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}, mozjpeg: {quality: 65}}']
        }]
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),

        new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings: false
    }
})
    ]
};
