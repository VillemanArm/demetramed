<template>
    <RouterLink
        :to="`research/:${researchItem.id}`"
        class="item"
    >
        <span>{{ researchItem.researchDate }}</span>
        <span>Исследование №{{ researchItem.researchNumber }}</span>
        <span>{{ researchItem.patientName }}</span>
        <BaseButton
            class="item__button"
            label="Начать анализ"
        >
            <AnalysisIcon />
        </BaseButton>
    </RouterLink>
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
  grid-template-columns: 145rem 290rem 306rem 1fr
  column-gap: 30rem

  font-size: 20rem

  border-radius: 4rem
  border: 1px solid $non-active-color
  cursor: pointer
  text-decoration: none

  transition: all 0.3s ease-in-out

  &:hover
    border-color: $active-color

  & span
    align-self: center
    display: inline-block

    // &:not(:last-child)
    //   padding-right: 30rem

.item__button
  min-width: 200rem
  padding: 18rem 14rem
  align-self: center
  display: flex
  align-items: center

  font-size: 18rem

  &>svg
    width: 24rem
    height: 24rem

  &:hover svg
    fill: $active-color

a:-webkit-any-link
  color: $primary-font-color
</style>
