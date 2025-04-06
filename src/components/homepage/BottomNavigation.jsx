import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HiHome,
  HiMagnifyingGlass,
  HiCamera,
  HiUser,
  HiDocumentText,
  HiListBullet,
} from "react-icons/hi2";

// will change the icons with the logos

const BottomNavigation = () => {
  const navigate = useNavigate();

  const navItems = [
    { id: 1, name: "Home", icon: HiHome, path: "/dashboard" },
    {
      id: 2,
      name: "Skin Analysis",
      icon: HiMagnifyingGlass,
      path: "/skin-area-selection",
    },
    { id: 3, name: "Scanner", icon: HiCamera, path: "/scan-product" },
    { id: 4, name: "Age Scanner", icon: HiUser, path: "/upload-image" },
    { id: 5, name: "Treatment", icon: HiDocumentText, path: "/" },
    {
      id: 6,
      name: "My Ingredients",
      icon: HiListBullet,
      path: "/my-ingredients",
    },
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <nav className="bg-black border-t border-gray-300 py-4">
      <div className="flex overflow-x-auto scrollbar-hide space-x-4 px-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            className="flex flex-col items-center justify-center min-w-[70px] text-gray-600 hover:text-lime-600"
            onClick={() => handleNavigation(item.path)}
          >
            <item.icon className="text-2xl mb-1" />
            <span className="text-xs font-medium whitespace-nowrap">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavigation;
