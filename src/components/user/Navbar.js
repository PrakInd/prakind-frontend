import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import Popup from "reactjs-popup";
import Dropdown from "./Dropdown";
import { Button } from "../button/Button";
import './Navbar.css'


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 500) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          <img src="img/logo2.png" width={150} height={36} alt="" className="logo_normal" />

        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}
          />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/pelamar/upload-dokumen' className='nav-links' onClick={closeMobileMenu}>
              Dokumen
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/pelamar/form-register' className='nav-links' onClick={closeMobileMenu}>
              Form
            </Link>
          </li>
          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='/pelamar/profil' className='nav-links' onClick={closeMobileMenu}>
              Profil <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>


        </ul>
        <div>
          <Button buttonStyle='btn--outline'><Link to="/login" style={{ color: "#000" }}>Sign Up</Link></Button>

          {/* {check local storage, kalo == login? => passing component; 
            else signIn} 
            
            {checkSignIn() == 'login' ? <Popup/> : <ProfileBtn/>}
            */}
        </div>
      </nav>
    </>
  )
}

export default Navbar;