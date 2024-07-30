import axios from 'axios'

export default class ResearchApi {
    protected baseURL = 'http://51.250.28.160:5005/api'

    getNewResearchData = async (): Promise<
        NewResearchServerData | undefined
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

    addNewResearch = async (newResearch: FormData) => {
        // axios
        //     .post(`${this.baseURL}/new-research-add`, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //         },
        //         body: newResearch,
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

        fetch(`${this.baseURL}/new-research-add`, {
            method: 'POST',
            body: newResearch,
        })
            .then((response) => response.json())
            .then((data) => console.log('Success:', data))
            .catch((error) => console.error('Error:', error))
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

    startAnalysis = (researchId: string) => {
        axios
            .post(`${this.baseURL}/analysis`, {
                id: researchId,
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
