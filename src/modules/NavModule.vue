<template>
    <div class="nav">
        <NavToolbar />
        <router-view />
    </div>
</template>

<script setup lang="ts">
import NavToolbar from 'components/NavModule/NavToolbar.vue'
</script>

<style scoped lang="sass">
.nav
  display: flex
</style>
