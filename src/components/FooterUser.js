import React from "react";

const FooterUser = () => {
  return (
    <footer>
      <div className="container margin_60_35">
        <div className="row">
          <div className="col-lg-5 col-md-12 p-r-5">
            <p>
              <img src="../../img/logo2.png" width={160} height={50} alt="" />
            </p>
            <p className="ml-1">
              Praktik Industri atau PrakInd merupakan portal magang yang diperuntukkan untuk siswa/i ataupun
              mahasiswa/i.
            </p>
            <hr />
            Portal ini di support oleh PT OTAK KANAN - INDONESIA.
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 color="#ffffff" >Hubungi Kami di</h5>
            <ul className="contacts">
              <li>
                <a href="tel://61280932400">
                  <i className="ti-mobile" /> + 61 23 8093 3400
                </a>
              </li>
              <li>
                <a href="mailto:info@Panagea.com">
                  <i className="ti-email" /> info@otakkanan.co.id
                </a>
              </li>
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
                <li><a href="#0"><i className="ti-instagram" /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-lg-6">
            <ul id="additional_links">
              <li>
                <span>@ 2022 PrakInd</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterUser;


