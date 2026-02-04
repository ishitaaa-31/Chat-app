import React from "react";
import Sidebar from "../../components/Sidebar";

const UserDashboard = () => {
  return (
    <div className="w-full flex h-[90vh]">
      <div className="bg-(--color-background) w-12/60">
        <Sidebar />
      </div>

      <div className="w-48/60 flex items-center justify-center">
        <p className="text-gray-400 text-lg">
          You are logged in
        </p>
      </div>
    </div>
  );
};

export default UserDashboard;