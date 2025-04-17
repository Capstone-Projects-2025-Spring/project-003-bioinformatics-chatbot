import { render, screen, fireEvent, waitFor, cleanup } from "@testing-library/react";
import { vi, describe, it, expect, afterEach, beforeEach } from "vitest";
import Chat from "../Pages/chat";
import "@testing-library/jest-dom/vitest";
import axios from "axios";
import { saveAs } from "file-saver";

// Mocking axios and file-saver to prevent actual API calls and file downloads
vi.mock("axios");
vi.mock("file-saver", () => ({ saveAs: vi.fn() }));

describe("Chat History Download Functions", () => {
  let originalCreateObjectURL;

  // Runs before each test to set up mock functions
  beforeEach(() => {
   // Mock sessionStorage methods to prevent actual storage interactions
    Storage.prototype.getItem = vi.fn(() => null);
    Storage.prototype.setItem = vi.fn();
    
    // Mock scrollIntoView to prevent errors in a test environment
    Element.prototype.scrollIntoView = vi.fn();

    // Mock URL.createObjectURL to return a fake URL
    originalCreateObjectURL = URL.createObjectURL;
    URL.createObjectURL = vi.fn(() => "mocked_url");

    // Mock axios response for chatbot messages
    axios.post.mockResolvedValue({ data: { message: "I like candy" } });
  });

  // Cleanup after each test to prevent side effects
  afterEach(() => {
    cleanup();
    URL.createObjectURL = originalCreateObjectURL;
  });

  // Test case for displaying an error when attempting to download an empty conversation in the txt function
  it("displays error when downloading empty conversation for txt", async () => {
    render(<Chat />);
    
    // Click the download button 
    fireEvent.click(screen.getByTestId("downloadButton"));
    // Clicking the txt format
    fireEvent.click(screen.getByTestId("downloadButtontxt"));
    
    // Waiting for the error message to show up and getting the proper error response
    await waitFor(() => screen.getByText(/Empty Conversation/));
    expect(screen.getByText(/Please send at least one message/)).toBeInTheDocument();
  });

  // Test case for displaying an error when attempting to download an empty conversation in the pdf function
  it("displays error when downloading empty conversation for pdf", async () => {
    render(<Chat />);
    // Click the download button 
    fireEvent.click(screen.getByTestId("downloadButton"));
    // Clicking the pdf format
    fireEvent.click(screen.getByTestId("downloadButtonpdf"));
    // Waiting for the error message to show up and getting the proper error response
    await waitFor(() => screen.getByText(/Empty Conversation/));
    expect(screen.getByText(/Please send at least one message/)).toBeInTheDocument();
  });

   // Test case for displaying an error when attempting to download an empty conversation in the doc function
  it("displays error when downloading empty conversation for doc", async () => {
    render(<Chat />);
     // Click the download button 
    fireEvent.click(screen.getByTestId("downloadButton"));
    // Clicking the pdf format
    fireEvent.click(screen.getByTestId("downloadButtondoc"));
    
    await waitFor(() => screen.getByText(/Empty Conversation/));
    // Waiting for the error message to show up and getting the proper error response
    expect(screen.getByText(/Please send at least one message/)).toBeInTheDocument();
  });

  
  it("downloads chatbot conversation when there is at least one message for .txt", async () => {
    render(<Chat />);

    // Type and send a message
    fireEvent.change(screen.getByPlaceholderText("Ask a question"), { target: { value: "I like candy" } });
    fireEvent.click(screen.getByTestId("submitButton"));

    await waitFor(() => screen.getByText("I like candy"));

    // Makes sure downloads are actually being created
    const createElementSpy = vi.spyOn(document, "createElement");
    const clickSpy = vi.spyOn(HTMLAnchorElement.prototype, "click");

    // downloading the files
    fireEvent.click(screen.getByTestId("downloadButton"));
    fireEvent.click(screen.getByTestId("downloadButtontxt"));

    // Actual check to see if download files downloaded
    await waitFor(() => expect(createElementSpy).toHaveBeenCalledWith("a"));
    expect(clickSpy).toHaveBeenCalled();

    createElementSpy.mockRestore();
    clickSpy.mockRestore();
  });

  
  it("downloads chatbot conversation when there is at least one message for .doc", async () => {
    render(<Chat />);
    
    // Type and send a message
    fireEvent.change(screen.getByPlaceholderText("Ask a question"), { target: { value: "I like candy" } });
    fireEvent.click(screen.getByTestId("submitButton"));

    await waitFor(() => screen.getByText("I like candy"));

    // downloading the files
    fireEvent.click(screen.getByTestId("downloadButton"));
    fireEvent.click(screen.getByTestId("downloadButtondoc"));
    // Actual check to see if download files downloaded
    await waitFor(() => expect(saveAs).toHaveBeenCalled());
  });

  
  it("downloads chatbot conversation when there is at least one message for .pdf", async () => {
    render(<Chat />);
    // Type and send a message
    fireEvent.change(screen.getByPlaceholderText("Ask a question"), { target: { value: "I like candy" } });
    fireEvent.click(screen.getByTestId("submitButton"));

    await waitFor(() => screen.getByText("I like candy"));
    // downloading the files
    fireEvent.click(screen.getByTestId("downloadButton"));
    fireEvent.click(screen.getByTestId("downloadButtonpdf"));
    // Actual check to see if download files downloaded
    await waitFor(() => expect(saveAs).toHaveBeenCalled());
  });
});