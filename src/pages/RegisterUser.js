import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
// import { Message } from "@material-ui/icons";
import { REGISTER_API } from "../constants/urls";
import prakind_logo from "../assets/logo_orange2.svg"
// import PrimaryButton from ".././components/button/PrimaryButton";

const RegisterUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [validation, setValidation] = useState([]);
  const [role, setRole] = useState(null);
  const history = useHistory();

  const registerHandler = e => {
    e.preventDefault();

    let formData = new FormData();
    
    formData.append('name', name);
    formData.append('role_id', parseInt(role));
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirmation', passwordConfirmation);

    // send data to server
    axios
      .post(REGISTER_API, formData)
      .then((res) => {
        console.log("response register:", res);
        history.push('/login');
      })
      .catch((error) => {
        setValidation(error.response.data);
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
          <div>
            {/* <PrimaryButton 
              style={{ 
                color: "#fff",  
                display: "flex", 
              }}
              onClick={() => { setRole(2); }}
            >
              Pelamar
            </PrimaryButton>

            <PrimaryButton 
              style={{ 
                color: "#fff",  
                 
              }}
              onClick={() => { setRole(1); }}
            >
              Admin
            </PrimaryButton> */}
          </div>
          <form autoComplete="off">
            <div className="form-group">
              <label>Tipe User</label>
              <div 
                style={{ 
                  display: "flex",
                  gap: "1em", 
                  marginRight: "1em" 
                }}
              >
                <div>
                  <input type="radio" id="pelamar" value="2" onChange={(e) => setRole(e.target.value)} style={{ marginRight:"0.25rem" }}/>
                  <span>Pelamar</span>
                </div>
                <div>
                  <input type="radio" id="perusahaan" value="1" onChange={(e) => setRole(e.target.value)} style={{ marginRight:"0.25rem" }}/>
                  <span>Perusahaan</span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>Nama Anda</label>
              <input
                className="form-control"
                type="text"
                placeholder="Masukkan Nama Lengkap"
                onChange={(e) => setName(e.target.value)} />
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
                type="email"
                placeholder="Masukkan Alamat Email"
                onChange={(e) => setEmail(e.target.value)} />
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
                type="password"
                placeholder="Masukkan Password"
                onChange={(e) => setPassword(e.target.value)} />
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
                type="password"
                placeholder="Masukkan Konfirmasi Password"
                onChange={(e) => setPasswordConfirmation(e.target.value)} />
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
              onClick={registerHandler}
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