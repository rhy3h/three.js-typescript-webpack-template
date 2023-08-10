import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].[fullhash].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
    minimizer: [
      new UglifyJsPlugin({
        extractComments: false,
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    port: 4000,
    open: true,
  },
};
