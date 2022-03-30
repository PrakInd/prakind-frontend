import React from "react";
import Button from '@mui/material/Button';

const ListLowongan = () => {
  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            List Lowongan
          </li>
        </ol>
        <div className="box_general">
          <div className="header_box">
            <h2 className="d-inline-block">List Lowongan</h2>
            <Button sx={{
              marginLeft: "720px", 
              backgroundColor: "#FC9400", 
              '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}}} 
              variant="contained" >Buat Lowongan</Button>
            {/* <div className="filter">
              <select name="orderby" className="selectbox">
                <option value="Any time">Any time</option>
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
              </select>
            </div> */}
          </div>
          <div className="list_general">
            <ul>
              <li>
                <figure>
                  <img src="img/logo.png" alt />
                </figure>
                <small>IT Software</small>
                <h4>Backend Developer</h4>
                <p>
                  Design dan Implement Microservices dengan Node JS sesuai kebutuhan bisnis.
                  Develop dan maintain server API.
                  Design, Maintain dan Integrasi database.
                  Testing dan debugging code sebelum deployment.
                </p>
                <Button sx={{
                  marginLeft: "0px", 
                  backgroundColor: "#FC9400", 
                  '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}}} variant="contained" >Edit</Button>
                <Button sx={{
                  marginLeft: "40px", 
                  backgroundColor: "#EF4444", 
                  '&:hover':{backgroundColor: "#CC0000"}}} variant="contained" >Hapus</Button>
                {/* <p>
                  <a href="#0" className="btn_1 gray">
                    <i className="fa fa-fw fa-eye" /> Edit
                  </a>
                </p>
                <ul className="buttons">
                  <li>
                    <a href="#0" className="btn_1 gray delete wishlist_close">
                      <i className="fa fa-fw fa-times-circle-o" /> Delete
                    </a>
                  </li>
                </ul> */}
              </li>
              <li>
                <figure>
                  <img src="img/logo.png" alt />
                </figure>
                <small>IT Software</small>
                <h4>Frontend Developer</h4>
                <p>
                  Mahir dalam HTML, CSS, Javascript, JSON, Java.
                  Mengerti React-Ntv, Graphql.
                </p>
                <p>
                  <a href="#0" className="btn_1 gray">
                    <i className="fa fa-fw fa-eye" /> Edit
                  </a>
                </p>
                <ul className="buttons">
                  <li>
                    <a href="#0" className="btn_1 gray delete wishlist_close">
                      <i className="fa fa-fw fa-times-circle-o" /> Delete
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <figure>
                  <img src="img/logo.png" alt />
                </figure>
                <small>IT Software</small>
                <h4>Mobile Developer</h4>
                <p>
                  Berpengelaman menggunakan Flutter / Java / C# / Kotlin Programming (Android) / Swift iOS.
                  Menguasai web services (SOAP/REST), multithreading, HTML, CSS, Javascript, JQuery and Android Studio / Eclipse, Microsoft Visual Studio.
                  Memiliki pengetahuan terhadap Github.
                  Memiliki pengetahuan terhadap Android SDK menjadi nilai plus.
                </p>
                <p>
                  <a href="#0" className="btn_1 gray">
                    <i className="fa fa-fw fa-eye" /> Edit
                  </a>
                </p>
                <ul className="buttons">
                  <li>
                    <a href="#0" className="btn_1 gray delete wishlist_close">
                      <i className="fa fa-fw fa-times-circle-o" /> Delete
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
        <nav aria-label="...">
          <ul className="pagination pagination-sm add_bottom_30">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex={-1}>
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListLowongan;