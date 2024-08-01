import {ref, computed, watch} from 'vue'
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
    // const reportItems = ref<ReportItem[]>([
    //     {
    //         id: '1',
    //         researchNumber: '20201',
    //         researchDate: '14/09/2023',
    //         patientName: 'Иванов Г. В.',
    //         atypicalObjectsAmount: 8,
    //         complete: true,
    //     },
    //     {
    //         id: '2',
    //         researchNumber: '20202',
    //         researchDate: '15/10/2023',
    //         patientName: 'Петров А. И.',
    //         atypicalObjectsAmount: 20,
    //         complete: true,
    //     },
    //     {
    //         id: '3',
    //         researchNumber: '20203',
    //         researchDate: '26/09/2023',
    //         patientName: 'Сидоров Н. П.',
    //         atypicalObjectsAmount: 2,
    //         complete: true,
    //     },
    //     {
    //         id: '4',
    //         researchNumber: '20204',
    //         researchDate: '01/09/2023',
    //         patientName: 'Козлова О. С.',
    //         atypicalObjectsAmount: 12,
    //         complete: true,
    //     },
    //     {
    //         id: '5',
    //         researchNumber: '20205',
    //         researchDate: '12/09/2023',
    //         patientName: 'Михайлов Д. В.',
    //         atypicalObjectsAmount: 3,
    //         complete: true,
    //     },
    //     {
    //         id: '6',
    //         researchNumber: '20206',
    //         researchDate: '19/12/2023',
    //         patientName: 'Новикова Е. А.',
    //         atypicalObjectsAmount: 0,
    //         complete: true,
    //     },
    //     {
    //         id: '7',
    //         researchNumber: '20207',
    //         researchDate: '26/09/2023',
    //         patientName: 'Соколов И.П.',
    //         atypicalObjectsAmount: 8,
    //         complete: true,
    //     },
    //     {
    //         id: '8',
    //         researchNumber: '20201',
    //         researchDate: '14/09/2023',
    //         patientName: 'Иванов Г. В.',
    //         atypicalObjectsAmount: 8,
    //         complete: true,
    //     },
    //     {
    //         id: '9',
    //         researchNumber: '20202',
    //         researchDate: '15/10/2023',
    //         patientName: 'Петров А. И.',
    //         atypicalObjectsAmount: 20,
    //         complete: true,
    //     },
    //     {
    //         id: '10',
    //         researchNumber: '20203',
    //         researchDate: '26/09/2023',
    //         patientName: 'Сидоров Н. П.',
    //         atypicalObjectsAmount: 2,
    //         complete: true,
    //     },
    //     {
    //         id: '11',
    //         researchNumber: '20204',
    //         researchDate: '01/09/2023',
    //         patientName: 'Козлова О. С.',
    //         atypicalObjectsAmount: 12,
    //         complete: true,
    //     },
    //     {
    //         id: '12',
    //         researchNumber: '20205',
    //         researchDate: '12/09/2023',
    //         patientName: 'Михайлов Д. В.',
    //         atypicalObjectsAmount: 3,
    //         complete: true,
    //     },
    //     {
    //         id: '13',
    //         researchNumber: '20206',
    //         researchDate: '19/12/2023',
    //         patientName: 'Новикова Е. А.',
    //         atypicalObjectsAmount: 0,
    //         complete: true,
    //     },
    //     {
    //         id: '14',
    //         researchNumber: '20207',
    //         researchDate: '26/09/2023',
    //         patientName: 'Соколов И.П.',
    //         atypicalObjectsAmount: 8,
    //         complete: true,
    //     },
    //     {
    //         id: '15',
    //         researchNumber: '20207',
    //         researchDate: '26/09/2023',
    //         patientName: 'Соколов И.П.',
    //         atypicalObjectsAmount: 8,
    //         complete: true,
    //     },
    // ])

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
    }
})
