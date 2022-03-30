import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import PrimaryButton from "../../components/button/PrimaryButton";
import SecondaryButton from "../../components/button/SecondaryButton";

const Token = () => {
  const [open, setOpen] = useState(false);
  const [openMember, setOpenMember] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpenMember = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const dialog = (
    <Dialog open={open} onClose={handleClose} >
      <DialogTitle>Generate Token Berhasil</DialogTitle>
      <DialogContent style={{ margin: "auto" }}>
        <h6>Silahkan bagikan token berikut ke anggota kelompok Anda</h6>
        2222xxx
      </DialogContent>
      <DialogActions style={{ margin: "auto" }}>
        <a href="/pelamar/upload-dokumen"><PrimaryButton style={{ color: "#fff", fontWeight: "normal" }}>Selanjutnya</PrimaryButton></a>
      </DialogActions>
    </Dialog >
  )

  const dialog2 = (
    <Dialog open={openMember} onClose={handleClose} >
      <DialogTitle>Yeay! Pendaftaran Berhasil</DialogTitle>
      <DialogContent style={{ margin: "auto" }}>
        <h6>Silahkan kelompok Anda</h6>
      </DialogContent>
      <DialogActions style={{ margin: "auto" }}>
        <a href="/pelamar/upload-dokumen"><PrimaryButton style={{ color: "#fff", fontWeight: "normal" }}>Selanjutnya</PrimaryButton></a>
      </DialogActions>
    </Dialog >
  )

  return (
    <>
      <Header />
      <div>
        <div
          className="container-fluid"
          style={{ width: "50%", paddingTop: "7%" }}
        >
          <div className="box_general padding_bottom col-md-8 " style={{ margin: "auto", marginBottom: 30 }}>
            <div className="header_box version_2">
              <h2>
                Token
              </h2>
            </div>
            <div className="row">
              <div className="col-md-12 p-10">
                <form>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="col-md-12 p-0">
                        <div className="form-group">
                          <label>Masukkan Token</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Masukkan Token"
                            name="name"
                            id="name"
                          // value={input.name}
                          />
                        </div>
                      </div>
                    </div>
                    {/* /row*/}
                    <div className="row" style={{ justifyContent: "space-between" }}>
                      <div className="col-md-6 ">
                        <div className="form-group">
                          <PrimaryButton style={{ color: "#fff", width: "100%" }} onClick={handleClickOpen}>Generate Token</PrimaryButton>
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div className="form-group">
                        <SecondaryButton style={{ width: "100%" }} onClick={handleClickOpenMember}>Selanjutnya</SecondaryButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {dialog}
              {dialog2}
            </div>
          </div>
        </div>
      </div>
      <FooterUser />
    </>
  )
}

export default Token;