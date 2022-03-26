import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Filter from "../../components/Filter";
import PhoneIcon from '@mui/icons-material/Phone';
import ShareIcon from '@mui/icons-material/Share';
import Navbar from "../../components/user/Navbar";
import { SHOW_VACANCY } from "../../constants/urls";
import { BookmarkBorder } from "@material-ui/icons";
import FooterUser from "../../components/FooterUser";
import PrimaryButton from "../../components/button/PrimaryButton";
import SecondaryButton from "../../components/button/SecondaryButton";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import { Dialog, FormControl, InputLabel, Select, DialogTitle, DialogActions, DialogContent, MenuItem } from "@mui/material";

const DetailVacancy = () => {
  const { id } = useParams();
  const [vacancy, setVacancy] = useState({});
  const [company, setCompany] = useState({
    address: "",
    description: "",
    logo: "",
    name: "",
    number_of_employee: "",
    phone: "",
    website: "",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

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

  // const changeColor = (index) => {
  //   if index % 2 == 0
  //     return 'white'

  //   return 'gray'
  // }

  const dialog = (
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Kategori Magang</DialogTitle>
      <DialogContent>
        {/* <Button
          id="fade-button"
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickOpen}
        >
          Pilih Kategori
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Individu</MenuItem>
          <MenuItem onClick={handleClose}>Kelompok</MenuItem>
        </Menu> */}

        <FormControl style={{ width: '150px', marginTop: 10 }} >
          <InputLabel>
            Pilih Kategori
          </InputLabel>
          <Select>
            <MenuItem>Individu</MenuItem>
            <MenuItem>Kelompok</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )


  return (
    <>
      <Navbar />
      <Filter />
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
                      <PrimaryButton style={{ width: '30%' }} onClick={handleClickOpen}>
                        {/* <NavLink to="/daftar-magang"><span style={{ color: "#000" }}>Daftar</span></NavLink> */}
                        Daftar
                      </PrimaryButton>
                      <SecondaryButton>
                        <ShareIcon fontSize="small" /> &ensp;Bagikan
                      </SecondaryButton>
                      <SecondaryButton>
                        <BookmarkBorder fontSize="small" /> &ensp;Simpan
                      </SecondaryButton>
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
                          <img src="img/gallery/hotel_list_2.jpg" className="img-fluid" alt="my-img" />
                        </div>
                        <div className="col-md-8">
                          <h4>Double Room</h4>
                          <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate
                            pertinacia eum at.</p>
                          <ul className="hotel_facilities">
                            <li><img src="img/hotel_facilites_icon_3.svg" alt="my-img" />Double Bed</li>
                            <li><img src="img/hotel_facilites_icon_4.svg" alt="my-img" />Free Wifi</li>
                            <li><img src="img/hotel_facilites_icon_6.svg" alt="my-img" />Bathtub</li>
                            <li><img src="img/hotel_facilites_icon_7.svg" alt="my-img" />Air Condition</li>
                            <li><img src="img/hotel_facilites_icon_8.svg" alt="my-img" />Hairdryer</li>
                          </ul>
                        </div>
                      </div>
                      {/* /row */}
                    </div>
                    {/* /rom_type */}
                    <div className="room_type last">
                      <div className="row">
                        <div className="col-md-4">
                          <img src="img/gallery/hotel_list_3.jpg" className="img-fluid" alt="my-img" />
                        </div>
                        <div className="col-md-8">
                          <h4>Suite Room</h4>
                          <p>Sit an meis aliquam, cetero inermis vel ut. An sit illum euismod facilisis, tamquam vulputate
                            pertinacia eum at.</p>
                          <ul className="hotel_facilities">
                            <li><img src="img/hotel_facilites_icon_3.svg" alt="my-img" />King size Bed</li>
                            <li><img src="img/hotel_facilites_icon_4.svg" alt="my-img" />Free Wifi</li>
                            <li><img src="img/hotel_facilites_icon_6.svg" alt="my-img" />Bathtub</li>
                            <li><img src="img/hotel_facilites_icon_7.svg" alt="my-img" />Air Condition</li>
                            <li><img src="img/hotel_facilites_icon_9.svg" alt="my-img" />Swimming pool</li>
                            <li><img src="img/hotel_facilites_icon_3.svg" alt="my-img" />Hairdryer</li>
                          </ul>
                        </div>
                      </div>
                      {/* /row */}
                    </div>
                    {/* /rom_type */}
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
                    <img src="img/prakind/laptop.jpeg" alt="my-img" height={120} width={120} style={{ marginBottom: '10px' }} />
                    {/* <h5>PT. Otak Kanan</h5> */}
                    <h5>{company.name}</h5>
                    <p style={{ marginTop: '-10px', marginBottom: '-10px' }}>{company.description}</p>
                    <hr />
                  </div>
                  <div style={{ marginTop: '-10px' }}>
                    <div style={{ marginBottom: '-10px' }}>
                      <span>Ukuran Perusahaan</span>
                      <p><b>100</b></p>
                    </div>
                    <div style={{ marginBottom: '-10px' }}>
                      <span>Alamat Kantor</span>
                      <p><b>Surabaya</b></p>
                    </div>
                    <hr />
                  </div>
                  <div>
                    <LanguageOutlinedIcon />
                    <a href="https://otakkanan.co.id/id/" style={{ color: "#000000" }}>&ensp;www.otakkanan.co.id</a>
                    <br />
                    <PhoneIcon /> <font style={{ color: "#000000" }}>&ensp;087750</font>
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
        {dialog}
      </div>
      <FooterUser />
    </>
  )


}

export default DetailVacancy;