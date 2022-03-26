import React from "react";
import { NavLink } from "react-router-dom";

const SearchResult = (props) => {
  const { data } = props;

  return (
    <div className="isotope-wrapper">
      <div className="box_list isotope-item latest">
        <div className="row no-gutters">
          <div className="col-lg-2">
            <figure>
              <img src="img/teknologi.jpeg" className="img-fluid" alt="my-img" width={800} height={533} />
            </figure>
          </div>
          <div className="col-lg-10">
            <div className="wrapper">
              <h3>
                <NavLink to={"/lowongan/" + data.id}>{data.name}</NavLink>
              </h3>
              {/* <h5><NavLink to={'/detail-perusahaan/' + company.id}>{vacancy.company.name}</NavLink></h5> */}
              <h5>
                <NavLink to={"/detail-perusahaan/" + data.company.id}>{data.company.name}</NavLink>
              </h5>
              <p>{data.description}</p>
              <span className="period">
                Periode <strong>{data.period_start}</strong> - <strong>{data.period_end}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;