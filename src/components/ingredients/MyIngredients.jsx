import { useState } from "react";
import BottomNavigation from "../homepage/BottomNavigation";
import History from "./History";
import InUse from "./InUse";
import Bookmark from "./Bookmark";
import Logo from "../../assets/sections/hero/Logo.png";
import UserProfile from "../profile/UserProfile";

const MyIngredients = () => {
  const [activeTab, setActiveTab] = useState("History");
  const [showProfile, setShowProfile] = useState(false);

  // Dummy data for products
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "[Product 1 Scan]",
      rename: "Rename Product",
      image: "/placeholder.svg?height=100&width=50",
      rating: 7.5,
      bookmarked: false,
      inUse: true,
      status: "Suitable for you!",
      statusColor: "bg-green-500",
    },
    {
      id: 2,
      name: "[Product 2 Scan]",
      rename: "Rename Product",
      image: "/placeholder.svg?height=100&width=100",
      rating: 6,
      bookmarked: false,
      inUse: false,
      status: "Use with caution!",
      statusColor: "bg-orange-400",
    },
    {
      id: 3,
      name: "[Product 3 Scan]",
      rename: "Rename Product",
      image: "/placeholder.svg?height=100&width=50",
      rating: 3.8,
      bookmarked: false,
      inUse: false,
      status: "Not suitable for you!",
      statusColor: "bg-red-400",
    },
  ]);

  // Toggle bookmark status
  const toggleBookmark = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, bookmarked: !product.bookmarked }
          : product
      )
    );
  };

  // Toggle in-use status
  const toggleInUse = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, inUse: !product.inUse } : product
      )
    );
  };

  // Function to handle profile button click
  const handleProfileClick = () => {
    setShowProfile(true);
  };

  // Render the appropriate component based on the active tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "History":
        return (
          <History
            products={products}
            toggleBookmark={toggleBookmark}
            toggleInUse={toggleInUse}
          />
        );
      case "In-Use":
        return <InUse />;
      case "Bookmarks":
        return <Bookmark />;
      default:
        return (
          <History
            products={products}
            toggleBookmark={toggleBookmark}
            toggleInUse={toggleInUse}
          />
        );
    }
  };

  if (showProfile) {
    return <UserProfile />;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-16">
          {/* Header */}
          <div className="flex items-center justify-between mb-6 px-8 pt-8">
            <div className="font-bold text-2xl">
              <img src={Logo} alt="Glow Logo" className="h-8" />
            </div>
            <button
              onClick={handleProfileClick}
              className="w-8 h-8 rounded-full bg-lime-200 flex items-center justify-center text-sm"
            >
              JC
            </button>
          </div>

          {/* Title */}
          <div className="text-center mb-6 px-8">
            <h1 className="text-3xl font-semibold text-gray-800">
              My Ingredients
            </h1>
          </div>

          {/* Tabs */}
          <div className="mb-6 px-8">
            <div className="flex border-b bg-white justify-between font-semibold">
              {["History", "In-Use", "Bookmarks"].map((tab) => (
                <button
                  key={tab}
                  className={`py-2 px-4 ${
                    activeTab === tab
                      ? "border-b-2 border-black font-medium"
                      : "text-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Render the content for the active tab */}
          <div className="px-4">{renderTabContent()}</div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute bottom-0 left-0 right-0">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default MyIngredients;
