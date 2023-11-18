import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import App from "../components/App";

describe("Input feilds", () => {
	const testTitle = "Title";
	const testDescription = "Description";
	const testDate = "2023-01-01";

	const saveEvent = (
		title: string = testTitle,
		description: string = testDescription,
		date: string = testDate
	) => {
		const titleInput = screen.getByTestId("test-title-input");
		const descriptionInput = screen.getByTestId("test-description-input");
		const dateInput = screen.getByTestId("test-date-input");
		const inputButton = screen.getByTestId("test-event-form-button");

		fireEvent.input(titleInput, { target: { value: title } });
		fireEvent.input(descriptionInput, { target: { value: description } });
		fireEvent.input(dateInput, { target: { value: date } });
		fireEvent.click(inputButton);
	};

	beforeEach(() => {
		render(<App />);
	});

	it("should reset title input field if saved", () => {
		const titleInput = screen.getByTestId(
			"test-title-input"
		) as HTMLInputElement;

		saveEvent();

		expect(titleInput.value).toBeFalsy();
	});

	it("should reset description input field if saved", () => {
		const descriptionInput = screen.getByTestId(
			"test-description-input"
		) as HTMLInputElement;

		saveEvent();

		expect(descriptionInput.value).toBeFalsy();
	});

	it("should reset date input field if saved", () => {
		const dateInput = screen.getByTestId("test-date-input") as HTMLInputElement;

		saveEvent();

		expect(dateInput.value).toBeFalsy();
	});
});
