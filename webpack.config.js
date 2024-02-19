const path = require('path');
module.exports = {
 "mode": "none",
 "entry": ["./src/index.js", "./src/scripts/generate_layout.js"],
 "output": {
   "path": __dirname + '/dist',
   "filename": "bundle.js"
 },
 devServer: {
   contentBase: path.join(__dirname, 'dist')
 },
 devtool: 'cheap-module-eval-source-map',
 "module": {
    "rules": [
      {
        "test": /\.css$/,
        "use": [
          "style-loader",
          "css-loader"
        ]
      },
    ]
  }
};