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

                <div class="card__analysis"></div>
            </div>
            <div class="card__viewer">
                <ImageViewer />
                <div class="card__atypical-objects"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import ImageViewer from 'src/ui/ImageViewer.vue'
import EditCircleIcon from 'assets/icons/edit-circle-icon.vue'

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
    margin-bottom: 16rem

    color: $non-active-color

  &__wrap
    width: 100%
    display: flex

    &>div:first-child
      margin-right: 44rem

  &__info
    width: 513rem
    padding: 22rem 32rem 56rem 32rem
    display: grid
    grid-template-columns: 1fr 1fr
    gap: 16rem 44rem
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
</style>
