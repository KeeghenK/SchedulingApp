import {
	act,
	fireEvent,
	render,
	renderHook,
	screen,
} from "@testing-library/react";
import React from "react";
import App from "../components/App";
import { useValidationMessageStore } from "../hooks/validationMessageStore";

describe("tilte input validation", () => {
	const getTestId = (name: string) => {
		return screen.getByTestId(name);
	};

	const saveEvent = (name: string) => {
		const input = getTestId("test-title-input");

		fireEvent.input(input, { target: { value: name } });
		fireEvent.keyDown(input, { key: "Enter" });
	};

	beforeEach(() => {
		render(<App />);
	});

	afterEach(() => {
		const { result } = renderHook(() => useValidationMessageStore());

		act(() => {
			result.current.resetMessage();
		});
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
