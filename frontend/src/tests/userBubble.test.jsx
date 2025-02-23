import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, expect, afterEach, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import UserBubble from "../Components/userBubble";

describe("UserBubble Component", () => {
	// Clean up the DOM after each test to prevent side effects
	afterEach(cleanup);

	// Test if the UserBubble component displays given text
	it("renders with text", () => {
		render(<UserBubble text={"Test Response Bubble"} />);

		expect(screen.getByText("Test Response Bubble")).toBeInTheDocument();
	});

	// Test if clicking edit button will trigger the onEdit function
	it("calls onEdit function when edit button is clicked", () => {
		const mockOnEdit = vi.fn(); // Mock function to track if onEdit is called
		render(<UserBubble text={"Editable Message"} onEdit={mockOnEdit} />); 

		// Find the edit button and click it
		const editButton = screen.getByRole("button");
		fireEvent.click(editButton);

		// Expect the onEdit function to be called once
		expect(mockOnEdit).toHaveBeenCalledTimes(1);
	});
});
