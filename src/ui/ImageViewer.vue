<script setup lang="ts">
import {onMounted} from 'vue'
import OpenSeadragon from 'openseadragon'

onMounted(() => {
    const viewer = OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl: '~assets/img/openseadragon_images/',
        tileSources: {
            type: 'image',
            url: '~assets/img/test_img.jpg',
            // buildPyramid: false,
        },
    })
})
</script>

<template>
    <div
        id="openseadragon1"
        class="viewer"
    ></div>
</template>

<style scoped lang="sass">
.viewer
  width: 880rem
  height: 876rem
</style>
