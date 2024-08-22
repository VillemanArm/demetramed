export default class ResearchApi {
    getNewResearchData = async (): Promise<NewResearchServerData | undefined> => {
        const response = await fetch('/api/new-research-data', {
            method: 'POST',
        })
            .then((response) => response.json())
            .catch((error) => {
                console.log(error)
            })

        return response
    }

    addNewResearch = async (newResearch: FormData) => {
        fetch('/api/new-research-add', {
            method: 'POST',
            body: newResearch,
        }).catch((error) => console.error(error))
    }

    getResearchList = async (
        params: ResearchListRequestParameters
    ): Promise<ResearchItem[] | undefined> => {
        const response = await fetch('/api/research', {
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

    startAnalysis = (researchId: string) => {
        fetch('/api/analysis', {
            method: 'POST',
            body: JSON.stringify({
                id: researchId,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).catch((error) => {
            console.log(error)
        })
    }
}
