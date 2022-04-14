import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { getToken } from "../utils/Auth";
import { REGISTER_API } from "../constants/urls";
import prakind_logo from "../assets/logo_orange2.svg"

const RegisterUser = () => {
  const [validation, setValidation] = useState([]);
  const [newUser, setNewUser] = useState({});
  const history = useHistory();

  const handleChange = e => {
    let { name, value } = e.target;  

    setNewUser({ ...newUser, [name]: value });
  };

  const onRegister = e => {
    e.preventDefault();

    axios
      .post(REGISTER_API, {
        role_id: newUser.role_id,
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        password_confirmation: newUser.password_confirmation
      }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => {
        console.log("response register:", res);
        history.push('/regist-perusahaan');
      })
      .catch(err => {
        console.log(err);
        setValidation(err.response.data);
      });
  };

  

  return (
    <div id="login_bg">
      <nav id="menu" className="fake_menu" />
      <div id="login">
        <aside>

          <figure>
            <Link to="/">
              <img
                src={prakind_logo}
                style={{ height: "3rem" }}
                data-retina="true"
                alt="logo"
                className="logo_sticky" />
            </Link>
          </figure>

          <form autoComplete="off" onSubmit={onRegister}>
            <div className="form-group">
              <label>Tipe User</label>
              <div 
                className="form-group"
                style={{ 
                  display: "flex",
                  alignItems: "center",
                  gap: "1em",
                }}
              >
                <div>
                  <input 
                    style={{ marginRight: "0.5em" }} 
                    type="radio" 
                    id="pelamar" 
                    name="role_id" 
                    value={2}
                    onChange={handleChange} 
                  />
                  <label htmlFor="pelamar">Pelamar</label>
                </div>
                <div>
                  <input 
                    style={{ marginRight: "0.5em" }} 
                    type="radio" 
                    id="perusahaan" 
                    name="role_id" 
                    value={1}
                    onChange={handleChange}  
                  />
                  <label htmlFor="perusahaan">Perusahaan</label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Nama</label>
              <input
                className="form-control"
                placeholder="Masukkan nama"
                type="text"
                name="name"
                onChange={handleChange} 
              />
              {validation.name && (
                <div className="alert alert-danger">
                  {validation.name[0]}
                </div>
              )}
              <i className="ti-user" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                className="form-control"
                placeholder="Masukkan email"
                type="email"
                name="email"
                onChange={handleChange} 
              />
              {validation.email && (
                <div className="alert alert-danger">
                  {validation.email[0]}
                </div>
              )}
              <i className="icon_mail_alt" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                className="form-control"
                placeholder="Masukkan password"
                type="password"
                name="password"
                onChange={handleChange} 
              />
              {validation.password && (
                <div className="alert alert-danger">
                  {validation.password[0]}
                </div>
              )}
              <i className="icon_lock_alt" />
            </div>
            <div className="form-group">
              <label>Konfirmasi Password</label>
              <input
                className="form-control"
                placeholder="Konfirmasi password"
                type="password"
                name="password_confirmation"
                onChange={handleChange} 
              />
              <i className="icon_lock_alt" />
            </div>
            
            <div id="pass-info" className="clearfix" />

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
                '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}
              }}
              variant="contained"
              type="submit"
            >
              Daftar Sekarang
            </Button>

            <div className="text-center add_top_10">
              Sudah punya akun ?{" "}
              <Link to="/login">
                <p sx={{fontWeight: "600", display: "flex", fontColor: "#FC9400"}}>Masuk</p>
              </Link>
            </div>

          </form>

          <div className="copy">© 2022 PrakInd</div>
        </aside>
      </div>
    </div>
  );
};

export default RegisterUser;