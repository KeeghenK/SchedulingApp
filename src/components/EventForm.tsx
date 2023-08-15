import React from "react";
import { useDescriptionStore } from "../hooks/descriptionStore";
import { useEventsStore } from "../hooks/eventsStore";
import { useTitleStore } from "../hooks/titleStore";
import { useValidationMessageStore } from "../hooks/validationMessageStore";
import DescriptionInput from "./DescriptionInput";
import InputEnterButton from "./InputEnterButton";
import TitleInput from "./TitleInput";

const EventForm = () => {
	const { changeMessage } = useValidationMessageStore();
	const { addEvent } = useEventsStore();
	const { title } = useTitleStore();
	const { description } = useDescriptionStore();

	const pressEnter = (title: string, description: string) => {
		console.log(title);
		if (title.trim().length) {
			addEvent({ title, description });
			changeMessage("Event saved.");
		} else changeMessage("Please enter valid title.");
	};

	return (
		<form
			onSubmit={(event) => {
				pressEnter(title, description);
				event.preventDefault();
			}}
		>
			<TitleInput />
			<DescriptionInput />
			<InputEnterButton />
		</form>
	);
};

export default EventForm;
