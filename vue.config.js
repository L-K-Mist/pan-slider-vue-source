const webpack = require("webpack");
module.exports = {
  filenameHashing: false,
  configureWebpack: {
    externals: {
      moment: "moment" // doesn't include the moment.js bloat
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1
      })
    ]
  },
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
  }
};
