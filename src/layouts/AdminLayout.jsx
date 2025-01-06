import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

// Images
import logoIcon from "../assets/images/icons/logo.svg";

// Components
import Sidebar from "../components/Sidebar";
import AdminLayoutTabs from "../components/AdminLayoutTabs";

const AdminLayout = () => {
  const isCollapseStorage = localStorage.getItem("isCollapse");
  const [isCollapse, setIsCollapse] = useState(isCollapseStorage === "true");

  return (
    <div className="flex flex-col min-h-screen sm:flex-row">
      <Sidebar isCollapse={isCollapse} setIsCollapse={setIsCollapse} />

      {/* Header */}
      <header className="flex items-center sticky top-0 inset-x-0 z-20 w-full h-16 bg-white border-b sm:hidden">
        <div className="container">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            {/* logo icon */}
            <img
              width={90}
              height={48}
              src={logoIcon}
              alt="Mene Market logo svg icon"
              className="w-[75px] h-10 xs:w-[82.5px] xs:h-11 md:w-[90px] md:h-12"
            />
          </Link>
        </div>
      </header>

      {/* Main */}
      <main
        className={`${
          isCollapse
            ? "sm:w-[calc(100%-96px)]"
            : "sm:w-[calc(100%-96px)] lg:w-[calc(100%-320px)]"
        } max-sm:pb-16 max-sm:w-full`}
      >
        <Outlet />
      </main>

      {/* Layout tabs */}
      <AdminLayoutTabs />
    </div>
  );
};

export default AdminLayout;
