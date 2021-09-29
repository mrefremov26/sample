const getFileLoader = require('../loaders/file-loader');
const path = require('path');
/**
 * @description Return a file flow preset
 * @memberOf module:Presets
 * @return {Preset}
 */
function getFilePreset() {
  return {
    test: /\.(jpe?g|png|eot|svg|ttf|woff)$/i,
    use: [getFileLoader()],
    exclude: [path.resolve(__dirname, '../../src/assets/images/icons')],
  };
}

module.exports = getFilePreset;
