const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index_template.html',
  filename: 'index.html',
  inject: 'body',
  hash: true,
  xhtml: true
})

module.exports = {
  context: __dirname,
  entry: './client/App.js',
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/public'),
    filename: 'bundle.js',
    publicPath: "/"
  },
  devServer: {
    publicPath: '/',
    historyApiFallback: true
  },
  resolve: {
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        include: path.resolve(__dirname, 'client'),
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [['es2015', {modules: false}]],
          plugins: ['syntax-dynamic-import']
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: true
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|jpeg)$/,
        loader: 'url-loader?name=img/[name].[ext]&publicPath=/public/'
      },
      {
        test: /\.scss$/,
        use: [
          {
          loader: "style-loader"
          },
          {
          loader: "css-loader"
          },
          {
          loader: "postcss-loader"
          },
          {
          loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(eot|ttf|woff|woff2)$/,
        loader: 'url-loader?name=fonts/[name].[ext]&publicPath=/public/'
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
