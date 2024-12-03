import React from "react";

// Router
import { Outlet } from "react-router-dom";

// Components
import Top from "../components/Top";
import Header from "../components/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top */}
      <Top />
      <Header />

      {/* Main */}
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
