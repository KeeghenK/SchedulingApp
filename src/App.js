import { useState } from "react";

export const eventList = [];

function App() {
	const [validator, setValidator] = useState(false);

	const useEnterKey = (event) => {
		if (event.key === "Enter") {
			eventList.push(event.target.value);
			setValidator(true);
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
		</div>
	);
}

export default App;
