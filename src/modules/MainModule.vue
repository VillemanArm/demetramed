<template>
    <div class="research">
        <ResearchToolbar @switchViewer="(value) => console.log(value)" />
        <div class="research__viewer">
            <ResearchList v-if="researchStore.modulesInViewer.ResearchList" />
            <ReportsList v-if="researchStore.modulesInViewer.ReportsList" />
            <NewResearchForm
                v-if="researchStore.modulesInViewer.NewResearchForm"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import ResearchToolbar from 'components/MainModule/ResearchToolbar.vue'
import ResearchList from 'components/MainModule/ResearchList.vue'
import ReportsList from 'components/MainModule/ReportsList.vue'
import NewResearchForm from 'components/MainModule/NewResearchForm.vue'
import {useResearchStore} from 'stores/ResearchStore'

//defineProps<{
//	msg: string;
//}>();

const researchStore = useResearchStore()
</script>

<style scoped lang="sass">
.research
  display: flex
</style>
