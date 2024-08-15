<template>
    <q-layout>
        <HeaderModule />

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import HeaderModule from 'src/modules/HeaderModule.vue'

defineOptions({
    name: 'MainLayout',
})
</script>

<style scoped lang="sass"></style>
