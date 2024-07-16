<template>
    <div class="research">
        <MainToolbar />
        <div class="research__viewer">
            <ResearchListModule v-if="mainStore.modulesInViewer.ResearchList" />
            <ReportsListModule v-if="mainStore.modulesInViewer.ReportsList" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import MainToolbar from 'components/NavModule/MainToolbar.vue'
import ResearchListModule from 'src/modules/ResearchListModule.vue'
import ReportsListModule from 'src/modules/ReportsListModule.vue'

import {useMainStore} from 'stores/MainStore'

//defineProps<{
//	msg: string;
//}>();

const mainStore = useMainStore()
</script>

<style scoped lang="sass">
.research
  display: flex
</style>
