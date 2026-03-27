import { create } from 'zustand'
import type { areasType } from '../types/areas'
import { config } from '../config'

type UseDataStoreType = {
    areas: areasType[]
    setAreas: (value: areasType[]) => void
    fetchAreas: () => Promise<void>
}

const useDataStore = create<UseDataStoreType>((set) => ({
    areas: [],
    setAreas: (value) => set({ areas: value }),
    fetchAreas: async () => {
        const response = await fetch(`${config.apiUrl}/talento_humano/areas_acceso`, {
            credentials: 'include',
        })
        if (!response.ok) return
        const data = await response.json()
        set({ areas: data })
    },
}))

export default useDataStore
