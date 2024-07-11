<template>
    <div class="list">
        <div class="list__toolbar">
            <BaseButton
                label="Скачать отчеты"
                class="list__download-reports"
            >
                <ReportIcon />
            </BaseButton>
        </div>
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
            class="float-right"
        />
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import ReportIcon from 'assets/icons/report-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import BasePagination from 'src/ui/BasePagination.vue'
import ReportsListItem from 'components/MainModule/ReportsListItem.vue'
import {useReportsStore} from 'stores/ReportsStore'

// //defineProps<{
// //	msg: string;
// //}>();

const reportsStore = useReportsStore()

const currentPage = ref<number>(1)
const itemsByPage = 5
const maxPages = computed(() =>
    Math.ceil(reportsStore.reportItems.length / itemsByPage)
)
const displayedItemsFrom = computed(() => (currentPage.value - 1) * itemsByPage)
const displayedItemsTo = computed(() => displayedItemsFrom.value + itemsByPage)
const setCurrentPage = (newValue: number) => {
    currentPage.value = newValue
}
</script>

<style scoped lang="sass">
.list
  width: 1209rem
  padding: 39rem 45rem 0 45rem

  text-align: center

.list__toolbar
  display: flex
  margin-bottom: 44rem

.list__download-reports
  background-color: $non-active-color
  border-color: $non-active-color

  &:hover
    background-color: $active-color
    border-color: $active-color
    color: $white

  // &__filter
  //   display: flex

  //   &-button
  //     padding: 18rem 38rem

  //     background-color: transparent
  //     color: $non-active-color
  //     border-color: $non-active-color
  //     border-radius: 0


  //     &:first-child
  //       border-top-left-radius: 8rem
  //       border-bottom-left-radius: 8rem

  //     &:last-child
  //       border-top-right-radius: 8rem
  //       border-bottom-right-radius: 8rem

  //     &:hover
  //       background-color: $active-color
  //       border-color: $active-color
  //       color: $white

.list__items
  height: 658rem
  margin-bottom: 32rem
  display: grid
  gap: 24rem
  align-content: start
</style>
