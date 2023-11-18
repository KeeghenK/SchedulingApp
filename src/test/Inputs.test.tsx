import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "../components/App";

describe("Input feilds", () => {
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

	beforeEach(() => {
		render(<App />);
	});

	it("should reset title input field if saved", () => {
		const titleInput = screen.getByTestId(
			"test-title-input"
		) as HTMLInputElement;

		saveEvent(testTitle, testDescription);

		expect(titleInput.value).toBeFalsy();
	});
});
