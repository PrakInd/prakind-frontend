import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { 
  SHOW_APPLICATION, 
  SHOW_APPLICANT_FILE,
  APPLICATION_BY_USER_ID,
  APPLICANT_FILE_BY_USER_ID, 
} from "../../constants/urls";
import { getToken } from "../../utils/Auth";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";

const DetailPelamar = () => {
  const [applicant, setApplication] = useState({});
  const [file, setFile] = useState({});
  const params = useParams();
  const userId = params.id;

  useEffect(() => {
    console.log(params);
    console.log(userId);

    axios.all([
      axios.get(APPLICATION_BY_USER_ID(userId), {
        headers: { Authorization: `Bearer ${getToken()}` }
      }),
      axios.get(APPLICANT_FILE_BY_USER_ID(userId), {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    ])
    .then(res => {
      console.log("application:", res[0]);
      console.log("applicant file:", res[1]);
    })
    .catch(err => console.log(err))

    return () => {
      setApplication([]);
      setFile([]);
    }
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            PrakInd / Profil Pelamar
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
                <label>Foto Profil</label>
                <form action="/file-upload" className="dropzone" />
              </div>
            </div>
            <div className="col-md-8 add_top_30">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Nama Pelamar</label>
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
              {/* /row*/}
            </div>
            <Button sx={{
              marginX: "12px",
              width: "50%",
              backgroundColor: "#FC9400", 
              '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}}} 
              variant="contained" >Terima</Button>
            <Button sx={{
              marginX: "12px",
              width: "50%",
              backgroundColor: "#FC9400", 
              '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}}} 
              variant="contained" >Tolak</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPelamar;