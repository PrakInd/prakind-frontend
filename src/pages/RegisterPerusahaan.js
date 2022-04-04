import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { CREATE_COMPANY } from "../constants/urls";
import prakind_logo from "../assets/logo_orange2.svg";

const RegisterPerusahaan = () => {
    const [logo, setLogo] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [website, setWebsite] = useState("");
    const [mountEmp, setMount] = useState("");
    const [desc, setDesc] = useState("");
    const [validation, setValidation] = useState([]);
    const history = useHistory();

    const registerPerusahaanHandler = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('logo', logo);
        formData.append('name', name);
        formData.append('address', address);
        formData.append('phone', phone);
        formData.append('website', website);
        formData.append('mountEmp', mountEmp);
        formData.append('desc', desc);

        //send data to server
        await axios.post(CREATE_COMPANY, formData)
        .then(() => {
            history.push('/');
        })
        .catch((error) => {
            setValidation(error.response.data);
        });
    };

  return (
    <div id="login_bg">
      <nav id="menu" className="fake_menu" />
      <div id="register">
        <aside>
          <figure>
            <Link to="/">
              <img
                src={prakind_logo}
                style={{ height: "3rem" }}
                data-retina="true"
                alt="logo"
                className="logo_sticky"
              />
            </Link>
          </figure>
          <div className="content-wrapper">
            <div className="box_general padding_bottom">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    {/* <div className="row" > */}
                    <label>Logo Perusahaan</label>
                    </div>
                  <img
                    src="/../../img/avatar.jpg"
                    // src={company.logo}
                    alt="company-logo"
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
                          className="form-control"
                          type="text"
                          placeholder="Masukkan Nama Perusahaan "
                          value={name}
                          onChange={(e) => setName(e.target.value)} />
                        {validation.name && (
                          <div className="alert alert-danger">
                            {validation.name[0]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Alamat Perusahaan</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Masukkan Alamat Perusahaan"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)} />
                        {validation.address && (
                          <div className="alert alert-danger">
                            {validation.address[0]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Website Perusahaan</label>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Masukkan Website Perusahaan"
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)} />
                        {validation.website && (
                          <div className="alert alert-danger">
                            {validation.website[0]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Telepon Perusahaan</label>
                        <input
                          className="form-control"
                          type="tel"
                          placeholder="Masukkan No Telepon Perusahaan"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)} />
                        {validation.phone && (
                          <div className="alert alert-danger">
                            {validation.phone[0]}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Jumlah Karyawan Perusahaan</label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Masukkan Jumlah Karyawan Perusahaan"
                          value={mountEmp}
                          onChange={(e) => setMount(e.target.value)} />
                        {validation.mountEmp && (
                          <div className="alert alert-danger">
                            {validation.mountEmp[0]}
                          </div>
                        )}
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
                          placeholder="Masukkan Deskripsi Perusahaan"
                          value={desc}
                          onChange={(e) => setDesc(e.target.value)} />
                        {validation.desc && (
                          <div className="alert alert-danger">
                            {validation.desc[0]}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <Button sx={{
                  marginX: "12px",
                  width: "100%",
                  backgroundColor: "#FC9400", 
                  '&:hover':{ backgroundColor: "#FFC300", 
                  color: "#3F4456"}}} 
                  variant="contained" 
                  onClick={registerPerusahaanHandler}
                >
                  Daftar Perusahaan
                </Button>
              </div>
            </div>
        </div>
          <div className="copy">© 2022 PrakInd</div>
        </aside>
      </div>
    </div>
  );
};

export default RegisterPerusahaan;