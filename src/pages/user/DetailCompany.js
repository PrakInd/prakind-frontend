import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Filter from "../../components/Filter";
import { SHOW_COMPANY } from "../../constants/urls";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header"

const DetailCompany = () => {
  const { id } = useParams();
  const [company, setCompany] = useState({});

  useEffect(() => {
    axios
      .get(SHOW_COMPANY(id))
      .then(res => {
        setCompany(res.data.data);
      })
      .catch(err => console.log(err))

    return () => {
      setCompany({});
    }
  }, [id]);

  return (
    <div>
      <Header />
      <section className="hero_in tours">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              {company.name}
            </h1>
          </div>
        </div>
      </section>
      <div>
        <div className="bg_color_1">
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-8">
                <section id="description">
                  <div>
                    <h3>Tentang Perusahaan</h3>
                    <p>{company.description}</p>
                  </div>
                  <hr />
                  <h3>Lowongan Magang</h3>

                  <div id="instagram-feed-hotel" className="clearfix" style={{ border: '1px solid #f1f1f1', paddingTop: '20px' }}>
                    <div className="room_type first">
                      <div className="row">
                        <div className="col-lg-4">
                          <ul>
                            <li><h4>Frontend</h4></li>
                            <p>Periode: 28 Jan - 28 May</p>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <ul>
                            <li>di Kota Surabaya</li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <ul>
                            <li>Kerja dari Rumah</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="room_type gray">
                      <div className="row">
                        <div className="col-lg-4">
                          <ul>
                            <li><h4>Frontend</h4></li>
                            <p>Periode: 28 Jan - 28 May</p>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <ul>
                            <li>di Kota Surabaya</li>
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <ul>
                            <li>Kerja dari Rumah</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                  </div>
                </section>
                <hr />
              </div>

              <aside className="col-lg-4">
                <div className="box_detail booking">
                  <div className="price">
                    <span>Profile Perusahaan</span>
                  </div>
                  <div>
                    <img src={company.logo} alt="my-img" height={120} width={120} style={{ marginBottom: '10px' }} />
                    <h5>{company.name}</h5>
                    <p style={{ marginTop: '-10px', marginBottom: '-10px' }}>Creative and Innovative Company</p>
                    <hr />
                  </div>
                  <div style={{ marginTop: '-10px' }}>
                    <div style={{ marginBottom: '-10px' }}>
                      <span>Ukuran Perusahaan</span>
                      <p><b>{company.number_of_employee} pekerja</b></p>
                    </div>
                    <div style={{ marginBottom: '-10px' }}>
                      <span>Alamat Kantor</span>
                      <p><b>{company.address}</b></p>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <LanguageOutlinedIcon />
                    <a href="https://otakkanan.co.id/id/" style={{ color: "#000000" }}>&ensp;{company.website}</a>
                    <br />
                    <PhoneIcon /> <font style={{ color: "#000000" }}>&ensp;{company.phone}</font>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <FooterUser />
    </div>
  )
}

export default DetailCompany;