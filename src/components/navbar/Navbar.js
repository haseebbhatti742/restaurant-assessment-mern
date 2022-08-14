import React, { useState } from "react";
import Logo from "../../assets/Logo with text.png";
import CartLogo from "../../assets/Cart without text.png";
import { useAppContext } from "../../context/AppContextContainer";
import CartPanel from "../cart/CartPanel";

function Navbar() {
  const { cartItems } = useAppContext();
  const [displayCartPanel, setDisplayCartPanel] = useState(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gray-background pl-20 pr-36 py-16 relative">
      <div>
        <img src={Logo} alt="Logo" className="w-32" />
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto flex justify-evenly w-96">
          <li className="nav-item active text-xl ">
            <a
              className="nav-link border-b-yellow-primary border-b-2"
              href="#home"
            >
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item  text-xl mx-0 md:mx-20">
            <a className="nav-link" href="#form">
              Form
            </a>
          </li>
          <li className="nav-item  text-xl">
            <a className="nav-link" href="#menu">
              Menu
            </a>
          </li>
        </ul>
        <div
          className="flex flex-col md:flex-row"
          tabIndex={1}
          onBlur={() => setTimeout(() => setDisplayCartPanel(false), 300)}
        >
          {displayCartPanel && <CartPanel />}
          <div
            className="w-10 mr-10  md:mb-0  relative cursor-pointer"
            onClick={() => setDisplayCartPanel(true)}
          >
            <img src={CartLogo} alt="Cart Logo" />
            {cartItems?.length > 0 ? (
              <span className="absolute top-0 right-0 bg-red-600 text-white font-semibold rounded-full px-2">
                {cartItems?.length}
              </span>
            ) : (
              <></>
            )}
          </div>
          <div
            className={`bg-yellow-primary py-2 rounded-2xl text-center w-32 text-xl`}
          >
            Login
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
