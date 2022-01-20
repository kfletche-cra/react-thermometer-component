const path = require('path')
/** @type {import('webpack').Configuration} */
module.exports = {
  mode: 'production',
  output: {
    clean: true,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
         "style-loader",
          "css-loader",
        ],
      },
       {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {
                "targets": "defaults" 
              }],
              '@babel/preset-react'
            ]
          }
        }
      ]
    }
    ],
  },
};