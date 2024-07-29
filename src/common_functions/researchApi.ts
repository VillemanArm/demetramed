import axios from 'axios'

export default class ResearchApi {
    protected baseURL = 'http://51.250.28.160:5005/api'

    getNewResearchData = async (): Promise<
        NewResearchCreationData | undefined
    > => {
        let data
        await axios
            .post(`${this.baseURL}/new-research-data`)
            .then(function (response) {
                data = response.data
            })
            .catch((error) => {
                console.log(error)
            })

        return data
    }

    addNewResearch = async (newResearch: newResearch) => {
        axios
            .post(`${this.baseURL}/new-research-add`, newResearch)
            .catch((error) => {
                console.log(error)
            })
    }

    getResearchList = async (
        params: ResearchListRequestParameters
    ): Promise<ResearchItem[] | undefined> => {
        let data
        await axios
            .post(`${this.baseURL}/research`, params)
            .then(function (response) {
                data = response.data
            })
            .catch(function (error) {
                console.log(error)
            })

        return data
    }

    startAnalysis = (id: string) => {
        axios
            .post(`${this.baseURL}/research`, {
                id: id,
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
