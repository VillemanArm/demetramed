<template>
    <div class="toolbar">
        <q-input
            v-model="NavStore.searchQuery"
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
                    v-if="NavStore.searchQuery"
                    name="close"
                    @click="NavStore.searchQuery = ''"
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
                        NavStore.modulesInViewer['ResearchList'],
                }"
                @click="NavStore.setModuleInViewer('ResearchList')"
                >Исследования</span
            >
            <span
                :class="{
                    toolbar__option: true,
                    'toolbar__option--active':
                        NavStore.modulesInViewer['ReportsList'],
                }"
                @click="NavStore.setModuleInViewer('ReportsList')"
                >Отчеты</span
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import SearchIcon from 'assets/icons/search-icon.vue'
import {useNavStore} from 'stores/NavStore'

//defineProps<{
//	msg: string;
//}>();

const NavStore = useNavStore()
</script>

<style scoped lang="sass">
.toolbar
  padding: 39rem 64rem 0 64rem

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
src/stores/NavStore
