<template>
    <form
        action=""
        class="form"
    >
        <span class="form__date">{{ newItem.researchDate }}</span>
        <div class="form__fields">
            <span>№Исследования:</span>
            <input
                class="form__text-input"
                type="text"
                v-model="newItem.researchNumber"
            />
            <span>Пациент:</span>
            <input
                class="form__text-input"
                type="text"
                v-model="newItem.patientName"
            />
            <span>Возраст:</span>
            <input
                class="form__text-input"
                type="text"
                v-model="newItem.patientAge"
            />
            <span>Учреждение по направлению:</span>
            <input
                class="form__text-input"
                type="text"
                v-model="newItem.institutionByReferral"
            />
            <span>ФИО врача по направлению:</span>
            <input
                class="form__text-input"
                type="text"
                v-model="newItem.doctorsName"
            />
            <span>Клинический диагноз:</span>
            <input
                class="form__text-input"
                type="text"
                v-model="newItem.diagnosis"
            />
            <span>Комментарий:</span>
            <input
                class="form__text-input"
                type="text"
                v-model="newItem.comment"
            />
            <span>Загрузить файл:</span>
            <input
                type="file"
                class="form__file-input"
            />
        </div>
        <BaseButton
            label="Сохранить"
            class="form__button"
            @click="handleSaveClick"
        >
            <SuccessIcon />
        </BaseButton>
    </form>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import BaseButton from 'src/ui/BaseButton.vue'
import SuccessIcon from 'assets/icons/success-icon.vue'
import {useResearchStore} from 'stores/ResearchStore'
// import type {ResearchItem} from 'stores/ResearchStore'

//defineProps<{
//	msg: string;
//}>();

const researchStore = useResearchStore()

const date = new Date()
const newItem = ref<newResearch>({
    id: String(Date.now()),
    researchNumber: '',
    researchDate: date.toLocaleDateString().replaceAll('.', '/'),
    patientName: '',
    patientAge: null,
    institutionByReferral: '',
    doctorsName: '',
    diagnosis: '',
    comment: '',
    file: '',
})

const handleSaveClick = () => {
    researchStore.addResearchItem(newItem.value)
}
</script>

<style scoped lang="sass">
.form
    width: 1116rem
    height: 728rem
    margin: 39rem 0 0 0
    padding: 16rem 0 0 117rem

    font-size: 18rem

    border: 1rem solid $non-active-color
    border-radius: 8rem

.form__date
  display: block
  margin: 0 0 8rem 854rem

.form__fields
  display: grid
  grid-template-columns: 184rem 972rem
  gap: 16rem 24rem
  margin-bottom: 32rem

  & span
    align-self: center

.form__button
  padding: 16rem 12rem
  margin-left: 210rem

  & svg
    width: 24rem
    height: 24rem

    fill: $white

  &:hover svg
    fill: $active-color

.form__file-input::file-selector-button
  height: 54rem

.form__text-input
  width: 581rem
  height: 54rem
  padding: 16rem 32rem

  border: 1rem solid $non-active-color
  border-radius: 4rem
  outline: none

  &:focus
    border: 2rem solid $active-color
</style>
