import { useState } from "react";

const useEvents = () => {
	const [eventList, setEventList] = useState([]);

	const handleEventChange = (props) => setEventList(props);

	return { eventList, handleEventChange };
};

export default useEvents;
