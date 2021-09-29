const StylelintPlugin = require('stylelint-webpack-plugin');

/**
 * @description Returns a Stylelint plugin which lint our css
 * @memberOf module:Plugins
 * @return {StylelintPlugin}
 * @see https://www.npmjs.com/package/stylelint-webpack-plugin
 */
function getStylelintPlugin() {
  return new StylelintPlugin({});
}

module.exports = getStylelintPlugin;
