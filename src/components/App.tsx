import React from "react";
import useEvents from "../hooks/useEvents";
import useValidationMessage from "../hooks/useValidationMessage";

function App() {
	const { validateMessage, handleValidationMessage } = useValidationMessage();
	const { eventList, handleEventChange } = useEvents();

	const pressEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			if (event.currentTarget.value.trim() !== "") {
				handleEventChange([...eventList, event.currentTarget.value]);
				handleValidationMessage("Event saved.");
			} else handleValidationMessage("Please enter valid title.");
		}
	};

	return (
		<div className="App">
			<input
				data-testid="test-title-input"
				onKeyDown={(event) => pressEnter(event)}
			/>
			<p data-testid="test-title-input-validator">{validateMessage}</p>
			<div data-testid="test-event-list">
				{eventList.map((event, i) => (
					<ul key={i}>{event}</ul>
				))}
			</div>
		</div>
	);
}

export default App;
