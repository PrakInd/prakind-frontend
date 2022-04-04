import axios from "axios";
import React, { useState, useEffect } from "react";
import { SHOW_APPLICATIONS } from "../../constants/urls";
import { getToken } from "../../utils/Auth";

const TabelMagang = () => {
  const [applications, setApplications] = useState([]);
  const [sertificate, setSertificate] = useState(null);
  
  useEffect(() => {
    axios
      .get(SHOW_APPLICATIONS, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => {
        console.log(res);
        setApplications(res.data.data);
      })
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            PrakInd / Dashboard
          </li>
        </ol>
        <div className="card mb-3">
          <div className="card-header">
            <i className="fa fa-table" /> Data Table Example
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table
                className="table table-bordered"
                id="dataTable"
                width="100%"
                cellSpacing={0}
              >
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Institution</th>
                    <th>Period Start</th>
                    <th>Period End</th>
                    <th>Sertifikat</th>
                  </tr>
                </thead>
                {/* <tfoot>
                  <tr>
                    <th>Name</th>
                    <th>Institution</th>
                    <th>Period Start</th>
                    <th>Period End</th>
                  </tr>
                </tfoot> */}
                <tbody>
                  {applications.map((val, index) => {
                    if (val.status === "diterima") {
                      return (
                        <tr key={index}>
                          <td>{val.profile.user.name}</td>
                          <td>{val.profile.institution.name}</td>
                          <td>{val.period_start}</td>
                          <td>{val.period_end}</td>
                          <td>{val.certicate}</td>
                        </tr>
                      );
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="card-footer small text-muted">
            Updated yesterday at 11:59 PM
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TabelMagang;