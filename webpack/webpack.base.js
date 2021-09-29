const entryOutput = require('./parts/entry-output');
const getTypeScriptPreset = require('./presets/ts-preset');
const getCssModulePreset = require('./presets/css-module-preset');
const getCssPreset = require('./presets/css-preset');
const getFilePreset = require('./presets/file-preset');
const getLintPreset = require('./presets/lint-preset');
const getSVGPreset = require('./presets/svg-preset');

const getBasePlugins = require('./parts/plugins');
const getResolve = require('./parts/resolve');

const isAnalyzeMode = !!process.env.analyze;

module.exports = {
  ...entryOutput(),
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      getLintPreset(),
      getTypeScriptPreset(),
      getCssModulePreset(),
      getCssPreset(),
      getFilePreset(),
      getSVGPreset(),
    ],
  },
  plugins: getBasePlugins(isAnalyzeMode),
  optimization: {
    runtimeChunk: true,
  },
  resolve: getResolve(),
};