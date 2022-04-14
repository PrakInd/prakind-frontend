import React, { useState } from "react";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import { BottomNavigation, BottomNavigationAction } from "@mui/material"

const MyActivity = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <Header />
      <div className="container-fluid"
        style={{ width: "100%", paddingTop: "7%" }}
      >
        <div className="box_general padding_bottom">
          <div className="header_box version_2">
            <h2>Aktifitasku</h2>
          </div>
          <div>
            <BottomNavigation
              showLabels
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              sx={{
                color: "black",
                justifyContent: "left",
                '&& .Mui-selected, && .Mui-selected:hover': {
                  bgcolor: '#FC9400',
                  color: "black",
                  border: "transparent",
                },
                '&& .MuiBottomNavigationAction-label': {
                  fontSize: 16,
                }
              }}
            >
              <BottomNavigationAction value="" label="Kegiatan Aktif" />
              <BottomNavigationAction value="antri" label="Status Pendaftaran" />
            </BottomNavigation>
          </div>
        </div>
        <div>

        </div>
      </div>
      <FooterUser />
    </>
  )
}

export default MyActivity;