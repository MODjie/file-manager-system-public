export default {
  entry: 'src/index.js',
  publicPath: '',
  env: {
    development: {
      extraBabelPlugins: [
        'dva-hmr',
        'transform-runtime',
        [
          'import',
          { libraryName: 'antd', libraryDirectory: 'es', style: true },
        ],
      ],
      browserslist: ['> 1%', 'last 2 versions', 'ie 10'],
    },
    production: {
      extraBabelPlugins: [
        'transform-runtime',
        [
          'import',
          { libraryName: 'antd', libraryDirectory: 'es', style: true },
        ],
      ],
    },
  },
  proxy: {
    '/file-manager-system': {
      target: 'http://localhost:9099/file-manager-system',
      changeOrigin: true,
      pathRewrite: { '^/file-manager-system': '' },
    },
  },
};
