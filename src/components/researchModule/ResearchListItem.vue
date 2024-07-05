<template>
    <RouterLink
        :to="`research/:${researchItem.id}`"
        class="item"
    >
        <span>{{ researchItem.researchDate }}</span>
        <span>Исследование №{{ researchItem.researchNumber }}</span>
        <span>{{ researchItem.patientName }}</span>
        <span
            >Атипичных объектов: {{ researchItem.atypicalObjectsNumber }}</span
        >
    </RouterLink>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import type {ResearchItem} from 'stores/ResearchStore'

defineProps<{
    researchItem: ResearchItem
}>()
</script>

<style scoped lang="sass">
.item
  width: 1119rem
  height: 112rem
  padding: 0 32rem
  display: grid
  grid-template-columns: 145rem 310rem 290rem 1fr

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

    &:not(:last-child)
      padding-right: 30rem

a:-webkit-any-link
  color: $primary-font-color
</style>
