const path = require("path");

module.exports = {
  entry: "./src/components.js",
  output: {
    filename: "components.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(html|css)/,
        type: "asset/source",
      },
    ],
  },
};
