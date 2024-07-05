import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'

export interface ResearchItem {
    id: string
    researchNumber: string
    researchDate: string
    patientName: string
    patientAge: number
    institutionByReferral: string
    doctorsName: string
    atypicalObjectsNumber: number
    atypicalObjects: AtypicalObject[] | []
    diagnosis: string
    comment: string
    file: string
}

export interface ModulesInViewer {
    ResearchList: boolean
    ReportsList: boolean
    NewResearchForm: boolean
}

export interface AtypicalObject {
    id: string
    number: string
    img: string
}

export const useResearchStore = defineStore('counter', () => {
    const researchItems = ref<ResearchItem[]>([
        {
            id: '1',
            researchNumber: '20201',
            researchDate: '14/09/2023',
            patientName: 'Иванов Г. В.',
            patientAge: 29,
            institutionByReferral: 'Онкодиспансер №2 Приокского района',
            doctorsName: 'Смирнов А.Б.',
            atypicalObjectsNumber: 8,
            atypicalObjects: [
                {
                    id: '1',
                    number: 'A01',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '2',
                    number: 'A02',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '3',
                    number: 'A03',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '4',
                    number: 'A04',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '5',
                    number: 'A05',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '6',
                    number: 'A06',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '7',
                    number: 'A07',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '8',
                    number: 'A08',
                    img: '/img/snapshot-item-example.jpg',
                },
            ],
            diagnosis: '-',
            comment: 'подозрение на аденокарциному',
            file: '',
        },
        {
            id: '2',
            researchNumber: '20202',
            researchDate: '15/10/2023',
            patientName: 'Петров А. И.',
            patientAge: 35,
            institutionByReferral: 'Онкологический центр г. Москва',
            doctorsName: 'Иванов К.В.',
            atypicalObjectsNumber: 0,
            atypicalObjects: [],
            diagnosis: '-',
            comment: 'наблюдение за динамикой опухоли',
            file: '',
        },
        {
            id: '3',
            researchNumber: '20203',
            researchDate: '26/09/2023',
            patientName: 'Сидоров Н. П.',
            patientAge: 42,
            institutionByReferral: 'Региональный онкологический центр',
            doctorsName: 'Петров М.Н.',
            atypicalObjectsNumber: 4,
            atypicalObjects: [
                {
                    id: '1',
                    number: 'A01',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '2',
                    number: 'A02',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '3',
                    number: 'A03',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '4',
                    number: 'A04',
                    img: '/img/snapshot-item-example.jpg',
                },
            ],
            diagnosis: '-',
            comment: 'проведение биопсии',
            file: '',
        },
        {
            id: '4',
            researchNumber: '20204',
            researchDate: '01/09/2023',
            patientName: 'Козлова О. С.',
            patientAge: 50,
            institutionByReferral: 'Онкологическая клиника "Здоровье"',
            doctorsName: 'Соколова Е.И.',
            atypicalObjectsNumber: 6,
            atypicalObjects: [
                {
                    id: '1',
                    number: 'A01',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '2',
                    number: 'A02',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '3',
                    number: 'A03',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '4',
                    number: 'A04',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '5',
                    number: 'A05',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '6',
                    number: 'A06',
                    img: '/img/snapshot-item-example.jpg',
                },
            ],
            diagnosis: '-',
            comment: 'подготовка к химиотерапии',
            file: '',
        },
        {
            id: '5',
            researchNumber: '20205',
            researchDate: '12/09/2023',
            patientName: 'Михайлов Д. В.',
            patientAge: 60,
            institutionByReferral: 'Онкодиспансер №5 Советского района',
            doctorsName: 'Алексеев Г.П.',
            atypicalObjectsNumber: 5,
            atypicalObjects: [
                {
                    id: '1',
                    number: 'A01',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '2',
                    number: 'A02',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '3',
                    number: 'A03',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '4',
                    number: 'A04',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '5',
                    number: 'A05',
                    img: '/img/snapshot-item-example.jpg',
                },
            ],
            diagnosis: '-',
            comment: 'проведение ультразвукового исследования',
            file: '',
        },
        {
            id: '6',
            researchNumber: '20206',
            researchDate: '19/12/2023',
            patientName: 'Новикова Е. А.',
            patientAge: 45,
            institutionByReferral: 'Городская больница №3',
            doctorsName: 'Кузнецова Л.С.',
            atypicalObjectsNumber: 6,
            atypicalObjects: [
                {
                    id: '1',
                    number: 'A01',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '2',
                    number: 'A02',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '3',
                    number: 'A03',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '4',
                    number: 'A04',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '5',
                    number: 'A05',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '6',
                    number: 'A06',
                    img: '/img/snapshot-item-example.jpg',
                },
            ],
            diagnosis: '-',
            comment: 'консультация онколога',
            file: '',
        },
        {
            id: '7',
            researchNumber: '20207',
            researchDate: '26/09/2023',
            patientName: 'Соколов И.П.',
            patientAge: 55,
            institutionByReferral: 'Онкологический центр г. Санкт-Петербург',
            doctorsName: 'Козлова А.С.',
            atypicalObjectsNumber: 6,
            atypicalObjects: [
                {
                    id: '1',
                    number: 'A01',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '2',
                    number: 'A02',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '3',
                    number: 'A03',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '4',
                    number: 'A04',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '5',
                    number: 'A05',
                    img: '/img/snapshot-item-example.jpg',
                },
                {
                    id: '6',
                    number: 'A06',
                    img: '/img/snapshot-item-example.jpg',
                },
            ],
            diagnosis: '-',
            comment: 'проведение компьютерной томографии',
            file: '',
        },
    ])

    const modulesInViewer = ref<ModulesInViewer>({
        ResearchList: true,
        ReportsList: false,
        NewResearchForm: false,
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

    const sortOption = ref<keyof ResearchItem | ''>('')

    const sortedResearchItems = computed<ResearchItem[]>(() => {
        return [...researchItems.value].sort((research1, research2) =>
            (
                research1[sortOption.value as keyof ResearchItem] as string
            )?.localeCompare(
                research2[sortOption.value as keyof ResearchItem] as string
            )
        )
    })

    const searchQuery = ref<string>('')

    const searchedAndSortedResearchItems = computed<ResearchItem[]>(() => {
        return sortedResearchItems.value.filter(
            (research) =>
                research.patientName
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase()) ||
                research.researchDate.includes(searchQuery.value) ||
                research.researchNumber
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase())
        )
    })

    return {
        researchItems,
        modulesInViewer,
        setModuleInViewer,
        sortedResearchItems,
        sortOption,
        searchedAndSortedResearchItems,
        searchQuery,
    }
})
