const CopyPlugin = require('copy-webpack-plugin');

/**
 * @description copy public
 * @memberOf module:Plugins
 * @return {Plugin}
 * @see https://www.npmjs.com/package/copy-webpack-plugin
 */
function getCopyWebpackPlugin() {
  return new CopyPlugin({
    patterns: [{ from: 'public', to: 'public' }],
  });
}

module.exports = getCopyWebpackPlugin;
