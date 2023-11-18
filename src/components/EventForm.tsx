import React from "react";
import { useDescriptionStore } from "../hooks/descriptionStore";
import { useTitleStore } from "../hooks/titleStore";
import SaveEvent from "./SaveEvent";
import DescriptionInput from "./inputs/DescriptionInput";
import InputEnterButton from "./InputEnterButton";
import TitleInput from "./inputs/TitleInput";
import DateInput from "./inputs/DateInput";

const EventForm = () => {
	const { title } = useTitleStore();
	const { description } = useDescriptionStore();

	const pressEnter = SaveEvent();

	return (
		<form
			onSubmit={(event) => {
				pressEnter(title, description);
				event.preventDefault();
				event.currentTarget.reset();
			}}
		>
			<TitleInput />
			<DescriptionInput />
			<DateInput />
			<InputEnterButton />
		</form>
	);
};

export default EventForm;
