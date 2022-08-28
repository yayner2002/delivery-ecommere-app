import React, { useRef } from "react";
import logo from "../../assets/images/yaycommerceNobg.png";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "../../styles/header.css";

const nav__Links = [
  {
    display: "Home",
    path: "home",
  },
  {
    display: "Foods",
    path: "foods",
  },
  {
    display: "Cart",
    path: "cart",
  },
  {
    display: "Contact",
    path: "contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');
  return (
    <header className="header">
      <Container>
        <div className="nav__wrapper d-flex align-items-baseline justify-content-between">
          <div className="logo">
            <img
              src={logo}
              alt="logo"
            />
          </div>
          <div className="navigation" ref={menuRef}  onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__Links.map((navItem, index) => (
                <NavLink
                  to={navItem.path}
                 
                  key={navItem.index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {navItem.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav-right d-flex align-items-center gap-3">
            <span className="cart__icon">
              <i class="ri-shopping-basket-line"></i>
              <span className="cart__badge">2</span>
            </span>
            <span className="user">
              <Link to="login">
                <i class="ri-user-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
