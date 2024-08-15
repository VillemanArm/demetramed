<!--
  Компонент представляет из себя простую пагинацию с кнопками вперед и назад.
  Принимает свойства:
  maxPages: number
  currentPage: number

  Возвращает событие
  changePage (value: number)
 -->

<template>
    <div class="pagination">
        <div
            :class="{
                pagination__btn: true,
                'pagination__btn--active': currentPage !== 1,
            }"
            @click="handleChangePage(currentPage - 1)"
        >
            <LeftArrowIcon />
        </div>
        <span class="pagination__info">{{ currentPage }} из {{ maxPages }}</span>
        <div
            :class="{
                pagination__btn: true,
                'pagination__btn--active': currentPage !== maxPages,
            }"
            @click="handleChangePage(currentPage + 1)"
        >
            <RightArrowIcon />
        </div>
    </div>
</template>

<script setup lang="ts">
import RightArrowIcon from 'assets/icons/right-arrow-icon.vue'
import LeftArrowIcon from 'assets/icons/left-arrow-icon.vue'

const {maxPages} = defineProps<{
    maxPages: number
    currentPage: number
}>()

const emit = defineEmits(['changePage'])
const handleChangePage = (newPageValue: number) => {
    if (newPageValue >= 1 && newPageValue <= maxPages) {
        emit('changePage', newPageValue)
    }
}
</script>

<style scoped lang="sass">
.pagination
  display: flex
  align-items: center
  padding: 1rem

  &__btn
    width: 60rem
    height: 60rem

    & svg
      width: 100%
      height: 100%
      object-fit: contain

    &--active
      cursor: pointer

      & svg:hover
        fill: $active-color


  &__info
    width: 125rem

    text-align: center
</style>
