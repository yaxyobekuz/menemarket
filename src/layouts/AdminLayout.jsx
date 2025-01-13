import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

// Toaster (For notification)
import { notification } from "../notification";

// Services
import userService from "../api/services/userService";

// Images
import logoIcon from "../assets/images/icons/logo.svg";
import reloadIcon from "../assets/images/icons/reload.svg";

// Components
import Icon from "../components/Icon";
import Sidebar from "../components/Sidebar";
import DotsLoader from "../components/DotsLoader";
import AdminLayoutTabs from "../components/AdminLayoutTabs";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "../store/features/userDataSlice";

const AdminLayout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);
  const userData = useSelector((state) => state.userData.data);
  const isCollapseStorage = localStorage.getItem("isCollapse");
  const [isCollapse, setIsCollapse] = useState(isCollapseStorage === "true");

  const getUserData = () => {
    setIsError(false);
    setIsLoading(true);

    // Fetch data
    userService
      .getUserData()
      .then((data) => dispatch(updateUserData(data)))
      .catch(() => {
        setIsError(true);
        notification.error("Ma'lumotlarni yuklab bo'lmadi");
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!userData) {
      getUserData();
    } else {
      setTimeout(() => setIsLoading(false), 500);
    }
  }, []);

  useEffect(() => {
    if (!token) navigate("/auth/login");
  }, [location, token]);

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
        } relative max-sm:pb-16 max-sm:w-full`}
      >
        {/* Outlet */}
        {!isError && !isLoading && <Outlet />}

        <div className="flex justify-center w-full">
          {/* Loader */}
          {isLoading && !isError && (
            <DotsLoader
              color="#0085FF"
              className="absolute top-[calc(50%-4px)]"
            />
          )}

          {/* Reload button */}
          {!isLoading && isError && (
            <button
              title="Reload"
              aria-label="Reload"
              onClick={getUserData}
              className="absolute top-[calc(50%-24px)] p-3"
            >
              <Icon src={reloadIcon} alt="Reload icon" />
            </button>
          )}
        </div>
      </main>

      {/* Layout tabs */}
      <AdminLayoutTabs />
    </div>
  );
};

export default AdminLayout;
