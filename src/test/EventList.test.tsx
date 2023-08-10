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

	const saveEvent = (name: string) => {
		const input = getTestId("test-title-input");

		fireEvent.input(input, { target: { value: name } });
		fireEvent.keyDown(input, { key: "Enter" });
	};

	beforeEach(() => {
		render(<App />);
	});

	afterEach(() => {
		const { result } = renderHook(() => useEventsStore());

		act(() => {
			result.current.clearEvents();
		});
	});

	it("should save title when entered", () => {
		const { result } = renderHook(() => useEventsStore());

		act(() => {
			result.current.addEvent("Hello");
		});

		expect(result.current.eventList).toContain("Hello");
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
});
