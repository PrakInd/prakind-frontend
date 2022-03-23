import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function ListApplicant() {
  return (
    <div>
      <Navbar />
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumbs*/}
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Applicants list</li>
          </ol>
          <div className="box_general">
            <div className="header_box">
              <h2 className="d-inline-block">Applicants list</h2>
              <div className="filter">
                <select name="orderby" className="selectbox">
                  <option value="Any status">All</option>
                  <option value="Approved">Mobile Developer</option>
                  <option value="Pending">Frontend Developer</option>
                  <option value="Cancelled">Backend Developer</option>
                </select>
              </div>
            </div>
            <div className="list_general">
              <ul>
                <li>
                  <figure>
                    <img src="img/avatar1.jpg" alt />
                  </figure>
                  <h4>
                    Galih Primayasa
                    {/* <i className="pending">Pending</i> */}
                  </h4>
                  <ul className="booking_list">
                    <li>
                      <strong>Institution</strong> Politeknik Elektronika Negeri Surabaya (PENS)
                    </li>
                    <li>
                      <strong>Major</strong> D4 Teknik Informatika
                    </li>
                    <li>
                      <strong>Start internship</strong> 22 Maret 2022
                    </li>
                    <li>
                      <strong>Finished internship</strong> 22 Mei 2022
                    </li>
                  </ul>
                  <p>
                    <a href="#0" className="btn_1 gray">
                      {/* <i className="fa fa-fw fa-envelope" />  */}
                      <i className="fa fa-fw fa-eye" />
                      View Details
                    </a>
                  </p>
                  <ul className="buttons">
                    <li>
                      <a href="#0" className="btn_1 gray approve">
                        <i className="fa fa-fw fa-check-circle-o" /> Approve
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="btn_1 gray delete">
                        <i className="fa fa-fw fa-times-circle-o" /> Refuse
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <figure>
                    <img src="img/avatar2.jpg" alt />
                  </figure>
                  <h4>
                    Aisyah Ardelia
                    {/* <i className="cancel">Cancelled</i> */}
                  </h4>
                  <ul className="booking_list">
                    <li>
                      <strong>Institution</strong> Institut Teknologi Bandung (ITB)
                    </li>
                    <li>
                      <strong>Major</strong> Teknik Komputer
                    </li>
                    <li>
                      <strong>Start internship</strong> 22 Mei 2022
                    </li>
                    <li>
                      <strong>Finished internship</strong> 22 Juni 2022
                    </li>
                  </ul>
                  <p>
                    <a href="#0" className="btn_1 gray">
                      {/* <i className="fa fa-fw fa-envelope" />  */}
                      <i className="fa fa-fw fa-eye" />
                      View Details
                    </a>
                  </p>
                  <ul className="buttons">
                    <li>
                      <a href="#0" className="btn_1 gray approve">
                        <i className="fa fa-fw fa-check-circle-o" /> Approve
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="btn_1 gray delete">
                        <i className="fa fa-fw fa-times-circle-o" /> Refuse
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <figure>
                    <img src="img/avatar3.jpg" alt />
                  </figure>
                  <h4>
                    Faza Baharsyah
                    {/* <i className="approved">Approved</i> */}
                  </h4>
                  <ul className="booking_list">
                    <li>
                      <strong>Institution</strong> Universitas Gajah Mada (UGM)
                    </li>
                    <li>
                      <strong>Major</strong> Sistem Informasi
                    </li>
                    <li>
                      <strong>Start internship</strong> 22 Februari 2022
                    </li>
                    <li>
                      <strong>Finished internship</strong> 22 Mei 2022
                    </li>
                  </ul>
                  <p>
                    <a href="#0" className="btn_1 gray">
                      {/* <i className="fa fa-fw fa-envelope" />  */}
                      <i className="fa fa-fw fa-eye" />
                      View Details
                    </a>
                  </p>
                  <ul className="buttons">
                    <li>
                      <a href="#0" className="btn_1 gray approve">
                        <i className="fa fa-fw fa-check-circle-o" /> Approve
                      </a>
                    </li>
                    <li>
                      <a href="#0" className="btn_1 gray delete">
                        <i className="fa fa-fw fa-times-circle-o" /> Refuse
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          {/* /box_general*/}
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
          {/* /pagination*/}
        </div>
        {/* /container-fluid*/}
      </div>
      {/* /container-wrapper*/}
      <Footer />
    </div>
  );
}
