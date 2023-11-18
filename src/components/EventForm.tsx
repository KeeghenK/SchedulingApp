import React from "react";
import FormSubmition from "./FormSubmition";
import DescriptionInput from "./inputs/DescriptionInput";
import InputEnterButton from "./InputEnterButton";
import TitleInput from "./inputs/TitleInput";
import DateInput from "./inputs/DateInput";

const EventForm = () => {
	return (
		<form onSubmit={FormSubmition()}>
			<TitleInput />
			<DescriptionInput />
			<DateInput />
			<InputEnterButton />
		</form>
	);
};

export default EventForm;
