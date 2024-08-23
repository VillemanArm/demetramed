<template>
    <RouterLink
        :to="`report/:${reportItem.id}`"
        class="item"
        @click="handleItemClick"
    >
        <span>{{ reportItem.reportDate }}</span>
        <span>Исследование №{{ reportItem.reportNumber }}</span>
        <span>{{ reportItem.patientName }}</span>
        <span>Атипичных объектов: {{ reportItem.atypicalObjectsAmount }}</span>
    </RouterLink>
</template>

<script setup lang="ts">
import {ReportItem} from 'src/types/reports.dto'
import {useReportsStore} from 'stores/ReportsStore'

const props = defineProps<{
    reportItem: ReportItem
}>()

const reportsStore = useReportsStore()

const handleItemClick = () => {
    reportsStore.setSelectedReportPage(props.reportItem.link)
}
</script>

<style scoped lang="sass">
.item
  width: 1119rem
  min-height: 86rem
  padding: 0 32rem
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

a:-webkit-any-link
  color: $primary-font-color
</style>
