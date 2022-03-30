import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="page">
      <header className="header menu_fixed sticky">
        <div id="logo">
          <a href="/">
            <img
              src="/../../img/logo2.png"
              width="160"
              height="50"
              alt=""
              class="logo_normal"
            ></img>
            <img
              src="/../../img/logo2.png"
              width="160"
              height="50"
              alt=""
              class="logo_sticky"
            ></img>
          </a>
        </div>
        <div className="d-flex flex-row justify-content-end align-items-center">
          {/* /top_menu */}
          <a href="#menu" className="btn_mobile">
            <div className="hamburger hamburger--spin" id="hamburger">
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="menu" className="main-menu">
            <ul>
              <li>
                <span>
                  <a href="/">Kegiatanku</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/login">Login</a>
                </span>
              </li>

              {/* <li>
                <span>
                  <a href="#0">Outlet</a>
                </span>
                <ul>
                  <li>
                    <Link to="/outlet">Rias Pedia Outlet</Link>
                  </li>
                  <li>
                    <Link to="/detailOutlet">Rias Pedia Detail Outlet</Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <span>
                  {/* <a href="/profileclient" className="p-0 "> */}
                  <img
                    src="../../img/avatar.jpg"
                    alt=""
                    style={{
                      width: 40,
                      height: 40,
                      objectFit: "cover",
                      borderRadius: "50%",
                      marginLeft: "24px",
                    }}
                  />
                  {/* </a> */}
                </span>
                <ul>
                  <li >
                    <Link to="/pelamar/profil">Profil</Link>
                  </li>
                  <li>
                    <Link to="/pelamar/upload-dokumen">Dokumen</Link>
                  </li>
                  <li>
                    <Link to="/login">Keluar</Link>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a href="/" class="logout nav-link text-danger"><i class="fa fa-fw fa-sign-out text-danger" ></i>Keluar</a>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;


