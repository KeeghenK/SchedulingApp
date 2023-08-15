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
			result.current.addEvent({ title: "t", description: "d" });
		});

		expect(result.current.eventList).toEqual([
			{
				title: "t",
				description: "d",
			},
		]);
	});

	it("should display one event title in a list if only one event is saved", () => {
		const eventList = getTestId("test-event-list");

		saveEvent("t", "d");

		expect(eventList.children).toHaveLength(1);
	});

	it("should display multiple event titles in a list if multiple are saved", () => {
		const eventList = getTestId("test-event-list");

		saveEvent("t", "d");
		saveEvent("t", "d");

		expect(eventList.children).toHaveLength(2);
	});
});
