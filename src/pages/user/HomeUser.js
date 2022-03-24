import React from "react";
import FooterUser from "../../components/FooterUser";
// import Header from "../../components/Header";
import Navbar from "../../components/user/Navbar";
import { Link } from "react-router-dom";
import PrimaryButton from "../../components/button/PrimaryButton";

const HomeUser = () => {
  return (
    <div style={{ marginTop: 0 }}>
      <Navbar />
      <div>
        <section className="hero_single version_2">
          <div className="wrapper">
            <h3>Praktik Industri</h3>
            <p>Temukan lowongan magang</p>
            <div className="container">
              <form>
                <div className="row no-gutters custom-search-input-2">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Cari posisi" />
                      <i className="icon_search" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Cari perusahaan" />
                      <i className="icon_building" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input className="form-control" type="text" placeholder="Cari lokasi" />
                      <i className="icon_pin_alt" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <input type="submit" className="btn_search" defaultValue="Cari" />
                  </div>
                </div>
                {/* /row */}
              </form>
            </div>
            <Link className="grid_item" to="/lowongan">
              <PrimaryButton style={{ width: "15%", marginLeft: "auto", marginRight: "auto", marginTop: "18px"}}>Lihat Info Magang
              </PrimaryButton>
            </Link>
          </div>
        </section>
      </div>
      <FooterUser />
    </div>
  )
}

export default HomeUser;