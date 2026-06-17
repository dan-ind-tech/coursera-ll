import { useReducer } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AboutLittleLemon from "./AboutLittleLemon";
import Homepage from "../pages/Homepage";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";
import ConfirmedBooking from "../pages/ConfirmedBooking";

export const fallbackTimes = [
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
];

const getAvailableTimes = (date) => {
  if (typeof window !== "undefined" && typeof window.fetchAPI === "function") {
    return window.fetchAPI(date);
  }

  return fallbackTimes;
};

export const initializeTimes = () => getAvailableTimes(new Date());

export const updateTimes = (availableTimes, action) => {
  if (action.type === "dateChanged") {
    return getAvailableTimes(action.date);
  }

  return availableTimes;
};

export const submitBooking = (formData) => {
  if (typeof window !== "undefined" && typeof window.submitAPI === "function") {
    return window.submitAPI(formData);
  }

  return true;
};

const Main = () => {
  const navigate = useNavigate();
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

  const submitForm = (formData) => {
    if (submitBooking(formData)) {
      navigate("/booking-confirmed");
      return true;
    }

    return false;
  };

  return (
    <main id="main-content" className="main-content" aria-label="Main content">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutLittleLemon />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <Reservations
              availableTimes={availableTimes}
              dispatchAvailableTimes={dispatchAvailableTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Main;
