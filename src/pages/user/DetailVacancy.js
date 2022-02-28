import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import FooterUser from "../../components/FooterUser";
import Filter from "../../components/Filter";
import axios from "axios";
import { SHOW_VACANCY } from "../../constants/urls";
import { useParams } from "react-router-dom";

const DetailVacancy = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState({});

  useEffect(() => {
    axios
      .get(SHOW_VACANCY(id))
      .then(res => {
        setVacancy(res.data.data);
      })
      .catch(err => console.log(err))

    return () => {
      setVacancy({});
    }
  }, []);

  return (
    <div>
      <Header />
      <Filter />
      <div>
        <div className="bg_color_1">
          <div className="container margin_60_35">
            <div className="row">
              <div className="col-lg-8">
                <section id="description">
                  <div style={{ marginBottom: '10px', marginTop: '-40px' }}>
                    <h2>{vacancy.name}</h2>
                    <h6>PT Otak Kanan</h6>
                    <h6>{vacancy.location}</h6>
                  </div>
                  <hr />
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ marginBottom: '-20px' }}>
                      <span style={{ color: '#bcbcbc' }}>Periode Kegiatan</span>
                      <p><b>{vacancy.period_start} - {vacancy.period_end}</b></p>
                    </div>
                    <div style={{ marginBottom: '-20px' }}>
                      <span style={{ color: '#bcbcbc' }}>Kegiatan Magang</span>
                      <p><b>{vacancy.type}</b></p>
                    </div>
                    <div>
                      <span style={{ color: '#bcbcbc' }}>Uang Saku</span>
                      <p><b>{vacancy.paid}</b></p>
                    </div>
                  </div>
                  <hr />
                  <div>
                    <h4>Deskripsi Kegiatan</h4>
                    <p>{vacancy.description}</p>
                  </div>
                  <hr />
                  <div>
                    <h4>Kriteria Peserta</h4>
                    <p style={{ marginBottom: 0 }}>{vacancy.requirements}</p>
                    <div className="col-lg-12">
                      <ul className="bullets">
                        <li>Mampu mengoperasikan software editing dan tools seperti Figma,
                          Adobe XD, Adobe Photoshop dan Adobe illustrator</li>
                        <li>Memiliki pemahaman behavior design untuk Android dan iOS</li>
                        <li>Mampu membuat desain prototype, Low fidelity dan High fidelity</li>
                        <li>Memiliki portofolio dari hasil desain eksplorasi</li>
                      </ul>
                    </div>
                  </div>

                  {/* /row */}
                  <hr />
                  <h3>Lowongan magang lainnya</h3>
                  <div id="instagram-feed-hotel" className="clearfix" style={{ border: '1px solid #f1f1f1', paddingTop: '20px' }}>
                    <div className="room_type first">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="row">
                            <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                              <li><h4>Frontend</h4></li>
                              <li>
                                <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate
                                  pertinacia eum at.</p></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* /row */}
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
                    <h5>PT Otak Kanan</h5>
                    <p style={{ marginTop: '-10px', marginBottom: '-10px' }}>Creative and Innovative Company</p>
                    <hr />
                  </div>
                  <div style={{ marginTop: '-10px' }}>
                    <div style={{ marginBottom: '-10px' }}>
                      <span>Ukuran Perusahaan</span>
                      <p><b>100 pekerja</b></p>
                    </div>
                    <div style={{ marginBottom: '-10px' }}>
                      <span>Kantor Pusat</span>
                      <p><b>Kota Surabaya</b></p>
                    </div>
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

export default DetailVacancy;