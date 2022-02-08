import React from "react";
import GoTop from "./GoTop";

const FooterUser = () => {
  return (
    <footer>
      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-5 col-md-12 p-r-5">
            <p><img src="img/logo2.png" width={150} height={36} alt /></p>
            <p>Praktik Industri atau PrakInd merupakan portal magang yang diperuntukkan untuk siswa/i ataupun
              mahasiswa/i.
            </p>
            <hr />
            Portal ini di support oleh PT OTAK KANAN - INDONESIA.
            <p><img src /></p>

          </div>
          <div className="col-lg-3 col-md-6 ml-lg-auto">
            <h5>Contact with Us</h5>
            <ul className="contacts">
              <li><a href="tel://61280932400"><i className="ti-mobile" /> +62 31 8286155</a></li>
              <li><a href="mailto:info@Panagea.com"><i className="ti-email" /> info@otakkanan.co.id</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="follow_us">
              <h5>Follow Us</h5>
              <ul>
                <li></li>
                <li><a href="#0"><i className="ti-facebook" /></a></li>
                <li><a href="#0"><i className="ti-twitter-alt" /></a></li>
                <li><a href="#0"><i className="ti-google" /></a></li>
                <li><a href="#0"><i className="ti-pinterest" /></a></li>
                <li><a href="#0"><i className="ti-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        {/*/row*/}
        <hr />
        <div className="row">
          <div className="col-lg-8">
            <ul id="additional_links">
              <li><a href="#0">Terms and conditions</a></li>
              <li><a href="#0">Privacy</a></li>
              <li><span>© 2022 Praktik Industri</span></li>
            </ul>
          </div>
        </div>
      </div>
      <GoTop />

    </footer>
  );
}

export default FooterUser;