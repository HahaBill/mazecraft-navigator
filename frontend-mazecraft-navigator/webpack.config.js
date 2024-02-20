const path = require('path');
module.exports = {
 "mode": "none",
 "entry": ["./src/index.js", "./src/scripts/generate_layout.js"],
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
 devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
 },  
 devtool: 'eval-cheap-module-source-map',
 "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      },
      {
        "test": /\.js$/,
        "exclude": /node_modules/,
        "use": {
          "loader": "babel-loader",
          "options": {
            "presets": [
              "@babel/preset-env",
            ]
          }
        }
      },
    ]
  }
};