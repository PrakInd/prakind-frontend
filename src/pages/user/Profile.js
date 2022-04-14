import React, { useState, useEffect } from "react";
import axios from "axios";
import { CREATE_PROFILE, PROFILE_BY_USER_ID, PROFILE_UPLOAD_DOCS, SERVER_NAME_DEV, SHOW_USER, UPDATE_PROFILE, USER_UPLOAD_IMAGE } from "../../constants/urls";
import { RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import { Container, Row } from "react-grid-system";
import PrimaryButton from "../../components/button/PrimaryButton";
import { useHistory } from "react-router-dom";
import { getToken, getUserId } from "../../utils/Auth";

const Profile = () => {
  const [validation, setValidation] = useState([]);
  const [profile, setProfile] = useState({});
  const [document, setDocument] = useState(null);
  const [user, setUser] = useState({});
  const [image, setImage] = useState(null);
  const [newProfile, setNewProfile] = useState({
    user_id: '',
    institution_id: '',
    address: '',
    phone: '',
    gpa: '',
    semester: '',
  });

  useEffect(() => {
    axios.all([
      axios.get(SHOW_USER(getUserId()), {
        headers: { Authorization: `Bearer ${getToken()}` }
      }),
      axios.get(PROFILE_BY_USER_ID(getUserId()), {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    ])
    .then(res => {
      console.log("show user", res[0]);
      setUser(res[0].data.data);
      console.log("profile by user", res[1]);
      setProfile(res[1].data.data);
    })
    .catch(err => console.log(err))

    return [
      setUser({}),
      setProfile({})
    ];
  }, []);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setNewProfile({ ...newProfile, [name]: value });
  };

  const onImageChange = e => {
    setImage(e.target.files[0]);
  };

  const onFileChange = e => {
    setDocument(e.target.files[0]);
  };

  const handleUploadAvatar = e => {
    e.preventDefault();
    console.log("img:", image);
    let formData = new FormData();
    formData.append('avatar', image);

    axios.post(USER_UPLOAD_IMAGE(getUserId()), formData, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  };

  const handleUploadCV = e => {
    e.preventDefault();
    console.log("doc:", document);
    let formData = new FormData();
    formData.append('cv', document);
    
    axios
      .post(PROFILE_UPLOAD_DOCS(getUserId(), "cv"), formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => {
        console.log("Upload cv response:", res);
      })
      .catch(err => console.log(err))
  };

  const handleUploadTranscript = e => {
    e.preventDefault();
    console.log("doc:", document);
    let formData = new FormData();
    formData.append('transcript', document);
    
    axios
      .post(PROFILE_UPLOAD_DOCS(getUserId(), "transcript"), formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => {
        console.log("Upload transcript response:", res);
      })
      .catch(err => console.log(err))
  };

  const handleUploadPortfolio = e => {
    e.preventDefault();
    console.log("doc:", document);
    let formData = new FormData();
    formData.append('portfolio', document);
    
    axios
      .post(PROFILE_UPLOAD_DOCS(getUserId(), "portfolio"), formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => {
        console.log("Upload portfolio response:", res);
      })
      .catch(err => console.log(err))
  };

  const handleCreateProfile = e => {
    e.preventDefault();
    console.log(profile);
    let formData = new FormData();
    formData.append('avatar', image);

    axios.all([
      axios.post(UPDATE_PROFILE(getUserId()), {
        user_id: getUserId(),
        institution_id: profile.institution_id,
        address: profile.address,
        phone: profile.phone,
        gpa: profile.gpa,
        semester: profile.semester
      }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      }),
      axios.post(USER_UPLOAD_IMAGE(getUserId()), formData, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
    ])
    .then(res => {
      console.log("res 0", res[0]);
      console.log("res 1", res[1]);
    })
    .catch(err => console.log(err))
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

          {/* FORM */}
          <form onSubmit={handleCreateProfile}>
            <div className="row">
              <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap">
                <div className="col-lg-3 col-md-12 p-0">
                  <div className="form-group">
                    <img
                      src={user.avatar ? `${SERVER_NAME_DEV}/${user.avatar}` : "/../../img/avatar.jpg"}
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
                      onChange={onImageChange}
                    />
                  </div>
                  <div className="row-md-12">
                    <label className="pt-0">Pilih file dengan ukuran maksimal 1MB</label>
                  </div>
                  <div className="row-md-12">
                  <Button 
                    sx={{ background: "#FFC300", color: "#2D3246", fontWeight: "bold" }}
                    onClick={handleUploadAvatar}
                  >
                    Unggah Foto
                  </Button>
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
                          defaultValue={user.name}
                          onChange={handleChange}
                        />
                        {validation.name && <div className="alert alert-danger">{validation.name[0]}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <label>Alamat Lengkap</label>
                        <textarea
                          style={{ height: 80 }}
                          name="address"
                          id="address"
                          className="form-control"
                          placeholder="Alamat Lengkap"
                          defaultValue={profile.address}
                          onChange={handleChange} 
                        />
                        {validation.address && <div className="alert alert-danger">{validation.address[0]}</div>}
                      </div>
                    </div>
                  </div>

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
                          // defaultValue={profile.institution.name}
                          onChange={handleChange} 
                        />
                        {validation.institution_name && <div className="alert alert-danger">{validation.institution_name[0]}</div>}
                      </div>
                    </div>
                  </div>

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
                          <option onChange={handleChange} name="level" id="smk" value="SMK">Sekolah Kejuruan Menengah se-derajat</option>
                          <option onChange={handleChange} name="level" id="university" value="Universitas" >Universitas/Politeknik</option>
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
                          defaultValue={profile.semester}
                          onChange={handleChange} 
                        />
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
                          defaultValue={profile.gpa}
                          onChange={handleChange} 
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
                        <div className="row-md-12" style={{ marginTop: "10px" }}>
                          <input
                            type="file"
                            style={{ border: "none" }}
                            name="cv"
                            id="cv"
                            className="form-control p-0"
                            defaultValue={profile.cv}
                            onChange={onFileChange} 
                          />
                        </div>
                        <div className="row-md-12">
                          Pilih file dengan ukuran maksimal 1MB
                        </div>
                      </div>
                      <Button 
                        sx={{ background: "#FFC300", color: "#2D3246", fontWeight: "bold" }}
                        onClick={handleUploadCV}
                      >
                        Unggah CV
                      </Button>
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
                            defaultValue={profile.transcript}
                            onChange={onFileChange} 
                          />
                        </div>
                        <div className="row-md-12">
                          Pilih file dengan ukuran maksimal 1MB
                        </div>
                      </div>
                      <Button 
                        sx={{ background: "#FFC300", color: "#2D3246", fontWeight: "bold" }}
                        onClick={handleUploadTranscript}
                      >
                        Unggah Transcript
                      </Button>
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
                            defaultValue={profile.portfolio}
                            onChange={onFileChange} 
                          />
                        </div>
                        <div className="row-md-12">
                          Pilih file dengan ukuran maksimal 1MB
                        </div>
                      </div>
                      <Button 
                        sx={{ background: "#FFC300", color: "#2D3246", fontWeight: "bold" }}
                        onClick={handleUploadPortfolio}
                      >
                        Unggah Portfolio
                      </Button>
                    </div>
                  </div>

                  <Button 
                    sx={{ background: "#FFC300", color: "#2D3246", fontWeight: "bold" }}
                    type="submit"
                  >
                    Simpan
                  </Button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
      <FooterUser />
    </div>
  );
}

export default Profile;