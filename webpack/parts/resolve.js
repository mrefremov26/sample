const path = require('path');

/**
 * @description This is a part of config says how modules resolves.
 * First part of aliases is project aliases. Second one - is for package resolving.
 * @memberOf module:Parts
 * @return {Part}
 */

function getResolve() {
  return {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.css'],
    alias: {
      '@': path.resolve(__dirname, '../../src'),
      '@features': path.resolve(__dirname, '../../src/components/features'),
      '@api': path.resolve(__dirname, '../../src/api'),
      '@assets': path.resolve(__dirname, '../../src/assets'),
      '@hooks': path.resolve(__dirname, '../../src/components/hooks'),
      '@interfaces': path.resolve(__dirname, '../../src/interfaces'),
      '@hoc': path.resolve(__dirname, '../../src/components/hoc'),
      '@routes': path.resolve(__dirname, '../../src/routes'),
      '@lang': path.resolve(__dirname, '../../src/lang'),
      '@logs': path.resolve(__dirname, '../../src/logs'),
      '@store': path.resolve(__dirname, '../../src/store'),
      '@utils': path.resolve(__dirname, '../../src/utils'),
      '@pages': path.resolve(__dirname, '../../src/components/pages'),
      '@shared': path.resolve(__dirname, '../../src/components/shared'),
      '@templates': path.resolve(__dirname, '../../src/components/templates'),
      '@constants': path.resolve(__dirname, '../../src/constants'),
      'react-is': path.resolve(__dirname, '../../node_modules/react-is'),
      'react-transition-group': path.resolve(__dirname, '../../node_modules/react-transition-group'),
      'rc-select': path.resolve(__dirname, '../../node_modules/rc-select'),
      'rc-util': path.resolve(__dirname, '../../node_modules/rc-util'),
      'rc-virtual-list': path.resolve(__dirname, '../../node_modules/rc-virtual-list'),
      'rc-motion': path.resolve(__dirname, '../../node_modules/rc-motion'),
      tslib: path.resolve(__dirname, '../../node_modules/tslib'),
      '@babel/runtime': path.resolve(__dirname, '../../node_modules/@babel/runtime'),
    },
  };
}

module.exports = getResolve;
