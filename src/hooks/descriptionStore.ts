import { create } from "zustand"

interface Description {
  description: string,
  descriptionChange: (input: string) => void,
  undoChange: () => void
}

export const useDescriptionStore = create<Description>((set) => ({
  description: "",
  descriptionChange: (input: string) => {
    set(() => ({ description: input }))},
  undoChange: () => set(() => ({ description: "" }))
}))