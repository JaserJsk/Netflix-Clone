import "./Nav.css";

import React, { useState, useEffect } from "react";

import Logo from "../assets/logo.svg";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

function Nav() {
  const [visible, setVisible] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${visible && "nav-background"}`}>
      <img className="nav-logo" src={Logo} alt="Netflix Logo" />
      <AccountBoxIcon className="nav-avatar" />
    </div>
  );
}

export default Nav;
