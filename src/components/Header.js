import React from "react";
import AdminHeader from "./AdminHeader";
import UserHeader from "./UserHeader";

const Header = () => {
  return (
    <div>
      <header className="header menu_fixed bg-default fixed-top" >
        <div id="logo">
          <a href="/magang-homepage">
            <img src="img/logo2.png" width={150} height={36} alt="" className="logo_normal" />
          </a>
        </div>
        {/* /top_menu */}
        <a href="#menu" className="btn_mobile">
          <div className="hamburger hamburger--spin" id="hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </a>
        <nav id="menu" className="main-menu">
          {
            // !isLogin() ? (
            <ul>
              <li><span><a href="#0">Masuk</a></span>
              </li>
              <li><span><a href="#0">Daftar</a></span>
              </li>
            </ul>
            //   ) : (
            // isAdmin ? (
            // <AdminHeader />
            // ) : (
            // <UserHeader />
            // )
            // )
          }

        </nav>
      </header>
    </div>
  )
}

export default Header;