// /* eslint-disable no-unused-vars */
// /* eslint-disable no-dupe-keys */
// /* eslint-disable no-undef */
// const path = require("path");
// const webpack = require("webpack");
// const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const opn = require("opn"); // Import the 'opn' package

// const publicPath = "/"; // To run this file in local
// //  const publicPath = "/"; // To build the file
// module.exports = {
//   mode: "development",
//   entry: path.join(__dirname, "src", "index.js"),
//   output: {
//     path: path.resolve(__dirname, "dist"),
//   },
//   devServer: {
//     port: 3000,
//     historyApiFallback: true,
//     onAfterSetupMiddleware() {
//       opn(`http://localhost:${this.port}/index`);
//     },
//   },
  
//   externals: {
//     // global app config object
//     config: JSON.stringify({
//       apiUrl: "",
//       // publicPath : '/'   ,
//       publicPath: "/",
//     }),
//   },
//   output: {
//     filename: "js/[name].bundle.js",
//     path: path.resolve(__dirname, "dist"), // base path where to send compiled assets
//     publicPath: publicPath, // base path where referenced files will be look for
//   },
//   resolve: {
//     extensions: [".tsx", ".ts", ".js", ".jsx"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx|ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: ["@babel/preset-env", "@babel/preset-react"],
//           },
//         },
//       },

//       {
//         test: /\.css$/,
//         use: ["style-loader", "css-loader"],
//       },
//       {
//         // config for sass compilation
//         test: /\.scss$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//           },
//           "css-loader",
//           {
//             loader: "sass-loader",
//           },
//         ],
//       },

//       {
//         test: /\.(jpg|png|svg|gif)$/,
//         type: "asset/resource",
//       },
//     ],
//   },
//   plugins: [
//     new webpack.DefinePlugin({
//       "process.env.NODE_ENV": JSON.stringify("development"),
//     }),
//     new webpack.HotModuleReplacementPlugin(),

//     new webpack.DefinePlugin({
//       'process.env.REACT_APP_API_BASE_URL_BACKEND': JSON.stringify(process.env.REACT_APP_API_BASE_URL_BACKEND)
//     }),


//     new HtmlWebpackPlugin({
//       title: "Hot Module Replacement",
//       template: "./public/index.html",
//       filename: "./index.html",
//       favicon: "./public/favicon.png",
//     }),
//     new MiniCssExtractPlugin({
//       // plugin for controlling how compiled css will be outputted and named
//       filename: "css/[name].css",
//       chunkFilename: "css/[id].css",
//     }),
//     new CleanWebpackPlugin({
//       cleanOnceBeforeBuildPatterns: [
//         "css/*.*",
//         "js/*.*",
//         "fonts/*.*",
//         "images/*.*",
//       ],
//     }),
//   ],
//   plugins: [
//     new CopyWebpackPlugin({
//       patterns: [
//         {
//           from: path.resolve(__dirname, 'public', 'assets','img'), // path to your assets folder
//           to: path.resolve(__dirname, 'dist', 'assets','img') // path to the build folder where assets should be copied
//         }
//       ]
//     }),
//     new webpack.DefinePlugin({
//       "process.env.NODE_ENV": JSON.stringify("development"),
//     }),
//     new webpack.HotModuleReplacementPlugin(),

//     new HtmlWebpackPlugin({
//       title: "Hot Module Replacement",
//       template: "./public/index.html",
//       filename: "./index.html",
//       favicon: "./public/favicon.png",
//     }),
//     new MiniCssExtractPlugin({
//       // plugin for controlling how compiled css will be outputted and named
//       filename: "css/[name].css",
//       chunkFilename: "css/[id].css",
//     }),
//     new CleanWebpackPlugin({
//       cleanOnceBeforeBuildPatterns: [
//         "css/*.*",
//         "js/*.*",
//         "fonts/*.*",
//         "images/*.*",
//       ],
//     }),
//     new webpack.ProvidePlugin({
//       //To automatically load jquery
//       $: "jquery",
//       jQuery: "jquery",
//       "window.jQuery": "jquery",
//     }),
//   ],

// };


/* eslint-disable no-unused-vars */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */

require('dotenv').config();  // <-- Load env vars from .env file

const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const opn = require("opn"); // Import the 'opn' package

const publicPath = "/"; // To run this file in local

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist"), // base path where to send compiled assets
    publicPath: publicPath, // base path where referenced files will be look for
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    onAfterSetupMiddleware() {
      opn(`http://localhost:${this.port}/index`);
    },
  },
  externals: {
    // global app config object
    config: JSON.stringify({
      apiUrl: "",
      publicPath: "/",
    }),
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public', 'assets', 'img'),
          to: path.resolve(__dirname, 'dist', 'assets', 'img'),
        },
      ],
    }),

    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.REACT_APP_API_BASE_URL_BACKEND": JSON.stringify(process.env.REACT_APP_API_BASE_URL_BACKEND),
      "process.env.REACT_APP_API_BASE_URL_FRONTEND": JSON.stringify(process.env.REACT_APP_API_BASE_URL_FRONTEND),
      "process.env.REACT_APP_ENV": JSON.stringify(process.env.REACT_APP_ENV),
      "process.env.REACT_APP_API_BASE_URL_FRONTEND_CHAT": JSON.stringify(process.env.REACT_APP_API_BASE_URL_FRONTEND_CHAT),
      "process.env.REACT_APP_API_BASE_URL_BACKEND_CHAT": JSON.stringify(process.env.REACT_APP_API_BASE_URL_BACKEND_CHAT),
    }),

    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
      template: "./public/index.html",
      filename: "./index.html",
      favicon: "./public/favicon.png",
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].css",
      chunkFilename: "css/[id].css",
    }),

    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "css/*.*",
        "js/*.*",
        "fonts/*.*",
        "images/*.*",
      ],
    }),

    new webpack.ProvidePlugin({
      // To automatically load jquery
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
    }),
  ],
};
