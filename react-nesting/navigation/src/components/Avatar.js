import React from "react";

import avatar from "../img/avatar.jpg";
import Image from "./Image";

const Avatar = () => {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src={avatar} alt="avatar" />
    </button>
  );
};

export default Avatar;
