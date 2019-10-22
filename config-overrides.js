const {
  override,
  addWebpackAlias,
  fixBabelImports,
  addLessLoader,
} = require('customize-cra');
const path = require('path');
module.exports = override(
  addLessLoader(),
  fixBabelImports('import', {
    "libraryName": "antd",
    "libraryDirectory": "es",
    "style": "css"
  }),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
  }),
);
