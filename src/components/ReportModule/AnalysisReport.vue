<template>
    <div class="report">
        <BaseButton
            class="report__button"
            label="Скачать отчет"
        >
            <ReportIcon />
        </BaseButton>

        <div class="report__status report__status--success">
            <SuccessIcon class="report__status-icon" />
            <span>Нейросетевой анализ<br />завершен успешно</span>
        </div>
        <!-- перерисовать иконку под стиль -->
        <!-- <div class="analysis__status-fail">
              <q-icon name="close" class="analysis__status-icon"/>
              <span>Нейросетевой анализ завершен с ошибкой</span>
        </div> -->

        <div class="report__info">
            <span>Всего объектов: 198</span>
            <span>Групп: 19</span>
            <span>Предупреждений: 14</span>
            <span>Атипичных объектов: 5</span>
            <span>Достоверность: 95%</span>
            <span>Заключение: атипия</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import BaseButton from 'src/ui/BaseButton.vue'
import ReportIcon from 'assets/icons/report-icon.vue'
import SuccessIcon from 'assets/icons/success-icon.vue'

//defineProps<{
//	msg: string;
//}>();
</script>

<style scoped lang="sass">
.report
    width: 320rem

    font-size: 20rem

.report__button
  padding: 18rem 14rem
  margin-bottom: 32rem
  display: flex
  align-items: center

  font-size: 18rem

  &>svg
    width: 24rem
    height: 24rem

    transition: all 0.3s ease-in-out

  &:hover svg
    fill: $active-color

.report__status
    width: 100%
    margin-bottom: 24rem
    display: flex
    gap: 8rem

.report__status--success
    color: $active-color

.report__status-icon
    width: 24rem
    height: 24rem

.report__info
  width: 320rem
  margin-left: 32rem
  display: grid
  gap: 8rem

  &>span:last-child
    color: $active-color
</style>
