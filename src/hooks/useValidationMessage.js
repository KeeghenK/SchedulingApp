import { useState } from "react";

const useValidationMessage = () => {
	const [validateMessage, setValidateMessage] = useState("No events.");

	const handleValidationMessage = (props) => setValidateMessage(props);

	return { validateMessage, handleValidationMessage };
};

export default useValidationMessage;
