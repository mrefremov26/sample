const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoader = require('../loaders/css-loader');
const getPostCssLoader = require('../loaders/post-css-loader');

/**
 * Returns a flow for process css input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getCssPreset() {
  const loaders = [];
  loaders.push(MiniCssExtractPlugin.loader);
  loaders.push(getCssLoader());
  loaders.push(getPostCssLoader());

  return {
    test: /^((?!\.module).)*css$/,
    use: loaders,
  };
}

module.exports = getCssPreset;
