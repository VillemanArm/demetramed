<template>
    <div class="card">
        <RouterLink
            class="card__back"
            to="/"
            >К списку исследований</RouterLink
        >

        <div class="card__wrap">
            <div>
                <div class="card__info">
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
                    <div class="card__info-edit">
                        <EditCircleIcon />
                    </div>
                </div>

                <BaseButton
                    v-if="false"
                    class="card__button"
                    label="Начать анализ"
                >
                    <AnalysisIcon />
                </BaseButton>

                <AnalysisReport />
            </div>
            <div class="card__viewer">
                <ImageViewer class="card__image-viewer" />
                <div class="card__atypical-objects">
                    <h3 class="card__atypical-objects-title">
                        Атипичные объекты
                    </h3>
                    <div class="card__atypical-objects-list">
                        <div class="card__atypical-objects-item">
                            <h4 class="card__atypical-objects-item-title">
                                Объект #AO1
                            </h4>
                            <div class="card__atypical-objects-item-img">
                                <img src="/img/snapshot-item-example.jpg" />
                            </div>
                        </div>
                        <div class="card__atypical-objects-item">
                            <h4 class="card__atypical-objects-item-title">
                                Объект #AO1
                            </h4>
                            <div class="card__atypical-objects-item-img">
                                <img src="/img/snapshot-item-example.jpg" />
                            </div>
                        </div>
                        <div class="card__atypical-objects-item">
                            <h4 class="card__atypical-objects-item-title">
                                Объект #AO1
                            </h4>
                            <div class="card__atypical-objects-item-img">
                                <img src="/img/snapshot-item-example.jpg" />
                            </div>
                        </div>
                        <div class="card__atypical-objects-item">
                            <h4 class="card__atypical-objects-item-title">
                                Объект #AO1
                            </h4>
                            <div class="card__atypical-objects-item-img">
                                <img src="/img/snapshot-item-example.jpg" />
                            </div>
                        </div>
                        <div class="card__atypical-objects-item">
                            <h4 class="card__atypical-objects-item-title">
                                Объект #AO1
                            </h4>
                            <div class="card__atypical-objects-item-img">
                                <img src="/img/snapshot-item-example.jpg" />
                            </div>
                        </div>
                        <div class="card__atypical-objects-item">
                            <h4 class="card__atypical-objects-item-title">
                                Объект #AO1
                            </h4>
                            <div class="card__atypical-objects-item-img">
                                <img src="/img/snapshot-item-example.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import ImageViewer from 'src/ui/ImageViewer.vue'
import EditCircleIcon from 'assets/icons/edit-circle-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import AnalysisIcon from 'assets/icons/analysis-icon.vue'

import AnalysisReport from 'components/researchCardModule/AnalysisReport.vue'

//defineProps<{
//	msg: string;
//}>();

// $route.params.id
</script>

<style scoped lang="sass">
svg
    width: 100%
    height: 100%
    object-fit: contain

.card
  width: 100%
  padding: 8rem 84rem 0 84rem

  &__back
    display: block
    margin-bottom: 16rem

    color: $non-active-color

    &:hover
      color: $active-color

  &__wrap
    width: 100%
    display: flex

    &>div:first-child
      margin-right: 44rem

  &__info
    width: 513rem
    padding: 22rem 32rem 72rem 32rem
    margin-bottom: 32rem
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 18rem 44rem
    position: relative

    border: 1rem solid $non-active-color
    border-radius: 4rem

    &-edit
      width: 60rem
      height: 60rem
      position: absolute
      bottom: 24rem
      right: 24rem

      cursor: pointer

      & svg:hover
        fill: $active-color

  &__button
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

.card__viewer
  display: flex

.card__image-viewer
  margin-right:55rem

.card__atypical-objects-title
  margin-bottom: 32rem

  font-size: 20rem
  line-height: 120%
  font-weight: 600
  white-space: nowrap

  color: $active-color

.card__atypical-objects-item-title
  margin-bottom: 6rem

  font-size: 18rem
  line-height: 120%

.card__atypical-objects-item-img
  width: 224rem
  height: 156rem

  cursor: pointer

.card__atypical-objects-list
  height: 822rem
  display: grid
  gap: 18rem

  overflow-y: auto
  overflow-x: hidden
  scrollbar-width: none

  &::-webkit-scrollbar
    display: none
</style>
