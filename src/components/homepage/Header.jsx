import logoImage from "../../assets/sections/hero/Logo.png";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const userName = "Jane";
  const location = useLocation();

  const getGreeting = () => {
    const now = new Date();
    const hour = now.getHours();

    if (hour < 12) {
      return "Good Morning";
    } else if (hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  return (
    <header className="bg-yellow-50">
      <div className="flex justify-between items-center px-8 pt-8 pb-4">
        <div className="flex items-center">
          <img
            src={logoImage || "/placeholder.svg"}
            alt="glow project"
            className="h-10"
            loading="lazy"
          />
        </div>
        <Link to="/user-profile" state={{ from: location.pathname }}>
          <button className="w-12 h-12 rounded-full bg-lime-200 flex items-center justify-center text-xl font-medium text-gray-800">
            JC
          </button>
        </Link>
      </div>

      <div className="bg-green-50 px-8 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-l font-bold text-gray-800">
            {getGreeting()} {userName}!
          </h2>
          <p className="text-l text-gray-800 mt-1">How's your skin feeling?</p>
        </div>
        <button className="py-3 px-6 bg-white border border-gray-500 rounded-xl text-l font-medium text-gray-800 hover:bg-gray-50">
          Morning Check-in
        </button>
      </div>
    </header>
  );
}

export default Header;
