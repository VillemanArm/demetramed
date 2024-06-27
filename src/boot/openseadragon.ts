import {boot} from 'quasar/wrappers'
import OpenSeadragon from 'openseadragon'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
const viewer = OpenSeadragon({
    id: 'openseadragon1',
    prefixUrl: '/src/assets/img/openseadragon_images/', // перед деплоем поменять путь на /img/openseadragon_images/
    tileSources: {
        type: 'image',
        url: '/img/test_img.jpg',
        // buildPyramid: false,
    },
})

export default boot(({app}) => {
    // something to do
})

export {viewer}
