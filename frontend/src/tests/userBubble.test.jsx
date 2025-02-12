import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect, afterEach } from "vitest";
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
});
