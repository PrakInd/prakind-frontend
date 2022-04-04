import React, { useEffect, useState } from "react";
import FooterUser from "../../components/FooterUser";
import Header from "../../components/Header";
import PropTypes from 'prop-types';
import FirstTab from "../../components/AllTabs/FirstTab";
import SecondTab from "../../components/AllTabs/SecondaryTab";


const MyActivity = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };


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
          <div className="Tabs">
            {/*Tab nav */}
            <ul className="nav">
              <li className={activeTab === "tab1" ? "active" : ""}
                onClick={handleTab1}>
                Kegiatan Aktif              </li>
              <li className={activeTab === "tab2" ? "active" : ""}
                onClick={handleTab2}>
                Status Pendaftaran
              </li>
            </ul>

            <div className="outlet">

              {activeTab === "tab1" ? <FirstTab /> : <SecondTab />}

            </div>

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

