import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";
import { REGISTER_API } from "../constants/urls";

export default function RegisterUser() {
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidate, setpasswordValidate] = useState("");

  const [errEmail, setErrEmail] = useState(null);
  const [errPassword, setErrPassword] = useState(null);
  const [errPasswdVal, setErrPasswdVal] = useState(null);

  // const isAvailable = useSelector((state) => state.auth.isAvailable);
  const [checkLoad, setCheckLoad] = useState(false);

  // const dispatch = useDispatch();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    // dispatch(register(name, email, password, passwordValidate))
    //   .then(() => {
    //     Swal.fire({
    //       title: "Registered berhasil",
    //       text: "Cek alamat email Anda untuk verifikasi",
    //       icon: "sukses",
    //     });
    //     setName("");
    //     setEmail("");
    //     setPassword("");
    //     setPasswordValidate("");
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     Toast.fire({
    //       icon: "warning",
    //       title: "Data harus lengkap",
    //     });
    //     setLoading(false);
    //   });
  };

  useEffect(() => {
    if (email != "") {
      if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
        setErrEmail(null);
      } else {
        setErrEmail("Alamat email tidak valid");
      }
    }
  }, [email]);

  useEffect(() => {
    if (password != "") {
      if (password.length >= 8) {
        setErrPassword(null);
      } else {
        setErrPassword("Password minimal 8 karakter");
      }
    }
  }, [password]);

  useEffect(() => {
    if (passwordValidate == password) {
      setErrPasswdVal(null);
    } else {
      setErrPasswdVal("Password tidak sesuai");
    }
  }, [passwordValidate]);

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
              Register Now!
            </a>
            <div className="text-center add_top_10">
              Already have an acccount?{" "}
              <strong>
                <a href="login.html">Sign In</a>
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
