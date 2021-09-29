const getHtmlWebpackPlugin = require('../plugins/html-webpack-plugin');
const getBundleAnalyzerPlugin = require('../plugins/bundle-analyzer-plugin');
const getDuplicatesCheckerWebpackPlugin = require('../plugins/duplicates-checker-webpack-plugin');
const getDotenvPlugin = require('../plugins/dotenv-plugin');
const getMiniCssExtractPlugin = require('../plugins/mini-css-extract-plugin');
const getTsCheckerPlugin = require('../plugins/ts-checker-plugin');
const getContextReplacementPlugin = require('../plugins/context-replacement-plugin');

/**
 @description Returns a list of all connected plugins
 @memberOf module:Parts
 @param {object} options (useAnalyze, useSentry)
 @return {Array}
 */
function getBasePlugins(options= {}) {
  const plugins = [];
  plugins.push(getHtmlWebpackPlugin());
  plugins.push(getDuplicatesCheckerWebpackPlugin());
  plugins.push(getDotenvPlugin());
  plugins.push(getMiniCssExtractPlugin());
  plugins.push(getTsCheckerPlugin());
  plugins.push(getContextReplacementPlugin());

  if (options.useAnalyze) plugins.push(getBundleAnalyzerPlugin());

  return plugins;
}

module.exports = getBasePlugins;
