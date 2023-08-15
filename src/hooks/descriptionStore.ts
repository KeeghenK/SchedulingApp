import { create } from "zustand"

interface Description {
  description: string,
  descriptionChange: (input: string) => void
}

export const useDescriptionStore = create<Description>((set) => ({
  description: "",
  descriptionChange: (input: string) => {
    set((state) => ({ description: input }))}
}))