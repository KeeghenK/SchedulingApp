export const eventList = [];

const onEnterKeyDown = (event) => {
	if (event.key === "Enter") {
		return eventList.push(event.target.value);
	}
};

function App() {
	return (
		<div className="App">
			<input
				role="test-title-input"
				onKeyDown={onEnterKeyDown}
			/>
		</div>
	);
}

export default App;
