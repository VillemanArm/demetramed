import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'

declare global {
    interface ResearchItem {
        id: string
        researchNumber: string
        researchDate: string
        patientName: string
    }

    interface newResearch {
        id: string
        researchNumber: string
        researchDate: string
        patientName: string
        patientAge: number | null
        institutionByReferral: string
        doctorsName: string
        diagnosis: string
        comment: string
        file: File | null // посмотреть как отправляется файл с POST запросом
    }
}

export const useResearchStore = defineStore('research', () => {
    const researchItems = ref<ResearchItem[]>([
        {
            id: '1',
            researchNumber: '20201',
            researchDate: '14/09/2023',
            patientName: 'Иванов Г. В.',
        },
        {
            id: '2',
            researchNumber: '20202',
            researchDate: '15/10/2023',
            patientName: 'Петров А. И.',
        },
        {
            id: '3',
            researchNumber: '20203',
            researchDate: '26/09/2023',
            patientName: 'Сидоров Н. П.',
        },
        {
            id: '4',
            researchNumber: '20204',
            researchDate: '01/09/2023',
            patientName: 'Козлова О. С.',
        },
        {
            id: '5',
            researchNumber: '20205',
            researchDate: '12/09/2023',
            patientName: 'Михайлов Д. В.',
        },
        {
            id: '6',
            researchNumber: '20206',
            researchDate: '19/12/2023',
            patientName: 'Новикова Е. А.',
        },
        {
            id: '7',
            researchNumber: '20207',
            researchDate: '26/09/2023',
            patientName: 'Соколов И.П.',
        },
    ])

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

    const isNewResearchForm = ref<boolean>(false)

    const newResearchItem = ref<newResearch>({
        id: String(Date.now()),
        researchNumber: '',
        researchDate: new Date().toLocaleDateString().replaceAll('.', '/'),
        patientName: '',
        patientAge: null,
        institutionByReferral: '',
        doctorsName: '',
        diagnosis: '',
        comment: '',
        file: null,
    })

    const addResearchItem = () => {
        researchItems.value.push(newResearchItem.value)
    }

    const resetNewResearchItem = () => {
        newResearchItem.value = {
            id: String(Date.now()),
            researchNumber: '',
            researchDate: new Date().toLocaleDateString().replaceAll('.', '/'),
            patientName: '',
            patientAge: null,
            institutionByReferral: '',
            doctorsName: '',
            diagnosis: '',
            comment: '',
            file: null,
        }
    }

    return {
        researchItems,
        sortedResearchItems,
        sortOption,
        searchedAndSortedResearchItems,
        searchQuery,
        addResearchItem,
        isNewResearchForm,
        newResearchItem,
        resetNewResearchItem,
    }
})
