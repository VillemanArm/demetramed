<template>
    <form
        action=""
        class="form"
    ></form>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import BaseButton from 'src/ui/BaseButton.vue'
import SuccessIcon from 'assets/icons/success-icon.svg'

import {useResearchStore} from 'stores/ResearchStore'

//defineProps<{
//	msg: string;
//}>();

const reserchStore = useResearchStore()
</script>

<style scoped lang="sass">
.form
    width: 1116rem
    height: 728rem
    margin-top: 39rem

    border: 1rem solid $non-active-color
    border-radius: 8rem
</style>
