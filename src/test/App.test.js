import { fireEvent, render, screen } from "@testing-library/react";
import { eventsSaved } from "../App";
import App from "../App";

describe("event title", () => {
	const inputTitle = () => {
		return screen.getByRole("test-title-input");
	};

	const saveEvent = () => {
		inputTitle().value = "1";
		fireEvent.keyDown(inputTitle(), { key: "Enter" });
	};

	beforeEach(() => {
		render(<App />);
		eventsSaved.pop();
	});

	it("should render title input", () => {
		expect(inputTitle()).toBeTruthy();
	});

	it("should save title when entered", () => {
		saveEvent();

		expect(eventsSaved).toEqual([inputTitle().value]);
	});

	it("should on save return text event saved", () => {
		const validateEnter = screen.getByRole("test-title-input-validator");

		saveEvent();

		expect(validateEnter.innerHTML).toEqual("Event saved.");
	});

	it("should display event title in a list if saved", () => {
		const eventList = screen.getByRole("test-event-list");

		saveEvent();

		expect(eventList.innerHTML).toContain("1");
	});
});
