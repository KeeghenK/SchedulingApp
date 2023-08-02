import { useState } from "react";

export const eventsSaved = [];

function App() {
	const [validator, setValidator] = useState(false);
	const [eventList, setEventList] = useState([]);

	const useEnterKey = (event) => {
		if (event.key === "Enter") {
			setEventList([...eventList, event.target.value]);
			setValidator(true);
			eventsSaved.push(event.target.value);
		}
	};

	return (
		<div className="App">
			<input
				role="test-title-input"
				onKeyDown={useEnterKey}
			/>
			<p role="test-title-input-validator">
				{validator === true ? "Event saved." : null}
			</p>
			<div role="test-event-list">
				{eventList.map((event) => (
					<ul key={eventList.indexOf(event)}>{event}</ul>
				))}
			</div>
		</div>
	);
}

export default App;
