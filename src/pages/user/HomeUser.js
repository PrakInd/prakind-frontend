import React, { useState } from "react";
import { 
  useHistory, 
  // Link 
} from "react-router-dom";
// import Header from "../../components/Header";
import Navbar from "../../components/user/Navbar";
import FooterUser from "../../components/FooterUser";
// import PrimaryButton from "../../components/button/PrimaryButton";

const HomeUser = () => {
  const history = useHistory();
  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    history.push({
      pathname: "/lowongan",
      state: {
        position: position,
        company: company,
        location: location,
      }
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <section className="hero_single version_2">
          <div className="wrapper">
            <h3>Praktik Industri</h3>
            <p>Temukan lowongan magang</p>
            <div className="container">

              <form onSubmit={onSubmit}>
                <div className="row no-gutters custom-search-input-2">
                  <div className="col-lg-4">
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Cari posisi"
                        onChange={e => setPosition(e.target.value)}
                      />
                      <i className="icon_search" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Cari perusahaan"
                        onChange={e => setCompany(e.target.value)}
                      />
                      <i className="icon_building" />
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="form-group">
                      <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Cari lokasi"
                        onChange={e => setLocation(e.target.value)}
                      />
                      <i className="icon_pin_alt" />
                    </div>
                  </div>
                  {/* <div className="col-lg-2">
                    <input type="submit" className="btn_search" defaultValue="Cari" />
                  </div> */}
                  <div className="col-lg-2">
                    <button type="submit">Cari</button>
                  </div>
                </div>
              </form>
              
            </div>

            {/* <Link className="grid_item" to="/lowongan">
              <PrimaryButton style={{ width: "15%", marginLeft: "auto", marginRight: "auto", marginTop: "18px"}}>Lihat Info Magang
              </PrimaryButton>
            </Link> */}

          </div>
        </section>
      </div>

      <FooterUser />
    </>
  )
}

export default HomeUser;