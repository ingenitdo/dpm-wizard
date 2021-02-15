var path = require( "path" );
var CopyWebpackPlugin = require( 'copy-webpack-plugin' );

module.exports = function ( env, argv ) {

  var devMode = argv.mode === "development";

  var maxSizeKb = 1500 * (devMode ? 4.7 : 1);  // factor because of missing minification

  return {
    entry: {
      "wizard": "index.tsx",
      "viewer": "viewer/index_viewer.tsx"
    },
    output: {
      path: path.resolve( __dirname, "build/" ),
      filename: "[name].js",
      publicPath: "/"
    },
    resolve: {
      modules: [
        path.resolve( "src" ),
        path.resolve( "node_modules" )
      ],
      extensions: [
        ".js", ".jsx", ".ts", ".tsx"
      ]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [{
            loader: "ts-loader",
            options: { onlyCompileBundledFiles: true }
          }]
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                ]
              }
            }
          ]
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: 'file-loader',
            },
          ],
        },
      ]
    },
    plugins: [
      new CopyWebpackPlugin( {
          patterns: [
            { from: 'public', to: '' }
          ]
        }
      ),
],
//    optimization: {
//      // separate vendor chunk for shared code
//      splitChunks: {
//        cacheGroups: {
//          vendor: {
//            test: /[\\/]node_modules[\\/]/,
//            name: "vendor",
//            chunks: "all"
//          }
//        }
//      }
//    },
    performance: {
      hints: "warning",
      maxEntrypointSize: maxSizeKb * 1024,
      maxAssetSize: maxSizeKb * 1024
    },
    devtool: devMode ? "source-map" : false,
    devServer: {
      contentBase: path.join( __dirname, 'build' ),
      compress: true,
      port: 9000,
      historyApiFallback: true
    }

  };

};
