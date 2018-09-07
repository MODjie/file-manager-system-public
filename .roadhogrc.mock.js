
export default {
    proxy: {
        '/file-manager-system': {
            target: 'http://localhost:9099/file-manager-system',
            changeOrigin: true,
            pathRewrite: { '^/file-manager-system': '' },
        },
    },
};
