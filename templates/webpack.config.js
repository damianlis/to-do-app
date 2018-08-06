module.exports = {
  entry: ["whatwg-fetch", "./components/index.jsx"],
  output: {
    filename: "./bundle.js"
  },
  mode: "development",
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "stage-2", "react"]
        }
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  }
};
