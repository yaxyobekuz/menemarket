import React, { useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

// Components
import Icon from "../components/Icon";

// Toaster (For notification)
import { notification } from "../notification";

// Images
import furnitureBg from "../assets/images/backgrounds/furniture.jpg";
import arrowRightIcon from "../assets/images/icons/solid-arrow-right.svg";

const AuthLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      navigate("/admin/dashboard");
      notification("Siz allaqachon ro'yxatdan o'tgansiz");
    }
  }, [token, location]);

  return (
    <div className="flex items-center justify-center fixed inset-0 size-full xs:bg-gray-light py-3.5 xs:py-4 sm:py-5">
      <div className="container max-h-[672px] h-full">
        <div className="grid grid-cols-1 relative h-full rounded-3xl md:grid-cols-2">
          {/* Image */}
          <div className="hidden max-h-full h-full min-h-0 md:block">
            <img
              width={620}
              height={672}
              src={furnitureBg}
              alt="Furniture background image"
              className="w-full h-full object-cover rounded-l-3xl"
            />
          </div>

          {/* Back to home */}
          <Link
            to="/"
            title="Back to Home"
            aria-label="Back to Home"
            className="hidden btn absolute left-6 top-6 bg-white/50 backdrop-blur p-2 md:flex"
          >
            <Icon
              alt="Arrow right"
              src={arrowRightIcon}
              className="size-6 rotate-180"
            />
          </Link>

          {/* Pages */}
          <div className="size-full max-h-full overflow-y-auto scroll-hidden bg-white px-0 xs:rounded-2xl xs:px-3.5 sm:px-5 md:rounded-none md:rounded-r-3xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
