const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getCssLoader = require('../loaders/css-loader');
const getPostCssLoader = require('../loaders/post-css-loader');

/**
 * Returns a flow for process css input
 * @memberOf module:Presets
 * @return {Preset}
 */
function getCssModulesPreset() {
  const loadersModule = [];
  loadersModule.push(MiniCssExtractPlugin.loader);
  loadersModule.push(getCssLoader(true));
  loadersModule.push(getPostCssLoader());

  return {
    test: /module.css$/,
    use: loadersModule,
  };
}

module.exports = getCssModulesPreset;
