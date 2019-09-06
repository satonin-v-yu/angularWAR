const path = require('path');
const webpack = require('webpack');

module.exports = {
  // entry: './src/main.ts', //polyfills
  entry: {
    'polyfills': './src/polyfills.ts',
    'app': './src/main.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // определяем тип файлов
        use: [
          {
             loader: 'awesome-typescript-loader',
             options: { configFileName: path.resolve(__dirname, 'tsconfig.json') }
            } ,
            'angular2-template-loader'
        ],
        exclude: /node_modules/
      }
      ,{
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/
      }, {
          test: /\.css$/,
          // include: path.resolve(__dirname,'src/app'),
          loader: 'raw-loader',
          exclude: /node_modules/
        }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    // filename: 'main.js', //polyfills
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  // plugins: [
  //   new webpack.ContextReplacementPlugin(
  //       /angular(\\|\/)core/,
  //       path.resolve(__dirname, 'src'), // каталог с исходными файлами
  //     {} // карта маршрутов
  //   )
  // ]
};