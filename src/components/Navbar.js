import React from "react";

export default function Navbar() {
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
              data-original-title="Bookings"
            >
              <a className="nav-link" href="/booking">
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
              title="My listings"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#collapseMylistings"
                data-parent="#mylistings"
              >
                <i className="fa fa-fw fa-list" />
                <span className="nav-link-text">My Vacancies</span>
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
                  <a href="/listing">
                    Active{" "}
                    <span className="badge badge-pill badge-success">6</span>
                  </a>
                </li>
                <li>
                  <a href="/listing">
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
              title="Add listing"
            >
              <a className="nav-link" href="/add-list">
                <i className="fa fa-fw fa-plus-circle" />
                <span className="nav-link-text">Add Vacancy</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="My profile"
            >
              <a className="nav-link" href="/user-profile">
                <i className="fa fa-fw fa-user" />
                <span className="nav-link-text">Company Profile</span>
              </a>
            </li>
            <li
              className="nav-item"
              data-toggle="tooltip"
              data-placement="right"
              title="Components"
            >
              <a
                className="nav-link nav-link-collapse collapsed"
                data-toggle="collapse"
                href="#collapseComponents"
                data-parent="#Components"
              >
                <i className="fa fa-fw fa-gear" />
                <span className="nav-link-text">Components</span>
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
            </li>
          </ul>
          <ul className="navbar-nav sidenav-toggler">
            <li className="nav-item">
              <a className="nav-link text-center" id="sidenavToggler">
                <i className="fa fa-fw fa-angle-left" />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mr-lg-2"
                id="messagesDropdown"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-fw fa-envelope" />
                <span className="d-lg-none">
                  Messages
                  <span className="badge badge-pill badge-primary">12 New</span>
                </span>
                <span className="indicator text-primary d-none d-lg-block">
                  <i className="fa fa-fw fa-circle" />
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="messagesDropdown">
                <h6 className="dropdown-header">New Messages:</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <strong>David Miller</strong>
                  <span className="small float-right text-muted">11:21 AM</span>
                  <div className="dropdown-message small">
                    Hey there! This new version of SB Admin is pretty awesome!
                    These messages clip off when they reach the end of the box
                    so they don't overflow over to the sides!
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <strong>Jane Smith</strong>
                  <span className="small float-right text-muted">11:21 AM</span>
                  <div className="dropdown-message small">
                    I was wondering if you could meet for an appointment at 3:00
                    instead of 4:00. Thanks!
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <strong>John Doe</strong>
                  <span className="small float-right text-muted">11:21 AM</span>
                  <div className="dropdown-message small">
                    I've sent the final files over to you for review. When
                    you're able to sign off of them let me know and we can
                    discuss distribution.
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item small" href="#">
                  View all messages
                </a>
              </div>
            </li> */}
            {/* <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mr-lg-2"
                id="alertsDropdown"
                href="#"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-fw fa-bell" />
                <span className="d-lg-none">
                  Notifications
                  <span className="badge badge-pill badge-warning">6 New</span>
                </span>
                <span className="indicator text-warning d-none d-lg-block">
                  <i className="fa fa-fw fa-circle" />
                </span>
              </a>
              <div className="dropdown-menu" aria-labelledby="alertsDropdown">
                <h6 className="dropdown-header">New Notifications:</h6>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <span className="text-success">
                    <strong>
                      <i className="fa fa-long-arrow-up fa-fw" />
                      Status Update
                    </strong>
                  </span>
                  <span className="small float-right text-muted">11:21 AM</span>
                  <div className="dropdown-message small">
                    This is an automated server response message. All systems
                    are online.
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <span className="text-danger">
                    <strong>
                      <i className="fa fa-long-arrow-down fa-fw" />
                      Status Update
                    </strong>
                  </span>
                  <span className="small float-right text-muted">11:21 AM</span>
                  <div className="dropdown-message small">
                    This is an automated server response message. All systems
                    are online.
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="#">
                  <span className="text-success">
                    <strong>
                      <i className="fa fa-long-arrow-up fa-fw" />
                      Status Update
                    </strong>
                  </span>
                  <span className="small float-right text-muted">11:21 AM</span>
                  <div className="dropdown-message small">
                    This is an automated server response message. All systems
                    are online.
                  </div>
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item small" href="#">
                  View all notifications
                </a>
              </div>
            </li> */}
            {/* <li className="nav-item">
              <form className="form-inline my-2 my-lg-0 mr-lg-2">
                <div className="input-group">
                  <input
                    className="form-control search-top"
                    type="text"
                    placeholder="Search for..."
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                      <i className="fa fa-search" />
                    </button>
                  </span>
                </div>
              </form>
            </li> */}
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
      {/* /Navigation*/}
    </div>
  );
}
