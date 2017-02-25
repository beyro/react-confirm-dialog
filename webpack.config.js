var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var config = {
    entry: './example/ExampleApp.js',
    output: {
        path: path.resolve(__dirname, 'example'),
        filename: 'scripts.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            query:
            {
                presets:['es2015', 'react']
            },
            
        },
        { 
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract({ use: 'css-loader' })
        }
        ]
  },
  plugins: [
    new ExtractTextPlugin('styles.css')
  ]
};

module.exports = config;