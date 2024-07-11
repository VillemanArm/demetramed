<template>
    <div class="list">
        <div class="list__toolbar">
            <BaseButton
                label="Добавить исследование"
                class="list__research-add"
                @click="mainStore.setModuleInViewer('NewResearchForm')"
            >
                <AddBigIcon />
            </BaseButton>
            <div class="list__filter">
                <BaseButton
                    label="По дате"
                    :class="{
                        'list__filter-button': true,
                        'list__filter-button--active':
                            researchStore.sortOption === 'researchDate',
                    }"
                    @click="researchStore.sortOption = 'researchDate'"
                />
                <BaseButton
                    label="По пациенту"
                    :class="{
                        'list__filter-button': true,
                        'list__filter-button--active':
                            researchStore.sortOption === 'patientName',
                    }"
                    @click="researchStore.sortOption = 'patientName'"
                />
                <BaseButton
                    label="По номеру исследования"
                    :class="{
                        'list__filter-button': true,
                        'list__filter-button--active':
                            researchStore.sortOption === 'researchNumber',
                    }"
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
import ResearchListItem from 'components/MainModule/ResearchListItem.vue'
import {useResearchStore} from 'stores/ResearchStore'
import {useMainStore} from 'stores/MainStore'

//defineProps<{
//	msg: string;
//}>();

const mainStore = useMainStore()
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
  padding: 39rem 45rem 0 45rem

.list__toolbar
  display: flex
  margin-bottom: 44rem

.list__research-add
  margin-right: 23rem

  & svg
    transition: all 0.3s ease-in-out

  &:hover svg
    fill: $active-color
    stroke: $active-color

.list__filter
  display: flex

.list__filter-button
  padding: 18rem 36rem

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
    border-color: $active-color
    color: $active-color

  &--active
    border-color: $active-color
    color: $active-color

.list__items
  height: 658rem
  margin-bottom: 32rem
  display: grid
  gap: 24rem
  align-content: start
</style>
