import React from "react";
import { IoDiamond } from "react-icons/io5";
import { RiShieldStarFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../assets/sections/hero/Logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-6 bg-stone-100">
      <div className="flex items-center">
        <img src={Logo} alt="Project GlowSkin" className="h-12" />
      </div>

      <div className="flex items-center gap-4">
        <button className="flex items-center gap-1 bg-amber-100 rounded-full px-3 py-1">
          <RiShieldStarFill className="text-amber-500 text-xl" />
          <span className="font-medium">1</span>
        </button>

        <button className="flex items-center gap-1 bg-emerald-100 rounded-full px-3 py-1">
          <IoDiamond className="text-emerald-500 text-xl" />
          <span className="font-medium">10</span>
        </button>

        <Link to="/user-profile">
          <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-white font-medium">
            JC
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
