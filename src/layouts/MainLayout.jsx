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
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen pb-16 md:pb-0">
      {/* Top */}
      <Top />
      <Header />

      {/* Main */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {modal.isOpen && <Modal />}

      {/* Main layout tabs */}
      <MainLayoutTabs />
    </div>
  );
};

export default MainLayout;
