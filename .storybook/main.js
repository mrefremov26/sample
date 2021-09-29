// .storybook/main.js

const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// your app's webpack.config.js
const custom = require('../webpack/webpack.config.js');

module.exports = {
  "stories": [
    "../src/components/shared/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  "core": {
    "builder": "webpack5"
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
    };
    config.plugins = [...config.plugins, new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    })]

    return { ...config,
      module: { ...config.module, rules: custom.module.rules },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,

            features: path.resolve(__dirname, '../src/components/features'),
            hoc: path.resolve(__dirname, '../src/components/hoc'),
            pages: path.resolve(__dirname, '../src/components/pages'),
            shared: path.resolve(__dirname, '../src/components/shared'),
            forms: path.resolve(__dirname, '../src/components/forms'),
            templates: path.resolve(__dirname, '../src/components/templates'),
            '@': path.resolve(__dirname, '../src/'),
            'react-is': path.resolve(__dirname, '../node_modules/react-is'),
            'react-transition-group': path.resolve(__dirname, '../node_modules/react-transition-group'),
            'rc-select': path.resolve(__dirname, '../node_modules/rc-select'),
            'rc-util': path.resolve(__dirname, '../node_modules/rc-util'),
            'rc-virtual-list': path.resolve(__dirname, '../node_modules/rc-virtual-list'),
            'rc-motion': path.resolve(__dirname, '../node_modules/rc-motion'),
            '@babel/runtime': path.resolve(__dirname, '../node_modules/@babel/runtime'),

        },
      } };
  }

}