<template>
    <iframe
        class="report"
        ref="iframe"
        src="https://insight-webstudio.ru/files_for_another_projects/demetramed_pages/report-page.html"
    ></iframe>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
// import {useRoute} from 'vue-router'
// import {useResearchStore} from 'src/stores/ResearchStore'
// import ImageViewer from 'src/ui/ImageViewer.vue'
// import BaseButton from 'src/ui/BaseButton.vue'
// import AnalysisIcon from 'assets/icons/analysis-icon.vue'
// import ResearchInfo from 'components/ReportModule/ResearchInfo.vue'
// import AtypicalObjectsList from 'components/ReportModule/AtypicalObjectsList.vue'
// import AnalysisReport from 'components/ReportModule/AnalysisReport.vue'
// import type {ResearchItem} from 'stores/ResearchStore'

//defineProps<{
//	msg: string;
//}>();

// const route = useRoute()
// const researchStore = useResearchStore()

const iframe = ref<HTMLIFrameElement>()

onUpdated(() => {
    // const contentHeight =
    //     iframe.value.contentWindow.document.body.scrollHeight + 'px'
    // iframe?.value?.style.height = contentHeight
    // ;(iframe.value as HTMLIFrameElement).style.height =
    console.log(iframe.value?.contentWindow?.document.body.scrollHeight + 'px')
})
</script>

<style scoped lang="sass">
.report
  width: 100%
  height: 970rem

  border: none
  overflow: hidden
</style>
