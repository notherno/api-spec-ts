import webpack from 'webpack'
import * as path from 'path'
import HtmlWebpackPlugin = require('html-webpack-plugin')
import TsJsonSchemaPlugin from './plugins/ts-json-schema-plugin'

const publicDirName = path.join(__dirname, 'public')

export default <webpack.Configuration>{
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'index.tsx')],
  output: {
    path: publicDirName,
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
    }),
    new TsJsonSchemaPlugin(),
  ],
  devServer: {
    contentBase: publicDirName,
    port: 3000,
  },
  watchOptions: {
    aggregateTimeout: 0,
  },
  performance: {
    hints: false,
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /schemas\.ts$/,
        loader: 'schema-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
    ],
  },
}
