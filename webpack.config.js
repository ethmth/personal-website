const path = require("path");

module.exports = {
  output: {
    filename: "my-first-webpack.bundle.js",
  },
  module: {
    rules: [{ test: /\.txt$/, use: "raw-loader" }],
  },
  modules: {
    loaders: [{ test: /\.html$/, loader: "html-loader" }],
  },
};
