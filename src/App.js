import useEvents from "./hooks/useEvents";
import useValidation from "./hooks/useValidation";

function App() {
	const { validator, handleValidation } = useValidation();
	const { eventList, handleEventChange } = useEvents();
	let i = 0;

	const pressEnter = (event) => {
		if (event.key === "Enter" && event.target.value !== "") {
			handleEventChange([...eventList, event.target.value]);
			handleValidation(true);
		}
	};

	return (
		<div className="App">
			<input
				role="test-title-input"
				onKeyDown={pressEnter}
			/>
			<p role="test-title-input-validator">
				{validator === true ? "Event saved." : "No events."}
			</p>
			<ul role="test-event-list">
				{eventList.map((event) => (
					<li key={++i}>{event}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
