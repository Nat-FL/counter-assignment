// import necessary react testing library helpers here
// import the Counter component here
import { render, screen, fireEvent} from '@testing-library/react';
import Counter from "../components/Counter";

// beforeEach(() => {
//   // Render the Counter component here
//   render(<Counter/>);
// })

test('renders counter message', () => {
  render(<Counter />);

  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
 
  const {getByTestId} = render(<Counter initialCount={0} />);
  const countVal = getByTestId("count"); 
  expect(countVal.textContent).toBe('0');
});

test('clicking + increments the count', () => {

  const {getByTestId, getByRole} = render(<Counter initialCount={0} />);
  const incrementBtn = getByRole("button", {name:"+"});
  fireEvent.click(incrementBtn);
  const countVal = getByTestId("count"); 
  expect(countVal.textContent).toBe('1');
});

test('clicking - decrements the count', () => {

  const {getByTestId, getByRole} = render(<Counter initialCount={0} />);
  const incrementBtn = getByRole("button", {name:"-"});
  fireEvent.click(incrementBtn);
  const countVal = getByTestId("count"); 
  expect(countVal.textContent).toBe('-1');
});
