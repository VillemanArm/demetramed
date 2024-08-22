import axios from 'axios'
import appSettings from '/public/settings.json'

export default class ReportsApi {
    protected serverURL = appSettings.serverURL

    getReportsList = async (
        params: ReportsListRequestParameters
    ): Promise<ReportItem[] | undefined> => {
        let data
        await axios
            .post('/api/reports', params)
            .then(function (response) {
                data = response.data
            })
            .catch(function (error) {
                console.log(error)
            })

        return data
    }

    getReportFile = (reportId: string) => {
        // ожидает реализации генерации файла на сервере
        axios
            .post('/api/report-file', {
                id: reportId,
            })
            .catch((error) => {
                console.log(error)
            })
    }
}
