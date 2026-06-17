import BookingForm from "../components/BookingForm";
import { render, screen } from "@testing-library/react";
import { initializeTimes } from "../components/Main";

test("renders the BookingForm reservation fields", () => {
  render(
    <BookingForm
      availableTimes={initializeTimes()}
      dispatchAvailableTimes={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  expect(screen.getAllByText(/reservation date/i).length).toBeGreaterThan(0);
  expect(screen.getByLabelText(/reservation time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
});
