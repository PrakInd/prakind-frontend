import React, { useState } from "react";
import axios from "axios";
import { login } from "../utils/Auth";
import { LOGIN_API } from "../constants/urls";
import Backdrop from '@mui/material/Backdrop';
import { api } from "../utils/Api";
import Button from '@mui/material/Button';
import { ME_API } from "../constants/urls";
import { getToken, setUserLogin, setRole } from "../utils/Auth";
import { Link, useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export default function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [user, setUser] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const onLogin = () => {
    axios
      .post(LOGIN_API, {
        email: input.email,
        password: input.password
      })
      .then(res => {
        // setUserLogin({
        //   token: res.data.access_token,
        //   name: res.data.user.name,
        //   role_id: res.data.user.role_id
        // });
        login(res.data.access_token);
        setUser(res.data.user);
        setRole(res.data.user.role_id);

        if (Cookies.get("ROLE") === "1") {
          history.push("/perusahaan");
        } else if (Cookies.get("ROLE") === "2") {
          history.push("/pelamar/profil");
        }

        // history.push("/");
      })
      .catch(err => {console.log(err)})
  };

  const validateLogin = e => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    if (email === "" && pass === "") {
      alert("Email dan password kosong");
    } else if (email === "") {
      alert("Email tidak boleh kosong");
    } else if (pass === "") {
      alert("Password tidak boleh kosong");
    } else {
      onLogin();
    }
  };

  const enterPressed = e => {
    if (e.key === 'Enter') {
      validateLogin(e)
    }
  }
  
  return (
    <div>
      <nav id="menu" className="fake_menu" />
      {/* <div id="preloader">
        <div data-loader="circle-side" />
      </div> */}
      <div id="login">
        <aside>
          <figure>
            <a href="/#">
              <img
                src="img/logo2.png"
                width={155}
                height={36}
                data-retina="true"
                alt="img"
                className="logo_sticky"
              />
            </a>
          </figure>
          <form onSubmit={validateLogin}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                value={input.email}
                onChange={handleChange}
              />
              <i className="icon_mail_alt" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={input.password}
                onChange={handleChange}
                onKeyPress={enterPressed}
              />
              <i className="icon_lock_alt" />
            </div>
            <div className="clearfix add_bottom_30">
              <div className="checkboxes float-left">
                <label className="container_check">
                  Ingat saya
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              {/* <div className="float-right mt-1">
                <a id="forgot" href="/#">
                  Lupa Password?
                </a>
              </div> */}
            </div>
            <Button 
              sx={{
                marginLeft: "auto", 
                marginRight: "auto", 
                width: "100%",  
                textAlign: "center", 
                borderRadius: "25px", 
                display: "block", 
                marginBottom: "5px", 
                backgroundColor: "#FC9400", 
                '&:hover':{ backgroundColor: "#0054a" }}} 
              variant="contained"
              onClick={e => validateLogin(e)} 
            >
              Login ke PrakInd
            </Button>
            
            {/* <button href="/#" className="btn_1 rounded full-width">
              Login ke PrakInd
            </button> */}
            <div className="text-center add_top_10">
              Anda Baru di Prakind ?{" "}
              <Link to="/registerUser">
                <p sx={{fontWeight: "600", display: "flex", fontColor: "#FC9400"}}>Daftar</p>
              </Link>
              {/* <strong>
                <a href="register.html">Sign up!</a>
              </strong> */}
            </div>
          </form>
          <div className="copy">© 2022 PrakInd</div>
        </aside>
      </div>
    </div>
  );
}