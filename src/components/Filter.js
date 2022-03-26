import React, { useState } from "react";

const Filter = props => {
  const { position, company, location, data, getFilteredData } = props;
  const [positionInput, setPositionInput] = useState(position || '');
  const [companyInput, setCompanyInput] = useState(company || '');
  const [locationInput, setLocationInput] = useState(location ||'');

  const handleFilter = e => {
    e.preventDefault();

    let newFilter = data.filter(value => {
      let filterPos = value.name.toLowerCase().includes(positionInput);
      let filterCom = value.company.name.toLowerCase().includes(companyInput);
      let filterLoc = value.location.toLowerCase().includes(locationInput);

      return filterPos && filterCom & filterLoc;
    });

    if (positionInput === '' && companyInput === '' && locationInput === '') {
      getFilteredData(data);
    } else {
      getFilteredData(newFilter);
    }
  };

  return (
    <div className="filters_listing sticky_horizontal">
      <div className="container">
        <div className="col-lg-12">
          <form onSubmit={handleFilter} className="row no-gutters custom-search-input-2 inner">
            <div className="col-lg-4">
              <div className="form-group">
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Cari posisi" 
                  value={positionInput}
                  onChange={e => setPositionInput(e.target.value)}
                />
                <i className="icon_search" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Cari perusahaan" 
                  value={companyInput}
                  onChange={e => setCompanyInput(e.target.value)}
                />
                <i className="icon_building" />
              </div>
            </div>
            <div className="col-lg-3">
              <div className="form-group">
                <input 
                  className="form-control" 
                  type="text" 
                  placeholder="Cari lokasi"
                  value={locationInput} 
                  onChange={e => setLocationInput(e.target.value)}
                />
                <i className="icon_pin_alt" />
              </div>
            </div>
            <div className="col-lg-2">
              <input type="submit" className="btn_search" defaultValue="Search" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Filter;