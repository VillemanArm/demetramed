<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import OpenSeadragon from 'openseadragon'

// defineProps<{
// 	msg: string;
// }>();

onMounted(() => {
    const viewer = OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl: '/img/openseadragon_images/',
        tileSources: {
            type: 'image',
            url: '/img/test_img.jpg',
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
