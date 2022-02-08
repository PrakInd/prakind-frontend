import React from "react";

const Filter = () => {
  return (
    <div className="filters_listing sticky_horizontal">
      <div className="container">
        <div className="col-lg-12">
          <div className="row no-gutters custom-search-input-2 inner">
            <div className="col-lg-4">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Cari posisi" />
                <i className="icon_search" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Cari perusahaan" />
                <i className="icon_building" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Cari lokasi" />
                <i className="icon_pin_alt" />
              </div>
            </div>

            <div className="col-lg-2">
              <input type="submit" className="btn_search" defaultValue="Search" />
            </div>
          </div>
          {/* /row */}
        </div>
      </div>
      {/* /container */}
    </div>
    /* /filters */

  )
}

export default Filter;