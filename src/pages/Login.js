import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { LOGIN_API } from "../constants/urls";
import { login } from "../utils/Auth";

export default function Login() {
  // const { last_path } = props;
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  // const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };


  const onLogin = () => {
    // setLoading(true);

    axios
      .post(LOGIN_API, {
        email: input.email,
        password: input.password
      })
      .then(res => {
        login(res.data.token);
        console.log("res:", res)
        // setLoading(false);

        if (res.status === 200) {
          history.push("/")
        }
      })
    // .catch(() => {
    //   setLoading(false);
    // })
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
      <div id="preloader">
        <div data-loader="circle-side" />
      </div>
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
            {/* <div className="access_social">
              <a href="#0" className="social_bt facebook">
                Login with Facebook
              </a>
              <a href="#0" className="social_bt google">
                Login with Google
              </a>
              <a href="#0" className="social_bt linkedin">
                Login with Linkedin
              </a>
            </div>
            <div className="divider">
              <span>Or</span>
            </div> */}
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
                  Remember me
                  <input type="checkbox" />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="float-right mt-1">
                <a id="forgot" href="/#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button href="/#" className="btn_1 rounded full-width">
              Login to PrakInd
            </button>
            <div className="text-center add_top_10">
              New to Prakind ?{" "}
              <strong>
                <a href="register.html">Sign up!</a>
              </strong>
            </div>
          </form>
          <div className="copy">© 2022 PrakInd</div>
        </aside>
      </div>
    </div>
  );
}