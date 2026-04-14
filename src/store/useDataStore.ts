import { create } from 'zustand'
import type { areasType } from '../types/areas'
import { config } from '../config'

type UseDataStoreType = {
    areasAcceso: areasType[]
    setAreasAcceso: (value: areasType[]) => void
    fetchAreasAcceso: () => Promise<void>
}

const useDataStore = create<UseDataStoreType>((set) => ({
    areasAcceso: [],
    setAreasAcceso: (value) => set({ areasAcceso: value }),
    fetchAreasAcceso: async () => {
        const response = await fetch(`${config.apiUrl}/talento_humano/areas_acceso`, {
            credentials: 'include',
        })
        if (!response.ok) return
        const data = await response.json()
        set({ areasAcceso: data })
    },
}))

export default useDataStore
