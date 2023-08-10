import React from "react";
import EventList from "./EventList";
import TitleInput from "./TitleInput";
import ValidationMessage from "./ValidationMessage";

function App() {
	return (
		<div className="App">
			<TitleInput />
			<ValidationMessage />
			<EventList />
		</div>
	);
}

export default App;
