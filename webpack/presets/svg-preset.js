const getSVGRLoader = require('../loaders/svgr-loader');
const path = require('path');
/**
 * @description Return a SVG flow preset
 * @memberOf module:Presets
 * @return {Preset}
 */
function getSVGPreset() {
  return {
    test: /\.svg$/i,
    use: [getSVGRLoader()],
    include: [path.resolve(__dirname, '../../src/assets/images/icons')],
  };
}

module.exports = getSVGPreset;
