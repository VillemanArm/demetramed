import {ref, watch} from 'vue'
import {defineStore} from 'pinia'
import ReportsApi from 'src/common_functions/reportsApi'

declare global {
    interface ReportItem {
        id: string
        reportNumber: string
        reportDate: string
        patientName: string
        atypicalObjectsAmount: number
        complete: boolean
        link: string
    }

    interface ReportsListRequestParameters {
        searchQuery: string
        sortOption: ReportsSortOptions
        sortDescending: boolean
        page: number
        perPage: number
    }
}

type ReportsSortOptions = 'date' | 'name' | 'number' | ''

const reportsApi = new ReportsApi()

export const useReportsStore = defineStore('reports', () => {
    const reportItems = ref<ReportItem[]>([])

    const listRequestParameters = ref<ReportsListRequestParameters>({
        searchQuery: '',
        sortOption: '',
        sortDescending: true,
        page: 1,
        perPage: 7,
    })

    const setSortRequestParameters = (sortOption: ReportsSortOptions, sortDescending: boolean) => {
        listRequestParameters.value.sortOption = sortOption
        listRequestParameters.value.sortDescending = sortDescending
    }

    const setSearchRequestParameter = (newQuery: string) => {
        listRequestParameters.value.searchQuery = newQuery
    }

    const getReportsList = () => {
        reportItems.value = []
        reportsApi.getReportsList(listRequestParameters.value).then((data) => {
            if (data) {
                reportItems.value.push(...data)
            }
        })
    }

    const getReportFile = () => {
        // реализовать механизм выбора отчета для скачивания соответствующего файла
    }

    watch(
        listRequestParameters,
        () => {
            getReportsList()
        },
        {deep: true}
    )

    const selectedReportPage = ref<string>('')

    const setSelectedReportPage = (pageURL: string) => {
        selectedReportPage.value = pageURL
    }

    return {
        reportItems,
        listRequestParameters,
        setSortRequestParameters,
        getReportFile,
        setSearchRequestParameter,
        getReportsList,
        setSelectedReportPage,
        selectedReportPage,
    }
})
