import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { getToken, getUserId } from "../../utils/Auth";
import { 
  VACANCY_BY_USER_ID, 
  // SERVER_NAME_DEV 
} from "../../constants/urls";
import { Link } from "react-router-dom";

const ListLowongan = () => {
  const [vacancies, setVacancies] = useState([]);

  useEffect(() => {
    axios
      .get(VACANCY_BY_USER_ID(getUserId()), {
        headers: { Authorization: `Bearer ${getToken()}` }
      })
      .then(res => {
        setVacancies(res.data.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="content-wrapper">
      <div className="container-fluid">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            PrakInd / List Lowongan
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
              <Link to="/perusahaan/lowongan/tambah">Buat Lowongan</Link>
            </Button>
          </div>
          
          <div className="list_general">
            <ul>
              {vacancies.map((val, index) => {
                return (
                  <li>
                    {/* <figure>
                      <img src={`${SERVER_NAME_DEV}/${val.company.logo}`} alt="company-logo" />
                    </figure> */}
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

        <nav aria-label="...">
          <ul className="pagination pagination-sm add_bottom_30">
            <li className="page-item disabled">
              <a className="page-link" href="#0" tabIndex={-1}>
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#0">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#0">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#0">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#0">
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