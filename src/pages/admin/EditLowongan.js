import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { UPDATE_VACANCY } from "../../constants/urls";

const EditLowongan = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [requirement, setRequirement] = useState("");
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");
  const [type, setType] = useState("");
  const [paid, setPaid] = useState("");
  const [periodStart, setStart] = useState("");
  const [periodEnd, setEnd] = useState("");
  const [validation, setValidation] = useState([]);
  const history = useHistory();

  const updateVacancy = async (e) => {
      e.preventDefault();

      const formData = new FormData();

      formData.append('name', name);
      formData.append('desc', desc);
      formData.append('requirement', requirement);
      formData.append('location', location);
      formData.append('sector', sector);
      formData.append('type', type);
      formData.append('paid', paid);
      formData.append('periodStart', periodStart);
      formData.append('periodEnd', periodEnd);

      //send data to server
      await axios.post(UPDATE_VACANCY, formData)
      .then(() => {
          history.push('/');
      })
      .catch((error) => {
          setValidation(error.response.data);
      });
  };

  return (
    <div>
      <div className="content-wrapper">
        <div className="container-fluid">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              Lowongan
            </li>
          </ol>
          <div className="box_general padding_bottom">
            <div className="header_box version_2">
              <h2>
                <i className="fa fa-file" />
                Detail Lowongan
              </h2>
            </div>
            {/* <li className="breadcrumb-item active">Detail Lowongan</li> */}
            {/* <p className="font-bold text-xl md:text-2xl text-center">{(schedule.schedule?.id && "Detail") || "New Schedule"}</p> */}
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Nama Lowongan</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Masukkan Nama Lowongan"
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
                  <label>Deskripsi Lowongan</label>
                  <textarea
                    style={{ height: 100 }}
                    className="form-control"
                    placeholder="Masukkan Deskripsi Lowongan"
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
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label>Keahlian dan Kualifikasi</label>
                  <textarea
                    style={{ height: 100 }}
                    className="form-control"
                    placeholder="Masukkan Kriteria Lowongan"
                    value={requirement}
                    onChange={(e) => setRequirement(e.target.value)} />
                  {validation.requirement && (
                    <div className="alert alert-danger">
                      {validation.requirement[0]}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Lokasi</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Masukkan Lokasi"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)} />
                  {validation.location && (
                    <div className="alert alert-danger">
                      {validation.location[0]}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Sektor</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Masukkan Sektor Lowongan"
                    value={sector}
                    onChange={(e) => setSector(e.target.value)} />
                  {validation.sector && (
                    <div className="alert alert-danger">
                      {validation.sector[0]}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Tipe</label><br />
                  <input type="radio" id="html" name="fav_language" value="HTML"/>
                  <label for="online">Online</label>
                  <input type="radio" id="css" name="fav_language" value="CSS"/>
                  <label for="offline">Offline</label>
                  {/* <RadioGroup>
                      <FormControlLabel value="online" control={<Radio />} label="Online" />
                      <FormControlLabel value="offline" control={<Radio />} label="Offline" />
                  </RadioGroup> */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Diberi Uang Saku</label><br />
                  <input type="radio" id="html" name="fav_language" value="HTML"/>
                  <label for="ya">Iya</label>
                  <input type="radio" id="css" name="fav_language" value="CSS"/>
                  <label for="tidak">Tidak</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>Buka Lowongan</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Masukkan "
                    value={periodStart}
                    onChange={(e) => setStart(e.target.value)} />
                  {validation.periodStart && (
                    <div className="alert alert-danger">
                      {validation.periodStart[0]}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>Tutup Lowongan</label>
                  <input
                    className="form-control"
                    type="date"
                    placeholder="Masukkan "
                    value={periodEnd}
                    onChange={(e) => setEnd(e.target.value)} />
                  {validation.periodEnd && (
                    <div className="alert alert-danger">
                      {validation.periodEnd[0]}
                    </div>
                  )}
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
      </div>
    </div>
  );
};

export default Lowongan;