import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";

// Components
import Top from "../components/Top";
import Modal from "../components/Modal";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainLayoutTabs from "../components/MainLayoutTabs";

const MainLayout = () => {
  const location = useLocation();
  const modal = useSelector((state) => state.modal);
  const pathArr = location.pathname.split("/").filter((_) => _);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const checkFirstPath = (path) => {
    return pathArr[0]?.toLowerCase() === path?.toLowerCase();
  };

  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0">
      {/* Top */}
      {!checkFirstPath("auth") && (
        <>
          <Top />
          <Header />
        </>
      )}

      {/* Main */}
      <main className="flex flex-col grow">
        <Outlet />
      </main>

      {!checkFirstPath("auth") && (
        <>
          <Footer />
          <MainLayoutTabs />
        </>
      )}

      {/* Modal */}
      {modal.isOpen && <Modal />}
    </div>
  );
};

export default MainLayout;
