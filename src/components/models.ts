export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface ResearchItem {
  id: number
  researchNumber: number
  researchDate: string
  patientName: string
  patientAge: number
  institutionByReferral: string
  doctorsName: string
  diagnosis: string
  comment: string
  file: string
}
