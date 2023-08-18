import React from "react";
import { useTitleStore } from "../hooks/titleStore";

const TitleInput = () => {
	const { titleChange } = useTitleStore();

	return (
		<input
			onChange={(event) => titleChange(event.currentTarget.value)}
			data-testid="test-title-input"
		/>
	);
};

export default TitleInput;
