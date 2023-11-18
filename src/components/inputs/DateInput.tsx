import React from "react";
import { useDateStore } from "../../hooks/dateStore";

const DateInput = () => {
	const { dateChange } = useDateStore();

	return (
		<input
			onChange={(event) => dateChange(event.currentTarget.value)}
			data-testid="test-date-input"
		></input>
	);
};

export default DateInput;
