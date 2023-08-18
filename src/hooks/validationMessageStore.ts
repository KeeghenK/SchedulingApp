import { create } from 'zustand';

const defaultMessage = "No events.";

interface ValidateMessage {
  validateMessage: string,
  changeMessage: (message: string) => void,
	resetMessage: () => void
}

export const useValidationMessageStore =  create<ValidateMessage>((set) => ({
  validateMessage: defaultMessage,
  changeMessage: (message: string) => {
    set(() => ({ validateMessage: message }))
  },
	resetMessage: () => set(() => ({ validateMessage: defaultMessage }))
}))
