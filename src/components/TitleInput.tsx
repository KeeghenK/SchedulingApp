import React from "react";
import { useEventsStore } from "../hooks/eventsStore";
import { useValidationMessageStore } from "../hooks/validationMessageStore";

const TitleInput = () => {
	const { changeMessage } = useValidationMessageStore();
	const { addEvent } = useEventsStore();

	const pressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			if (event.currentTarget.value.trim() !== "") {
				addEvent(event.currentTarget.value);
				changeMessage("Event saved.");
			} else changeMessage("Please enter valid title.");
		}
	};

	return (
		<input
			data-testid="test-title-input"
			onKeyDown={(event) => pressEnter(event)}
		/>
	);
};

export default TitleInput;
