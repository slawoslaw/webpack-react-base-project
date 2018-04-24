import path from 'path'
import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default function(env, argv) {
  const development = argv.mode === 'development'

  return {
    entry: ['react-hot-loader/patch', './src/index.js'],
    output: {
      publicPath: '/',
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    devServer: {
      host: '0.0.0.0',
      port: 8070,
      contentBase: './dist',
      historyApiFallback: true
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          rules: [
            {loader: 'style-loader', options: {sourceMap: development}},
            {loader: 'css-loader', options: {sourceMap: development}},
            {loader: 'sass-loader', options: {sourceMap: development}}
          ]
        },
        {
          test: /\.(jpe|jpg|png|woff|woff2|eot|ttf|svg|ico)(\?.*$|$)/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: ['node_modules', path.join(__dirname, 'src')]
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: {
          collapseWhitespace: true,
          collapseInlineTagWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true
        }
      })
    ]
  }
}
