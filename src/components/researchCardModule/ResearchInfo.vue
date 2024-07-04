<template>
    <div class="info">
        <span>Дата:</span>
        <span>01/07/2023</span>
        <span>№Исследования:</span>
        <span>0250330</span>
        <span>Пациент:</span>
        <span>Панкратова Е.Н.</span>
        <span>Возраст:</span>
        <span>35 лет</span>
        <span>Учреждение по направлению:</span>
        <span>ГБУЗ НО Поликлиника №30</span>
        <span>ФИО врача по направлению:</span>
        <span>Черногорцева Е.С.</span>
        <span>Клинический диагноз:</span>
        <span>-</span>
        <span>Комментарий:</span>
        <span>-</span>

        <EditCircleIcon class="info__edit" />
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import EditCircleIcon from 'assets/icons/edit-circle-icon.vue'

//defineProps<{
//	msg: string;
//}>();
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
