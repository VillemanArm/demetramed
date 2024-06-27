<template>
    <q-layout view="lHh Lpr lFf">
        <q-header class="header bg-white text-dark">
            <div class="header-logo">
                <img
                    src="/img/logo.svg"
                    alt=""
                />
            </div>

            <q-toolbar>
                <q-toolbar-title> Quasar App </q-toolbar-title>

                <div>Quasar v{{ $q.version }}</div>
            </q-toolbar>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script setup lang="ts">
import {ref} from 'vue'

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

<style></style>
