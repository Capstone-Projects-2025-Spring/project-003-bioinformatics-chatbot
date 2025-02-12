import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import ChatBox from "../Components/chatBox";
import { vi, describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

// Mock props
const setup = () => {
	const handleSubmit = vi.fn(); // Mock function for form submission
	const setInput = vi.fn(); // Mock function for setting input state
	const input = "";
	return { handleSubmit, setInput, input };
};

describe("ChatBox", () => {
	afterEach(cleanup);

	it("renders input field and submit button", () => {
		const { handleSubmit, setInput, input } = setup();
		render(
			<ChatBox input={input} setInput={setInput} handleSubmit={handleSubmit} />
		);

		expect(screen.getByTestId("input")).toBeInTheDocument();
		expect(screen.getByTestId("submitButton")).toBeInTheDocument();
	});

	it("renders with the correct input value", () => {
		const { handleSubmit, setInput } = setup();

		render(
			<ChatBox
				input='Test value'
				setInput={handleSubmit}
				handleSubmit={setInput}
			/>
		);

		const inputElement = screen.getByTestId("input");
		expect(inputElement.value).toBe("Test value");
	});

	it("updates input value when user types", () => {
		const { handleSubmit, setInput, input } = setup();
		render(
			<ChatBox input={input} setInput={setInput} handleSubmit={handleSubmit} />
		);

		const inputField = screen.getByTestId("input");
		fireEvent.change(inputField, { target: { value: "Hello" } });

		expect(setInput).toHaveBeenCalledWith("Hello");
	});

	it("calls handleSubmit when form is submitted", () => {
		const { handleSubmit, setInput, input } = setup();
		render(
			<ChatBox input={input} setInput={setInput} handleSubmit={handleSubmit} />
		);

		const form = screen.getByTestId("form");
		fireEvent.submit(form);

		expect(handleSubmit).toHaveBeenCalled();
	});
});
