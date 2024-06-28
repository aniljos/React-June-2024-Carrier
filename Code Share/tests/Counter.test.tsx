import React, {act} from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";


describe("Counter component", () => {
//   test("renders with initial value", () => {
//     render(<Counter initValue={5} />);
//     const counterElement = screen.getByText(/Counter: 5/i);
//     expect(counterElement).toBeInTheDocument();
//   });

//   test("increments the counter", async () => {
//     render(<Counter initValue={5} />);
//     const incButton = screen.getByText(/Inc/i);
  
//       fireEvent.click(incButton);             
//     const counterElement = screen.getByText(/Counter: 6/i);
//     expect(counterElement).toBeInTheDocument();
//   });

//   test("decrements the counter", () => {
//     render(<Counter initValue={5} />);
//     const decrButton = screen.getByText(/Decr/i);
//     fireEvent.click(decrButton);
//     const counterElement = screen.getByText(/Counter: 4/i);
//     expect(counterElement).toBeInTheDocument();
//   });

  it("matches the snapshot with initial value", () => {
    const {container} = render(<Counter initValue={5} />);

    expect(container).toMatchSnapshot();
  });

//   it("matches the snapshot after incrementing", () => {
//     const { asFragment } = render(<Counter initValue={5} />);

//     expect(asFragment()).toMatchSnapshot('initial render');
//     const incButton = screen.getByText(/Inc/i);
//     incButton.click();
//     incButton.click();
//     expect(asFragment()).toMatchSnapshot('after increment');
//   });

//   it("matches the snapshot after decrementing", () => {
//     const { asFragment } = render(<Counter initValue={5} />);
//     const decrButton = screen.getByText(/Decr/i);
//     decrButton.click();
//     expect(asFragment()).toMatchSnapshot();
//   });
});
