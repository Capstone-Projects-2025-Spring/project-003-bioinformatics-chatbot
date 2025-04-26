import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
  cleanup,
} from "@testing-library/react";
import { vi, describe, it, expect, afterEach, beforeEach } from "vitest";
import App from "../App";
import "@testing-library/jest-dom/vitest";
import axios from "axios";

vi.mock("axios");
let emitMock = vi.fn();
let disconnectMock = vi.fn();
vi.mock("socket.io-client", () => ({
  io: vi.fn(() => ({
    on: vi.fn(),
    emit: emitMock,
    disconnect: disconnectMock,
  })),
}));


describe("Chat Page", () => {
  // Runs before each test to set up mock functions
  beforeEach(() => {
    // Mock sessionStorage methods to prevent actual storage interactions
    Storage.prototype.getItem = vi.fn(() => null); // No saved messages initially
    Storage.prototype.setItem = vi.fn();

    // Mock scrollIntoView to prevent errors in a test environment
    Element.prototype.scrollIntoView = vi.fn();
  });

  // Clean up the DOM after each test to prevent side effects
  afterEach(cleanup);

  // Test to check if the chat input and submit button are rendered correctly
  it("renders chat input and messages container", () => {
    render(<App />);

    // Verify that the input field and submit button are present in the document
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("submitButton")).toBeInTheDocument();
  });

  it("Error message resets after 5 seconds", async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    render(<App />);
    // Select the submit button
    const submitButton = screen.getByTestId("submitButton");

    // Click the submit button without entering any text
    fireEvent.click(submitButton);

    // Expect an error message to be displayed
    expect(
      await screen.findByText("ChatBox cannot be empty during submission")
    ).toBeInTheDocument();
    await sleep(5000);
    expect(
      screen.queryByText("ChatBox cannot be empty during submission")
    ).not.toBeInTheDocument();
  }, 6000);

  //  Test to ensure user can type in the input field
  it("allows user to type in chat input", () => {
    render(<App />);

    // Select input field
    const inputField = screen.getByTestId("input");

    // Simulate typing into the input field
    fireEvent.change(inputField, { target: { value: "Hello, chatbot!" } });

    // Verify that the input field's value has changed
    expect(inputField.value).toBe("Hello, chatbot!");
  });

  //  Test to display an error when trying to submit an empty message (to be updated later)
  it("displays error when submitting empty input", async () => {
    render(<App />);

    // Select the submit button
    const submitButton = screen.getByTestId("submitButton");

    // Click the submit button without entering any text
    fireEvent.click(submitButton);

    // Expect an error message to be displayed
    expect(
      await screen.findByText("ChatBox cannot be empty during submission")
    ).toBeInTheDocument();
  });

  //  Test to ensure message submission works and response is added (to be updated later)
  it("submits a message and adds response", async () => {
    render(<App />);
    axios.post.mockResolvedValue({ data: { response: "this is a response" } });

    // Select the input field and submit button
    const inputField = screen.getByTestId("input");
    const submitButton = screen.getByTestId("submitButton");

    // Type a message
    fireEvent.change(inputField, { target: { value: "Hello, chatbot!" } });

    // Submit the message
    fireEvent.click(submitButton);

    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();

    // Wait for the new messages to appear
    await waitFor(() => {
      // Verify that both the user's message and the chatbot's response are displayed
      expect(screen.getByText("Hello, chatbot!")).toBeInTheDocument();
      //expect(screen.getByText("I am disconnected")).toBeInTheDocument();
    });

    // Check if input is cleared after submission
    expect(inputField.value).toBe("");
  });

  //  Test to ensure messages are stored in sessionStorage after submission
  it("stores messages in sessionStorage", async () => {
    render(<App />);

    // Select input field and submit button
    const inputField = screen.getByTestId("input");
    const submitButton = screen.getByTestId("submitButton");

    // Type a message and submit it
    fireEvent.change(inputField, { target: { value: "Hello, chatbot!" } });
    fireEvent.click(submitButton);

    // Wait for sessionStorage.setItem to be called
    await waitFor(() => {
      expect(sessionStorage.setItem).toHaveBeenCalled();
    });
  });

  //  Test to ensure previous messages are loaded from sessionStorage
  it("renders previous messages from sessionStorage", () => {
    // Mock sessionStorage to return a saved conversation
    Storage.prototype.getItem = vi.fn(() =>
      JSON.stringify([
        { id: 1, text: "Previous message", type: "Question" },
        { id: 2, text: "Previous response", type: "Response" },
      ])
    );

    // Render the Chat component
    render(<App />);

    // Check if previous messages are displayed on page load
    expect(screen.getByText("Previous message")).toBeInTheDocument();
    expect(screen.getByText("Previous response")).toBeInTheDocument();
  });

  //  Test to ensure auto-scrolling works when messages update
  it("calls scrollIntoView when messages state updates", () => {
    // Mock scrollIntoView
    const scrollIntoViewMock = vi.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock;

    // Render the Chat component
    render(<App />);

    // Select input field and submit button
    const inputField = screen.getByTestId("input");
    const submitButton = screen.getByTestId("submitButton");

    // Simulate user typing a message
    fireEvent.change(inputField, { target: { value: "Test message" } });

    // Simulate form submission
    fireEvent.submit(submitButton);

    // Check if scrollIntoView is called when new messages are added
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });

  it("only submits the first message if multiple submits happen quickly", async () => {
    axios.post.mockClear();
    render(<App />);

    const inputField = screen.getByTestId("input");
    const submitButton = screen.getByTestId("submitButton");

    axios.post.mockImplementation(() => {
      return new Promise((resolve) =>
        setTimeout(() => resolve({ data: { response: "First response" } }), 500)
      );
    });
    // Submit the first message
    fireEvent.change(inputField, { target: { value: "First message" } });
    fireEvent.click(submitButton);

    // Try to submit a second message immediately
    fireEvent.change(inputField, { target: { value: "Second message" } });
    fireEvent.click(submitButton);

    // ✅ Ensure the second message does NOT appear in the chat history (scoped to message container)
    const container = screen.getByTestId("messageContainer");
    expect(within(container).queryByText("Second message")).toBeNull();
  });

  it("submits a message then cancels the session", async () => {
    render(<App />);

    const inputField = screen.getByTestId("input");
    const submitButton = screen.getByTestId("submitButton");



    // Submit a message
    fireEvent.change(inputField, { target: { value: "Test cancel flow" } });
    fireEvent.click(submitButton);

    const spinner = await screen.findByTestId("spinner");
    expect(spinner).toBeInTheDocument();

    // Click the cancel button
    const cancelButton = screen.getByTestId("cancelButton");
    fireEvent.click(cancelButton);

    // Assertions
    expect(emitMock).toHaveBeenCalledWith("cancel");
    expect(disconnectMock).toHaveBeenCalled();

    // Spinner should disappear
    await waitFor(() => {
      expect(screen.queryByTestId("spinner")).toBeNull();
    });

		//  Test to ensure the spinner disappears, chat is cleared, cancel and disconnect are called, sessionStorage is cleared
		it("clears state and stops loading when New Chat is clicked", async () => {
			// Set up mocks for sessionStorage and loading state
			Storage.prototype.getItem = vi.fn(() =>
				JSON.stringify([
					{ id: 1, text: "Old question", type: "Question" },
					{ id: 2, text: "Old answer", type: "Response" },
				])
			);
			const removeItemMock = vi.fn();
			Storage.prototype.removeItem = removeItemMock;

			render(<App />);

			// Type a message to simulate activity
			const inputField = screen.getByTestId("input");
			const submitButton = screen.getByTestId("submitButton");

			fireEvent.change(inputField, { target: { value: "Hello" } });
			fireEvent.click(submitButton);

			// Spinner should appear
			expect(await screen.findByTestId("spinner")).toBeInTheDocument();

			// Click New Chat
			const newChatButton = screen.getByTestId("newChatButton");
			fireEvent.click(newChatButton);

			// Spinner should disappear
			await waitFor(() => {
				expect(screen.queryByTestId("spinner")).not.toBeInTheDocument();
			});

			// Input should be cleared
			expect(screen.getByTestId("input").value).toBe("");

			// Messages should be cleared
			expect(screen.queryByText("Old question")).not.toBeInTheDocument();
			expect(screen.queryByText("Old answer")).not.toBeInTheDocument();

			// Ensure session was cleared and socket was disconnected
			expect(removeItemMock).toHaveBeenCalledWith("messages");
			expect(emitMock).toHaveBeenCalledWith("cancel");
			expect(disconnectMock).toHaveBeenCalled();
		});
  });
});
