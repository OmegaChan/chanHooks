const path = require('path');
module.exports = {
  alias: {
    // 不能写成 @/packages/*, 此匹配必须写成 @/dirA/dirB ,dirA为src下的目录, 否则会与自定义插件convert-alias-plugin冲突
    '@/packages': path.resolve(__dirname, '../src/packages'),
    '@/utils': path.resolve(__dirname, '../src/utils'),
  },
};
