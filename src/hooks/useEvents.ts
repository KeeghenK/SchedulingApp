import { useState } from "react";

const useEvents = () => {
	const [eventList, setEventList] = useState<string[]>([]);

	const handleEventChange = (props: string[]) => setEventList(props);

	return { eventList, handleEventChange };
};

export default useEvents;
