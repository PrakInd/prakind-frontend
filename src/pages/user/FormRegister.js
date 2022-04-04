import React, { useState, useEffect } from "react";
import axios from "axios";
import { USER_UPLOAD_IMAGE, ME_API } from "../../constants/urls";
import { InputBase, Divider, FormControl, InputLabel, Grid, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Link, Select, MenuItem, Button, Menu } from "@mui/material";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import { Col, Container, Row } from "react-grid-system";
import PrimaryButton from "../../components/button/PrimaryButton";
import SecondaryButton from "../../components/button/SecondaryButton";


const FormRegister = () => {
  // const classes = useStyles();
  return (
    <div>
      <Header />
      <div
        className="container-fluid"
        style={{ width: "50%", paddingTop: "7%" }}
      >
        <div className="box_general padding_bottom">
          <div className="header_box version_2">
            <h2>
              <i className="fa fa-user" />
              Profil Saya
            </h2>
          </div>
          <div className="row">
            <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap">
              <div className="col-lg-3 col-md-12 p-0">
                <div className="form-group">
                  <img
                    src="/../../img/avatar.jpg"
                    //src={image}
                    alt="profile-picture"
                    style={{
                      width: 144,
                      height: 144,
                      objectFit: "cover",
                      borderRadius: 8,
                      boxShadow: "0 0 0 1px #CED4DA",
                    }}
                  />
                </div>
              </div>
              <div className="col-md-9">
                <form>
                  <div className="row-md-12">
                    <input
                      type="file"
                      style={{ border: "none" }}
                      name="image"
                      id="image"
                      className="form-control p-0"
                    // onChange={handleImageChange}
                    />
                  </div>
                  <div className="row-md-12">
                    <label class="pt-0">Pilih file dengan ukuran maksimal 1MB</label>
                  </div>
                  <div className="row-md-12">
                    <PrimaryButton style={{ color: "#fff", fontWeight: "normal" }}>Unggah</PrimaryButton>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-12">
              <form>
                <div className="col-md-12 add_top_30">
                  <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <label>Nama Lengkap</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nama Lengkap"
                          name="name"
                          id="name"
                        // value={input.name}
                        />
                      </div>
                    </div>
                  </div>
                  {/* /row*/}
                  <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          id="email"
                        // value={input.email}
                        // onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  {/* /row*/}
                  <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <Container
                          size={8}
                          direction="vertical"
                          style={{ width: "100%" }}
                        >
                          <label>Jenis Kelamin</label>
                          <RadioGroup
                          // onChange={onChangeGender} value={gender}
                          >
                            <Row style={{ width: "100%", marginLeft: 20 }}>
                              <FormControlLabel value="lakilaki" control={<Radio />} label="Laki-laki" />
                              <FormControlLabel value="perempuan" control={<Radio />} label="Perempuan" />
                            </Row>
                          </RadioGroup>
                        </Container>
                      </div>
                    </div>
                  </div>
                  {/* /row*/}
                  <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <select
                          className="w-100 input-group-select"
                          style={{
                            height: "42px",
                            borderRadius: "3px",
                            padding: "10px",
                            borderColor: "#d2d8dd",
                          }}
                        >
                          <option defaultValue="">Pilih Asal Sekolah</option>
                          <option>Sekolah Kejuruan Menengah se-derajat</option>
                          <option>Universitas/Politeknik</option>
                          )
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* /row*/}
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div className="col-md-7 p-0">
                      <div className="form-group">
                        <label>Asal Sekolah</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Asal Sekolah/Institusi"
                          name="institution"
                          id="institution"
                        // value={input.name}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 p-0" style={{ marginLeft: 12 }}>
                      <div className="form-group">
                        <label>Semester</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Semester"
                          name="semester"
                          id="semester"
                        // value={input.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <label>IPK</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="IPK"
                          name="gpa"
                          id="gpa"
                        // value={input.name}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Curriculum Vitae</label>
                    <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap" style={{ border: "2px dotted" }}>
                      <div className="col-lg-3 col-md-12 p-0">
                      </div>
                      <div className="col-md-9">
                        <form style={{ margin: "10px" }}>
                          <div className="row-md-12">
                            <input
                              type="file"
                              style={{ border: "none" }}
                              name="image"
                              id="image"
                              className="form-control p-0"
                            // onChange={handleImageChange}
                            />
                          </div>
                          <div className="row-md-12">
                            Pilih file dengan ukuran maksimal 1MB
                          </div>
                        </form>
                      </div>
                      <PrimaryButton style={{ color: "#fff", margin: "auto", marginTop: 10, marginBottom: 10, fontWeight: "normal" }}>Unggah Dokumen</PrimaryButton>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Transkrip Nilai</label>
                    <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap" style={{ border: "2px dotted" }}>
                      <div className="col-lg-3 col-md-12 p-0">
                      </div>
                      <div className="col-md-9">
                        <form style={{ margin: "10px" }}>
                          <div className="row-md-12">
                            <input
                              type="file"
                              style={{ border: "none" }}
                              name="image"
                              id="image"
                              className="form-control p-0"
                            // onChange={handleImageChange}
                            />
                          </div>
                          <div className="row-md-12">
                            Pilih file dengan ukuran maksimal 1MB
                          </div>
                        </form>
                      </div>
                      <PrimaryButton style={{ color: "#fff", margin: "auto", marginTop: 10, marginBottom: 10, fontWeight: "normal" }}>Unggah Dokumen</PrimaryButton>
                    </div>
                  </div>

                  <div className="form-group">
                    <label>Portofolio</label>
                    <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap" style={{ border: "2px dotted" }}>
                      <div className="col-lg-3 col-md-12 p-0">
                      </div>
                      <div className="col-md-9">
                        <form style={{ margin: "10px" }}>
                          <div className="row-md-12">
                            <input
                              type="file"
                              style={{ border: "none" }}
                              name="image"
                              id="image"
                              className="form-control p-0"
                            // onChange={handleImageChange}
                            />
                          </div>
                          <div className="row-md-12">
                            Pilih file dengan ukuran maksimal 1MB
                          </div>
                        </form>
                      </div>
                      <PrimaryButton style={{ color: "#fff", margin: "auto", marginTop: 10, marginBottom: 10, fontWeight: "normal" }}>Unggah Dokumen</PrimaryButton>
                    </div>
                  </div>



                  <a href="/lowongan">
                    <SecondaryButton style={{ marginTop: 10, display: "flex", float: "right" }}>Lewati</SecondaryButton>
                  </a>
                  <a href="/lowongan">
                    <PrimaryButton style={{ color: "#fff", marginTop: 10, marginRight: 10, display: "flex", float: "right" }}>Simpan</PrimaryButton>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
        <p className="mb-0">
          {/* <Link
            to="/profileclient"
            className="btn_1-admin medium"
          >
            Simpan
          </Link> */}


        </p>
      </div>
      {/* /.container-fluid*/}
      <FooterUser />
    </div>
  );
}

export default FormRegister;