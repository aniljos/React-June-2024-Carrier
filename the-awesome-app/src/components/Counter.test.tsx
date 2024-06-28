import {fireEvent, render, screen} from "@testing-library/react";
import Counter from "./Counter";

test("render Counter", () => {

    render(<Counter initValue={5}/>);
    const expectedText = screen.getByText(/Counter : 5/i);
    expect(expectedText).toBeInTheDocument();

})

test("render Counter inc", () => {

    render(<Counter initValue={5}/>);
    const initialText = screen.getByText(/Counter : 5/i);
    expect(initialText).toBeInTheDocument();

    const incBtn = screen.getByText(/Inc/i);
    fireEvent.click(incBtn);

    const updatedText = screen.getByText(/Counter : 6/i);
    expect(updatedText).toBeInTheDocument();
})

