<template>
    <div class="toolbar">
        <BaseButton
            label="Скачать отчеты"
            class="toolbar__download-reports"
        >
            <ReportIcon />
        </BaseButton>
        <div class="toolbar__filter">
            <div
                :class="{
                    'toolbar__filter-option': true,
                    'toolbar__filter-option--active':
                        reportsStore.listRequestParameters.sortOption ===
                        'date',
                }"
            >
                <span>По дате</span>
                <div class="toolbar__sort-direction">
                    <NextIcon
                        @click="
                            reportsStore.setSortRequestParameters('date', false)
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                reportsStore.listRequestParameters
                                    .sortOption === 'date' &&
                                reportsStore.listRequestParameters
                                    .sortDescending === false,
                        }"
                    />
                    <NextIcon
                        @click="
                            reportsStore.setSortRequestParameters('date', true)
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                reportsStore.listRequestParameters
                                    .sortOption === 'date' &&
                                reportsStore.listRequestParameters
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
                        reportsStore.listRequestParameters.sortOption ===
                        'name',
                }"
            >
                <span>По пациенту</span>
                <div class="toolbar__sort-direction">
                    <NextIcon
                        @click="
                            reportsStore.setSortRequestParameters('name', false)
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                reportsStore.listRequestParameters
                                    .sortOption === 'name' &&
                                reportsStore.listRequestParameters
                                    .sortDescending === false,
                        }"
                    />
                    <NextIcon
                        @click="
                            reportsStore.setSortRequestParameters('name', true)
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                reportsStore.listRequestParameters
                                    .sortOption === 'name' &&
                                reportsStore.listRequestParameters
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
                        reportsStore.listRequestParameters.sortOption ===
                        'number',
                }"
            >
                <span>По номеру исследования</span>
                <div class="toolbar__sort-direction">
                    <NextIcon
                        @click="
                            reportsStore.setSortRequestParameters(
                                'number',
                                false
                            )
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                reportsStore.listRequestParameters
                                    .sortOption === 'number' &&
                                reportsStore.listRequestParameters
                                    .sortDescending === false,
                        }"
                    />
                    <NextIcon
                        @click="
                            reportsStore.setSortRequestParameters(
                                'number',
                                true
                            )
                        "
                        :class="{
                            'toolbar__sort-direction--active':
                                reportsStore.listRequestParameters
                                    .sortOption === 'number' &&
                                reportsStore.listRequestParameters
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
import ReportIcon from 'assets/icons/report-icon.vue'
import NextIcon from 'assets/icons/next-icon.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import {useReportsStore} from 'stores/ReportsStore'

//defineProps<{
//	msg: string;
//}>();

const reportsStore = useReportsStore()
</script>

<style scoped lang="sass">
.toolbar
  display: flex
  margin-bottom: 32rem


.toolbar__download-reports
  height: 52rem
  width: 281rem
  padding: 12rem 14rem
  margin-right: 23rem
  justify-content: center

  background-color: $non-active-color
  border-color: $non-active-color

  &:hover
    background-color: $active-color
    border-color: $active-color
    color: $white

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
