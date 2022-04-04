import React, { useState, useEffect } from "react";
import axios from "axios";
import { SHOW_VACANCIES } from "../../constants/urls";
import SearchResult from "../../components/SearchResult";

const FirstTab = () => {
  // const [vacancies, setVacancies] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(SHOW_VACANCIES)
  //     .then(res => {
  //       console.log(res)
  //       setVacancies(res.data.data);
  //       // setCompany(res.data.data.company);

  //     })
  // })

  return (
    <div className="FirstTab">
      {/* <SearchResult /> */}
      <p>First Tab!! Hurray!!</p>
      <p>Raden, ini aku berusaha memunculkan card dari lowongan yang dia apply, tapi tapi ..</p>
      {/* First tab content will go here */}
    </div>
  );
};
export default FirstTab;