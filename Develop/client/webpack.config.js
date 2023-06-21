const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
//added workbox plugins
const { InjectManifest } = require("workbox-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].install.js",
      path: path.resolve(__dirname, "dist"),
    },
    // html plugin
    plugins: [
      new HtmlWebpackPlugin({
        template: "./index.html",
        title: "jate",
      }),
      // custom service worker
      new InjectManifest({
        swSrc: "./src-sw.js",
        swDest: "./src-sw.js",
      }),
      new WebpackPwaManifest({
        name: "Jate",
        short_name: "Just Another Text Editor",
        description: "Web browser text editor",
        inject: true,
        fingerprints: false,
        background_color: "#7eb4e2",
        theme_color: "#7eb4e2",
        start_url: "./",
        publicPath: "./",
        icons: [
          {
            src: path.resolve("../client/src/images/logo.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
              plugins: [
                "@babel/plugin-proposal-object-rest-spread",
                "@babel/plugin-transform-runtime",
              ],
            },
          },
        },
      ],
    },
  };
};
