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
	const getTestRole = (name) => {
		return screen.getByRole(name);
	};

	const saveEvent = (name) => {
		getTestRole("test-title-input").value = name;
		fireEvent.keyDown(getTestRole("test-title-input"), { key: "Enter" });
	};

	beforeEach(() => {
		render(<App />);
	});

	it("should render title input", () => {
		expect(getTestRole("test-title-input")).toBeTruthy();
	});

	it("should save title when entered", () => {
		const { result } = renderHook(useEvents);

		act(() => {
			result.current.handleEventChange([...result.current.eventList, "1"]);
		});

		expect(result.current.eventList).toContain("1");
	});

	it("should on save display text event saved", () => {
		const validateEnter = getTestRole("test-title-input-validator");

		saveEvent("a");

		expect(validateEnter.innerHTML).toEqual("Event saved.");
	});

	it("should on no events saved display no events", () => {
		const validateEnter = getTestRole("test-title-input-validator");

		expect(validateEnter.innerHTML).toEqual("No events.");
	});

	it("should display one event title in a list if only one event is saved", () => {
		const eventList = getTestRole("test-event-list");

		saveEvent("a");

		expect(eventList.children).toHaveLength(1);
	});

	it("should display multiple event titles in a list if multiple are saved", () => {
		const eventList = getTestRole("test-event-list");

		saveEvent("a");
		saveEvent("a");

		expect(eventList.children).toHaveLength(2);
	});

	it("should save event if at least one character", () => {
		const validateEnter = getTestRole("test-title-input-validator");

		saveEvent("a");

		expect(validateEnter.innerHTML).toEqual("Event saved.");
	});

	it("should not save event if there are no characters", () => {
		const validateEnter = getTestRole("test-title-input-validator");

		saveEvent("");

		expect(validateEnter.innerHTML).toEqual("Please enter valid title.");
	});
});
