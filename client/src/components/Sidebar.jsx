

import React from "react";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Sidebar = () => {
    const navigate = useNavigate();
  const handleLogout = () => {
  sessionStorage.removeItem("CravingUser");
  toast.success("Logged out successfully");
  navigate("/login");
};

  return (
    <div className="flex flex-col justify-end h-full p-2">
      <button
        className="flex gap-3 items-center text-lg ps-2 rounded-xl h-10 w-full
        hover:bg-gray-100/70 transition"
        onClick={handleLogout}
      >
        <CiLogout />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
