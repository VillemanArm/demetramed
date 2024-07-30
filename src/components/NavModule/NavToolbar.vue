<template>
    <div class="toolbar">
        <q-input
            v-model="navStore.searchQuery"
            outlined
            placeholder="Поиск"
            clear-icon="close"
            class="toolbar__search"
            color="accent"
            @keyup.enter="handleSearch"
        >
            <template v-slot:prepend>
                <SearchIcon style="width: 20rem; height: 20rem" />
            </template>
            <template v-slot:append>
                <q-icon
                    v-if="navStore.searchQuery"
                    name="close"
                    @click="navStore.searchQuery = ''"
                    class="cursor-pointer"
                    size="20rem"
                />
            </template>
        </q-input>
        <div class="toolbar__nav">
            <span
                :class="{
                    toolbar__option: true,
                    'toolbar__option--active':
                        navStore.modulesInViewer['ResearchList'],
                }"
                @click="navStore.setModuleInViewer('ResearchList')"
                >Исследования</span
            >
            <span
                :class="{
                    toolbar__option: true,
                    'toolbar__option--active':
                        navStore.modulesInViewer['ReportsList'],
                }"
                @click="navStore.setModuleInViewer('ReportsList')"
                >Отчеты</span
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import SearchIcon from 'assets/icons/search-icon.vue'
import {useNavStore} from 'stores/NavStore'
import {useResearchStore} from 'src/stores/ResearchStore'
import {useReportsStore} from 'src/stores/ReportsStore'

//defineProps<{
//	msg: string;
//}>();

const navStore = useNavStore()
const researchStore = useResearchStore()
const reportsStore = useReportsStore()

const handleSearch = () => {
    researchStore.setSearchRequestParameter(navStore.searchQuery)
    reportsStore.setSearchRequestParameter(navStore.searchQuery)
}
</script>

<style scoped lang="sass">
.toolbar
  padding: 32rem 64rem 0 64rem

.toolbar__search
  width: 472rem
  margin-bottom: 32rem

.toolbar__nav
  width: 472rem
  display: grid
  grid-template-columns: repeat(2, 1fr)

  font-size: 24rem

  color: $non-active-color

.toolbar__option
  cursor: pointer

  &:hover
    color: $active-color
    text-decoration: underline

  &--active
    color: $active-color
    text-decoration: underline
    cursor: default

:deep(.q-field__control)
  height: 52rem

:deep(.q-field__marginal)
  height: 52rem

:deep(.q-field--outlined .q-field__control)
  border-radius: 8rem
  border-width: 2rem
</style>
