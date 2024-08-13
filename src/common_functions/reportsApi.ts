import axios from 'axios'
import appSettings from '/public/settings.json'

export default class ReportsApi {
    protected serverURL = appSettings.serverURL

    getReportsList = async (
        params: ReportsListRequestParameters
    ): Promise<ReportItem[] | undefined> => {
        let data
        await axios
            .post(`${this.serverURL}/reports`, params)
            .then(function (response) {
                data = response.data
            })
            .catch(function (error) {
                console.log(error)
            })

        return data
    }

    getReportFile = (reportId: string) => {
        axios
            .post(`${this.serverURL}/report-file`, {
                id: reportId,
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
