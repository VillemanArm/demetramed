<template>
    <form
        action=""
        class="form"
    >
        <div
            class="form__close"
            @click="handleCloseClick"
        >
            <CloseIcon />
        </div>
        <span class="form__date">{{
            researchStore.newResearchItem.researchDate
        }}</span>
        <div class="form__fields">
            <label for="researchNumber">№Исследования:</label>
            <input
                class="form__input-field"
                type="text"
                id="researchNumber"
                v-model="researchStore.newResearchItem.researchNumber"
            />
            <label for="patientName">Пациент:</label>
            <input
                class="form__input-field"
                type="text"
                id="patientName"
                v-model="researchStore.newResearchItem.patientName"
            />
            <label for="patientAge">Возраст:</label>
            <input
                class="form__input-field"
                type="number"
                id="patientAge"
                max="120"
                min="1"
                v-model="researchStore.newResearchItem.patientAge"
            />
            <label for="institutionByReferral"
                >Учреждение по направлению:</label
            >
            <input
                class="form__input-field"
                type="text"
                id="institutionByReferral"
                v-model="researchStore.newResearchItem.institutionByReferral"
            />
            <label for="doctorsName">ФИО врача по направлению:</label>
            <input
                class="form__input-field"
                type="text"
                id="doctorsName"
                v-model="researchStore.newResearchItem.doctorsName"
            />
            <label for="diagnosis">Клинический диагноз:</label>
            <input
                class="form__input-field"
                type="text"
                id="diagnosis"
                v-model="researchStore.newResearchItem.diagnosis"
            />
            <label for="comment">Комментарий:</label>
            <input
                class="form__input-field"
                type="text"
                id="comment"
                v-model="researchStore.newResearchItem.comment"
            />
            <label for="file">Загрузить файл:</label>
            <!-- <input
                type="file"
                id="file"
                class="form__file-input"
            /> -->
            <q-file
                id="file"
                outlined
                v-model="researchStore.newResearchItem.file"
                class="form__input-file"
            />
        </div>
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
    </form>
</template>

<script setup lang="ts">
import {reactive, ref, computed, onMounted, onUpdated, watch} from 'vue'
import BaseButton from 'src/ui/BaseButton.vue'
import SuccessIcon from 'assets/icons/success-icon.vue'
import {useResearchStore} from 'stores/ResearchStore'
import CloseIcon from 'assets/icons/close-icon.vue'

const researchStore = useResearchStore()

const handleCloseClick = () => {
    researchStore.isNewResearchForm = false
    researchStore.resetNewResearchItem()
}

const handleSaveAndCloseClick = () => {
    researchStore.addResearchItem()
    researchStore.isNewResearchForm = false
    researchStore.resetNewResearchItem()
}

const handleSaveAndStayClick = () => {
    researchStore.addResearchItem()
    researchStore.resetNewResearchItem()
}

const handleResetClick = () => {
    researchStore.resetNewResearchItem()
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

// .form__file-input::file-selector-button
//   height: 54rem
//   margin-right: 16rem
//   padding: 14rem 12rem
//   display: inline-flex
//   align-items: center
//   gap: 8rem

//   font-size: 16rem
//   font-weight: 600

//   border-radius: 8rem
//   background-color: $accent
//   border: 2rem solid $accent
//   color: $white
//   cursor: pointer

//   transition: all 0.3s ease-in-out

//   &:hover
//     background-color: transparent
//     color: $accent

//   &>svg
//     width: 20rem
//     height: 20rem

//   &>span
//     display: inline-block

.form__input-field
  width: 720rem
  height: 52rem
  padding: 16rem 32rem

  border: 1rem solid $non-active-color
  border-radius: 4rem
  outline: none

  &:focus
    border: 2rem solid $active-color

.form__input-file
  width: 720rem

:deep(.q-field__control-container)
  height: 52rem

:deep(.q-field--auto-height .q-field__control, .q-field--auto-height .q-field__native)
  min-height: 52rem

:deep(.q-field__native.row.items-center.cursor-pointer)
  min-height: 52rem

:deep(.q-field--outlined .q-field__control:before )
    border-color: $non-active-color

:deep(.q-field--outlined.q-field--highlighted .q-field__control:after)
    border-width: 1rem
</style>
