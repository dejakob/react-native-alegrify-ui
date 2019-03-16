export default {
    native: true,
    title: 'RN Alegrify UI',
    hashRouter: true,
    base: '/react-native-alegrify-ui',
    htmlContext: {
        head: {
            raw: `<style>
                .react-live-preview { background-color: #ddd; }
            </style>
            `
        }
    },
    themeConfig: {
        showPlaygroundEditor: true
    }
};