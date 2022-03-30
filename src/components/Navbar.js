import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Navigation*/}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-default fixed-top"
        id="mainNav"
      >
        <a className="navbar-brand" href="/">
          <img
            src="img/logo2.png"
            data-retina="true"
            alt
            width={150}
            height={36}
          />
        </a>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Dashboard"
            >
              <a className="nav-link" href="/">
                <i className="fa fa-fw fa-dashboard" />
                <span className="nav-link-text">Dashboard</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title
              data-original-title="List Applicants"
            >
              <a className="nav-link" href="/list-applicants">
                <i className="fa fa-fw fa-calendar-check-o" />
                <span className="nav-link-text">
                  Applicants{" "}
                  <span className="badge badge-pill badge-primary">6 New</span>
                </span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="List Applicants"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#collapseMylistings"
                data-parent="#mylistings"
              >
                <i className="fa fa-fw fa-list" />
                <span className="nav-link-text">List Vacancies</span>
              </a>
              <ul
                className="sidenav-second-level collapse"
                id="collapseMylistings"
              >
                {/* <li>
                  <a href="/listing">
                    Pending{" "}
                    <span className="badge badge-pill badge-primary">6</span>
                  </a>
                </li> */}
                <li>
                  <a href="/list-vacancy">
                    Active{" "}
                    <span className="badge badge-pill badge-success">6</span>
                  </a>
                </li>
                <li>
                  <a href="/list-vacancy">
                    Expired{" "}
                    <span className="badge badge-pill badge-danger">6</span>
                  </a>
                </li>
              </ul>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Add vacancy"
            >
              <a className="nav-link" href="/add-vacancy">
                <i className="fa fa-fw fa-plus-circle" />
                <span className="nav-link-text">Add Vacancy</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Company profile"
            >
              <a className="nav-link" href="/company-profile">
                <i className="fa fa-fw fa-user" />
                <span className="nav-link-text">Company Profile</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Apprentice"
            >
              <a className="nav-link" href="/table">
                <i className="fa fa-fw fa-gear" />
                <span className="nav-link-text">Apprentice</span>
              </a>
            </li>
            {/* <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Components"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="/table"
                data-parent="#Components"
              >
                <i className="fa fa-fw fa-gear" />
                <span className="nav-link-text">Apprentice</span>
              </a>
              <ul
                className="sidenav-second-level collapse"
                id="collapseComponents"
              >
                <li>
                  <a href="/charts">Charts</a>
                </li>
                <li>
                  <a href="/table">Tables</a>
                </li>
              </ul>
            </li> */}
          </ul>
          <ul className="navbar-nav sidenav-toggler">
            <li className="nav-item">
              <a className="nav-link text-center" id="sidenavToggler">
                <i className="fa fa-fw fa-angle-left" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                <i className="fa fa-fw fa-sign-out" />
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;