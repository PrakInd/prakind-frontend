import React, { useState, useEffect } from "react";
import FooterUser from "../../components/FooterUser";
import Filter from "../../components/Filter";
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import axios from "axios";
import { SHOW_COMPANY } from "../../constants/urls";
import { useParams } from "react-router-dom";
import Navbar from "../../components/user/Navbar";

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
  }, []);

  return (
    <div>
      <Navbar />
      <Filter />
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
                  {/* /row */}

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
                    {/* /rom_type */}
                    <div className="room_type gray">
                      <div className="row">
                        <div className="col-md-4">
                          <img src="img/gallery/hotel_list_2.jpg" className="img-fluid" alt />
                        </div>
                        <div className="col-md-8">
                          <h4>Double Room</h4>
                          <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate
                            pertinacia eum at.</p>
                          <ul className="hotel_facilities">
                            <li><img src="img/hotel_facilites_icon_3.svg" alt />Double Bed</li>
                            <li><img src="img/hotel_facilites_icon_4.svg" alt />Free Wifi</li>
                            <li><img src="img/hotel_facilites_icon_6.svg" alt />Bathtub</li>
                            <li><img src="img/hotel_facilites_icon_7.svg" alt />Air Condition</li>
                            <li><img src="img/hotel_facilites_icon_8.svg" alt />Hairdryer</li>
                          </ul>
                        </div>
                      </div>
                      {/* /row */}
                    </div>
                    {/* /rom_type */}
                    <div className="room_type last">
                      <div className="row">
                        <div className="col-md-4">
                          <img src="img/gallery/hotel_list_3.jpg" className="img-fluid" alt />
                        </div>
                        <div className="col-md-8">
                          <h4>Suite Room</h4>
                          <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate
                            pertinacia eum at.</p>
                          <ul className="hotel_facilities">
                            <li><img src="img/hotel_facilites_icon_3.svg" alt />King size Bed</li>
                            <li><img src="img/hotel_facilites_icon_4.svg" alt />Free Wifi</li>
                            <li><img src="img/hotel_facilites_icon_6.svg" alt />Bathtub</li>
                            <li><img src="img/hotel_facilites_icon_7.svg" alt />Air Condition</li>
                            <li><img src="img/hotel_facilites_icon_9.svg" alt />Swimming pool</li>
                            <li><img src="img/hotel_facilites_icon_3.svg" alt />Hairdryer</li>
                          </ul>
                        </div>
                      </div>
                      {/* /row */}
                    </div>
                    {/* /rom_type */}
                  </div>
                </section>
                {/* /section */}
                <hr />
              </div>
              {/* /col */}
              <aside className="col-lg-4">
                <div className="box_detail booking">
                  <div className="price">
                    <span>Profile Perusahaan</span>
                  </div>
                  <div>
                    <img src="img/prakind/laptop.jpeg" alt height={120} width={120} style={{ marginBottom: '10px' }} />
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
                    <a href="https://otakkanan.co.id/id/" target="_blank" style={{ color: "#000000" }}>&ensp;{company.website}</a>
                    <br />
                    <PhoneIcon /> <font style={{ color: "#000000" }}>&ensp;{company.phone}</font>
                  </div>

                  <div className="form-group clearfix">
                    <div className="custom-select-form">
                      <select className="wide">
                        <option>Room Type</option>
                        <option>Single Room</option>
                        <option>Double Room</option>
                        <option>Suite Room</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <ul className="share-buttons">
                  <li><a className="fb-share" href="#0"><i className="social_facebook" /> Share</a></li>
                  <li><a className="twitter-share" href="#0"><i className="social_twitter" /> Tweet</a></li>
                  <li><a className="gplus-share" href="#0"><i className="social_googleplus" /> Share</a></li>
                </ul> */}
              </aside>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /bg_color_1 */}
      </div>
      <FooterUser />
    </div>
  )
}

export default DetailCompany;