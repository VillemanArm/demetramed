<template>
    <div class="research">
        <ResearchToolbar @switchViewer="(value) => console.log(value)" />
        <div class="research__viewer">
            <ResearchList v-if="researchStore.modulesInViewer.ResearchList" />
            <ReportsList v-if="researchStore.modulesInViewer.ReportsList" />
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import ResearchToolbar from 'components/ResearchToolbar.vue'
import ResearchList from 'components/ResearchList.vue'
import ReportsList from 'components/ReportsList.vue'
import {useResearchStore} from 'src/stores/ResearchStore'

//defineProps<{
//	msg: string;
//}>();

const researchStore = useResearchStore()
</script>

<style scoped lang="sass">
.research
  display: flex
</style>
