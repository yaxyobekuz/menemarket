import React from "react";
import { Link } from "react-router-dom";

// Components
import Icon from "./Icon";

// Images
import logoIcon from "../assets/images/icons/logo.svg";
import searchIcon from "../assets/images/icons/search.svg";
import catalogIcon from "../assets/images/icons/catalog.svg";
import loginIcon  from "../assets/images/icons/login-white.svg";

const Header = () => {
  return (
    <header className="bg-white py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1">
            {/* logo icon */}
            <img
              width={90}
              height={48}
              src={logoIcon}
              className="h-12"
              alt="Mene Market logo svg icon"
            />
          </Link>

          {/* Nav */}
          <nav>
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
        </div>
      </div>
    </header>
  );
};

export default Header;
