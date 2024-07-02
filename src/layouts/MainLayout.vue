<template>
    <q-layout>
        <HeaderModule />

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import HeaderModule from 'src/modules/HeaderModule.vue'

defineOptions({
    name: 'MainLayout',
})
</script>

<style scoped lang="sass">
.header
  padding: 32rem 64rem

.header-logo
    width: 252px
    height: 44px
</style>
