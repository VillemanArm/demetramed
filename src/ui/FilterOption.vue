<!--
  Компонент представляет из себя универсальную кнопку для установки фильтра
  Принимает параметры:
    label: string
    optionActive: boolean
    sortDirectionActive: boolean

  Возвращает события:
    setDescending(value: boolean) - установка сортировки с указанием по направлению убывания или нет
 -->

<template>
    <div
        :class="{
            option: true,
            'option--active': optionActive,
        }"
    >
        <span>{{ label }}</span>
        <div class="sort-direction">
            <NextIcon
                @click="$emit('setDescending', false)"
                :class="{
                    'sort-direction--active': optionActive && !sortDirectionActive,
                }"
            />
            <NextIcon
                @click="$emit('setDescending', true)"
                :class="{
                    'sort-direction--active': optionActive && sortDirectionActive,
                }"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import NextIcon from 'assets/icons/next-icon.vue'

defineProps<{
    label: string
    optionActive: boolean
    sortDirectionActive: boolean
}>()
</script>

<style scoped lang="sass">
.option
  height: 52rem
  display: flex
  padding: 0 34rem
  gap: 16rem
  align-items: center

  background-color: transparent
  color: $non-active-color
  border: 2rem solid
  border-color: $non-active-color

  &:not(:first-child)
    margin-left: -2rem
    border-left-color: transparent

  &:hover
    border-color: $active-color
    color: $active-color

  &--active
    border-color: $active-color
    color: $active-color

    &:not(:first-child)
      border-left-color: $active-color

.sort-direction
  display: grid

  & svg
    width: 18rem
    height: 18rem

    cursor: pointer

    &:hover
      fill: $active-color

    &:first-child
      transform: rotate(-90deg)

    &:last-child
      transform: rotate(90deg)
  &--active
    fill: $active-color
</style>
