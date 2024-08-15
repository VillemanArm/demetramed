<template>
    <input
        class="input"
        type="text"
        :placeholder="placeholder"
    />
</template>

<script setup lang="ts">
defineProps<{
    placeholder?: string
}>()
</script>

<style scoped lang="sass">
.input
  width: 581rem
  height: 54rem
  padding: 16rem 32rem

  border: 1rem solid $non-active-color
  border-radius: 4rem
  outline: none

  &:focus
    border: 2rem solid $active-color
</style>
