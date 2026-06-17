import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { initializeTimes, updateTimes } from "./components/Main";

test("renders Little Lemon navigation", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  expect(screen.getByLabelText(/little lemon home page/i)).toBeInTheDocument();
});

test("initializes available booking times", () => {
  expect(initializeTimes()).toEqual([
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
    "22:00",
  ]);
});

test("updates available booking times", () => {
  expect(updateTimes([], { type: "dateChanged", date: new Date() })).toEqual(
    initializeTimes()
  );
});
