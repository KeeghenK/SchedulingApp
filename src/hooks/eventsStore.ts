import { create } from 'zustand'

interface EventList {
  eventList: {
    title: string,
    description: string,
    date: string
  }[],
  addEvent: (newEvent: { title: string, description: string, date: string }) => void
  clearEvents: () => void;
}

export const useEventsStore = create<EventList>((set) => ({
  eventList: [],
  addEvent: (newEvent: { title: string, description: string, date: string }) => {
    set((state) => ({ eventList: [...state.eventList, newEvent] }))},
  clearEvents: () => set(() => ({ eventList: [] }))
}))
