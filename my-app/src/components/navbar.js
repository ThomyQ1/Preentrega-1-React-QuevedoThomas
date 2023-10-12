import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cartwidget from "../components/cartwidget";
import "../components/navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <div className="container">
        <a className="navbar-brand text-white" href="#">
          Secret Bar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Nosotros</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <Cartwidget />
    </nav>
  );
};

export default Navbar;
