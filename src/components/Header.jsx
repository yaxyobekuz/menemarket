import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Images
import logoIcon from "../assets/images/icons/logo.svg";
import searchIcon from "../assets/images/icons/search.svg";
import catalogIcon from "../assets/images/icons/catalog.svg";
import loginIcon from "../assets/images/icons/login-white.svg";

const Header = () => {
  return (
    <header className="flex items-center sticky top-0 inset-x-0 z-10 bg-white border-b h-16 sm:h-[72px] md:h-20">
      <div className="container">
        <div className="flex items-center justify-between">
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

          {/* Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-5">
              {/* products */}
              <li>
                <Link
                  to="/products"
                  className="btn-stroke h-10 px-5 border-none"
                >
                  <Icon src={catalogIcon} alt="Catalog icon" />
                  <span>Mahsulotlar</span>
                </Link>
              </li>

              {/* contact */}
              <li>
                <Link to="/contact" className="btn-stroke h-10 px-5">
                  <span className="text-primary-default">Bog'lanish</span>
                </Link>
              </li>
              {/* search */}
              <li>
                <Link to="/search" className="btn-stroke h-10 px-5">
                  <Icon src={searchIcon} alt="Search icon" />
                  <span>Qidirish</span>
                </Link>
              </li>

              {/* login */}
              <li>
                <Link to="/login" className="btn-primary py-2 px-5">
                  <span>Kirish</span>
                  <Icon src={loginIcon} alt="Login icon" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile contact link */}
          <Link
            to="/contact"
            className="btn-stroke py-1.5 px-4 sm:h-10 sm:px-5 md:hidden"
          >
            <span className="text-primary-default text-sm xs:text-base">
              Bog'lanish
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
