<template>
    <div class="list">
        <div class="list__toolbar">
            <BaseButton
                label="Добавить исследование"
                class="list__research-add"
            >
                <AddBigIcon />
            </BaseButton>
            <div class="list__filter">
                <BaseButton
                    label="По дате"
                    class="list__filter-button list__filter-button--left"
                    @click="researchStore.sortOption = 'researchDate'"
                />
                <BaseButton
                    label="По пациенту"
                    class="list__filter-button list__filter-button--center"
                    @click="researchStore.sortOption = 'patientName'"
                />
                <BaseButton
                    label="По номеру исследования"
                    class="list__filter-button list__filter-button--right"
                    @click="researchStore.sortOption = 'researchNumber'"
                />
            </div>
        </div>

        <div class="list__items">
            <ResearchListItem
                v-for="researchItem in researchStore.searchedAndSortedResearchItems.slice(
                    displayedItemsFrom,
                    displayedItemsTo
                )"
                :researchItem="researchItem"
                :key="researchItem.id"
            />
        </div>

        <BasePagination
            v-if="maxPages > 1"
            :maxPages="maxPages"
            :currentPage="currentPage"
            @changePage="(value) => setCurrentPage(value)"
            class="float-right"
        />
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import AddBigIcon from 'assets/icons/add-big-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import BasePagination from 'src/ui/BasePagination.vue'
import ResearchListItem from 'components/ResearchListItem.vue'
import {useResearchStore} from 'stores/ResearchStore'
import {log} from 'console'

//defineProps<{
//	msg: string;
//}>();

const researchStore = useResearchStore()

const currentPage = ref<number>(1)
const itemsByPage = 5
const maxPages = computed(() =>
    Math.ceil(researchStore.researchItems.length / itemsByPage)
)
const displayedItemsFrom = computed(() => (currentPage.value - 1) * itemsByPage)
const displayedItemsTo = computed(() => displayedItemsFrom.value + itemsByPage)
const setCurrentPage = (newValue: number) => {
    currentPage.value = newValue
}
</script>

<style scoped lang="sass">
.list
  padding: 54rem 45rem 0 45rem

  &__toolbar
    display: flex
    margin-bottom: 44rem

  &__research-add
    margin-right: 23rem

    & svg
      transition: all 0.3s ease-in-out

    &:hover svg
      fill: $active-color
      stroke: $active-color

  &__filter
    display: flex

    &-button
      padding: 18rem 38rem

      background-color: transparent
      color: $non-active-color
      border-color: $non-active-color
      border-radius: 0


      &:first-child
        border-top-left-radius: 8rem
        border-bottom-left-radius: 8rem

      &:last-child
        border-top-right-radius: 8rem
        border-bottom-right-radius: 8rem

      &:hover
        background-color: $active-color
        border-color: $active-color
        color: $white

  &__items
    height: 658rem
    margin-bottom: 32rem
    display: grid
    gap: 24rem
    align-content: start
</style>
