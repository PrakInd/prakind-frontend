import React from "react";
import { NavLink } from "react-router-dom";

const NotifikasiCard = ({
  notifikasi,
  
}) => {
  return (
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
            <a className="card-footer text-white clearfix small z-1" href="messages.html">
                <span className="float-left">View Details</span>
                <span className="float-right">
                    <i className="fa fa-angle-right" />
                </span>
            </a>
        </div>
    </div>
  )
}

export default VacancyCard;

