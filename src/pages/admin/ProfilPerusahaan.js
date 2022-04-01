import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { SHOW_COMPANY } from "../../constants/urls";
import {getToken, getUserId} from "../../utils/Auth";

const ProfilPerusahaan = () => {
  const { id } = useParams();
  const [company, setCompany] = useState([]);

  useEffect(() => {
    axios
    .get(SHOW_COMPANY(getUserId()), {
      header: {Authorization: `Bearer ${getToken()}` },
    })
    .then(res => {
      console.log(res)
      setCompany(res.data.data)
    })
    .catch(err => console.log(err))

    return () => {
      setCompany({});
    }
  }, [id]);

  return (
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
                {/* <div className="row" > */}
                <label>Logo Perusahaan</label>
                </div>
                  <img
                    src="/../../img/avatar.jpg"
                    // src={company.logo}
                    alt="profile-picture"
                    style={{
                      width: 144,
                      height: 144,
                      objectFit: "cover",
                      borderRadius: 8,
                      boxShadow: "0 0 0 1px #CED4DA",
                      marginBottom: "24px",
                    }}
                  />
                <div className="row-md-12">
                    <input
                      type="file"
                      style={{ border: "none" }}
                      name="image"
                      id="image"
                      className="form-control p-0"
                    // onChange={handleImageChange}
                    />
                    <label class="pt-0">Pilih file dengan ukuran maksimal 1MB</label>
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
                      value={company.name}
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
                      value={company.address}
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
                      value={company.website}
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
                      value={company.phone}
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
                      value={company.number_of_employee}
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
                      value={company.description}
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
              variant="contained" >Edit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPerusahaan;