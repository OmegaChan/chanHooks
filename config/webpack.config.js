// webpack.config.js
const path = require("path");
const ConvertAliasPlugin = require('../plugin/convert-alias-plugin.js');
const alias = require('./alias');

module.exports = {
  entry: {
    index: "./src/index.ts",
  },
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].js",
    clean: true,
    library: {
      name: 'chanhooks',
      type: 'umd',
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
    },
  },
  plugins: [
    new ConvertAliasPlugin(),
  ],
  resolve: {
    alias: alias.alias,
    extensions: ['.tsx', '.ts', '.js'],
  },
  optimization: {
    // 代码分割配置
    splitChunks: {
      chunks: "all", // 对所有模块都进行分割
      cacheGroups: {
        default: {
          // 其他没有写的配置会使用上面的默认值
          minSize: 0, // 我们定义的文件体积太小了，所以要改打包的最小文件体积
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
  mode: 'production',
};