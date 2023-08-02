import {
	fireEvent,
	render,
	screen,
	renderHook,
	act,
} from "@testing-library/react";
import App from "../App";
import useEvents from "../hooks/useEvents";

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
	});

	it("should render title input", () => {
		expect(inputTitle()).toBeTruthy();
	});

	it("should save title when entered", () => {
		const { result } = renderHook(useEvents);

		act(() => {
			result.current.handleEventChange([...result.current.eventList, "1"]);
		});

		expect(result.current.eventList).toContain("1");
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
