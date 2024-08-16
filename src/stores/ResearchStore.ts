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
    const researchItems = ref<ResearchItem[]>([])

    const listRequestParameters = ref<ResearchListRequestParameters>({
        searchQuery: '',
        sortOption: '',
        sortDescending: true,
        page: 1,
        perPage: 7,
    })

    const setSortRequestParameters = (sortOption: ResearchSortOptions, sortDescending: boolean) => {
        listRequestParameters.value.sortOption = sortOption
        listRequestParameters.value.sortDescending = sortDescending
    }

    const setSearchRequestParameter = (newQuery: string) => {
        listRequestParameters.value.searchQuery = newQuery
    }

    const getResearchList = () => {
        researchItems.value = []
        researchApi.getResearchList(listRequestParameters.value).then((data) => {
            if (data?.length) {
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
        researchDate: new Date().toLocaleDateString().split('.').reverse().join('-'),
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
            researchDate: new Date().toLocaleDateString().split('.').reverse().join('-'),
            institutionsByReferral: [],
        }
        getNewResearchData()
    }

    const startAnalysis = async (id: string) => {
        await researchApi.startAnalysis(id)
        researchApi.getResearchList(listRequestParameters.value)
    }

    return {
        researchItems,
        addNewResearch,
        isNewResearchForm,
        newResearchData,
        resetNewResearchData,
        listRequestParameters,
        setSortRequestParameters,
        getResearchList,
        getNewResearchData,
        startAnalysis,
        setSearchRequestParameter,
    }
})
