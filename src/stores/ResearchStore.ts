import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'
import ResearchApi from 'src/common_functions/researchApi'

declare global {
    interface ResearchItem {
        id: string
        researchNumber: string
        researchDate: string
        patientName: string
    }

    interface ResearchListRequestParameters {
        searchQuery: string
        sortOption: ResearchSortOptions
        sortDescending: boolean
        page: number
        perPage: number
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

    interface NewResearchCreationData {
        id: string
        institutionByReferral: string[]
    }
}

type ResearchSortOptions = 'date' | 'name' | 'number' | ''

const researchApi = new ResearchApi()

export const useResearchStore = defineStore('research', () => {
    // const researchItems = ref<ResearchItem[]>([
    //     {
    //         id: '1',
    //         researchNumber: '20201',
    //         researchDate: '14/09/2023',
    //         patientName: 'Ивановский Геннадий Владимирович',
    //     },
    //     {
    //         id: '2',
    //         researchNumber: '20202',
    //         researchDate: '15/10/2023',
    //         patientName: 'Петров А. И.',
    //     },
    //     {
    //         id: '3',
    //         researchNumber: '20203',
    //         researchDate: '26/09/2023',
    //         patientName: 'Сидоров Н. П.',
    //     },
    //     {
    //         id: '4',
    //         researchNumber: '20204',
    //         researchDate: '01/09/2023',
    //         patientName: 'Козлова О. С.',
    //     },
    //     {
    //         id: '5',
    //         researchNumber: '20205',
    //         researchDate: '12/09/2023',
    //         patientName: 'Михайлов Д. В.',
    //     },
    //     {
    //         id: '6',
    //         researchNumber: '20206',
    //         researchDate: '19/12/2023',
    //         patientName: 'Новикова Е. А.',
    //     },
    //     {
    //         id: '7',
    //         researchNumber: '20207',
    //         researchDate: '26/09/2023',
    //         patientName: 'Соколов И.П.',
    //     },
    //     {
    //         id: '8',
    //         researchNumber: '20201',
    //         researchDate: '14/09/2023',
    //         patientName: 'Ивановский Геннадий Владимирович',
    //     },
    //     {
    //         id: '9',
    //         researchNumber: '20202',
    //         researchDate: '15/10/2023',
    //         patientName: 'Петров А. И.',
    //     },
    //     {
    //         id: '10',
    //         researchNumber: '20203',
    //         researchDate: '26/09/2023',
    //         patientName: 'Сидоров Н. П.',
    //     },
    //     {
    //         id: '11',
    //         researchNumber: '20204',
    //         researchDate: '01/09/2023',
    //         patientName: 'Козлова О. С.',
    //     },
    //     {
    //         id: '12',
    //         researchNumber: '20205',
    //         researchDate: '12/09/2023',
    //         patientName: 'Михайлов Д. В.',
    //     },
    //     {
    //         id: '13',
    //         researchNumber: '20206',
    //         researchDate: '19/12/2023',
    //         patientName: 'Новикова Е. А.',
    //     },
    //     {
    //         id: '14',
    //         researchNumber: '20207',
    //         researchDate: '26/09/2023',
    //         patientName: 'Соколов И.П.',
    //     },
    //     {
    //         id: '15',
    //         researchNumber: '20207',
    //         researchDate: '26/09/2023',
    //         patientName: 'Соколов И.П.',
    //     },
    // ])
    const researchItems = ref<ResearchItem[]>([])

    const listRequestParameters = ref<ResearchListRequestParameters>({
        searchQuery: '',
        sortOption: '',
        sortDescending: true,
        page: 1,
        perPage: 7,
    })

    const setSortRequestParameters = (
        sortOption: ResearchSortOptions,
        sortDescending: boolean
    ) => {
        listRequestParameters.value.sortOption = sortOption
        listRequestParameters.value.sortDescending = sortDescending
    }

    const getResearchList = () => {
        researchItems.value = []
        researchApi
            .getResearchList(listRequestParameters.value)
            .then((data) => {
                if (data) {
                    researchItems.value.push(...data)
                }
            })
    }

    // const sortOption = ref<keyof ResearchItem | ''>('')

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

    const isNewResearchForm = ref<boolean>(false)

    const newResearchItem = ref<newResearch>({
        id: '',
        researchNumber: '',
        researchDate: new Date()
            .toLocaleDateString()
            .split('.')
            .reverse()
            .join('-'),
        patientName: '',
        patientAge: null,
        institutionByReferral: '',
        doctorsName: '',
        diagnosis: '',
        comment: '',
        file: null,
    })

    const institutionsByReferral = ref<string[]>([])

    const getNewResearchData = async () => {
        let newResearchCreationData: NewResearchCreationData | undefined
        await researchApi.getNewResearchData()?.then((data) => {
            if (data) {
                newResearchCreationData = data
            }
        })

        if (newResearchCreationData) {
            newResearchItem.value.id = newResearchCreationData.id
            institutionsByReferral.value =
                newResearchCreationData.institutionByReferral
        }
    }

    const addNewResearch = () => {
        researchApi.addNewResearch(newResearchItem.value)
        console.log(newResearchItem.value)
    }

    const resetNewResearchItem = () => {
        newResearchItem.value = {
            id: '',
            researchNumber: '',
            researchDate: new Date()
                .toLocaleDateString()
                .split('.')
                .reverse()
                .join('-'),
            patientName: '',
            patientAge: null,
            institutionByReferral: '',
            doctorsName: '',
            diagnosis: '',
            comment: '',
            file: null,
        }
        getNewResearchData()
    }

    const startAnalysis = (id: string) => {
        researchApi.startAnalysis(id)
    }

    //getResearchList()

    return {
        researchItems,
        // sortedResearchItems,
        // sortOption,
        // searchedAndSortedResearchItems,
        // searchQuery,
        addNewResearch,
        isNewResearchForm,
        newResearchItem,
        resetNewResearchItem,
        listRequestParameters,
        setSortRequestParameters,
        getResearchList,
        getNewResearchData,
        institutionsByReferral,
        startAnalysis,
    }
})
