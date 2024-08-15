<template>
    <div class="form">
        <div
            class="form__close"
            @click="handleCloseClick"
        >
            <CloseIcon />
        </div>
        <span class="form__date">{{
            researchStore.newResearchData.researchDate.split('-').reverse().join('/')
        }}</span>
        <form
            class="form__fields"
            ref="newResearchForm"
        >
            <label for="researchNumber">№Исследования:</label>
            <input
                class="form__input-field"
                type="text"
                id="researchNumber"
                name="researchNumber"
            />
            <label for="patientName">ФИО пациента:</label>
            <input
                class="form__input-field"
                type="text"
                id="patientName"
                name="patientName"
            />
            <label for="patientAge">Возраст:</label>
            <input
                class="form__input-field"
                type="number"
                id="patientAge"
                name="patientAge"
                max="120"
                min="1"
            />
            <label for="institutionByReferral">Направившее учреждение:</label>
            <select
                class="form__input-field"
                id="institutionByReferral"
                name="institutionByReferral"
            >
                <option value=""></option>
                <option
                    v-for="(institution, index) of researchStore.newResearchData
                        .institutionsByReferral"
                    :value="institution"
                    :key="index"
                >
                    {{ institution }}
                </option>
            </select>
            <label for="doctorsName">ФИО лечащего врача:</label>
            <input
                class="form__input-field"
                type="text"
                id="doctorsName"
                name="doctorsName"
            />
            <label for="diagnosis">Клинический диагноз:</label>
            <input
                class="form__input-field"
                type="text"
                id="diagnosis"
                name="diagnosis"
            />
            <label for="comment">Комментарий:</label>
            <input
                class="form__input-field"
                type="text"
                id="comment"
                name="comment"
            />
            <label for="file">Загрузить файл:</label>
            <input
                type="file"
                id="file"
                name="file"
                class="form__input-file"
            />
        </form>
        <div class="form__buttons">
            <BaseButton
                label="Сохранить и закрыть"
                class="form__button"
                @click="handleSaveAndCloseClick"
            >
                <SuccessIcon />
            </BaseButton>
            <BaseButton
                label="Сохранить и остаться"
                class="form__button"
                @click="handleSaveAndStayClick"
            >
                <SuccessIcon />
            </BaseButton>
            <BaseButton
                label="Очистить"
                class="form__button form__button--outline"
                @click="handleResetClick"
            >
                <CloseIcon />
            </BaseButton>
        </div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import BaseButton from 'src/ui/BaseButton.vue'
import SuccessIcon from 'assets/icons/success-icon.vue'
import {useResearchStore} from 'stores/ResearchStore'
import CloseIcon from 'assets/icons/close-icon.vue'

const researchStore = useResearchStore()

const newResearchForm = ref()

const handleCloseClick = () => {
    researchStore.isNewResearchForm = false
    researchStore.resetNewResearchData()
    researchStore.getResearchList()
    newResearchForm.value.reset()
}

const handleSaveAndCloseClick = async () => {
    const newResearchData: FormData = new FormData(newResearchForm.value)
    newResearchForm.value.reset()
    researchStore.isNewResearchForm = false
    await researchStore.addNewResearch(newResearchData)
    researchStore.resetNewResearchData()
    researchStore.getResearchList()
}

const handleSaveAndStayClick = () => {
    const newResearchData = new FormData(newResearchForm.value)
    newResearchForm.value.reset()
    researchStore.addNewResearch(newResearchData)
    researchStore.resetNewResearchData()
}

const handleResetClick = () => {
    researchStore.resetNewResearchData()
    newResearchForm.value.reset()
}
</script>

<style scoped lang="sass">
.form
    width: 1116rem
    min-height: 728rem
    padding: 32rem 0 0 90rem

    font-size: 18rem

    border: 1rem solid $non-active-color
    border-radius: 8rem

.form__close
  margin-top: -10rem
  margin-right: 22rem
  float: right

  cursor: pointer
  color: $non-active-color

  & svg
    width: 28rem
    height: 28rem

    &:hover
      fill: $active-color

.form__date
  display: block
  margin-bottom: 16rem

.form__fields
  display: grid
  grid-template-columns: 184rem 717rem
  gap: 16rem 24rem
  margin-bottom: 32rem

  & label
    align-self: center

.form__buttons
  margin-left: 210rem
  display: flex
  gap: 16rem

.form__button
  padding: 14rem 12rem

  & svg
    width: 24rem
    height: 24rem

    fill: $white

  &:hover svg
    fill: $active-color

.form__button--outline
  background-color: transparent
  color: $active-color

  & svg
    width: 16rem
    height: 16rem

    fill: $active-color

  &:hover
    background-color: $active-color
    color: $white

    & svg
      fill: $white

.form__input-field
  height: 52rem
  padding: 16rem 32rem

  border: 1rem solid $non-active-color
  border-radius: 4rem
  outline: none

  &:focus
    border: 2rem solid $active-color

.form__input-file
    height: 52rem
    padding-top: 3rem

    border-radius: 4rem
    border: 1rem solid $non-active-color


    &::file-selector-button
        height: 52rem
        margin-right: 16rem
        padding: 0 4rem

        font-size: 1rem

        background-color: transparent
        border: 2rem solid transparent
        color: transparent


    &:focus
        border: 2rem solid $active-color
</style>
