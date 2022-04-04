import React, { useEffect, useState } from "react";
import Chip from '@mui/material/Chip';
import axios from "axios";
import { SHOW_APPLICATIONS } from "../../constants/urls";
import { getToken } from "../../utils/Auth";
import { Link } from "react-router-dom";

const ListPelamar = () => {
  const [applications, setApplications] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios
      .get(SHOW_APPLICATIONS, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => {
        console.log("list pelamar:", res.data.data);
        setApplications(res.data.data);
        setProfiles(res.data.data.profile);
      })
      .catch(err => console.log(err))

      return () => {
        setApplications([]);
        setProfiles([]);
      }
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            PrakInd / List Pelamar
          </li>
        </ol>
        <div className="box_general">
          <div className="header_box">
            <h2 className="d-inline-block">List Pelamar</h2>
            <div className="filter">
              <select name="orderby" className="selectbox">
                <option value="Any status">All</option>
                <option value="Approved">Mobile Developer</option>
                <option value="Pending">Frontend Developer</option>
                <option value="Cancelled">Backend Developer</option>
              </select>
            </div>
          </div>

          {/* CARD */}
          <div className="list_general">
            <ul>
            {(applications.map((val, index) => {
              if (val.status === "dalam_seleksi") {
                return (
                  <li key={index}>
                    <figure>
                      <img 
                        src={val.profile.user.avatar} 
                        alt="user-img"
                        style={{ width:"1.5rem" }}
                      />
                    </figure>
                    <h4>{val.profile.user.name}</h4>
                    <ul>
                      <li>
                        <label>Institution</label>
                        <p>{val.profile.institution.name}</p>
                      </li>
                      <li>
                        <label>Internship Start</label>
                        <p>{val.period_start}</p>
                      </li>
                      <li>
                        <label>Internship End</label>
                        <p>{val.period_end}</p>
                      </li>
                    </ul>
                      <Link className="btn_1 gray" to={`/perusahaan/pelamar/detail/${val.profile.user.id}`}>
                        Lihat Detail Pelamar
                      </Link>
                  </li>
                  // <li key={val.id}>
                  //   <figure>
                  //     <img src={val.profile.user.avatar} alt />
                  //   </figure>
                  //   <h4>
                  //     {val.profile.user.name}
                  //   </h4>
                  //   <ul className="booking_list">
                  //     <li>
                  //       <strong>Institution</strong> {val.profile.institution}
                  //     </li>
                  //     <li>
                  //       <strong>Start internship</strong> {val.period_start}
                  //     </li>
                  //     <li>
                  //       <strong>Finished internship</strong> {val.period_end}
                  //     </li>
                  //   </ul>
                  //   <p>
                  //     <a href="#0" className="btn_1 gray">
                  //       <i className="fa fa-fw fa-eye" />
                  //       View Details
                  //     </a>
                  //   </p>
                  //   <ul className="buttons">
                  //     <li>
                  //       <a href="#0" className="btn_1 gray approve">
                  //         <i className="fa fa-fw fa-check-circle-o" /> Approve
                  //       </a>
                  //     </li>
                  //     <li>
                  //       <a href="#0" className="btn_1 gray delete">
                  //         <i className="fa fa-fw fa-times-circle-o" /> Refuse
                  //       </a>
                  //     </li>
                  //   </ul>
                  // </li>
                );
              }
            }))}
            </ul>
          </div>
        </div>

        {/* PAGINATION */}
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

export default ListPelamar;