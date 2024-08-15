<template>
    <header class="header">
        <RouterLink to="/">
            <div class="header__logo">
                <img
                    src="~assets/img/logo.svg"
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
                <img
                    src="~assets/img/user.png"
                    alt=""
                />
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
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

.header__logo
  width: 252rem
  height: 44rem

.header__toolbar
  display: flex
  align-items: center

  &>a
    display: flex
    align-items: center

    &:not(:last-child)
      margin-right: 24rem

.header__icon
  width: 32rem
  height: 32rem

  &:hover
    fill: $active-color

.header__user
  width: 60rem
  height: 60rem
  margin-left: 8rem

  border-radius: 50%
</style>
