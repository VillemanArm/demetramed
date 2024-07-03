<template>
    <div class="card">
        <!-- <router-link to="/" >К списку исследований<router-link /> -->
        <RouterLink to="/">К списку исследований</RouterLink>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'

//defineProps<{
//	msg: string;
//}>();

// $route.params.id
</script>

<style scoped lang="sass">
.card
  width: 100%
  padding: 8rem 84rem 0 84rem
</style>
