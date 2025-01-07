import React from "react";

// Images
import arrowRightIcon from "../assets/images/icons/solid-arrow-right.svg";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const AdminPagesHeader = ({ title = "Sahifa sarlavhasi" }) => {
  return (
    <div className="container">
      <div className="flex items-center justify-center relative bg-gradient-gray pl-14 pr-4 py-5 rounded-xl xs:py-6 sm:py-7">
        {/* Back to dashboard */}
        <Link
          to="/admin/dashboard/"
          className="flex items-center justify-center absolute left-3.5 size-10 rotate-180 rounded-full xs:size-11 sm:size-12"
        >
          <Icon src={arrowRightIcon} alt="Arrow left icon" />
        </Link>

        {/* Title */}
        <h1 className="text-lg font-semibold truncate sm:text-xl">{title}</h1>
      </div>
    </div>
  );
};

export default AdminPagesHeader;
