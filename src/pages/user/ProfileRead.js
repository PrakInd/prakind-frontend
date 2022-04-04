import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { SHOW_PROFILE } from "../../constants/urls";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import { Container, Row } from "react-grid-system";
import PrimaryButton from "../../components/button/PrimaryButton";
import { getToken, getUserId } from "../../utils/Auth";

const ProfileRead = () => {
  // const { id } = useParams();
  const [user, setUser] = useState({});
  const [profile, setProfile] = useState({});
  const [institution, setInstitution] = useState({});

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

  return (
    <div>
      <Header />
      <div
        className="container-fluid"
        style={{ width: "50%", paddingTop: "7%" }}
      >
        <div className="box_general padding_bottom  col-md-8" style={{ margin: "auto", marginBottom: 30 }}>
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
              <div className="col-md-7">
                <form>
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <p>{user.name}</p>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <p>{user.email}</p>
                  </div>
                </form>
              </div>

            </div>
            <div className="col-md-12">
              <form>
                <div className="col-md-12">
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <label>Alamat</label>
                        <p>{profile.address}</p>
                      </div>
                    </div>
                    <div className="col-md-5 p-0">
                      <div className="form-group">
                        <label>Asal Sekolah</label>
                        <p>{institution.name}</p>
                      </div>
                    </div>
                    <div className="col-md-5 p-0">
                      <div className="form-group">
                        <label>Kategori Sekolah</label>
                        <p>{institution.level}</p>
                      </div>
                    </div>
                  </div>

                  {/* /row*/}
                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div className="col-md-5 p-0" style={{ marginLeft: 1 }}>
                      <div className="form-group">
                        <label>Semester</label>
                        <p>{profile.semester}</p>
                      </div>
                    </div>
                    <div className="col-md-5 p-0" style={{ marginLeft: 1 }}>
                      <div className="form-group">
                        <label>IPK</label>
                        <p>{profile.gpa}</p>
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{ justifyContent: "space-between" }}>
                    <div className="col-md-5 p-0" style={{ marginLeft: 1 }}>
                      <div className="form-group">
                        <label>Curriculum Vitae</label>
                        <p>{profile.cv}</p>
                      </div>
                    </div>
                    <div className="col-md-5 p-0" style={{ marginLeft: 1 }}>
                      <div className="form-group">
                        <label>Transkrip Nilai</label>
                        <p>{profile.transcript}</p>
                      </div>
                    </div>
                    <div className="col-md-12 p-0" style={{ marginLeft: 1 }}>
                      <div className="form-group">
                        <label>Portofolio</label>
                        <p>{profile.portfolio}</p>
                      </div>
                    </div>
                  </div>
                  <a href="/pelamar/upload-dokumen">
                    <PrimaryButton style={{ color: "#fff", marginTop: 10, display: "flex", float: "right" }}>Selanjutnya</PrimaryButton>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /.container-fluid*/}
      <FooterUser />
    </div>
  );
}

export default ProfileRead;

