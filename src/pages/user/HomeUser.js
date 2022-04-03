import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import FooterUser from "../../components/FooterUser";
import PrimaryButton from "../../components/button/PrimaryButton";
import { SearchContext } from "../../components/SearchContext/SearchContext";
import { Link } from "react-router-dom";

const HomeUser = () => {
  const history = useHistory();
  const [search, setSearch] = useContext(SearchContext);

  const onSubmit = e => {
    e.preventDefault();
    history.push("/lowongan");
  };

  return (
    <>
      <Header />
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
                        onChange={e => setSearch({ ...search, position: e.target.value })}
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
                        onChange={e => setSearch({ ...search, company: e.target.value })}
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
                        onChange={e => setSearch({ ...search, location: e.target.value })}
                      />
                      <i className="icon_pin_alt" />
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <button type="submit">Cari</button>
                  </div>
                </div>
              </form>

            </div>

            <Link to="/lowongan">
              <PrimaryButton 
                style={{
                  width: "15%",
                  position: "relative",
                  top: 100,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Lihat Info Magang
              </PrimaryButton>
            </Link>

          </div>
        </section>
      </div>

      <FooterUser />
    </>
  )
}

export default HomeUser;