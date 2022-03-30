import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Filter from "../../components/Filter";
import PhoneIcon from '@mui/icons-material/Phone';
import ShareIcon from '@mui/icons-material/Share';
import { SHOW_VACANCY } from "../../constants/urls";
import { BookmarkBorder } from "@material-ui/icons";
import FooterUser from "../../components/FooterUser";
import SecondaryButton from "../../components/button/SecondaryButton";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Button, Menu, MenuItem, Divider } from "@mui/material";
import Header from "../../components/Header";

const DetailVacancy = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState({});
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [company, setCompany] = useState({
    address: "",
    description: "",
    logo: "",
    name: "",
    number_of_employee: "",
    phone: "",
    website: "",
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios
      .get(SHOW_VACANCY(id))
      .then(res => {
        console.log(res)
        setVacancy(res.data.data);
        setCompany(res.data.data.company);
      })
      .catch(err => console.log(err))

    return () => {
      setVacancy({});
      setCompany({});
    }
  }, [id]);

  return (
    <>
      <Header />
      <section className="hero_in tours">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              {vacancy.name}
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
                  <div style={{ marginBottom: '10px', marginTop: '-40px' }}>
                    <h2>{vacancy.name}</h2>
                    {/* <h6>{vacancy.company.name}</h6> */}
                    <h6>{company.name}</h6>
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
                    <div className="col-lg-6" style={{ display: "flex", marginLeft: 0, justifyContent: "space-between" }}>
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        style={{
                          backgroundColor: '#FC9400',
                          borderRadius: 7,
                          width: "30%",
                          fontSize: '16px',
                          textTransform: "capitalize",
                          fontWeight: "bolder",
                          color: "#fff",
                          '&:hover': {
                            backgroundColor: '#FFC300',
                            color: '#191E24',
                          },
                          '&:disabled': {
                            backgroundColor: '#FFC300',
                          },
                        }}
                      >
                        Daftar
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem defaultValue="" style={{ fontWeight: "bold" }}>Kategori Magang</MenuItem>
                        <Divider />
                        <a href="/pelamar/profil-review"><MenuItem onClick={handleClose}>Individu</MenuItem></a>
                        <a href="/pelamar/generate-token"><MenuItem onClick={handleClose}>Kelompok</MenuItem></a>
                      </Menu>
                      <SecondaryButton>
                        <ShareIcon fontSize="small" /> &ensp;Bagikan
                      </SecondaryButton>
                      {/* <SecondaryButton>
                        <BookmarkBorder fontSize="small" /> &ensp;Simpan
                      </SecondaryButton> */}
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
                  </div>



                  {/* /row */}
                  <hr />
                  <h3>Lowongan magang lainnya</h3>
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
                      {/* /row */}
                    </div>
                  </div>
                  {/* {


lue, index) => a {
                      if index 2 == 0 % dreturn(
                        <div id="instagram-feed-hotel" className="clearfix" style={{ b backgroundColor: changeColor(index),order: '1px solid #f1f1f1', paddingTop: '20px' }} >
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
                    )v >

                    */}
                </section>

                {/* /section */}
                <hr />
              </div>
              {/* /col */}
              < hr />
              {/* /col */}
              <aside className="col-lg-4">
                <div className="box_detail booking">
                  <div className="price">
                    <span>Profile Perusahaan</span>
                  </div>
                  <div>
                    <img src={company.logo} alt="my-img" height={120} width={120} style={{ marginBottom: '10px' }} />
                    {/* <h5>PT. Otak Kanan</h5> */}
                    <h5>{company.name}</h5>
                    <p style={{ marginTop: '-10px', marginBottom: '-10px' }}>{company.description}</p>
                    <hr />
                  </div>
                  <div style={{ marginTop: '-10px' }}>
                    <div style={{ marginBottom: '-10px' }}>
                      <span>Ukuran Perusahaan</span>
                      <p><b>{company.number_of_employee}</b></p>
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
        {/* {dialog} */}
      </div>
      <FooterUser />
    </>
  )
}
export default DetailVacancy;