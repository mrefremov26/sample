/**
 * Returns a post-css-loader. It converts postCSS in css;
 * @memberOf module:Loaders
 * @return {Loader}
 * @see https://www.npmjs.com/package/css-loader
 */
function getPostCssLoader() {
  return {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        plugins: [
          ['postcss-preset-env', { stage: 0, importFrom: 'src/assets/css/variables.css' }],
          [
            'postcss-mixins',
            {
              mixinsDir: 'src/assets/css/mixins',
            },
          ],
        ],
      },
    },
  };
}

module.exports = getPostCssLoader;
