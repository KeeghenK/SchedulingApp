import useEvents from "./hooks/useEvents";
import useValidation from "./hooks/useValidation";

function App() {
	const { validator, handleValidation } = useValidation();
	const { eventList, handleEventChange } = useEvents();
	let i = 0;

	const pressEnter = (event) => {
		if (event.key === "Enter") {
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
				{validator === true ? "Event saved." : "No events"}
			</p>
			<div role="test-event-list">
				{eventList.map((event) => (
					<ul key={++i}>{event}</ul>
				))}
			</div>
		</div>
	);
}

export default App;
