import { useEventsStore } from "../hooks/eventsStore";
import { useValidationMessageStore } from "../hooks/validationMessageStore";

export default function SaveEvent() {
  const { changeMessage } = useValidationMessageStore();
	const { addEvent } = useEventsStore();

  return (title: string, description: string) => {
    if (title.trim() && description.trim()) {
      addEvent({ title, description });
      changeMessage("Event saved.");
    } else {
      if (!title.trim()) changeMessage("Please enter valid title.");
      else changeMessage("Please enter valid description.");
    }
  };
}