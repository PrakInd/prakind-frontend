import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import axios from "axios";
import { SHOW_COMPANY } from "../../constants/urls";

export default function ProfilPerusahaan() {
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
    .get(SHOW_COMPANY)
    .then(res => {
      setCompany(res.data.data)
    })
    .catch(err => console.log(err))
  })

  return (
    <div>
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              Profil Perusahaan
            </li>
          </ol>
          <div className="box_general padding_bottom">
            <div className="header_box version_2">
              <h2>
                <i className="fa fa-user" />
                Detail Profil
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Logo Perusahaan</label>
                  <form action="/file-upload" className="dropzone" />
                </div>
              </div>
              <div className="col-md-8 add_top_30">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Nama Perusahaan</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Alamat Perusahaan</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your telephone number"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Website Perusahaan</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Telepon Perusahaan</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your telephone number"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Jumlah Karyawan Perusahaan</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Deskripsi Perusahaan</label>
                      <textarea
                        style={{ height: 100 }}
                        className="form-control"
                        placeholder="Personal info"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button sx={{
                marginX: "12px",
                width: "100%",
                backgroundColor: "#FC9400", 
                '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}}} 
                variant="contained" >Simpan</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
