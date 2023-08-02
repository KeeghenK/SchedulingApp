import { fireEvent, render, screen } from "@testing-library/react";
import { eventList } from "../App";
import App from "../App";

describe("event title", () => {
	const inputTitle = () => {
		return screen.getByRole("test-title-input");
	};

	beforeEach(() => {
		render(<App />);
	});

	it("should render title input", () => {
		expect(inputTitle()).toBeTruthy();
	});

	it("should save title when entered", () => {
		inputTitle.value = "1";
		fireEvent.keyDown(inputTitle(), { key: "Enter" });

		expect(eventList).toEqual([inputTitle().value]);
	});
});
