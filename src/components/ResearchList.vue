<template>
    <div class="list">
        <div class="list__toolbar">
            <BaseButton
                label="Добавить исследование"
                class="list__research-add"
            >
                <AddBigIcon />
            </BaseButton>
            <div class="list__filter">
                <BaseButton
                    label="По дате"
                    class="list__filter-button list__filter-button--left"
                />
                <BaseButton
                    label="По пациенту"
                    class="list__filter-button list__filter-button--center"
                />
                <BaseButton
                    label="По номеру исследования"
                    class="list__filter-button list__filter-button--right"
                />
            </div>
        </div>
        <div class="list__items">
            <ResearchListItem />
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import AddBigIcon from 'assets/icons/add-big-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import ResearchListItem from 'components/ResearchListItem.vue'

//defineProps<{
//	msg: string;
//}>();
</script>

<style scoped lang="sass">
.list
  padding: 54rem 45rem 0 45rem

  &__toolbar
    display: flex
    margin-bottom: 44rem

  &__research-add
    margin-right: 23rem

  &__filter
    display: flex


    &-button
      background-color: transparent
      color: $non-active-color
      border-color: $non-active-color
      border-radius: 0

      &:first-child
        border-top-left-radius: 8rem
        border-bottom-left-radius: 8rem

      &:last-child
        border-top-right-radius: 8rem
        border-bottom-right-radius: 8rem

      &:hover
        background-color: $active-color
        border-color: $active-color
        color: $white
</style>
