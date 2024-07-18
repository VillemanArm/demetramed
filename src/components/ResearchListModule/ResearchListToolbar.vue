<template>
    <div
        class="toolbar"
        v-if="!researchStore.isNewResearchForm"
    >
        <BaseButton
            label="Добавить исследование"
            class="toolbar__research-add"
            @click="researchStore.isNewResearchForm = true"
        >
            <AddBigIcon />
        </BaseButton>
        <div class="toolbar__filter">
            <div
                :class="{
                    'toolbar__filter-option': true,
                    'toolbar__filter-option--active':
                        researchStore.listRequestParameters.sortOption ===
                        'date',
                }"
            >
                <span>По дате</span>
                <div class="toolbar__sort-direction">
                    <NextIcon
                        @click="
                            researchStore.setSortRequestParameters(
                                'date',
                                false
                            )
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                researchStore.listRequestParameters
                                    .sortOption === 'date' &&
                                researchStore.listRequestParameters
                                    .sortDescending === false,
                        }"
                    />
                    <NextIcon
                        @click="
                            researchStore.setSortRequestParameters('date', true)
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                researchStore.listRequestParameters
                                    .sortOption === 'date' &&
                                researchStore.listRequestParameters
                                    .sortDescending === true,
                        }"
                    />
                </div>
            </div>
            <div
                label="По пациенту"
                :class="{
                    'toolbar__filter-option': true,
                    'toolbar__filter-option--active':
                        researchStore.listRequestParameters.sortOption ===
                        'name',
                }"
            >
                <span>По пациенту</span>
                <div class="toolbar__sort-direction">
                    <NextIcon
                        @click="
                            researchStore.setSortRequestParameters(
                                'name',
                                false
                            )
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                researchStore.listRequestParameters
                                    .sortOption === 'name' &&
                                researchStore.listRequestParameters
                                    .sortDescending === false,
                        }"
                    />
                    <NextIcon
                        @click="
                            researchStore.setSortRequestParameters('name', true)
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                researchStore.listRequestParameters
                                    .sortOption === 'name' &&
                                researchStore.listRequestParameters
                                    .sortDescending === true,
                        }"
                    />
                </div>
            </div>
            <div
                label="По номеру исследования"
                :class="{
                    'toolbar__filter-option': true,
                    'toolbar__filter-option--active':
                        researchStore.listRequestParameters.sortOption ===
                        'number',
                }"
            >
                <span>По номеру исследования</span>
                <div class="toolbar__sort-direction">
                    <NextIcon
                        @click="
                            researchStore.setSortRequestParameters(
                                'number',
                                false
                            )
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                researchStore.listRequestParameters
                                    .sortOption === 'number' &&
                                researchStore.listRequestParameters
                                    .sortDescending === false,
                        }"
                    />
                    <NextIcon
                        @click="
                            researchStore.setSortRequestParameters(
                                'number',
                                true
                            )
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                researchStore.listRequestParameters
                                    .sortOption === 'number' &&
                                researchStore.listRequestParameters
                                    .sortDescending === true,
                        }"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import AddBigIcon from 'assets/icons/add-big-icon.vue'
import NextIcon from 'assets/icons/next-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import {useResearchStore} from 'stores/ResearchStore'

//defineProps<{
//	msg: string;
//}>();

const researchStore = useResearchStore()
</script>

<style scoped lang="sass">
.toolbar
  display: flex
  margin-bottom: 32rem

.toolbar__research-add
  height: 52rem
  padding: 12rem 14rem
  margin-right: 23rem

  &:hover svg
    fill: $active-color
    stroke: $active-color

.toolbar__filter
  display: flex

.toolbar__filter-option
  height: 52rem
  display: flex
  padding: 0 34rem
  gap: 16rem
  align-items: center

  background-color: transparent
  color: $non-active-color
  border: 2rem solid $non-active-color
  border-radius: 0


  &:first-child
    border-top-left-radius: 8rem
    border-bottom-left-radius: 8rem

  &:last-child
    border-top-right-radius: 8rem
    border-bottom-right-radius: 8rem

  &:hover
    border-color: $active-color
    color: $active-color

  &--active
    border-color: $active-color
    color: $active-color

.toolbar__sort-direction
  display: grid
  gap: 6rem

  & svg
    width: 10rem
    height: 10rem

    cursor: pointer

    &:hover
      fill: $active-color

    &:first-child
      transform: rotate(-90deg) scale(2.2)

    &:last-child
      transform: rotate(90deg)  scale(2.2)

  &--active
    fill: $active-color
</style>
