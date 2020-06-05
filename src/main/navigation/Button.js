// Button.js

import React from "react";
import "./Button.css";

const Button = ({ onClick, children }) => (
  <div className="search-btn">
    <button onClick={onClick}>{children}</button>
  </div>
);

export default Button;
