import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ChatBox from "../Components/chatBox";
import { vi, describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

// Utility function to set up mock props for each test case
const setup = () => {
	const handleSubmit = vi.fn(); // Mock function to simulate form submission
	const setInput = vi.fn(); // Mock function to simulate state update when typing
	const input = ""; // Initial input value (empty by default)
	return { handleSubmit, setInput, input };
};

describe("ChatBox Component", () => {
	// Clean up the DOM after each test to prevent side effects
	afterEach(cleanup);

	// Test if the ChatBox component renders correctly with input field and submit button
	it("renders input field and submit button", () => {
		const { handleSubmit, setInput, input } = setup();
		render(
			<ChatBox input={input} setInput={setInput} handleSubmit={handleSubmit} />
		);

		// Ensure the input field is in the document
		expect(screen.getByTestId("input")).toBeInTheDocument();

		// Ensure the submit button is present
		expect(screen.getByTestId("submitButton")).toBeInTheDocument();
	});

	// Test if the input field renders with the correct initial value
	it("renders with the correct input value", () => {
		const { handleSubmit, setInput } = setup();

		render(
			<ChatBox
				input='Test value' // Providing an initial input value
				setInput={setInput}
				handleSubmit={handleSubmit}
			/>
		);

		// Select the input element and verify its value
		const inputField = screen.getByTestId("input");
		expect(inputField.value).toBe("Test value");
	});

	// Test if typing in the input field correctly updates the value using setInput function
	it("updates input value when user types", () => {
		const { handleSubmit, setInput, input } = setup();
		render(
			<ChatBox input={input} setInput={setInput} handleSubmit={handleSubmit} />
		);

		// Select the input field
		const inputField = screen.getByTestId("input");

		// Simulate user typing "Hello"
		fireEvent.change(inputField, { target: { value: "Hello" } });

		// Verify that setInput was called with the new value
		expect(setInput).toHaveBeenCalledWith("Hello");
	});

	// Test if handleSubmit is called when the form is submitted
	it("calls handleSubmit when form is submitted", () => {
		const { handleSubmit, setInput, input } = setup();
		render(
			<ChatBox input={input} setInput={setInput} handleSubmit={handleSubmit} />
		);

		// Select the form element
		const form = screen.getByTestId("form");

		// Simulate form submission
		fireEvent.submit(form);

		// Verify that handleSubmit was called once when submitted
		expect(handleSubmit).toHaveBeenCalled();
	});
});
