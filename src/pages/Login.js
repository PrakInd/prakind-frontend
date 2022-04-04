import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Button from '@mui/material/Button';
import { Link, useHistory } from "react-router-dom";
import { login } from "../utils/Auth";
import { LOGIN_API } from "../constants/urls";
import prakind_logo from "../assets/logo_orange2.svg"
import { setUserLogin, setRole, setUserId } from "../utils/Auth";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
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
        login(res.data.access_token);
        setUserLogin(res.data.user);
        setRole(res.data.user.role_id);
        setUserId(res.data.user.id);

        if (Cookies.get("ROLE") === "1") {
          history.push("/perusahaan");
        } else if (Cookies.get("ROLE") === "2") {
          history.push("/pelamar/profil");
        }
      })
      .catch(err => { console.log(err) })
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
    <div id="login_bg">
      <nav id="menu" className="fake_menu" />
      <div id="login">
        <aside>
          <figure>
            <a href="/#">
              <img
                src={prakind_logo}
                style={{ height: "3rem" }}
                data-retina="true"
                alt="logo"
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
                '&:hover': { backgroundColor: "#FFC300", color: "#3F4456" }
              }}
              variant="contained"
              onClick={e => validateLogin(e)}
            >
              Login ke PrakInd
            </Button>
            <div className="text-center add_top_10">
              Anda baru di Prakind ?{" "}
              <Link to="/register">
                <p sx={{ fontWeight: "600", display: "flex", fontColor: "#FC9400" }}>Daftar</p>
              </Link>
            </div>
          </form>
          <div className="copy">© 2022 PrakInd</div>
        </aside>
      </div>
    </div>
  );
}

export default Login;