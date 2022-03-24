import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";
import { CREATE_COMPANY } from "../constants/urls";

const RegisterPerusahaan = () => {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [website, setWebsite] = React.useState("");
  const [mountEmp, setMount] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [errorName, setErrorName] = React.useState("");
  const [errorAddress, setErrorAddress] = React.useState("");
  const [errorPhone, setErrorPhone] = React.useState("");
  const [errorWebsite, setErrorWebsite] = React.useState("");
  const [errorMountemp, setErrorMount] = React.useState("");
  const [errorDesc, setErrorDesc ] = React.useState("");
  
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (name) {
      setErrorName("");
    }
    if (address) {
      setErrorAddress("");
    }
    if (phone) {
      setErrorPhone("");
    }
    if (website) {
      setErrorWebsite("");
    }
    if (mountEmp) {
      setErrorMount("");
    }
    if (desc) {
      setErrorDesc("");
    }
    return () => {};
  }, [name, address, phone, website, mail, mountEmp, desc]);

  const _onSubmit = () => {
    setLoading(true);
    axios
      .post(CREATE_COMPANY, {
        name: name,
        address: address,
        phone: phone,
        website: website,
        mountEmp: mountEmp,
        desc: desc,
        role: "Admin",
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
          setErrorPhone(
            err.response.data?.phone ? err.response.data.phone : ""
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
              <label>Nama Perusahaan</label>
              <input className="form-control" type="text" />
              <i className="ti-user" />
            </div>
            <div className="form-group">
              <label>Alamat Perusahaan</label>
              <input className="form-control" type="email" />
              <i className="icon_mail_alt" />
            </div>
            <div className="form-group">
              <label>Telepon</label>
              <input className="form-control" type="text" id="text" />
              <i className="icon_lock_alt" />
            </div>
            <div className="form-group">
              <label>Website</label>
              <input className="form-control" type="text" id="text" />
              <i className="icon_lock_alt" />
            </div>
            <div className="form-group">
              <label>Jumlah Karyawan</label>
              <input className="form-control" type="text" id="text" />
              <i className="icon_lock_alt" />
            </div>
            <div className="form-group">
              <label>Deskripsi</label>
              <input className="form-control" type="text" id="text" />
              <i className="icon_lock_alt" />
            </div>
            <div id="pass-info" className="clearfix" />
            <a href="#0" className="btn_1 rounded full-width add_top_30">
              Daftar Sekarang!
            </a>
            <div className="text-center add_top_10">
              Sudah punya akun ?{" "}
              <strong>
                <a href="login.html">Daftar</a>
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
