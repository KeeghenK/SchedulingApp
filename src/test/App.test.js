import { render, screen } from "@testing-library/react";
import App from "../App";

describe("event", () => {
	it("should render input", () => {
		render(<App />);

		const input = screen.getByRole("test-title-input");

		expect(input).toBeTruthy();
	});
});
