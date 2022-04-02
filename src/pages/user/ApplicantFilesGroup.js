import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import PrimaryButton from "../../components/button/PrimaryButton";
import SecondaryButton from "../../components/button/SecondaryButton";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import addWeeks from 'date-fns/addWeeks';
import { LocalizationProvider, DateRangePicker } from "@mui/lab";

const getWeeksAfter = (date, amount) => {
  return date ? addWeeks(date, amount) : undefined;
}



const ApplicantFilesGroup = () => {
  const [value, setValue] = React.useState([null, null]);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }
  const dialog = (
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Yeay! Pendaftaran Selesai</DialogTitle>
      <DialogContent style={{ margin: "auto" }}>
        <img src="../../img/checked.png" alt="" width={80} height={80} />
      </DialogContent>
      <DialogActions style={{ margin: "auto" }}>
        <a href="/pelamar/aktifitasku"><PrimaryButton style={{ color: "#fff", fontWeight: "normal" }}>Selesai</PrimaryButton></a>
      </DialogActions>
    </Dialog>
  )

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
              Silahkan Lengkapi Dokumen
            </h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <form>
                <div className="col-md-12" >
                  <div className="row">
                    <label>Periode Magang</label>
                  </div>
                  <div className="row" style={{ marginBottom: 20 }}>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                      <DateRangePicker
                        startText="Tanggal Mulai"
                        endText="Tanggal Berakhir"
                        disablePast
                        value={value}
                        maxDate={getWeeksAfter(value[0], 4)}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                          <React.Fragment>
                            <TextField size="small"
                              {...startProps} />
                            <Box sx={{ mx: 2 }}> to </Box>
                            <TextField size="small"
                              {...endProps} />
                          </React.Fragment>
                        )}
                      />
                    </LocalizationProvider>
                  </div>
                  <div className="row">
                    <div className="col-md-12 p-0">
                      <div className="form-group">
                        <label>Nama Kelompok</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nama Kelompok"
                          name="name_group"
                          id="name_group"
                        // value={input.name}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Proposal</label>
                    <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap" style={{ border: "2px dotted" }}>
                      <div className="col-lg-3 col-md-12 p-0">
                      </div>
                      <div className="col-md-9">
                        <form style={{ margin: "10px" }}>
                          <div className="row-md-12">
                            <input
                              type="file"
                              style={{ border: "none" }}
                              name="proposal"
                              id="proposal"
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
                    <label>Surat Rekomendasi <span style={{ color: "#b1b1b1", fontWeight: "normal" }}>(surat rekomendasi kelompok dijadikan dalam satu file)</span></label>
                    <div className="col-md-12 d-flex flex-row justify-content-between flex-wrap" style={{ border: "2px dotted" }}>
                      <div className="col-lg-3 col-md-12 p-0">
                      </div>
                      <div className="col-md-9">
                        <form style={{ margin: "10px" }}>
                          <div className="row-md-12">
                            <input
                              type="file"
                              style={{ border: "none" }}
                              name="recommendation_letter"
                              id="recommendation_letter"
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


                  <PrimaryButton style={{ color: "#fff", marginTop: 10, display: "flex", float: "right" }} onClick={handleClickOpen}>Submit</PrimaryButton>

                  <a href="/pelamar/profil-review">
                    <SecondaryButton style={{ marginTop: 10, display: "flex", float: "right", marginRight: 10 }}>Sebelumnya</SecondaryButton>
                  </a>
                </div>
              </form>
            </div>
          </div>
          {dialog}
        </div>
      </div >
      < FooterUser />
    </div >
  );
}

export default ApplicantFilesGroup;