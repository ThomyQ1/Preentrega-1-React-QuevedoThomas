import React from "react";
import "../components/cartwidget.css"

const Cartwidget = () => {
  return (
    <div>
      <li>
        <a className="boton-menu boton-carrito" href="#">
          <i className="bi bi-cart-fill"></i>
          <span id="numerito" className="numerito">
            0
          </span>
        </a>
      </li>
    </div>
  );
};

export default Cartwidget;
