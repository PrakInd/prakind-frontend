import React from "react";
import GoTop from "./GoTop";

export default function Footer() {
  return (
    <div>
      <footer className="sticky-footer">
        <div className="container">
          <div className="text-center">
            <small>Copyright © PrakInd 2022</small>
          </div>
        </div>
      </footer>
      {/* Scroll to Top Button
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fa fa-angle-up" />
      </a> */}
      <GoTop />
    </div>
  );
}
