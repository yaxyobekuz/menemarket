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
          isCollapse
            ? "sm:w-[calc(100%-96px)]"
            : "sm:w-[calc(100%-96px)] lg:w-[calc(100%-320px)]"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
