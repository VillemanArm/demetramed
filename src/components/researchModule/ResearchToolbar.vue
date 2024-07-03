<template>
    <div class="toolbar">
        <q-input
            v-model="researchStore.searchQuery"
            outlined
            placeholder="Поиск"
            clear-icon="close"
            class="toolbar__search"
            input-class=""
            color="accent"
        >
            <template v-slot:prepend>
                <SearchIcon style="width: 20rem; height: 20rem" />
            </template>
            <template v-slot:append>
                <q-icon
                    v-if="researchStore.searchQuery"
                    name="close"
                    @click="researchStore.searchQuery = ''"
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
                        researchStore.modulesInViewer['ResearchList'],
                }"
                @click="researchStore.setModuleInViewer('ResearchList')"
                >Исследования</span
            >
            <span
                :class="{
                    toolbar__option: true,
                    'toolbar__option--active':
                        researchStore.modulesInViewer['ReportsList'],
                }"
                @click="researchStore.setModuleInViewer('ReportsList')"
                >Отчеты</span
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import SearchIcon from 'assets/icons/search-icon.vue'
import {useResearchStore} from 'stores/ResearchStore'

//defineProps<{
//	msg: string;
//}>();

const researchStore = useResearchStore()

// const searchQuery = ref<string>()
</script>

<style scoped lang="sass">
.toolbar
  padding: 39rem 64rem 0 64rem

  &__search
    width: 472rem
    margin-bottom: 32rem

  &__nav
    width: 472rem
    display: grid
    grid-template-columns: repeat(2, 1fr)

    font-size: 24rem

    color: $non-active-color

  &__option
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
