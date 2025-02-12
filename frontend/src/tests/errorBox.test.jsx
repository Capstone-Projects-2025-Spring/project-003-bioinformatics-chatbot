import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { vi, describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import ErrorBox from "../Components/errorBox";

describe("ErrorBox Component", () => {
	afterEach(cleanup);
	it("renders error title and body", () => {
		render(
			<ErrorBox
				title='Test Error'
				body='Something went wrong'
				setError={() => {}}
			/>
		);

		expect(screen.getByText("Test Error")).toBeInTheDocument();
		expect(screen.getByText("Something went wrong")).toBeInTheDocument();
	});

	it("calls setError when close button is clicked", () => {
		const mockSetError = vi.fn();

		render(
			<ErrorBox
				title='Test Error'
				body='Something went wrong'
				setError={mockSetError}
			/>
		);

		const closeButton = screen.getByTestId("closeButton");
		fireEvent.click(closeButton);

		expect(mockSetError).toHaveBeenCalledWith({ title: "", body: "" });
	});
});
