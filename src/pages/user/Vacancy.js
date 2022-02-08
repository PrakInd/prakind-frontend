import React from "react";
import Header from "../../components/Header";
import FooterUser from "../../components/FooterUser";
import Filter from "../../components/Filter";
import VacancyCard from "../../components/VacancyCard";

const Vacancy = () => {
  return (
    <div>
      <Header />
      <p></p>
      <Filter />
      <div className="container margin_60_35">
        <VacancyCard />
        <VacancyCard />

      </div>

      <FooterUser />
    </div>
  )

}

export default Vacancy;