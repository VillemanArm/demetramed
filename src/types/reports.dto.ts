export interface ReportItem {
    id: string
    reportNumber: string
    reportDate: string
    patientName: string
    atypicalObjectsAmount: number
    complete: boolean
    link: string
}

export interface ReportsListRequestParameters {
    searchQuery: string
    sortOption: ReportsSortOptions
    sortDescending: boolean
    page: number
    perPage: number
}

export type ReportsSortOptions = 'date' | 'name' | 'number' | ''
