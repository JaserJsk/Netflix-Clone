import "./Splash.css";

import React from "react";
import Logo from "../assets/logo.svg";

function Splash() {
  return (
    <div className="splash">
      <div className="splash-logo">
        <img src={Logo} alt="Netflix Clone" />
      </div>
    </div>
  );
}

export default Splash;
