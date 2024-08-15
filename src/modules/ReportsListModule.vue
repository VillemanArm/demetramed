<template>
    <div class="list">
        <ReportsListToolbar />
        <div class="list__items">
            <ReportsListItem
                v-for="reportItem in reportsStore.reportItems.slice(
                    displayedItemsFrom,
                    displayedItemsTo
                )"
                :reportItem="reportItem"
                :key="reportItem.id"
            />
        </div>

        <BasePagination
            v-if="maxPages > 1"
            :maxPages="maxPages"
            :currentPage="currentPage"
            @changePage="(value) => setCurrentPage(value)"
            class="list__pagination"
        />
    </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import BasePagination from 'src/ui/BasePagination.vue'
import ReportsListItem from 'components/ReportsListModule/ReportsListItem.vue'
import ReportsListToolbar from 'components/ReportsListModule/ReportsListToolbar.vue'
import {useReportsStore} from 'stores/ReportsStore'

const reportsStore = useReportsStore()

const currentPage = ref<number>(1)
const itemsByPage = ref<number>(7)
const maxPages = computed(() => Math.ceil(reportsStore.reportItems.length / itemsByPage.value))
const displayedItemsFrom = computed(() => (currentPage.value - 1) * itemsByPage.value)
const displayedItemsTo = computed(() => displayedItemsFrom.value + itemsByPage.value)
const setCurrentPage = (newValue: number) => {
    currentPage.value = newValue
}

onMounted(() => {
    reportsStore.getReportsList()
})
</script>

<style scoped lang="sass">
.list
  width: 1209rem
  padding: 32rem 45rem 0 45rem

  text-align: center

.list__toolbar
  display: flex
  margin-bottom: 44rem

.list__items
  min-height: 700rem
  margin-bottom: 32rem
  display: grid
  gap: 16rem
  align-content: start

.list__pagination
  margin-bottom: 32rem
  float: right
</style>
