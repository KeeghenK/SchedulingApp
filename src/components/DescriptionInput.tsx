import React from "react";
import { useDescriptionStore } from "../hooks/descriptionStore";

const DescriptionInput = () => {
	const { descriptionChange } = useDescriptionStore();

	return (
		<input
			onChange={(event) => descriptionChange(event.currentTarget.value)}
			data-testid="test-description-input"
		/>
	);
};

export default DescriptionInput;
