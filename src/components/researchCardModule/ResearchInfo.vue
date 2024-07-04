<template>
    <div class="info">
        <span>Дата:</span>
        <span>{{ research?.researchDate }}</span>
        <span>№Исследования:</span>
        <span>{{ research?.researchNumber }}</span>
        <span>Пациент:</span>
        <span>{{ research?.patientName }}</span>
        <span>Возраст:</span>
        <span>{{ research?.patientAge }} лет</span>
        <span>Учреждение по направлению:</span>
        <span>{{ research?.institutionByReferral }}</span>
        <span>ФИО врача по направлению:</span>
        <span>{{ research?.doctorsName }}</span>
        <span>Клинический диагноз:</span>
        <span>{{ research?.diagnosis }}</span>
        <span>Комментарий:</span>
        <span>{{ research?.comment }}</span>

        <EditCircleIcon class="info__edit" />
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import EditCircleIcon from 'assets/icons/edit-circle-icon.vue'
import type {ResearchItem} from 'stores/ResearchStore'

defineProps<{
    research: ResearchItem | undefined
}>()
</script>

<style scoped lang="sass">
.info
    width: 513rem
    padding: 22rem 32rem 72rem 32rem
    margin-bottom: 32rem
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 18rem 44rem
    position: relative

    border: 1rem solid $non-active-color
    border-radius: 4rem

.info__edit
      width: 60rem
      height: 60rem
      position: absolute
      bottom: 24rem
      right: 24rem

      cursor: pointer

      &:hover
        fill: $active-color
</style>
