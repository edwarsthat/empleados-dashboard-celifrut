import { create } from 'zustand'

type UseAppStoreType = {
  loading: boolean
  setLoading: (value: boolean) => void
}

const useAppStore = create<UseAppStoreType>((set) => ({
  loading: false,
  setLoading: (value) => set({ loading: value }),
}))

export default useAppStore
