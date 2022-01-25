import React from "react";
import Footer from "./Footer";

export default function Chart() {
  return (
    <div>
      <div className="content-wrapper">
        <div className="container-fluid">
          {/* Breadcrumbs*/}
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="#">Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Tables</li>
          </ol>
          {/* Area Chart Example*/}
          <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-area-chart" /> Area Chart Example
            </div>
            <div className="card-body">
              <canvas id="myAreaChart" width="100%" height={30} />
            </div>
            <div className="card-footer small text-muted">
              Updated yesterday at 11:59 PM
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8">
              {/* Example Bar Chart Card*/}
              <div className="card mb-3">
                <div className="card-header">
                  <i className="fa fa-bar-chart" /> Bar Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myBarChart" width={100} height={50} />
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Example Pie Chart Card*/}
              <div className="card mb-3">
                <div className="card-header">
                  <i className="fa fa-pie-chart" /> Pie Chart Example
                </div>
                <div className="card-body">
                  <canvas id="myPieChart" width="100%" height={100} />
                </div>
                <div className="card-footer small text-muted">
                  Updated yesterday at 11:59 PM
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /container-fluid*/}
      </div>
      {/* /container-wrapper*/}
      <Footer />
    </div>
  );
}
