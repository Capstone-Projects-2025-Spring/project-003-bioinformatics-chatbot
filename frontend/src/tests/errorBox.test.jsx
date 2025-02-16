import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { vi, describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import ErrorBox from "../Components/errorBox";

describe("ErrorBox Component", () => {
	// Clean up the DOM after each test to prevent side effects
	afterEach(cleanup);

	// Test if the ErrorBox component correctly displays the title and body text
	it("renders error title and body", () => {
		render(
			<ErrorBox
				title='Test Error'
				body='Something went wrong'
				setError={() => {}}
			/>
		);
		// Verify that the error title and body is displayed in the document
		expect(screen.getByText("Test Error")).toBeInTheDocument();
		expect(screen.getByText("Something went wrong")).toBeInTheDocument();
	});

	// Test if clicking the close button calls setError to clear the error state
	it("calls setError when close button is clicked", () => {
		// Mock function to track calls to setError
		const mockSetError = vi.fn();

		render(
			<ErrorBox
				title='Test Error'
				body='Something went wrong'
				setError={mockSetError}
			/>
		);

		// Select the close button using its test ID
		const closeButton = screen.getByTestId("closeButton");

		// Simulate a click event on the close button
		fireEvent.click(closeButton);

		// Verify that the mock setError function was called with an empty error object
		expect(mockSetError).toHaveBeenCalledWith({ title: "", body: "" });
	});
});
