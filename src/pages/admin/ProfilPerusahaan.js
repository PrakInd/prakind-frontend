import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { 
  COMPANY_BY_USER_ID, 
  UPDATE_COMPANY, 
  COMPANY_UPLOAD_LOGO, 
  SERVER_NAME_DEV 
} from "../../constants/urls";
import {getToken, getUserId} from "../../utils/Auth";
import Swal from "sweetalert2";

const ProfilPerusahaan = () => {
  const [company, setCompany] = useState({});
  const [image, setImage] = useState(null);

  useEffect(() => {
    axios
      .get(COMPANY_BY_USER_ID(parseInt(getUserId())), {
        header: {Authorization: `Bearer ${getToken()}` },
      })
      .then(res => {
        setCompany(res.data.data);
      })
      .catch(err => console.log(err))

    return () => {
      setCompany([]);
    }
  }, []);

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    setCompany({ ...company, [name]: value });
  };

  const onImageChange = e => {
    setImage(e.target.files[0]);
  };

  const handleUpdateProfile = e => {
    e.preventDefault();
    let formData = new FormData();
    formData.append('logo', image);

    axios.all([
      axios.patch(UPDATE_COMPANY(company.id), {
        user_id: company.user_id,
        name: company.name,
        address: company.address,
        phone: company.phone,
        website: company.website,
        description: company.description,
        number_of_employee: parseInt(company.number_of_employee)
      }, {
        headers: { Authorization: `Bearer ${getToken()}` }
      }),
      axios.post(COMPANY_UPLOAD_LOGO(company.id), formData, {
        headers: { 
          Authorization: `Bearer ${getToken()}`,
          'Content-Type': 'multipart/form-data' 
        }
      })
    ])
    .then(res => {
      console.log(res[1]);
      setCompany({ ...company, logo: URL.createObjectURL(res[1].data.data.logo) })
      Swal.fire(
        'Sukses',
        'Profil berhasil diperbarui',
        'success'
      )
    })
    .catch(err => console.log(err))
    Swal.fire({
      icon: 'error',
      title: 'Gagal',
      text: 'Profil gagal diperbarui',
    })
  };

  return (
    <div>
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
          PrakInd / Profil Perusahaan
          </li>
        </ol>

        <div className="box_general padding_bottom">
          <div className="header_box version_2">
            <h2>
              <i className="fa fa-user" />
              Detail Profil
            </h2>
          </div>

          <form className="row" onSubmit={handleUpdateProfile}>
            <div className="col-md-4">
              <div className="form-group">
                {/* <div className="row" > */}
                <label>Logo Perusahaan</label>
                </div>
                  <img
                    src={`${SERVER_NAME_DEV}/${company.logo}`}
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
                      onChange={onImageChange}
                    />
                    <label class="pt-0">Pilih file dengan ukuran maksimal 1MB</label>
              </div>
            </div>
            <div className="col-md-8 add_top_30">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Nama perusahaan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      name="name"
                      defaultValue={company.name}
                      onChange={handleChange}
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
                      name="address"
                      defaultValue={company.address}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Website Perusahaan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email"
                      name="website"
                      defaultValue={company.website}
                      onChange={handleChange}
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
                      name="phone"
                      defaultValue={company.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Jumlah Karyawan Perusahaan</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your email"
                      name="number_of_employee"
                      defaultValue={company.number_of_employee}
                      onChange={handleChange}
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
                      name="description"
                      defaultValue={company.description}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <Button 
              sx={{
                marginX: "12px",
                width: "100%",
                backgroundColor: "#FC9400", 
                '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}
              }} 
              variant="contained"
              type="submit"
              
            >
              Edit
            </Button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default ProfilPerusahaan;