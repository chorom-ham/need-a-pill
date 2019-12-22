const withSourceMaps = require("@zeit/next-source-maps");
const { parsed: localEnv } = require("dotenv").config();
const webpack = require("webpack");

module.exports = withSourceMaps({
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlugin(localEnv));
    return config;
  }
});
