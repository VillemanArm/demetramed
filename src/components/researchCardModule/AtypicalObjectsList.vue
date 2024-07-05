<template>
    <div class="objects">
        <h3 class="objects__title">Атипичные объекты</h3>
        <div class="objects__list">
            <div
                v-for="object in list"
                :key="object.id"
                class="objects__item"
            >
                <h4 class="objects__item-title">Объект #{{ object.number }}</h4>
                <div class="objects__item-img">
                    <img :src="object.img" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import type {AtypicalObject} from 'stores/ResearchStore'

defineProps<{
    list: AtypicalObject[] | undefined
}>()
</script>

<style scoped lang="sass">

.objects__title
  margin-bottom: 32rem

  font-size: 20rem
  line-height: 120%
  font-weight: 600
  white-space: nowrap

  color: $active-color

.objects__item-title
  margin-bottom: 6rem

  font-size: 18rem
  line-height: 120%

.objects__item-img
  width: 224rem
  height: 156rem

  cursor: pointer

.objects__list
  height: 822rem
  display: grid
  gap: 18rem

  overflow-y: auto
  overflow-x: hidden
  scrollbar-width: none

  &::-webkit-scrollbar
    display: none
</style>
