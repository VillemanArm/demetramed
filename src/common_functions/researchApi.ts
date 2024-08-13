import axios from 'axios'
import appSettings from '/public/settings.json'

export default class ResearchApi {
    protected serverURL = appSettings.serverURL

    getNewResearchData = async (): Promise<NewResearchServerData | undefined> => {
        let data
        await axios
            .post(`${this.serverURL}/new-research-data`)
            .then(function (response) {
                data = response.data
            })
            .catch((error) => {
                console.log(error)
            })

        return data
    }

    addNewResearch = async (newResearch: FormData) => {
        fetch(`${this.serverURL}/new-research-add`, {
            method: 'POST',
            body: newResearch,
        }).catch((error) => console.error('Error:', error))
    }

    getResearchList = async (
        params: ResearchListRequestParameters
    ): Promise<ResearchItem[] | undefined> => {
        let data
        await axios
            .post(`${this.serverURL}/research`, params)
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
            .post(`${this.serverURL}/analysis`, {
                id: researchId,
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
