import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink
        to="/destination"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Destination
      </NavLink>
      <NavLink
        to="/crew"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Crew
      </NavLink>
      <NavLink
        to="/technology"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Technology
      </NavLink>
    </nav>
  );
};

export default Navbar;
