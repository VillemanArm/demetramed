export interface ResearchItem {
    id: string
    researchNumber: string
    researchDate: string
    patientName: string
}

export interface ResearchListRequestParameters {
    searchQuery: string
    sortOption: ResearchSortOptions
    sortDescending: boolean
    page: number
    perPage: number
}

export interface NewResearchData {
    id: string
    researchDate: string
    institutionsByReferral: string[]
}

export interface NewResearchServerData {
    id: string
    institutionByReferral: string[]
}

export type ResearchSortOptions = 'date' | 'name' | 'number' | ''
