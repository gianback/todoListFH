const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  output: {
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
        options: {
          sources: false,
        },
      },
      {
        test: /\.css$/,
        exclude: /style.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /style.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  optimization: {},

  plugins: [
    // solo crea el index.html que tenga relacion con el boundle main.js
    new HtmlWebpackPlugin({
      title: "Mi Webpack App",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "nuevo-estilo.css",
      ignoreOrder: false,
    }),
    new CopyPlugin({
      patterns: [{ from: "src/assets/", to: "assets/" }],
    }),
  ],
};
