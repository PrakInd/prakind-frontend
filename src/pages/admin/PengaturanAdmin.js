import React from "react";
import Button from '@mui/material/Button';

const PengaturanAdmin = () => {
  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            Pengaturan Admin
          </li>
        </ol>
        <div className="box_general padding_bottom">
          <div className="header_box version_2">
            <h2>
              <i className="fa fa-user" />
              Detail Admin
            </h2>
          </div>
          <div className="row">
            <div className="col-md-12">
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
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <h2>
                  <i className="fa fa-lock" />
                  Ganti Password
                </h2>
              </div>
              <div className="form-group">
                <label>Password lama</label>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group">
                <label>Password baru</label>
                <input className="form-control" type="password" />
              </div>
              <div className="form-group">
                <label>Konfirmasi password baru</label>
                <input className="form-control" type="password" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box_general padding_bottom">
              <div className="header_box version_2">
                <h2>
                  <i className="fa fa-envelope" />
                  Ganti Email
                </h2>
              </div>
              <div className="form-group">
                <label>Email lama</label>
                <input
                  className="form-control"
                  name="old_email"
                  id="old_email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <label>Email baru</label>
                <input
                  className="form-control"
                  name="new_email"
                  id="new_email"
                  type="email"
                />
              </div>
              <div className="form-group">
                <label>Konfirmasi email baru</label>
                <input
                  className="form-control"
                  name="confirm_new_email"
                  id="confirm_new_email"
                  type="email"
                />
              </div>
            </div>
          </div>
        </div>
        <Button sx={{
          width: "100%",
          backgroundColor: "#FC9400", 
          '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}}} 
          variant="contained" >Simpan</Button>
      </div>
    </div>
  );
};

export default PengaturanAdmin;