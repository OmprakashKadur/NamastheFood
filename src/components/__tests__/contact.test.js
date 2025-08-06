import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// beforeAll(()=>{
//   console.log("before All Test")
// })
// beforeEach(()=>{
//   console.log("before Each Test")
// })
// afterAll(()=>{
//   console.log("After All Test")
// })
// afterEach(()=>{
//   console.log("After Each Test")
// })

describe("Contact Component", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });
  test("should get Button inside component", () => {
    render(<Contact />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should get Button inside component", () => {
    render(<Contact />);
    const buttonSubmit = screen.getByText("Submit");
    expect(buttonSubmit).toBeInTheDocument();
  });
});

describe("Contact Input", () => {
  it("should load input Name inside Contant Component", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText("Name");
    expect(nameInput).toBeInTheDocument();
  });
  it("should load 2 input boxes Contant Component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    expect(inputBoxes.length).toBe(2);
    // expect(inputBoxes.length).not.toBe(3);
  });
});
