import React from "react";

export default function Login() {
  return (
    <div>
      <nav id="menu" className="fake_menu" />
      <div id="preloader">
        <div data-loader="circle-side" />
      </div>
      {/* End Preload */}
      <div id="login">
        <aside>
          <figure>
            <a href="/">
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
          <form>
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
                defaultValue
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
                <a id="forgot" href="javascript:void(0);">
                  Forgot Password?
                </a>
              </div>
            </div>
            <a href="/" className="btn_1 rounded full-width">
              Login to PrakInd
            </a>
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
      {/* /login */}
      {/* COMMON SCRIPTS */}
    </div>
  );
}
