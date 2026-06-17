import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Main, {
  fallbackTimes,
  initializeTimes,
  submitBooking,
  updateTimes,
} from "./components/Main";
import Reservations from "./pages/Reservations";

afterEach(() => {
  delete window.fetchAPI;
  delete window.submitAPI;
});

test("renders the reservation page booking form", () => {
  render(
    <Reservations
      availableTimes={initializeTimes()}
      dispatchAvailableTimes={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  expect(
    screen.getByRole("heading", { name: /reservations/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("form", { name: /booking form/i })).toBeInTheDocument();
  expect(screen.getAllByText(/reservation date/i).length).toBeGreaterThan(0);
  expect(screen.getByLabelText(/reservation time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
});

test("renders available booking times in the time dropdown", () => {
  render(
    <Reservations
      availableTimes={initializeTimes()}
      dispatchAvailableTimes={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  fireEvent.mouseDown(screen.getByLabelText(/reservation time/i));

  const listbox = screen.getByRole("listbox");
  initializeTimes().forEach((time) => {
    expect(within(listbox).getByRole("option", { name: time })).toBeInTheDocument();
  });
});

test("initializes available booking times", () => {
  window.fetchAPI = jest.fn(() => ["18:00", "19:00"]);

  expect(initializeTimes()).toEqual(["18:00", "19:00"]);
  expect(window.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
});

test("updates available booking times", () => {
  const selectedDate = new Date("2026-06-17");
  window.fetchAPI = jest.fn(() => ["20:00"]);

  expect(updateTimes(fallbackTimes, { type: "dateChanged", date: selectedDate })).toEqual([
    "20:00",
  ]);
  expect(window.fetchAPI).toHaveBeenCalledWith(selectedDate);
});

test("submits booking data through submitAPI", () => {
  const formData = {
    date: new Date("2026-06-17"),
    time: "20:00",
    guests: 2,
    firstName: "Dan",
    surname: "Kelly",
    mobileNumber: "0400000000",
    email: "dan@example.com",
  };
  window.submitAPI = jest.fn(() => true);

  expect(submitBooking(formData)).toBe(true);
  expect(window.submitAPI).toHaveBeenCalledWith(formData);
});

test("returns false when submitAPI rejects booking data", () => {
  const formData = { time: "20:00" };
  window.submitAPI = jest.fn(() => false);

  expect(submitBooking(formData)).toBe(false);
  expect(window.submitAPI).toHaveBeenCalledWith(formData);
});

test("allows booking submission when submitAPI is unavailable", () => {
  expect(submitBooking({ time: "20:00" })).toBe(true);
});

test("renders the booking confirmation page route", () => {
  render(
    <MemoryRouter initialEntries={["/booking-confirmed"]}>
      <Main />
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { name: /booking confirmed/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/your table reservation has been confirmed/i)
  ).toBeInTheDocument();
});
