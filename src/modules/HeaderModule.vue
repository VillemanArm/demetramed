<template>
    <header class="header">
        <RouterLink to="/">
            <div class="header__logo">
                <img
                    src="/img/logo.svg"
                    alt="Demetramed"
                />
            </div>
        </RouterLink>
        <div class="header__toolbar">
            <router-link to="/">
                <FaqIcon class="header__icon" />
            </router-link>
            <router-link to="/">
                <SettingsIcon class="header__icon" />
            </router-link>
            <div class="header__user">
                <!-- получить аватар с сервера -->
                <img
                    src="/img/user.png"
                    alt=""
                />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import FaqIcon from 'assets/icons/faq-icon.vue'
import SettingsIcon from 'assets/icons/settings-icon.vue'

defineOptions({
    name: 'MainLayout',
})
</script>

<style lang="sass">
.header
    padding: 32rem 64rem
    display: flex
    justify-content: space-between
    align-items: center

    &__logo
        width: 252rem
        height: 44rem

    &__toolbar
        display: flex
        align-items: center

        &>a
            display: flex
            align-items: center

            &:not(:last-child)
                margin-right: 24rem

    &__icon
        width: 32rem
        height: 32rem

        &:hover
            fill: $active-color

    &__user
      width: 60rem
      height: 60rem
      margin-left: 8rem

      border-radius: 50%
</style>
