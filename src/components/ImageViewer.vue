<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import OpenSeadragon from 'openseadragon'

// defineProps<{
// 	msg: string;
// }>();

onMounted(() => {
    const viewer = OpenSeadragon({
        id: 'openseadragon1',
        prefixUrl: '/img/openseadragon_images/', // перед деплоем поменять путь на /img/openseadragon_images/
        tileSources: {
            type: 'image',
            url: '/img/test_img.jpg',
            // buildPyramid: false,
        },
    })
    //https://insight-webstudio.ru/files_for_another_projects/slide-2022-09-12T15-38-25-R1-S2.mrxs
})
</script>

<template>
    <div class="">
        <h1>OpenSeadragon</h1>
        <div
            id="openseadragon1"
            style="width: 800px; height: 600px"
        ></div>
    </div>
</template>

<style scoped lang="sass"></style>
