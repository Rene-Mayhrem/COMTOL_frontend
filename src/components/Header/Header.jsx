import React from "react";
import Logo from "../../assets/Logo.svg";
import './Header.css'

function Header() {
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src={Logo}  alt="Logo Temach"
        className="imagen-ajustada" />
          Los compas de hierro Toluca
        </a>
      </div>
    </nav>
  );
}

export default Header;
