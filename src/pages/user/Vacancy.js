import React, { useState, useEffect } from "react";
import FooterUser from "../../components/FooterUser";
import Filter from "../../components/Filter";
import VacancyCard from "../../components/VacancyCard";
import axios from "axios";
import { SHOW_VACANCIES } from "../../constants/urls";
import Navbar from "../../components/user/Navbar";

const Vacancy = () => {
  const [vacancies, setVacancies] = useState([]);
  // const [companies, setCompanies] = useState([]);

  useEffect(() => {
    axios
      .get(SHOW_VACANCIES)
      .then(res => {
        // console.log(res)
        setVacancies(res.data.data);
        // setCompanies(res.data.data);
      })
      .catch(err => console.log(err))

    return () => {
      setVacancies([]);
      // setCompanies([]);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Filter />
      <div className="container margin_60_35">
        {
          vacancies.map(val => {
            return (
              <VacancyCard
                vacancy={val}
              // company={val}
              />
            )
          })
        }
      </div>
      <FooterUser />
    </>
  )

}

export default Vacancy;