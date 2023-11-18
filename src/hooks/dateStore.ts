import { create } from "zustand";

interface Date {
  date: string,
  dateChange: (input: string) => void,
  undoChange: () => void
}

export const useDateStore = create<Date>((set) => ({
  date: "",
  dateChange: (input: string) => {
    set(() => ({ date: input }))},
  undoChange: () => set(() => ({ date: "" }))
}))