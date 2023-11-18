import {
	fireEvent,
	render,
	renderHook,
	screen,
	act,
} from "@testing-library/react";
import React from "react";
import App from "../components/App";
import { useEventsStore } from "../hooks/eventsStore";

describe("event list", () => {
	const testTitle = "Title";
	const testDescription = "Description";
	const testDate = "2023-01-01";

	const getTestId = (name: string) => {
		return screen.getByTestId(name);
	};

	const saveEvent = (
		title: string = testTitle,
		description: string = testDescription,
		date: string = testDate
	) => {
		const titleInput = getTestId("test-title-input");
		const descriptionInput = getTestId("test-description-input");
		const dateInput = getTestId("test-date-input");
		const inputButton = getTestId("test-event-form-button");

		fireEvent.input(titleInput, { target: { value: title } });
		fireEvent.input(descriptionInput, { target: { value: description } });
		fireEvent.input(dateInput, { target: { value: date } });
		fireEvent.click(inputButton);
	};

	const resetEventsList = () => {
		const { result } = renderHook(() => useEventsStore());

		act(() => {
			result.current.clearEvents();
		});
	};

	beforeEach(() => {
		render(<App />);
	});

	afterEach(() => {
		resetEventsList();
	});

	it("should save title when entered", () => {
		const { result } = renderHook(() => useEventsStore());

		act(() => {
			result.current.addEvent({
				title: testTitle,
				description: testDescription,
				date: testDate,
			});
		});

		expect(result.current.eventList).toEqual([
			{
				title: testTitle,
				description: testDescription,
				date: testDate,
			},
		]);
	});

	it("should display one event title in a list if only one event is saved", () => {
		const eventList = getTestId("test-event-list");

		saveEvent();

		expect(eventList.children).toHaveLength(1);
	});

	it("should display multiple event titles in a list if multiple are saved", () => {
		const eventList = getTestId("test-event-list");

		saveEvent();
		saveEvent();

		expect(eventList.children).toHaveLength(2);
	});
});
