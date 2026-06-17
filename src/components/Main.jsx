import { useReducer } from "react";
import { Route, Routes } from "react-router-dom";
import AboutLittleLemon from "./AboutLittleLemon";
import Homepage from "../pages/Homepage";
import Menu from "../pages/Menu";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";
import Login from "../pages/Login";

export const initializeTimes = () => [
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

export const updateTimes = () => initializeTimes();

const Main = () => {
  const [availableTimes, dispatchAvailableTimes] = useReducer(
    updateTimes,
    initializeTimes()
  );

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
            />
          }
        />
        <Route path="/orderOnline" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default Main;
