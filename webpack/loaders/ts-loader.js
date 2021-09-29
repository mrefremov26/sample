const { transform } = require('@formatjs/ts-transformer');

/**
 * Returns a typescript-loader. It process all ts and tsx files
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/ts-loader
 */
function getTypeScriptLoader() {
  return {
    loader: 'ts-loader',
    options: {
      getCustomTransformers() {
        return {
          before: [
            transform({
              overrideIdFn: '[sha512:contenthash:base64:6]',
            }),
          ],
        };
      },
    },
  };
}

module.exports = getTypeScriptLoader;
