import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useNavStore = defineStore('main', () => {
    const searchQuery = ref<string>('')

    return {
        searchQuery,
    }
})
