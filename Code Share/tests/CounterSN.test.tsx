import { render, screen, waitFor } from "@testing-library/react";
import Counter from "../components/Counter";

it("matches the snapshot with initial value", () => {
    const {container} = render(<Counter initValue={5} />);

    expect(container).toMatchSnapshot('initial render');
  });

  it("matches the snapshot after incrementing", async() => {
    const { container } = render(<Counter initValue={5} />);

    expect(container).toMatchSnapshot('initial render');

    const incButton = screen.getByText(/Inc/i);
    incButton.click();
    //incButton.click();

   await  waitFor(() => {
        const counterElement = screen.getByText(/Counter: 6/i);
        expect(counterElement).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot('after increment');
    
    
    
  });