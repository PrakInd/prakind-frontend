import React from "react";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";

const HomeUser = () => {
  return (
    <div>
      <Header />
      <div>
        <section className="hero_single version_2">
          <div className="wrapper">
            <div className="container">
              <h3>Praktik Industri</h3>
              <p>Temukan lowongan magang</p>
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
          </div>
        </section>
        <div className="bg_color_1">
          <div className="container margin_80_55">
            <div className="main_title_2">
              <span><em /></span>
              <h3>Sektor Bidang Lowongan</h3>
              <p>Pilih sektor bidang yang kamu banget.</p>
            </div>
            <div className="row">
              <div className="col-xl-2 col-lg-6 col-md-6">
                <a className="grid_item" href="#0">
                  <figure><img src="img/teknologi.jpeg" alt="" style={{ height: 120, width: 120 }} />
                  </figure>
                  <h6>Teknologi</h6>
                </a>
              </div>
              {/* /box_news */}
              <div className="col-xl-2 col-lg-6 col-md-6">
                <a className="grid_item" href="#0">
                  <figure><img src="img/health.png" alt="" style={{ height: 120, width: 120 }} />
                  </figure>
                  <h6>Kesehatan</h6>
                </a>
              </div>
              {/* /box_news */}
              <div className="col-xl-2 col-lg-6 col-md-6">
                <a className="grid_item" href="#0">
                  <figure><img src="img/news_home_3.jpg" alt />
                  </figure>
                  <h6>Jasa</h6>
                </a>
              </div>
              {/* /grid_item */}
              <div className="col-xl-2 col-lg-6 col-md-6">
                <a className="grid_item" href="#0">
                  <figure><img src="img/news_home_4.jpg" alt />
                  </figure>
                  <h6>Lainnya</h6>
                </a>
              </div>
              {/* /box_news */}
              {/* /grid_item */}
              <div className="col-xl-2 col-lg-6 col-md-6">
                <a className="grid_item" href="#0">
                  <figure><img src="img/news_home_4.jpg" alt />
                  </figure>
                  <h6>Lainnya</h6>
                </a>
              </div>
              {/* /box_news */}
              {/* /grid_item */}
              <div className="col-xl-2 col-lg-6 col-md-6">
                <a className="grid_item" href="#0">
                  <figure><img src="img/news_home_4.jpg" alt />
                  </figure>
                  <h6>Lainnya</h6>
                </a>
              </div>
              {/* /box_news */}
            </div>
          </div>
          {/* /container */}
        </div>
        {/* /bg_color_1 */}
      </div>
      <FooterUser />
    </div>
  )

}

export default HomeUser;