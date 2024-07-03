import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'

export interface ResearchItem {
    id: number
    researchNumber: number
    researchDate: string
    patientName: string
    patientAge: number
    institutionByReferral: string
    doctorsName: string
    atypicalObjectsNumber: number
    diagnosis: string
    comment: string
    file: string
}

export interface ModulesInViewer {
    ResearchList: boolean
    ReportsList: boolean
}

export const useResearchStore = defineStore('counter', () => {
    const researchItems = ref<ResearchItem[]>([
        {
            id: 1,
            researchNumber: 20201,
            researchDate: '14/09/2023',
            patientName: 'Иванов Г. В.',
            patientAge: 29,
            institutionByReferral: 'Онкодиспансер №2 Приокского района',
            doctorsName: 'Смирнов А.Б.',
            atypicalObjectsNumber: 2,
            diagnosis: '-',
            comment: 'подозрение на аденокарциному',
            file: '',
        },
        {
            id: 2,
            researchNumber: 20202,
            researchDate: '15/09/2023',
            patientName: 'Петров А. И.',
            patientAge: 35,
            institutionByReferral: 'Онкологический центр г. Москва',
            doctorsName: 'Иванов К.В.',
            atypicalObjectsNumber: 0,
            diagnosis: '-',
            comment: 'наблюдение за динамикой опухоли',
            file: '',
        },
        {
            id: 3,
            researchNumber: 20203,
            researchDate: '16/09/2023',
            patientName: 'Сидоров Н. П.',
            patientAge: 42,
            institutionByReferral: 'Региональный онкологический центр',
            doctorsName: 'Петров М.Н.',
            atypicalObjectsNumber: 20,
            diagnosis: '-',
            comment: 'проведение биопсии',
            file: '',
        },
        {
            id: 4,
            researchNumber: 20204,
            researchDate: '17/09/2023',
            patientName: 'Козлова О. С.',
            patientAge: 50,
            institutionByReferral: 'Онкологическая клиника "Здоровье"',
            doctorsName: 'Соколова Е.И.',
            atypicalObjectsNumber: 12,
            diagnosis: '-',
            comment: 'подготовка к химиотерапии',
            file: '',
        },
        {
            id: 5,
            researchNumber: 20205,
            researchDate: '18/09/2023',
            patientName: 'Михайлов Д. В.',
            patientAge: 60,
            institutionByReferral: 'Онкодиспансер №5 Советского района',
            doctorsName: 'Алексеев Г.П.',
            atypicalObjectsNumber: 5,
            diagnosis: '-',
            comment: 'проведение ультразвукового исследования',
            file: '',
        },
        {
            id: 6,
            researchNumber: 20206,
            researchDate: '19/09/2023',
            patientName: 'Новикова Е. А.',
            patientAge: 45,
            institutionByReferral: 'Городская больница №3',
            doctorsName: 'Кузнецова Л.С.',
            atypicalObjectsNumber: 55,
            diagnosis: '-',
            comment: 'консультация онколога',
            file: '',
        },
        {
            id: 7,
            researchNumber: 20207,
            researchDate: '20/09/2023',
            patientName: 'Соколов И.П.',
            patientAge: 55,
            institutionByReferral: 'Онкологический центр г. Санкт-Петербург',
            doctorsName: 'Козлова А.С.',
            atypicalObjectsNumber: 2,
            diagnosis: '-',
            comment: 'проведение компьютерной томографии',
            file: '',
        },
    ])

    const modulesInViewer = ref<ModulesInViewer>({
        ResearchList: true,
        ReportsList: false,
    })

    const setModuleInViewer = (ModuleName: string) => {
        if (
            ModuleName in modulesInViewer.value &&
            modulesInViewer.value[ModuleName as keyof ModulesInViewer] === false
        ) {
            Object.keys(modulesInViewer.value).forEach((key) => {
                if (key !== ModuleName) {
                    modulesInViewer.value[key as keyof ModulesInViewer] = false
                } else {
                    modulesInViewer.value[key as keyof ModulesInViewer] = true
                }
            })
        }
    }

    return {researchItems, modulesInViewer, setModuleInViewer}
})
