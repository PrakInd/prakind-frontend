import React, { useState, useEffect } from "react";
import axios from "axios";
import { UPDATE_PROFILE } from "../../constants/urls";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import PrimaryButton from "../../components/button/PrimaryButton";
import { useHistory } from "react-router-dom";
import { getToken, getUserId } from "../../utils/Auth";
import avatar from "../../assets/avatar.jpg";

const ProfileEdit = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [nameInstitution, setNameInstitution] = useState("");
  const [level, setLevel] = useState("");
  const [semester, setSemester] = useState("");
  const [gpa, setGpa] = useState("");
  const [cv, setCv] = useState("");
  const [transcript, setTranscript] = useState("");
  const [portofolio, setPortofolio] = useState("");
  const [validation, setValidation] = useState([]);
  const history = useHistory();

  const updateVacancy = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('name', name);
    formData.append('address', address);
    formData.append('institution_name', nameInstitution);
    formData.append('level', level);
    formData.append('semester', semester);
    formData.append('gpa', gpa);
    formData.append('cv', cv);
    formData.append('transcript', transcript);
    formData.append('portofolio', portofolio);

    //send data to server
    await axios.post(UPDATE_PROFILE, formData)
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        setValidation(error.response.data);
      });
  };

  return (
    <div>
      <Header />
      <div
        className="container-fluid"
        style={{ width: "50%", paddingTop: "3%" }}
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
                    // src="/../../img/avatar.jpg"
                    src={avatar}
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
              </div>
            </div>
            <div className="col-md-12">
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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      {validation.name && <div className="alert alert-danger">{validation.name[0]}</div>}
                    </div>
                  </div>
                </div>
                {/* /row*/}
                {/* <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          name="email"
                          id="email"
                        />
                      </div>
                    </div>
                  </div> */}
                <div className="row">
                  <div className="col-md-12 p-0">
                    <div className="form-group">
                      <label>Alamat Lengkap</label>
                      <textarea
                        style={{ height: 80 }}
                        name="address"
                        id="address"
                        className="form-control"
                        placeholder="Alamt Lengkap"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)} />
                      {validation.address && <div className="alert alert-danger">{validation.address[0]}</div>}
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row">
                  <div className="col-md-12 p-0">
                    <div className="form-group">
                      <label>Asal Sekolah</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Asal Sekolah/Institusi"
                        name="institution_name"
                        id="institution_name"
                        value={nameInstitution}
                        onChange={(e) => setNameInstitution(e.target.value)} />
                      {validation.institution_name && <div className="alert alert-danger">{validation.institution_name[0]}</div>}
                    </div>
                  </div>
                </div>
                {/* /row*/}
                <div className="row" style={{ justifyContent: "space-between" }}>
                  <div className="col-md-5 p-0">
                    <div className="form-group">
                      <label>Kategori Sekolah</label>
                      <select
                        className="w-100 input-group-select"
                        style={{
                          height: "42px",
                          borderRadius: "3px",
                          padding: "10px",
                          borderColor: "#d2d8dd",
                        }}
                      >
                        <option defaultValue="">Pilih Kategori Sekolah</option>
                        <option name="level" id="smk" value="SMK">Sekolah Kejuruan Menengah se-derajat</option>
                        <option name="level" id="university" value="Universitas" >Universitas/Politeknik</option>
                        )
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3 p-0" style={{ marginLeft: 1 }}>
                    <div className="form-group">
                      <label>Semester</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Semester"
                        name="semester"
                        id="semester"
                        value={semester}
                        onChange={(e) => setSemester(e.target.value)} />
                      {validation.semester && <div className="alert alert-danger">{validation.semester[0]}</div>}
                    </div>
                  </div>
                  <div className="col-md-3 p-0" style={{ marginLeft: 1 }}>
                    <div className="form-group">
                      <label>IPK</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Semester"
                        name="gpa"
                        id="gpa"
                        value={gpa}
                        onChange={(e) => setGpa(e.target.value)} />
                      {validation.gpa && <div className="alert alert-danger">{validation.gpa[0]}</div>}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>Curriculum Vitae</label>
                  <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap" style={{ border: "2px dotted" }}>
                    <div className="col-lg-3 col-md-12 p-0">
                    </div>
                    <div className="col-md-9">
                      <div className="row-md-12" style={{ marginTop: "10px" }}>
                        <input
                          type="file"
                          style={{ border: "none" }}
                          name="cv"
                          id="cv"
                          className="form-control p-0"
                          value={cv}
                          onChange={(e) => setCv(e.target.value)} />
                        {validation.cv && <div className="alert alert-danger">{validation.cv[0]}</div>}
                      </div>
                      <div className="row-md-12">
                        Pilih file dengan ukuran maksimal 1MB
                      </div>
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
                      <div className="row-md-12" style={{ marginTop: "10px" }}>
                        <input
                          type="file"
                          style={{ border: "none" }}
                          name="transcript"
                          id="transcript"
                          className="form-control p-0"
                          value={transcript}
                          onChange={(e) => setTranscript(e.target.value)} />
                        {validation.transcript && <div className="alert alert-danger">{validation.transcript[0]}</div>}
                      </div>
                      <div className="row-md-12">
                        Pilih file dengan ukuran maksimal 1MB
                      </div>
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
                      <div className="row-md-12" style={{ marginTop: "10px" }}>
                        <input
                          type="file"
                          style={{ border: "none" }}
                          name="portofolio"
                          id="portofolio"
                          className="form-control p-0"
                          value={portofolio}
                          onChange={(e) => setPortofolio(e.target.value)} />
                        {validation.portofolio && <div className="alert alert-danger">{validation.portofolio[0]}</div>}
                      </div>
                      <div className="row-md-12">
                        Pilih file dengan ukuran maksimal 1MB
                      </div>
                    </div>
                    <PrimaryButton style={{ color: "#fff", margin: "auto", marginTop: 10, marginBottom: 10, fontWeight: "normal" }}>Unggah Dokumen</PrimaryButton>
                  </div>
                </div>

                <a>
                  <PrimaryButton
                    style={{ color: "#fff", marginTop: 10, display: "flex", float: "right" }}                    >
                    Simpan
                  </PrimaryButton>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container-fluid*/}
      <FooterUser />
    </div>
  );
}

export default ProfileEdit;

