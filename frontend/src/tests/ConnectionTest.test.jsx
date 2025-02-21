
import { describe, it, expect, afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";

// Testing Flask to React
describe("Flask to React", () => {
 
  it("Should get data from backend", async () => {
    const username = "admin"; // Right now we are only using the admin login


    // Performing request for the data
    const response = await fetch("http://127.0.0.1:444/test");


    // Making sure that the response returns correctly
    expect(response.status).toBe(200);


    // Jsonifying the response to see if there is a match
    const data = await response.json();


    // Making sure that the two messages equal one another
    expect(data.message).toBe(`Hello: ${username}`);
  });


});

