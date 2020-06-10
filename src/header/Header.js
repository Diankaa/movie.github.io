import React from "react";
import "./Header.css";
import Image from "../Image";
import logo from "../assets/images/logo.svg";

const Header = () => (
  <header>
    <div className="header__logo">
      <a className="header__link" href="/">
        <Image src={logo} alt="movie-search" />
        <span>movie search</span>
      </a>
    </div>
  </header>
);

export default Header;
