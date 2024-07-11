<template>
    <RouterLink
        :to="`report/:${reportItem.id}`"
        class="item"
    >
        <span>{{ reportItem.researchDate }}</span>
        <span>Исследование №{{ reportItem.researchNumber }}</span>
        <span>{{ reportItem.patientName }}</span>
        <span>Атипичных объектов: {{ reportItem.atypicalObjectsAmount }}</span>
    </RouterLink>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'

// import type {ResearchItem} from 'stores/ResearchStore'

defineProps<{
    reportItem: ReportItem
}>()
</script>

<style scoped lang="sass">
.item
  width: 1119rem
  height: 112rem
  padding: 8rem 32rem
  display: grid
  grid-template-columns: 130rem 270rem 290rem 1fr
  column-gap: 26rem

  font-size: 20rem

  border-radius: 4rem
  border: 1px solid $non-active-color
  cursor: pointer
  text-decoration: none

  transition: all 0.3s ease-in-out

  &:hover
    border-color: $active-color

  & span
    display: inline-block
    align-self: center
    text-align: start


    // &:not(:last-child)
    //   padding-right: 30rem



a:-webkit-any-link
  color: $primary-font-color
</style>
