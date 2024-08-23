<template>
    <div class="item">
        <span>{{ researchItem.researchDate.split('-').reverse().join('/') }}</span>
        <span>Исследование №{{ researchItem.researchNumber }}</span>
        <span>{{ researchItem.patientName }}</span>
        <BaseButton
            class="item__button"
            label="Начать анализ"
            @click="handleAnalysisButtonClick"
        >
            <AnalysisIcon />
        </BaseButton>
    </div>
</template>

<script setup lang="ts">
import BaseButton from 'src/ui/BaseButton.vue'
import AnalysisIcon from 'assets/icons/analysis-icon.vue'
import {useResearchStore} from 'src/stores/ResearchStore'
import {ResearchItem} from 'src/types/research.dto'

const props = defineProps<{
    researchItem: ResearchItem
}>()

const handleAnalysisButtonClick = () => {
    researchStore.startAnalysis(props.researchItem.id)
    researchStore.getResearchList()
}

const researchStore = useResearchStore()
</script>

<style scoped lang="sass">
.item
  width: 1119rem
  min-height: 86rem
  padding: 0 32rem
  display: grid
  grid-template-columns: 130rem 270rem 356rem 1fr
  column-gap: 26rem

  font-size: 20rem

  border-radius: 8rem
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
  padding: 14rem 14rem
  align-self: center

  font-size: 18rem

  &>svg
    width: 24rem
    height: 24rem

  &:hover svg
    fill: $active-color
</style>
