const path = require('path');

module.exports = {
    configureWebpack: {
        resolve: {
            symlinks: false,
            alias: {
                // Make sure *our* version of ag-grid & vue is always loaded.
                // This is needed for `yarn link / npm link` to work and prevent duplicate versions of these libs
                // being loaded
                'ag-grid-community$': path.resolve(__dirname, 'node_modules/ag-grid-community'),
                vue$: path.resolve(__dirname, 'node_modules/vue/dist/vue.common.js'),
                'vue-class-component$': path.resolve(__dirname, 'node_modules/vue-class-component')
            }
        },
        performance: {
            hints: false
        }
    }
};
