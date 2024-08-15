<template>
    <div class="toolbar">
        <BaseButton
            label="Скачать отчеты"
            class="toolbar__download-reports"
            @click="reportsStore.getReportFile"
        >
            <ReportIcon />
        </BaseButton>
        <div class="toolbar__filter">
            <FilterOption
                label="По дате"
                :optionActive="reportsStore.listRequestParameters.sortOption === 'date'"
                :sortDirectionActive="reportsStore.listRequestParameters.sortDescending"
                class="toolbar__filter-option"
                @setDescending="
                    (direction) => {
                        reportsStore.setSortRequestParameters('date', direction)
                    }
                "
            />
            <FilterOption
                label="По пациенту"
                :optionActive="reportsStore.listRequestParameters.sortOption === 'name'"
                :sortDirectionActive="reportsStore.listRequestParameters.sortDescending"
                class="toolbar__filter-option"
                @setDescending="
                    (direction) => {
                        reportsStore.setSortRequestParameters('name', direction)
                    }
                "
            />
            <FilterOption
                label="По номеру исследования"
                :optionActive="reportsStore.listRequestParameters.sortOption === 'number'"
                :sortDirectionActive="reportsStore.listRequestParameters.sortDescending"
                class="toolbar__filter-option"
                @setDescending="
                    (direction) => {
                        reportsStore.setSortRequestParameters('number', direction)
                    }
                "
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import ReportIcon from 'assets/icons/report-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import {useReportsStore} from 'stores/ReportsStore'
import FilterOption from 'src/ui/FilterOption.vue'

const reportsStore = useReportsStore()
</script>

<style scoped lang="sass">
.toolbar
  display: flex
  margin-bottom: 32rem


.toolbar__download-reports
  height: 52rem
  width: 281rem
  padding: 12rem 14rem
  margin-right: 23rem
  justify-content: center

  background-color: $non-active-color
  border-color: $non-active-color

  &>svg
    width: 24rem
    height: 24rem

  &:hover
    background-color: $active-color
    border-color: $active-color
    color: $white

.toolbar__filter
  display: flex

.toolbar__filter-option
  &:first-child
    border-top-left-radius: 8rem
    border-bottom-left-radius: 8rem

  &:last-child
    border-top-right-radius: 8rem
    border-bottom-right-radius: 8rem
</style>
