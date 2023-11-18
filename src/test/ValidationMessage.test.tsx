import {
	act,
	fireEvent,
	render,
	renderHook,
	screen,
} from "@testing-library/react";
import React from "react";
import App from "../components/App";
import { useDescriptionStore } from "../hooks/descriptionStore";
import { useTitleStore } from "../hooks/titleStore";
import { useValidationMessageStore } from "../hooks/validationMessageStore";

describe("validation message", () => {
	const testTitle = "Title";
	const testDescription = "Description";

	const saveEvent = (title: string, description: string) => {
		const titleInput = screen.getByTestId("test-title-input");
		const descriptionInput = screen.getByTestId("test-description-input");
		const inputButton = screen.getByTestId("test-event-form-button");

		fireEvent.input(titleInput, { target: { value: title } });
		fireEvent.input(descriptionInput, { target: { value: description } });
		fireEvent.click(inputButton);
	};

	const validateMessageEquals = (message: string) => {
		expect(screen.getByTestId("test-title-input-validator").innerHTML).toEqual(
			message
		);
	};

	beforeEach(() => {
		render(<App />);
	});

	afterEach(() => {
		const resetInput = (store: () => any) => {
			const { result } = renderHook(() => store());

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

		resetValidationMessage();
		resetInput(useTitleStore);
		resetInput(useDescriptionStore);
	});

	it("should on save display text event saved", () => {
		saveEvent(testTitle, testDescription);

		validateMessageEquals("Event saved.");
	});

	it("should on no events saved display no events", () => {
		validateMessageEquals("No events.");
	});

	describe("title input", () => {
		it("should save event if at least one character", () => {
			saveEvent("t", testDescription);

			validateMessageEquals("Event saved.");
		});

		it("should display please enter valid title when there are no characters", () => {
			saveEvent("", testDescription);

			validateMessageEquals("Please enter valid title.");
		});

		it("should display please enter valid title when there are only spaces", () => {
			saveEvent("    ", testDescription);

			validateMessageEquals("Please enter valid title.");
		});
	});

	describe("discription input", () => {
		it("should save event if at least one character in description input", () => {
			saveEvent(testTitle, "d");

			validateMessageEquals("Event saved.");
		});

		it("should display please enter valid description when there are no characters in the description input", () => {
			saveEvent(testTitle, "");

			validateMessageEquals("Please enter valid description.");
		});

		it("should display please enter valid description when there are only spaces in the description input", () => {
			saveEvent(testTitle, "    ");

			validateMessageEquals("Please enter valid description.");
		});
	});
});
