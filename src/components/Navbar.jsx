import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-logo" aria-label="Little Lemon home page">
        <img src="/assets/logo.jpg" alt="Little Lemon" height={50} />
      </NavLink>
      <nav className="navbar-links" aria-label="Main navigation">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/reservations">Reservations</NavLink>
        <NavLink to="/orderOnline">Order Online</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
