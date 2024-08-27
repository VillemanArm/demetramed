import {ReportItem, ReportsListRequestParameters} from 'src/types/reports.dto'

const serverURL = import.meta.env.PROD ? import.meta.env.VITE_SERVER_URL : ''

export default class ReportsApi {
    getReportsList = async (
        params: ReportsListRequestParameters
    ): Promise<ReportItem[] | undefined> => {
        const response = await fetch(`${serverURL}/api/reports`, {
            method: 'POST',
            body: JSON.stringify(params),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .catch((error) => {
                console.log(error)
            })

        return response
    }

    getReportFile = async (reportId: string) => {
        // ожидает реализации генерации файла на сервере
        fetch(`${serverURL}/api/report-file`, {
            method: 'POST',
            body: JSON.stringify({
                id: reportId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).catch((error) => {
            console.log(error)
        })
    }
}
