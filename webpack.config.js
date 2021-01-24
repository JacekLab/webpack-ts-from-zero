const path = require("path");

module.exports = {
  entry: "./out/App.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
};
