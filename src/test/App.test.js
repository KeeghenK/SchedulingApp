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

	it("should on save return text event saved", () => {
		const validateEnter = screen.getByRole("test-title-input-validator");

		fireEvent.keyDown(inputTitle(), { key: "Enter" });

		expect(validateEnter.innerHTML).toEqual("Event saved.");
	});
});
