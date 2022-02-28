import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import FooterUser from "../../components/FooterUser";
import Filter from "../../components/Filter";
import VacancyCard from "../../components/VacancyCard";
import axios from "axios";
import { SHOW_VACANCIES } from "../../constants/urls";

const Vacancy = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    axios
      .get(SHOW_VACANCIES)
      .then(res => {
        setVacancies(res.data.data);
      })
      .catch(err => console.log(err))

    return () => {
      setVacancies([]);
    }
  }, []);

  return (
    <div>
      <Header />
      <p></p>
      <Filter />
      <div className="container margin_60_35">
        {
          vacancies.map(val => {
            return (
              <VacancyCard vacancy={val} />
            )
          })
        }
      </div>
      <FooterUser />
    </div>
  )

}

export default Vacancy;