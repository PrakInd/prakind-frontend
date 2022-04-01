import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { SHOW_VACANCIES } from "../../constants/urls";
import { getToken } from "../../utils/Auth";

const ListLowongan = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    axios
      .get(SHOW_VACANCIES, {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => {
        console.log(res);
        setVacancies(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            List Lowongan
          </li>
        </ol>
        <div className="box_general">
          <div className="header_box">
            <h2 className="d-inline-block">List Lowongan</h2>
            <Button 
              sx={{
                marginLeft: "720px", 
                backgroundColor: "#FC9400", 
                '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}
              }} 
              variant="contained" 
            >
              Buat Lowongan
            </Button>
          </div>
          
          {/* CARD */}
          <div className="list_general">
            <ul>
              {vacancies.map((val, index) => {
                return (
                  <li>
                    <figure>
                      <img src={val.company.logo} alt="company-logo" />
                    </figure>
                    <small>{val.sector}</small>
                    <h4>{val.name}</h4>
                    <p>{val.description}</p>
                    <Button 
                      sx={{
                        marginLeft: "0px", 
                        backgroundColor: "#FC9400", 
                        '&:hover':{ backgroundColor: "#FFC300", color: "#3F4456"}
                      }} 
                      variant="contained" 
                    >
                      Edit
                    </Button>
                    <Button 
                      sx={{
                        marginLeft: "40px", 
                        backgroundColor: "#EF4444", 
                        '&:hover':{backgroundColor: "#CC0000"}
                      }} 
                      variant="contained" 
                    >
                      Hapus
                    </Button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        {/* PAGINATION */}
        <nav aria-label="...">
          <ul className="pagination pagination-sm add_bottom_30">
            <li className="page-item disabled">
              <a className="page-link" href="#" tabIndex={-1}>
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ListLowongan;