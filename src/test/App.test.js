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

	it("should on save display text event saved", () => {
		const validateEnter = screen.getByRole("test-title-input-validator");

		saveEvent();

		expect(validateEnter.innerHTML).toEqual("Event saved.");
	});

	it("should on no events saved display no events", () => {
		const validateEnter = screen.getByRole("test-title-input-validator");

		expect(validateEnter.innerHTML).toEqual("No events");
	});

	it("should display one event title in a list if only one event is saved", () => {
		const eventList = screen.getByRole("test-event-list");

		saveEvent();

		expect(eventList.children).toHaveLength(1);
	});

	it("should display multiple event titles in a list if multiple are saved", () => {
		const eventList = screen.getByRole("test-event-list");

		saveEvent();
		saveEvent();

		expect(eventList.children).toHaveLength(2);
	});
});
