/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 */

const path = require('path');
const { FileStore } = require('metro-cache');

module.exports = {
  transformer: {
    minifierPath: 'metro-minify-terser',
    minifierConfig: {
      compress: {
        drop_console: true,
      },
    },
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  cacheStores: [
    new FileStore({
      root: path.resolve(__dirname, 'metro-cache'),
    }),
  ],
};
