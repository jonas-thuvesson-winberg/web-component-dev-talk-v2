const path = require("path");

module.exports = {
  mode: "production",
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
