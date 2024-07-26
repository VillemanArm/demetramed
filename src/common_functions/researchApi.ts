import axios from 'axios'

// declare global {
//     interface Response {
//         config: Object
//         data: []
//         headers: Object
//         request: Object
//     }
// }

export default class ResearchApi {
    // baseURL: string
    // token: string
    // userName: string
    // password: string
    //logStore: any // Store Если будет время поискать, как задать тип для store

    //constructor() {}

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
}
