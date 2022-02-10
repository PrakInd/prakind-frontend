import React from "react";

const VacancyCard = () => {
  return (
    <div className="isotope-wrapper">
      <div className="box_list isotope-item latest">
        <div className="row no-gutters">
          <div className="col-lg-2">
            <figure>
              <img src="img/teknologi.jpeg" className="img-fluid" alt width={800} height={533} />
            </figure>
          </div>
          <div className="col-lg-10">
            <div className="wrapper">
              <a href="#0" className="wish_bt" />
              <h3><a href="/magang-detail-vacancy">UI/UX Designer</a></h3>
              <h5><a href="hotel-detail.html">PT OTAK KANAN</a></h5>
              <p>Dicam diceret ut ius, no epicuri dissentiet philosophia vix. Id usu zril tacimates neglegentur.
                Eam
                id legimus torquatos cotidieque, usu decore percipitur definitiones ex, nihil utinam recusabo mel
                no.</p>
              <span className="period">Periode <strong>Januari - Februari</strong></span>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}

export default VacancyCard;