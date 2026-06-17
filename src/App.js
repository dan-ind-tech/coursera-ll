import "./App.css";
import { Routes, Route } from "react-router-dom";
import AboutLittleLemon from "./components/AboutLittleLemon";
import Homepage from "./pages/Homepage";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="main-content" aria-label="Main content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutLittleLemon />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/orderOnline" element={<OrderOnline />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
