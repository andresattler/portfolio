const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
    		use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',				  
            options: {
              modules: true,
              localIdentName: '[name]-[local][hash:base64:6]',
              camelCase: true 
            }
          },
          { loader: "stylus-loader" }
        ]
			},
      { test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
	 ]
  },
  plugins: [
    new HtmlPlugin({
      template: '!pug-loader!src/index.pug'
    })
  ]
}
