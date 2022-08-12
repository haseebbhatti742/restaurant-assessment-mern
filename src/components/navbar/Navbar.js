import React from "react";
import classes from "./navbar.module.scss";
import Logo from "../../assets/Logo with text.png";
import CartLogo from "../../assets/Cart without text.png";

function Navbar() {
  return (
    <div className={classes["main"]}>
      <div className={classes["logo_section"]}>
        <img src={Logo} alt="Logo" />
      </div>
      <div className={classes["list_section"]}>
        <ul>
          <li className={classes["active"]}>Home</li>
          <li>Form</li>
          <li>Menu</li>
        </ul>
      </div>
      <div className={classes["options_section"]}>
        <div className={classes["cart"]}>
          <img src={CartLogo} alt="Cart Logo" />
        </div>
        <div className={classes["login"]}>
          <div className={classes["loginButton"]}>Login</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
