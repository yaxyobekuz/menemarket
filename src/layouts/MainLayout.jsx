import React from "react";

// Router
import { Outlet } from "react-router-dom";

// Components
import Top from "../components/Top";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayoutTabs from "../components/MainLayoutTabs";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0">
      {/* Top */}
      <Top />
      <Header />

      {/* Main */}
      <main className="grow">
        <Outlet />
      </main>

      <Footer />

      <MainLayoutTabs />
    </div>
  );
};

export default MainLayout;
