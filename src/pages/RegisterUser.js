import React from "react";

export default function RegisterUser() {
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
              <label>Your Name</label>
              <input className="form-control" type="text" />
              <i className="ti-user" />
            </div>
            <div className="form-group">
              <label>Your Last Name</label>
              <input className="form-control" type="text" />
              <i className="ti-user" />
            </div>
            <div className="form-group">
              <label>Your Email</label>
              <input className="form-control" type="email" />
              <i className="icon_mail_alt" />
            </div>
            <div className="form-group">
              <label>Your password</label>
              <input className="form-control" type="password" id="password1" />
              <i className="icon_lock_alt" />
            </div>
            <div className="form-group">
              <label>Confirm password</label>
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
          <div className="copy">© 2018 Panagea</div>
        </aside>
      </div>
      {/* /login */}
      {/* COMMON SCRIPTS */}
      {/* SPECIFIC SCRIPTS */}
    </div>
  );
}
