import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import UserHeader from "./UserHeader";
import { NavLink } from "react-router-dom";
import { MenuItem, Menu, Button, Fade } from "@mui/material";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <ul className="navbar-nav ml-auto">
              <li><span><NavLink to={"/login"}>Masuk</NavLink></span>
              </li>
              <li><span><a href="#0">Daftar</a></span>
              </li>
              {/* <li><span><NavLink to={"/form-register"}>Akun Saya</NavLink></span></li> */}
              <li>
                <span
                  aria-controls={open ? 'fade-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                >
                  Akun Saya
                </span>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}><NavLink to={"/form-register"}>Profil</NavLink></MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to={"/form-register"}>Dokumen</NavLink></MenuItem>
                  <MenuItem onClick={handleClose}><NavLink to={"/form-register"}>Item Tersimpan</NavLink></MenuItem>

                </Menu>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ color: "#fff" }}>
                  <span>Akun</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                  <a className="dropdown-item" href="#">
                    <span className="text-success">
                      <strong>
                        <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
                    </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <span className="text-danger">
                      <strong>
                        <i className="fa fa-long-arrow-down fa-fw" />Status Update</strong>
                    </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">
                    <span className="text-success">
                      <strong>
                        <i className="fa fa-long-arrow-up fa-fw" />Status Update</strong>
                    </span>
                    <span className="small float-right text-muted">11:21 AM</span>
                    <div className="dropdown-message small">This is an automated server response message. All systems are online.</div>
                  </a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item small" href="#">View all alerts</a>
                </div>
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