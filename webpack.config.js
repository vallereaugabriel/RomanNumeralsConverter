const path = require('path');

module.exports = {
  "entry": './src/index.js',
  "output": {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  "module": {
    rules: [
      {
        "exclude": "/node_modules/",
        "loader": "babel-loader",
        "options": {
          "presets": ["env", "react"]
        }
      }
    ]
  }
};