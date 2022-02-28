import React from "react";
import { NavLink } from "react-router-dom";

const VacancyCard = ({ vacancy }) => {
  return (
    <div className="isotope-wrapper">
      <div className="box_list isotope-item latest">
        <div className="row no-gutters">
          <div className="col-lg-2">
            <figure>
              <img src="img/teknologi.jpeg" className="img-fluid" alt width={800} height={533} />
            </figure>
          </div>
          <div className="col-lg-10">
            <div className="wrapper">
              <a href="#0" className="wish_bt" />
              <h3><NavLink to={'/lowongan/' + vacancy.id}>{vacancy.name}</NavLink></h3>
              <h5><NavLink to="hotel-detail.html">{vacancy.company.name}</NavLink></h5>
              <p>{vacancy.description}</p>
              <span className="period">Periode <strong>{vacancy.period_start}</strong> - <strong>{vacancy.period_end}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default VacancyCard;