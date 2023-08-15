import { create } from "zustand"

interface Title {
  title: string,
  titleChange: (input: string) => void
  undoChange: () => void
}

export const useTitleStore = create<Title>((set) => ({
  title: "",
  titleChange: (input: string) => {
    set((state) => ({ title: input }))},
  undoChange: () => set(() => ({ title: "" }))
}))
