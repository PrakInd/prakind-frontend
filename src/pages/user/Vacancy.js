import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import Filter from "../../components/Filter";
import FooterUser from "../../components/FooterUser";
import { SHOW_VACANCIES } from "../../constants/urls";
import SearchResults from "../../components/SearchResults";
import { SearchContext } from "../../contexts/SearchContext";
import Header from "../../components/Header";

const Vacancy = () => {
  const [search] = useContext(SearchContext);
  const [vacancies, setVacancies] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    axios
      .get(SHOW_VACANCIES)
      .then(res => {
        if (search.position !== '' || search.company !== '' || search.location !== '') {
          let newFilter = res.data.data.filter(value => {
            let filterPos = value.name.toLowerCase().includes(search.position);
            let filterCom = value.company.name.toLowerCase().includes(search.company);
            let filterLoc = value.location.toLowerCase().includes(search.location);

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
  }, [search.position, search.company, search.location]);

  const getFilteredData = data => {
    setFilteredData(data);
  };

  return (
    <>
      <Header />
      <section className="hero_in tours">
        <div className="wrapper">
          <div className="container">
            <h1 className="fadeInUp">
              <span />
              Praktik Industri
            </h1>
          </div>
        </div>
      </section>
      <Filter
        position={search.position}
        company={search.company}
        location={search.location}
        data={vacancies}
        getFilteredData={getFilteredData}
      />
      <div className="container">
        <SearchResults
          data={(filteredData.length === 0) ? vacancies : filteredData}
        />
      </div>
      <FooterUser />
    </>
  );
};

export default Vacancy;