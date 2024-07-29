import {ref, computed, watch} from 'vue'
import {defineStore} from 'pinia'
import ResearchApi from 'src/common_functions/researchApi'
import {log} from 'console'

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

    interface NewResearchData {
        id: string
        researchDate: string
        institutionsByReferral: string[]
    }

    interface NewResearchServerData {
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

    watch(
        listRequestParameters,
        () => {
            getResearchList()
        },
        {deep: true}
    )

    const isNewResearchForm = ref<boolean>(false)

    const newResearchData = ref<NewResearchData>({
        id: '',
        researchDate: new Date()
            .toLocaleDateString()
            .split('.')
            .reverse()
            .join('-'),
        institutionsByReferral: [],
    })

    const getNewResearchData = async () => {
        let newResearchServerData: NewResearchServerData | undefined
        await researchApi.getNewResearchData()?.then((data) => {
            if (data) {
                newResearchServerData = data
            }
        })

        if (newResearchServerData) {
            newResearchData.value.id = newResearchServerData.id
            newResearchData.value.institutionsByReferral =
                newResearchServerData.institutionByReferral
        }
    }

    const addNewResearch = (newResearch: FormData) => {
        newResearch.append('researchDate', newResearchData.value.researchDate)
        newResearch.append('researchDate', newResearchData.value.id)
        researchApi.addNewResearch(newResearch)
    }

    const resetNewResearchData = () => {
        newResearchData.value = {
            id: '',
            researchDate: new Date()
                .toLocaleDateString()
                .split('.')
                .reverse()
                .join('-'),
            institutionsByReferral: [],
        }
        getNewResearchData()
    }

    const startAnalysis = (id: string) => {
        researchApi.startAnalysis(id)
    }

    return {
        researchItems,
        // sortedResearchItems,
        // sortOption,
        // searchedAndSortedResearchItems,
        // searchQuery,
        addNewResearch,
        isNewResearchForm,
        newResearchData,
        resetNewResearchData,
        listRequestParameters,
        setSortRequestParameters,
        getResearchList,
        getNewResearchData,
        startAnalysis,
    }
})
