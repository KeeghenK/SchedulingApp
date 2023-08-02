import { useState } from "react";

const useValidation = () => {
	const [validator, setValidator] = useState(false);

	const handleValidation = (props) => setValidator(props);

	return { validator, handleValidation };
};

export default useValidation;
