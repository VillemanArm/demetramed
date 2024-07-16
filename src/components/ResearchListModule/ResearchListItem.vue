<template>
    <div class="item">
        <span>{{ researchItem.researchDate }}</span>
        <span>Исследование №{{ researchItem.researchNumber }}</span>
        <span>{{ researchItem.patientName }}</span>
        <BaseButton
            class="item__button"
            label="Начать анализ"
        >
            <AnalysisIcon />
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import BaseButton from 'src/ui/BaseButton.vue'
import AnalysisIcon from 'assets/icons/analysis-icon.vue'
// import type {ResearchItem} from 'stores/ResearchStore'

defineProps<{
    researchItem: ResearchItem
}>()
</script>

<style scoped lang="sass">
.item
  width: 1119rem
  height: 112rem
  padding: 8rem 32rem
  display: grid
  grid-template-columns: 130rem 270rem 356rem 1fr
  column-gap: 26rem

  font-size: 20rem

  border-radius: 4rem
  border: 1px solid $non-active-color
  text-decoration: none

  transition: all 0.3s ease-in-out

  &:hover
    border-color: $active-color

  & span
    align-self: center
    justify-self: start
    display: inline-block

.item__button
  width: 220rem
  padding: 18rem 14rem
  align-self: center

  font-size: 18rem

  &>svg
    width: 24rem
    height: 24rem

  &:hover svg
    fill: $active-color
</style>
