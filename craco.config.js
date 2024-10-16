// CRACO is a package that helps resolve the alias idea in CRA, that helps override CRA’s configurations without the need to eject.
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
