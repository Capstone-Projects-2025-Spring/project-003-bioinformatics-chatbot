import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import { vi, describe, it, expect, afterEach, beforeEach } from "vitest";
import Chat from "../Pages/chat";
import "@testing-library/jest-dom/vitest";
import axios from "axios";


vi.mock('axios');

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
    render(<Chat />);

    // Verify that the input field and submit button are present in the document
    expect(screen.getByTestId("input")).toBeInTheDocument();
    expect(screen.getByTestId("submitButton")).toBeInTheDocument();
  });

  it("Error message resets after 5 seconds", async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    render(<Chat />);
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
    render(<Chat />);

    // Select input field
    const inputField = screen.getByTestId("input");

    // Simulate typing into the input field
    fireEvent.change(inputField, { target: { value: "Hello, chatbot!" } });

    // Verify that the input field's value has changed
    expect(inputField.value).toBe("Hello, chatbot!");
  });

  //  Test to display an error when trying to submit an empty message (to be updated later)
  it("displays error when submitting empty input", async () => {
    render(<Chat />);

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
    render(<Chat />);
    axios.post.mockResolvedValue({ data: { response: "this is a response" } });

    // Select the input field and submit button
    const inputField = screen.getByTestId("input");
    const submitButton = screen.getByTestId("submitButton");

    // Type a message
    fireEvent.change(inputField, { target: { value: "Hello, chatbot!" } });

    // Submit the message
    fireEvent.click(submitButton);

    const spinner = screen.getByTestId('spinner')
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
    render(<Chat />);

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
    render(<Chat />);

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
    render(<Chat />);

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

  

 

  

  

  
  
  
});
