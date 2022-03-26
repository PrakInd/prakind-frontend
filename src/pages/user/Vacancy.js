import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Filter from "../../components/Filter";
import Navbar from "../../components/user/Navbar";
import FooterUser from "../../components/FooterUser";
import { SHOW_VACANCIES } from "../../constants/urls";
import SearchResults from "../../components/SearchResults";

const Vacancy = () => {
  const [vacancies, setVacancies] = useState([]);
  const { position, company, location } = useLocation().state;
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get(SHOW_VACANCIES)
      .then(res => {
        if (position || company || location) {
          let newFilter = res.data.data.filter(value => {
            let filterPos = value.name.toLowerCase().includes(position);
            let filterCom = value.company.name.toLowerCase().includes(company);
            let filterLoc = value.location.toLowerCase().includes(location);
      
            return filterPos && filterCom & filterLoc;
          });

          setFilteredData(newFilter);
        }

        setVacancies(res.data.data);
      })
      .catch(err => console.log(err))

    return () => {
      setVacancies([]);
      setFilteredData([]);
    }
  }, [position, company, location]);

  const getFilteredData = data => {
    setFilteredData(data);
  };

  return (
    <>
      <Navbar />
      <Filter 
        position={position}
        company={company}
        location={location}
        data={vacancies}
        getFilteredData={getFilteredData}
      />
      <div className="container margin_60_35">
        <SearchResults 
          data={(filteredData.length === 0) ? vacancies : filteredData}
        />
      </div>
      <FooterUser />
    </>
  );
};

export default Vacancy;