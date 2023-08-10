import { useState } from "react";

const useValidationMessage = () => {
	const [validateMessage, setValidateMessage] = useState<string>("No events.");

	const handleValidationMessage = (props: string) => setValidateMessage(props);

	return { validateMessage, handleValidationMessage };
};

export default useValidationMessage;
