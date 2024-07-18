<template>
    <div class="nav">
        <NavToolbar />
        <div class="nav__viewer">
            <ResearchListModule v-if="NavStore.modulesInViewer.ResearchList" />
            <ReportsListModule v-if="NavStore.modulesInViewer.ReportsList" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import NavToolbar from 'components/NavModule/NavToolbar.vue'
import ResearchListModule from 'src/modules/ResearchListModule.vue'
import ReportsListModule from 'src/modules/ReportsListModule.vue'

import {useNavStore} from 'stores/NavStore'

//defineProps<{
//	msg: string;
//}>();

const NavStore = useNavStore()
</script>

<style scoped lang="sass">
.nav
  display: flex
</style>
src/stores/NavStore
