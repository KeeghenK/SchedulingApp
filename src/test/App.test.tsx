import {
	fireEvent,
	render,
	screen,
	renderHook,
	act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import App from "../components/App";
import useEvents from "../hooks/useEvents";

describe("event title", () => {
	const getTestId = (name: string) => {
		return screen.getByTestId(name);
	};

	const saveEvent = (name: string) => {
		const input = getTestId("test-title-input");
		userEvent.type(input, name);
		fireEvent.keyDown(input, { key: "Enter" });
	};

	beforeEach(() => {
		render(<App />);
	});

	it("should render title input", () => {
		expect(getTestId("test-title-input")).toBeTruthy();
	});

	it("should save title when entered", () => {
		const { result } = renderHook(useEvents);

		act(() => {
			result.current.handleEventChange([...result.current.eventList, "Hello"]);
		});

		expect(result.current.eventList).toContain("Hello");
	});

	it("should on save display text event saved", () => {
		const validateEnter = getTestId("test-title-input-validator");

		saveEvent("Hello");

		expect(validateEnter.innerHTML).toEqual("Event saved.");
	});

	it("should on no events saved display no events", () => {
		const validateEnter = getTestId("test-title-input-validator");

		expect(validateEnter.innerHTML).toEqual("No events.");
	});

	it("should display one event title in a list if only one event is saved", () => {
		const eventList = getTestId("test-event-list");

		saveEvent("Hello");

		expect(eventList.children).toHaveLength(1);
	});

	it("should display multiple event titles in a list if multiple are saved", () => {
		const eventList = getTestId("test-event-list");

		saveEvent("Hello");
		saveEvent("Hello");

		expect(eventList.children).toHaveLength(2);
	});

	it("should save event if at least one character", () => {
		const validateEnter = getTestId("test-title-input-validator");

		saveEvent("Hello");

		expect(validateEnter.innerHTML).toEqual("Event saved.");
	});

	it("should not save event if there are no characters", () => {
		const validateEnter = getTestId("test-title-input-validator");

		saveEvent("");

		expect(validateEnter.innerHTML).toEqual("Please enter valid title.");
	});

	it("should not save event if there are just spaces", () => {
		const validateEnter = getTestId("test-title-input-validator");

		saveEvent("    ");

		expect(validateEnter.innerHTML).toEqual("Please enter valid title.");
	});
});
