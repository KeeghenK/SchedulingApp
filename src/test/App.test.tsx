import { render, screen } from "@testing-library/react";
import React from "react";
import App from "../components/App";

describe("app render", () => {
	const getTestId = (name: string) => {
		return screen.getByTestId(name);
	};

	beforeEach(() => {
		render(<App />);
	});

	it("should render title input", () => {
		expect(getTestId("test-title-input")).toBeTruthy();
	});

	it("should render validation message", () => {
		expect(getTestId("test-title-input-validator")).toBeTruthy();
	});

	it("should render event list", () => {
		expect(getTestId("test-event-list")).toBeTruthy();
	});
});
