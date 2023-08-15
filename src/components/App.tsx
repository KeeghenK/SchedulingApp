import React from "react";
import EventList from "./EventList";
import TitleInput from "./TitleInput";
import ValidationMessage from "./ValidationMessage";

function App() {
	return (
		<div className="App">
			<TitleInput />
			<input data-testid="test-description-input" />
			<ValidationMessage />
			<EventList />
		</div>
	);
}

export default App;
