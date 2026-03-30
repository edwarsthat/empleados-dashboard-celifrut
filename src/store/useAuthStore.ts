
import { create } from 'zustand'
import type { Personal } from '../types/personal'

type UseAuthStoreType = {
    isLogin: boolean
    setIsLogin: (value: boolean) => void
    personal: Personal | null
    setPersonal: (value: Personal) => void
}

const useAuthStore = create<UseAuthStoreType>((set) => ({
    isLogin: false,
    personal: null,
    setIsLogin: (value) => set({ isLogin: value }),
    setPersonal(value) {
        set({ personal: value })
    },
}))

export default useAuthStore
