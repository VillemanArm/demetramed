<template>
    <div class="toolbar">
        <BaseButton
            label="Добавить исследование"
            class="toolbar__research-add"
            @click="handleResearchAddClick"
        >
            <AddBigIcon />
        </BaseButton>
        <div class="toolbar__filter">
            <FilterOption
                label="По дате"
                :optionActive="researchStore.listRequestParameters.sortOption === 'date'"
                :sortDirectionActive="researchStore.listRequestParameters.sortDescending"
                class="toolbar__filter-option"
                @setDescending="
                    (direction) => {
                        researchStore.setSortRequestParameters('date', direction)
                    }
                "
            />
            <FilterOption
                label="По пациенту"
                :optionActive="researchStore.listRequestParameters.sortOption === 'name'"
                :sortDirectionActive="researchStore.listRequestParameters.sortDescending"
                class="toolbar__filter-option"
                @setDescending="
                    (direction) => {
                        researchStore.setSortRequestParameters('name', direction)
                    }
                "
            />
            <FilterOption
                label="По номеру исследования"
                :optionActive="researchStore.listRequestParameters.sortOption === 'number'"
                :sortDirectionActive="researchStore.listRequestParameters.sortDescending"
                class="toolbar__filter-option"
                @setDescending="
                    (direction) => {
                        researchStore.setSortRequestParameters('number', direction)
                    }
                "
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import AddBigIcon from 'assets/icons/add-big-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import {useResearchStore} from 'stores/ResearchStore'
import FilterOption from 'src/ui/FilterOption.vue'

const researchStore = useResearchStore()

const handleResearchAddClick = () => {
    researchStore.isNewResearchForm = true
    researchStore.getNewResearchData()
}
</script>

<style scoped lang="sass">
.toolbar
  display: flex
  margin-bottom: 32rem

.toolbar__research-add
  height: 52rem
  padding: 12rem 14rem
  margin-right: 23rem

  & svg
    width: 20rem
    height: 20rem

  &:hover svg
    fill: $active-color
    stroke: $active-color

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
