import React from "react";
import { InputBase, Divider, FormControl, InputLabel, Grid, TextField, FormLabel, RadioGroup, FormControlLabel, Radio, Select, MenuItem, Button, Menu } from "@mui/material";
import FooterUser from "../../components/FooterUser";
import { styled } from "@mui/system";
import { makeStyles } from "@mui/styles";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Navbar from "../../components/user/Navbar";

const Frame = styled('div')(({ theme }) => ({
  backgroundColor: "#fff",
  // marginLeft: 280,
  // marginRight: 280,
  width: "70%",
  borderRadius: 7,
  margin: "auto",
  height: "auto",
  marginTop: 20,
}));

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : '#2b2b2b',
    border: '1px solid #ced4da',
    fontSize: 14,
    padding: '10px 12px',
    width: '380px'
  },
}));


const Input = styled('input')({
  display: 'none',
});

const useStyles = makeStyles(() => ({
  body: {
    marginLeft: 25,
    marginRight: 25,
    paddingTop: 20,
    paddingBottom: 15,
    marginBottom: 30,
  },
  item: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%"
  },
  content: {
    marginLeft: 50,
    marginRight: 25,
    marginBottom: 10,
    // paddingTop: 20,
  },
  button: {
    display: "flex",
    justifyContent: "flex-end",
  }
}))

const FormRegister = () => {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Frame>
        <div className="box_general">
          <div className="header_box version_2">
            <h2><i className="fa fa-user" />Profile details</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Your photo</label>
                <form action="/file-upload" className="dropzone" />
              </div>
            </div>
            <div className="col-md-8 add_top_30">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Nama Lengkap</label>
                    <input type="text" className="form-control" placeholder="Nama Lengkap Kamu" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Nomor Hp.</label>
                    <input type="text" className="form-control" placeholder="087xxxxxxxxx" />
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="aisyahm@gmail.com" disabled />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Jenis Kelamin</label>
                    <RadioGroup>
                      <FormControlLabel value="lakilaki" control={<Radio />} label="Laki-laki" />
                      <FormControlLabel value="perempuan" control={<Radio />} label="Perempuan" />
                    </RadioGroup>
                  </div>
                </div>
              </div>
              {/* /row*/}
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Alamat Lengkap</label>
                    <textarea style={{ height: 45 }} className="form-control" placeholder="Alamat Lengkap" defaultValue={""} />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label>Sekolah</label>
                    <div class="styled-select">
                      <select>
                        <option>Sekolah Menengah Kejuruan/sederajat</option>
                        <option>Kuliah</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Asal Sekolah</label>
                    <input type="text" className="form-control" placeholder="Asal Sekolah" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Indeks Prestasi Komulatif</label>
                    <input type="text" className="form-control" placeholder="IPK" />
                  </div>
                </div>
              </div>
              {/* /row*/}
            </div>
          </div>
          <Button variant="contained" component="span" style={{ float: 'center', width: '100%', margin: '20px' }}>
            Simpan
          </Button>
        </div>
      </Frame>
      <FooterUser />
    </>
  )
}

export default FormRegister;