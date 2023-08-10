import { create } from 'zustand'

interface EventList {
  eventList: string[],
  addEvent: (newEventTitle: string) => void
  clearEvents: () => void;
}

export const useEventsStore = create<EventList>((set) => ({
  eventList: [],
  addEvent: (newEventTitle: string) => {
    set((state) => ({ eventList: [...state.eventList, newEventTitle] }))},
  clearEvents: () => set(() => ({ eventList: [] }))
}))
