<template>
    <div class="list">
        <ResearchListToolbar v-if="!researchStore.isNewResearchForm" />
        <div
            class="list__items"
            v-if="!researchStore.isNewResearchForm"
        >
            <ResearchListItem
                v-for="researchItem in researchStore.researchItems.slice(
                    displayedItemsFrom,
                    displayedItemsTo
                )"
                :researchItem="researchItem"
                :key="researchItem.id"
            />
        </div>

        <BasePagination
            v-if="maxPages > 1 && !researchStore.isNewResearchForm"
            :maxPages="maxPages"
            :currentPage="currentPage"
            @changePage="(value) => setCurrentPage(value)"
            class="list__pagination"
        />

        <NewResearchForm v-if="researchStore.isNewResearchForm" />
    </div>
</template>

<script setup lang="ts">
import {ref, computed, onMounted} from 'vue'
import ResearchListToolbar from 'components/ResearchListModule/ResearchListToolbar.vue'
import BasePagination from 'src/ui/BasePagination.vue'
import ResearchListItem from 'components/ResearchListModule/ResearchListItem.vue'
import NewResearchForm from 'components/ResearchListModule/NewResearchForm.vue'
import {useResearchStore} from 'stores/ResearchStore'

const researchStore = useResearchStore()

const currentPage = ref<number>(1)
const itemsByPage = ref<number>(7)
const maxPages = computed(() => Math.ceil(researchStore.researchItems.length / itemsByPage.value))
const displayedItemsFrom = computed(() => (currentPage.value - 1) * itemsByPage.value)
const displayedItemsTo = computed(() => displayedItemsFrom.value + itemsByPage.value)

const setCurrentPage = (newValue: number) => {
    currentPage.value = newValue
}

onMounted(() => {
    researchStore.getResearchList()
})
</script>

<style scoped lang="sass">
.list
  padding: 32rem 45rem 32rem 45rem

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
