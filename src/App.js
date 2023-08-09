import useEvents from "./hooks/useEvents";
import useValidationMessage from "./hooks/useValidationMessage";

function App() {
	const { validateMessage, handleValidationMessage } = useValidationMessage();
	const { eventList, handleEventChange } = useEvents();
	let i = 0;

	const pressEnter = (event) => {
		if (event.key === "Enter" && event.target.value.trim() !== "") {
			handleEventChange([...eventList, event.target.value]);
			handleValidationMessage("Event saved.");
		} else {
			handleValidationMessage("Please enter valid title.");
		}
	};

	return (
		<div className="App">
			<input
				role="test-title-input"
				onKeyDown={pressEnter}
			/>
			<p role="test-title-input-validator">{validateMessage}</p>
			<ul role="test-event-list">
				{eventList.map((event) => (
					<li key={++i}>{event}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
