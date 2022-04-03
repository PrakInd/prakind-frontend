import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import { CREATE_VACANCY } from "../../constants/urls";
import { getToken, getUserId } from "../../utils/Auth";

const Lowongan = () => {
  // const [name, setName] = useState("");
  // const [desc, setDesc] = useState("");
  // const [requirement, setRequirement] = useState("");
  // const [location, setLocation] = useState("");
  // const [sector, setSector] = useState("");
  // const [type, setType] = useState("");
  // const [paid, setPaid] = useState("");
  // const [periodStart, setStart] = useState("");
  // const [periodEnd, setEnd] = useState("");
  const [validation, setValidation] = useState([]);
  const [vacancy, setVacancy] = useState({});
  const history = useHistory();

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === 'paid') {
      setVacancy({ ...vacancy, [name]: value.toLowerCase() });
    } else if (name === 'type') {
      setVacancy({ ...vacancy, [name]: value.toLowerCase() });
    } else {
      setVacancy({ ...vacancy, [name]: value });
    }
  };

  const handleCreateVacancy = e => {
    e.preventDefault();
//     console.log("vacancy", vacancy);
//     const formData = new FormData();
// 
//     formData.append('name', name);
//     formData.append('desc', desc);
//     formData.append('requirement', requirement);
//     formData.append('location', location);
//     formData.append('sector', sector);
//     formData.append('type', type);
//     formData.append('paid', paid);
//     formData.append('periodStart', periodStart);
//     formData.append('periodEnd', periodEnd);

    axios
      .post(CREATE_VACANCY(getUserId()), {
        name: vacancy.name,
        description: vacancy.description,
        requirements: vacancy.requirements,
        location: vacancy.location,
        sector: vacancy.sector,
        type: vacancy.type,
        paid: vacancy.paid,
        period_start: vacancy.period_start,
        period_end: vacancy.period_end
      }, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then(res => {
        console.log("res", res);
      })
      .catch(err => {
        setValidation(err.response.data);
        console.log(err);
      })
  };

  return (
    <div>
      <div>
        <div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Buat Lowongan</li>
          </ol>
          <div className="box_general padding_bottom">
            <div className="header_box version_2">
              <h2>
                <i className="fa fa-file" />
                Buat Lowongan
              </h2>
            </div>

            <form onSubmit={handleCreateVacancy}>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Nama Lowongan</label>
                    <input 
                      className="form-control" 
                      type="text"
                      name="name" 
                      placeholder="Masukkan Nama Lowongan" 
                      // onChange={(e) => setName(e.target.value)} 
                      onChange={handleChange} 
                    />
                    {validation.name && <div className="alert alert-danger">{validation.name[0]}</div>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Deskripsi Lowongan</label>
                    <textarea
                      name="description" 
                      style={{ height: 100 }} 
                      className="form-control" 
                      placeholder="Masukkan Deskripsi Lowongan" 
                      // onChange={(e) => setDesc(e.target.value)} 
                      onChange={handleChange} 
                    />
                    {validation.desc && <div className="alert alert-danger">{validation.desc[0]}</div>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Keahlian dan Kualifikasi</label>
                    <textarea
                      name="requirements" 
                      style={{ height: 100 }} 
                      className="form-control" 
                      placeholder="Masukkan Kriteria Lowongan" 
                      // onChange={(e) => setRequirement(e.target.value)} 
                      onChange={handleChange} 
                    />
                    {validation.requirement && <div className="alert alert-danger">{validation.requirement[0]}</div>}
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
                      name="location"
                      placeholder="Masukkan Lokasi" 
                      // onChange={(e) => setLocation(e.target.value)} 
                      onChange={handleChange} 
                    />
                    {validation.location && <div className="alert alert-danger">{validation.location[0]}</div>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Sektor</label>
                    <input 
                      className="form-control" 
                      type="text" 
                      name="sector"
                      placeholder="Masukkan Sektor Lowongan" 
                      // onChange={(e) => setSector(e.target.value)} 
                      onChange={handleChange} 
                    />
                    {validation.sector && <div className="alert alert-danger">{validation.sector[0]}</div>}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Tipe</label>
                    <br />
                    <input type="radio" id="online" name="type" value="Online" onChange={handleChange} />
                    <label for="online">Online</label>
                    <input type="radio" id="offline" name="type" value="Offline" onChange={handleChange} />
                    <label for="offline">Offline</label>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Uang Saku</label>
                    <br />
                    <input type="radio" id="ya" name="paid" value="Ya" onChange={handleChange}  />
                    <label for="ya">Iya</label>
                    <input type="radio" id="tidak" name="paid" value="Tidak" onChange={handleChange}  />
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
                      name="period_start"
                      placeholder="Masukkan " 
                      // onChange={(e) => setStart(e.target.value)} 
                      onChange={handleChange} 
                    />
                    {validation.periodStart && <div className="alert alert-danger">{validation.periodStart[0]}</div>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Tutup Lowongan</label>
                    <input 
                      className="form-control" 
                      type="date" 
                      name="period_end"
                      placeholder="Masukkan " 
                      // onChange={(e) => setEnd(e.target.value)} 
                      onChange={handleChange} 
                    />
                    {validation.periodEnd && <div className="alert alert-danger">{validation.periodEnd[0]}</div>}
                  </div>
                </div>
              </div>
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "#FC9400",
                  "&:hover": { backgroundColor: "#FFC300", color: "#3F4456" },
                }}
                variant="contained"
                type="submit"
              >
                Simpan
              </Button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Lowongan;