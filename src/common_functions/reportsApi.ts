import axios from 'axios'

export default class ReportsApi {
    protected baseURL = 'http://51.250.28.160:5005/api'

    getReportsList = async (
        params: ReportsListRequestParameters
    ): Promise<ReportItem[] | undefined> => {
        let data
        await axios
            .post(`${this.baseURL}/reports`, params)
            .then(function (response) {
                data = response.data
            })
            .catch(function (error) {
                console.log(error)
            })

        return data
    }

    getReportFile = (id: string) => {
        axios
            .post(`${this.baseURL}/report-file`, {
                id: id,
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
