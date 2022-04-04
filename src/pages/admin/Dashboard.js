import React, { useEffect, useState } from "react";
import axios from "axios";
import { getToken, getUserId } from "../../utils/Auth";
import { VACANCY_BY_USER_ID } from "../../constants/urls";

const Dashboard = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    axios
      .get(VACANCY_BY_USER_ID(parseInt(getUserId())), {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => {
        console.log("res", res);
        // setVacancies()
      })
  })
  return (
    <div>
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            PrakInd / Dashboard
          </li>
        </ol>
        <div className="row">
          {}
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card dashboard text-white bg-primary o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-envelope-open" />
                </div>
                <div className="mr-5">
                  <h5>5 New Applicants on Mobile Developer</h5>
                </div>
              </div>
              <a
                className="card-footer text-white clearfix small z-1"
                href="messages.html"
              >
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card dashboard text-white bg-warning o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-envelope-open" />
                </div>
                <div className="mr-5">
                  <h5>10 New Applicants on Frontend Developer</h5>
                </div>
              </div>
              <a
                className="card-footer text-white clearfix small z-1"
                href="reviews.html"
              >
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card dashboard text-white bg-success o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-envelope-open" />
                </div>
                <div className="mr-5">
                  <h5>10 New Applicants on Backend Developer</h5>
                </div>
              </div>
              <a
                className="card-footer text-white clearfix small z-1"
                href="bookings.html"
              >
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-3">
            <div className="card dashboard text-white bg-danger o-hidden h-100">
              <div className="card-body">
                <div className="card-body-icon">
                  <i className="fa fa-fw fa-envelope-open" />
                </div>
                <div className="mr-5">
                  <h5>12 New Applicants on UI /UX Designer</h5>
                </div>
              </div>
              <a
                className="card-footer text-white clearfix small z-1"
                href="bookmarks.html"
              >
                <span className="float-left">View Details</span>
                <span className="float-right">
                  <i className="fa fa-angle-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;