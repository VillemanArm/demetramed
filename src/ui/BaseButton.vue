<!--
  Кнопка принимает следующие параметры:
  label?: string
  иконку в слот
 -->
<template>
    <button class="base-button">
        <slot></slot>
        <span>{{ label }}</span>
    </button>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'

defineProps<{
    label?: string
}>()
</script>

<style scoped lang="sass">
.base-button
  padding: 12rem 16rem
  display: flex
  align-items: center
  gap: 8rem

  font-size: 16rem
  font-weight: 600

  border-radius: 8rem
  background-color: $accent
  border: 2rem solid $accent
  color: $white

  transition: all 0.3s ease-in-out

  &:hover
    background-color: transparent
    color: $accent

  &>svg
    width: 20rem
    height: 20rem

    transition: all 0.3s ease-in-out

  &>span
    display: inline-block
</style>
