import React from "react";
import EventForm from "./EventForm";
import EventList from "./EventList";
import ValidationMessage from "./ValidationMessage";

function App() {
	return (
		<div className="App">
			<EventForm />
			<ValidationMessage />
			<EventList />
		</div>
	);
}

export default App;
