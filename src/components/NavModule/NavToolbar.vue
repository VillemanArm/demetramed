<template>
    <div class="toolbar">
        <q-input
            v-model="searchQuery"
            outlined
            clearable
            placeholder="Поиск"
            clear-icon="close"
            class="toolbar__search"
            color="accent"
            @keyup.enter="handleSearchUpdate"
            @clear="handleSearchUpdate"
        >
            <template v-slot:prepend>
                <SearchIcon class="toolbar__search-icon" />
            </template>
        </q-input>
        <div class="toolbar__nav">
            <router-link
                :class="{
                    toolbar__option: true,
                    'toolbar__option--active': route.path === '/research',
                }"
                to="/research"
            >
                Исследования
            </router-link>
            <router-link
                :class="{
                    toolbar__option: true,
                    'toolbar__option--active': route.path === '/reports',
                }"
                to="/reports"
            >
                Отчеты
            </router-link>
        </div>
    </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue'
import {useResearchStore} from 'src/stores/ResearchStore'
import {useReportsStore} from 'src/stores/ReportsStore'
import {useRoute, useRouter} from 'vue-router'
import SearchIcon from 'assets/icons/search-icon.vue'

const researchStore = useResearchStore()
const reportsStore = useReportsStore()
const route = useRoute()
const router = useRouter()

const searchQuery = ref('')

const handleSearchUpdate = () => {
    researchStore.setSearchRequestParameter(searchQuery.value)
    reportsStore.setSearchRequestParameter(searchQuery.value)
}

onMounted(() => {
    if (route.path === '/') {
        router.push('/research')
    }
})
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
  color: $non-active-color

  &:hover
    color: $active-color
    text-decoration: underline

  &--active
    color: $active-color
    text-decoration: underline
    cursor: default

.toolbar__search-icon
  width: 20rem
  height: 20rem

:deep(.q-field__control)
  height: 52rem

:deep(.q-field__marginal)
  height: 52rem

:deep(.q-field--outlined .q-field__control)
  border-radius: 8rem
  border-width: 2rem
</style>
