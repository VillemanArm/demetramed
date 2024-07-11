import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'

declare global {
    interface ReportItem {
        id: string
        researchNumber: string
        researchDate: string
        patientName: string
        atypicalObjectsAmount: number
        complete: boolean
    }
}

export const useReportsStore = defineStore('reports', () => {
    const reportItems = ref<ReportItem[]>([
        {
            id: '1',
            researchNumber: '20201',
            researchDate: '14/09/2023',
            patientName: 'Иванов Г. В.',
            atypicalObjectsAmount: 8,
            complete: true,
        },
        {
            id: '2',
            researchNumber: '20202',
            researchDate: '15/10/2023',
            patientName: 'Петров А. И.',
            atypicalObjectsAmount: 20,
            complete: true,
        },
        {
            id: '3',
            researchNumber: '20203',
            researchDate: '26/09/2023',
            patientName: 'Сидоров Н. П.',
            atypicalObjectsAmount: 2,
            complete: true,
        },
        {
            id: '4',
            researchNumber: '20204',
            researchDate: '01/09/2023',
            patientName: 'Козлова О. С.',
            atypicalObjectsAmount: 12,
            complete: true,
        },
        {
            id: '5',
            researchNumber: '20205',
            researchDate: '12/09/2023',
            patientName: 'Михайлов Д. В.',
            atypicalObjectsAmount: 3,
            complete: true,
        },
        {
            id: '6',
            researchNumber: '20206',
            researchDate: '19/12/2023',
            patientName: 'Новикова Е. А.',
            atypicalObjectsAmount: 0,
            complete: true,
        },
        {
            id: '7',
            researchNumber: '20207',
            researchDate: '26/09/2023',
            patientName: 'Соколов И.П.',
            atypicalObjectsAmount: 8,
            complete: true,
        },
    ])

    // const sortOption = ref<keyof ReportItem | ''>('')

    // const sortedResearchItems = computed<ResearchItem[]>(() => {
    //     return [...researchItems.value].sort((research1, research2) =>
    //         (
    //             research1[sortOption.value as keyof ResearchItem] as string
    //         )?.localeCompare(
    //             research2[sortOption.value as keyof ResearchItem] as string
    //         )
    //     )
    // })

    // const searchQuery = ref<string>('')

    // const searchedAndSortedResearchItems = computed<ResearchItem[]>(() => {
    //     return sortedResearchItems.value.filter(
    //         (research) =>
    //             research.patientName
    //                 .toLowerCase()
    //                 .includes(searchQuery.value.toLowerCase()) ||
    //             research.researchDate.includes(searchQuery.value) ||
    //             research.researchNumber
    //                 .toLowerCase()
    //                 .includes(searchQuery.value.toLowerCase())
    //     )
    // })

    return {
        reportItems,
    }
})
