import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./index";

describe("Counter Tests", () => {

  let increaseBtn, decreaseBtn, count;
  
  beforeEach(() => {
    console.log("Her testten önce çalışaçağım")
    render(<Counter />);
    increaseBtn = screen.getByText("Increase");
    decreaseBtn = screen.getByText("Decrease");
    count = screen.getByText("0");
  });

  beforeAll(() => {
      console.log("Bir kere calısacağım!")
  });

  afterEach(() => {
      console.log("Her testten sonra çalışacağım! ")
  })

  afterAll(() => {
      console.log("En son bir kere çalışacağım")
  })

  test("increase btn", () => {
    //callback'in içinde yapmak istediğimiz test otomasyonunu yazıyoruz.
    userEvent.click(increaseBtn);
    expect(count).toHaveTextContent("1");
  });

  test("decrease btn", () => {
    //callback'in içinde yapmak istediğimiz test otomasyonunu yazıyoruz.
    userEvent.click(decreaseBtn);
    expect(count).toHaveTextContent("-1");
  });

 
});
