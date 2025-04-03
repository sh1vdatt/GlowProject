import React from "react";
import LogoImage from "../../assets/sections/hero/Logo.png";

export function Logo() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative w-[100px]">
        <img
          src={LogoImage}
          alt="Glow"
          className="w-full h-auto"
          loading="lazy"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export default Logo;
