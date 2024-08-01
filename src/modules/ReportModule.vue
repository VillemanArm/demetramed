<template>
    <iframe
        class="report"
        :src="reportsStore.selectedReportPage"
    ></iframe>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import {useReportsStore} from 'src/stores/ReportsStore'

const reportsStore = useReportsStore()
</script>

<style scoped lang="sass">
.report
  width: 100%
  min-height: 980rem

  border: none
  overflow: hidden
</style>
