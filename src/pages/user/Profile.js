import React, { useState, useEffect } from "react";
import axios from "axios";
import { SHOW_PROFILE } from "../../constants/urls";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import PrimaryButton from "../../components/button/PrimaryButton";
import { getToken, getUserId } from "../../utils/Auth";
import { Button } from "@mui/material";

const Profile = () => {
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const [institution, setInstitution] = useState({});
  const [saving, setSaving] = useState(false);

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios
      .get(SHOW_PROFILE(getUserId()), {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then(res => {
        console.log(res)
        setProfile(res.data.data);
        setUser(res.data.data.user);
        setInstitution(res.data.data.institution);
      })
      .catch(err => console.log(err))

    return () => {
      setProfile({});
      setUser({});
      setInstitution({});
    }
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("name", user.name);
    console.log("institution_id", user.institution_id);
    console.log("semester", profile.semester);
    console.log("gpa", profile.gpa);
  }

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
                    src={user.avatar}
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
                          name="user_id"
                          id="name"
                          defaultValue={user.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
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
                          value={user.email}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <label>Alamat Lengkap</label>
                        <textarea style={{ height: 80 }} className="form-control" placeholder="Jl. Sukaria blok mangga no. 12, Sukolilo, Jakarta" defaultValue={""} />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <label>Asal Sekolah</label>
                        <select
                          className="w-100 input-group-select"
                          style={{
                            height: "42px",
                            borderRadius: "3px",
                            padding: "10px",
                            borderColor: "#d2d8dd",
                          }}
                        >
                          <option defaultValue="">Pilih Sekolah</option>
                          <option>SMANSA</option>
                          <option>SMALA</option>
                          )
                        </select>
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
                          <option>Sekolah Kejuruan Menengah se-derajat</option>
                          <option>Universitas/Politeknik</option>
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
                          placeholder="Nama Lengkap"
                          name="name"
                          id="name"
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
                          placeholder="Nama Lengkap"
                          name="name"
                          id="name"
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
                        <form style={{ margin: "10px" }}>
                          <div className="row-md-12">
                            <input
                              type="file"
                              style={{ border: "none" }}
                              name="cv"
                              id="cv"
                              className="form-control p-0"
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
                  <Button onClick={handleSave}>
                    Simpan
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <FooterUser />
    </div>
  );
}

export default Profile;

