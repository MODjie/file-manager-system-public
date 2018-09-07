export default {
    extraBabelPlugins: [
        ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }]
    ],
    proxy: {
        '/file-manager-system': {
            target: 'http://localhost:9099/file-manager-system',
            changeOrigin: true,
            pathRewrite: { '^/file-manager-system': '' },
        },
    },
}