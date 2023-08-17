import {
	act,
	fireEvent,
	render,
	renderHook,
	screen,
} from "@testing-library/react";
import React from "react";
import App from "../components/App";
import { useTitleStore } from "../hooks/titleStore";
import { useValidationMessageStore } from "../hooks/validationMessageStore";

describe("tilte input validation", () => {
	const testTitle = "Title";
	const testDescription = "Description";

	const getTestId = (name: string) => {
		return screen.getByTestId(name);
	};

	const saveEvent = (title: string, description: string) => {
		const titleInput = getTestId("test-title-input");
		const descriptionInput = getTestId("test-description-input");
		const inputButton = getTestId("test-event-form-button");

		fireEvent.input(titleInput, { target: { value: title } });
		fireEvent.input(descriptionInput, { target: { value: description } });
		fireEvent.click(inputButton);
	};

	const resetTitle = () => {
		const { result } = renderHook(() => useTitleStore());

		act(() => {
			result.current.undoChange();
		});
	};

	const resetValidationMessage = () => {
		const { result } = renderHook(() => useValidationMessageStore());

		act(() => {
			result.current.resetMessage();
		});
	};

	beforeEach(() => {
		render(<App />);
	});

	afterEach(() => {
		resetValidationMessage();
		resetTitle();
	});

	it("should on save display text event saved", () => {
		const validateEnter = getTestId("test-title-input-validator");

		saveEvent(testTitle, testDescription);

		expect(validateEnter.innerHTML).toEqual("Event saved.");
	});

	it("should on no events saved display no events", () => {
		const validateEnter = getTestId("test-title-input-validator");

		expect(validateEnter.innerHTML).toEqual("No events.");
	});

	it("should save event if at least one character in title input", () => {
		const validateEnter = getTestId("test-title-input-validator");

		saveEvent("t", testDescription);

		expect(validateEnter.innerHTML).toEqual("Event saved.");
	});

	it("should not save event if there are no characters in title input", () => {
		const validateEnter = getTestId("test-title-input-validator");

		saveEvent("", testDescription);

		expect(validateEnter.innerHTML).toEqual("Please enter valid title.");
	});

	it("should not save event if there are just spaces in title input", () => {
		const validateEnter = getTestId("test-title-input-validator");

		saveEvent("    ", testDescription);

		expect(validateEnter.innerHTML).toEqual("Please enter valid title.");
	});
});
