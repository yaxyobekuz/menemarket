import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// Components
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
  const isCollapseStorage = localStorage.getItem("isCollapse");
  const [isCollapse, setIsCollapse] = useState(isCollapseStorage === "true");

  return (
    <div className="flex min-h-screen">
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />

      <main
        className={`${
          isCollapse ? "w-[calc(100%-96px)]" : "w-[calc(100%-320px)]"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
