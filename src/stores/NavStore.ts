import {ref} from 'vue'
import {defineStore} from 'pinia'

declare global {}

interface ModulesInViewer {
    ResearchList: boolean
    ReportsList: boolean
}

export const useNavStore = defineStore('main', () => {
    const modulesInViewer = ref<ModulesInViewer>({
        ResearchList: true,
        ReportsList: false,
    })

    const setModuleInViewer = (ModuleName: string) => {
        if (
            ModuleName in modulesInViewer.value &&
            modulesInViewer.value[ModuleName as keyof ModulesInViewer] === false
        ) {
            Object.keys(modulesInViewer.value).forEach((key) => {
                if (key !== ModuleName) {
                    modulesInViewer.value[key as keyof ModulesInViewer] = false
                } else {
                    modulesInViewer.value[key as keyof ModulesInViewer] = true
                }
            })
        }
    }

    const searchQuery = ref<string>('')

    return {
        modulesInViewer,
        setModuleInViewer,
        searchQuery,
    }
})
