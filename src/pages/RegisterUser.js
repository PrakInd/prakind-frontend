import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";
import { REGISTER_API } from "../constants/urls";
import { Message } from "@material-ui/icons";

const RegisterUser = () => {
  const [role, setRole] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordConfirmation, setPasswordConfirmation] = React.useState("");
  const [errorName, setErrorName] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [
    errorPasswordConfirmation,
    setErrorPasswordConfirmation,
  ] = React.useState("");
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (name) {
      setErrorName("");
    }
    if (email) {
      setErrorEmail("");
    }
    if (password) {
      setErrorPassword("");
    }
    if (passwordConfirmation) {
      setErrorPasswordConfirmation("");
    }
    return () => {};
  }, [name, email, password, passwordConfirmation]);

  const _onSubmit = () => {
    setLoading(true);
    axios
      .post(REGISTER_API, {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
        role: "User",
      })
      .then((res) => {
        setUserLogin({
          token: res.data.access_token,
          email: res.data.user.email,
          role: res.data.user.role,
        });
        setIsLoggedIn(true);
        setLoading(false);
        window.location = "/";
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response.data) {
          setErrorName(err.response.data?.name ? err.response.data.name : "");
          setErrorEmail(
            err.response.data?.email ? err.response.data.email : ""
          );
          setErrorPassword(
            err.response.data?.password ? err.response.data.password : ""
          );
          setErrorPassword(
            err.response.data?.password ? err.response.data.password : ""
          );
          setErrorPasswordConfirmation(
            err.response.data?.password_confirmation
              ? err.response.data.password_confirmation
              : ""
          );
        }
        setLoading(false);
      });
  };

  return (
    <div id="login_bg">
      <nav id="menu" className="fake_menu" />
      <div id="preloader">
        <div data-loader="circle-side" />
      </div>
      {/* End Preload */}
      <div id="login">
        <aside>
          <figure>
            <a href="index.html">
              <img
                src="img/logo2.png"
                width={155}
                height={36}
                data-retina="true"
                alt
                className="logo_sticky"
              />
            </a>
          </figure>
          <form autoComplete="off">
            <div className="form-group">
              <label>Foto Profil</label>
              <input className="form-control" type="file" />
              <i className="ti-user" />
            </div>
            <div className="form-group">
              <label>Nama Anda</label>
              <input className="form-control" type="text" />
              <i className="ti-user" />
            </div>
            {/* <div className="form-group">
              <label>Your Last Name</label>
              <input className="form-control" type="text" />
              <i className="ti-user" />
            </div> */}
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" type="email" />
              <i className="icon_mail_alt" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input className="form-control" type="password" id="password1" />
              <i className="icon_lock_alt" />
            </div>
            <div className="form-group">
              <label>Konfirmasi Password</label>
              <input className="form-control" type="password" id="password2" />
              <i className="icon_lock_alt" />
            </div>
            <div id="pass-info" className="clearfix" />
            <a href="#0" className="btn_1 rounded full-width add_top_30">
              Daftar Sekarang!
            </a>
            <div className="text-center add_top_10">
              Sudah punya akun ?{" "}
              <strong>
                <a href="login.html">Datfar</a>
              </strong>
            </div>
          </form>
          <div className="copy">© 2022 PrakInd</div>
        </aside>
      </div>
      {/* /login */}
      {/* COMMON SCRIPTS */}
      {/* SPECIFIC SCRIPTS */}
    </div>
  );
}
