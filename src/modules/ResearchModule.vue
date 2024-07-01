<template>
    <div class="research">
        <ResearchToolbar />
        <div class="research__viewer">
            <ResearchList />
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import ResearchToolbar from 'components/ResearchToolbar.vue'
import ResearchList from 'components/ResearchList.vue'

//defineProps<{
//	msg: string;
//}>();
</script>

<style scoped lang="sass">
.research
  display: flex
</style>
