import React from "react";

import logo from "../img/logo.jpg";
import Image from "./Image";

const Logo = () => {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
};

export default Logo;
