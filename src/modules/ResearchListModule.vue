<template>
    <div class="list">
        <ResearchListToolbar />
        <div
            class="list__items"
            v-if="!researchStore.isNewResearchForm"
        >
            <ResearchListItem
                v-for="researchItem in researchStore.searchedAndSortedResearchItems.slice(
                    displayedItemsFrom,
                    displayedItemsTo
                )"
                :researchItem="researchItem"
                :key="researchItem.id"
            />
        </div>

        <NewResearchForm v-if="researchStore.isNewResearchForm" />

        <BasePagination
            v-if="maxPages > 1 && !researchStore.isNewResearchForm"
            :maxPages="maxPages"
            :currentPage="currentPage"
            @changePage="(value) => setCurrentPage(value)"
            class="float-right"
        />
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import ResearchListToolbar from 'components/ResearchListModule/ResearchListToolbar.vue'
import BasePagination from 'src/ui/BasePagination.vue'
import ResearchListItem from 'components/ResearchListModule/ResearchListItem.vue'
import NewResearchForm from 'components/ResearchListModule/NewResearchForm.vue'
import {useResearchStore} from 'stores/ResearchStore'

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
  padding: 39rem 45rem 0 45rem

.list__items
  height: 658rem
  margin-bottom: 32rem
  display: grid
  gap: 24rem
  align-content: start
</style>
