<template>
    <div class="item">
        <span>25/08/2023</span>
        <span>Исследование №0015400</span>
        <span>Иванова О.С.</span>
        <span>Атипичных объектов: 0000</span>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'

//defineProps<{
//	msg: string;
//}>();
</script>

<style scoped lang="sass">
.item
  width: 1119rem
  height: 112rem
  padding: 0 32rem
  display: grid
  grid-template-columns: 145rem 310rem 290rem 1fr
  // gap: 32rem

  font-size: 20rem

  border-radius: 4rem
  border: 1px solid $non-active-color
  cursor: pointer

  transition: all 0.3s ease-in-out

  &:hover
    border-color: $active-color

  & span
    align-self: center
    display: inline-block

    &:not(:last-child)
      padding-right: 30rem
</style>
