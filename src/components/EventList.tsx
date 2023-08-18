import React from "react";
import { useEventsStore } from "../hooks/eventsStore";

const EventList = () => {
	const { eventList } = useEventsStore();

	return (
		<div data-testid="test-event-list">
			{eventList.map((event, i) => (
				<ul key={i}>{event.title}</ul>
			))}
		</div>
	);
};

export default EventList;
