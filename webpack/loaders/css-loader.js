const localIdentName = process.env.NODE_ENV === 'production' ? '[hash:base64]' : '[path]__[local]';
/**
 * Returns a css-loader. It parses css
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/css-loader
 */
function getCssLoader(hasModules = false) {
  const options = hasModules
    ? {
        modules: {
          compileType: 'module',
          localIdentName,
        },
        importLoaders: 1,
      }
    : {};
  return {
    loader: 'css-loader',
    options,
  };
}

module.exports = getCssLoader;
