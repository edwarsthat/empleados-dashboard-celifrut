import { create } from "zustand";

type useCameraScanStore = {
    isOpen: boolean;
    QrScan: boolean;
    BarCodeScan: boolean;
    lastResult: string | null;
    open: () => void;
    close: () => void;
    reset: () => void;
    setResult: (result: string) => void;
    setQrScan: (opt: boolean) => void;
    setBarCodeScan: (opt: boolean) => void;
};

export const useCameraScanStore = create<useCameraScanStore>((set) => ({
    isOpen: false,
    QrScan: false,
    BarCodeScan: false,
    lastResult: null,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
    reset: () => set({ lastResult: null }),
    setResult: (result: string) => set({ lastResult: result, isOpen: false }),
    setQrScan: (opt: boolean) => set({ QrScan: opt, BarCodeScan: !opt }),
    setBarCodeScan: (opt: boolean) => set({ BarCodeScan: opt, QrScan: !opt }),
}));