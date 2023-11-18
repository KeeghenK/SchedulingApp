import { useDateStore } from "../hooks/dateStore";
import { useDescriptionStore } from "../hooks/descriptionStore";
import { useTitleStore } from "../hooks/titleStore";
import SaveEvent from "./SaveEvent";


export default function FormSubmition() {
	const { title } = useTitleStore();
	const { description } = useDescriptionStore();
	const { date } = useDateStore();

	const pressEnter = SaveEvent();

	return (event: React.FormEvent<HTMLFormElement>): void => {
		pressEnter(title, description, date);
		event.preventDefault();
		event.currentTarget.reset();
	};
}