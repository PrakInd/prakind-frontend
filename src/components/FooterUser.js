import React from "react";
import { Box } from "@mui/system";
import prakind_logo from "../assets/logo_orange2.svg";

const FooterUser = () => {
  const date = new Date();
  let year = date.getFullYear();

  return (
    <Box sx={{ background: "#2D3246" }}>
      <footer 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
          padding: "2em"
        }}>
          <div 
            className="row" 
            style={{ 
              display: "flex", 
              justifyContent: "space-between" 
            }}
          >
            <div className="col-lg-5 col-md-12 p-r-5">
              <p>
                <img src={prakind_logo} style={{ height: "2rem" }} alt="logo" />
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
          <span style={{ marginTop: "1.5em" }}>@{ year } PrakInd</span>

      </footer>
    </Box>
  );
}

export default FooterUser;