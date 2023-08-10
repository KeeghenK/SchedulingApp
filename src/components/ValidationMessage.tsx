import React from "react";
import { useValidationMessageStore } from "../hooks/validationMessageStore";

const ValidationMessage = () => {
	const { validateMessage } = useValidationMessageStore();

	return <p data-testid="test-title-input-validator">{validateMessage}</p>;
};

export default ValidationMessage;
