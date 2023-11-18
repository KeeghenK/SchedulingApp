import { useEventsStore } from "../hooks/eventsStore";
import { useValidationMessageStore } from "../hooks/validationMessageStore";

export default function SaveEvent() {
  const { changeMessage } = useValidationMessageStore();
	const { addEvent, eventList } = useEventsStore();

  return (title: string, description: string, date: string) => {
    if (title.trim() && description.trim()) {
      addEvent({ title, description, date});
      changeMessage("Event saved.");
      console.log(eventList);
    } else {
      if (!title.trim()) changeMessage("Please enter valid title.");
      else changeMessage("Please enter valid description.");
    }
  };
}