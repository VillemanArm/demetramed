<template>
    <div class="card">
        <RouterLink
            class="card__back"
            to="/"
            >К списку исследований</RouterLink
        >

        <div class="card__wrap">
            <div class="card__info">
                <ResearchInfo :research="research" />
                <BaseButton
                    class="card__button"
                    label="Начать анализ"
                >
                    <AnalysisIcon />
                </BaseButton>

                <AnalysisReport v-if="false" />
            </div>
            <div class="card__viewer">
                <ImageViewer class="card__image-viewer" />
                <AtypicalObjectsList />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import {useRoute} from 'vue-router'
import {useResearchStore} from 'src/stores/ResearchStore'
import ImageViewer from 'src/ui/ImageViewer.vue'
import BaseButton from 'src/ui/BaseButton.vue'
import AnalysisIcon from 'assets/icons/analysis-icon.vue'
import ResearchInfo from 'components/researchCardModule/ResearchInfo.vue'
import AtypicalObjectsList from 'components/researchCardModule/AtypicalObjectsList.vue'
import AnalysisReport from 'components/researchCardModule/AnalysisReport.vue'
import type {ResearchItem} from 'stores/ResearchStore'

//defineProps<{
//	msg: string;
//}>();

const route = useRoute()
const researchStore = useResearchStore()

const research = ref<ResearchItem | undefined>(
    researchStore.researchItems.find(
        (item) => item.id == route.params.id.slice(1)
    )
)
</script>

<style scoped lang="sass">
.card
  width: 100%
  padding: 8rem 84rem 52rem 84rem

.card__back
  display: block
  margin-bottom: 16rem

  color: $non-active-color

  &:hover
    color: $active-color

.card__wrap
  width: 100%
  display: flex

.card__info
  margin-right: 44rem

.card__button
  padding: 18rem 14rem
  margin-bottom: 32rem
  display: flex
  align-items: center

  font-size: 18rem

  &>svg
    width: 24rem
    height: 24rem

  &:hover svg
    fill: $active-color

.card__viewer
  display: flex
  gap: 55rem
</style>
