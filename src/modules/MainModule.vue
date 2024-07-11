<template>
    <div class="research">
        <MainToolbar />
        <div class="research__viewer">
            <ResearchList v-if="mainStore.modulesInViewer.ResearchList" />
            <ReportsList v-if="mainStore.modulesInViewer.ReportsList" />
            <NewResearchForm v-if="mainStore.modulesInViewer.NewResearchForm" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import MainToolbar from 'components/MainModule/MainToolbar.vue'
import ResearchList from 'components/MainModule/ResearchList.vue'
import ReportsList from 'components/MainModule/ReportsList.vue'
import NewResearchForm from 'components/MainModule/NewResearchForm.vue'
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
