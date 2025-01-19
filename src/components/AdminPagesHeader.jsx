import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Images
import arrowRightIcon from "../assets/images/icons/solid-arrow-right.svg";

const AdminPagesHeader = ({
  className = "",
  link = "/admin/dashboard/",
  title = "Sahifa sarlavhasi",
}) => {
  return (
    <div className={`container ${className}`}>
      <div className="flex items-center justify-center relative bg-gradient-gray px-11 py-5 rounded-xl xs:px-12 xs:py-6 sm:py-7">
        {/* Back to dashboard */}
        <Link
          to={link}
          className="flex items-center justify-center absolute left-3.5 size-10 rotate-180 rounded-full xs:size-11 sm:size-12"
        >
          <Icon src={arrowRightIcon} alt="Arrow left icon" />
        </Link>

        {/* Title */}
        <h1 className="text-lg font-semibold truncate">{title}</h1>
      </div>
    </div>
  );
};

export default AdminPagesHeader;
