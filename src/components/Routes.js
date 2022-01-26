import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import ListVacancy from '../pages/ListVacancy';
import ListApplicants from '../pages/ListApplicants';
import AddVacancy from '../pages/AddVacancy';
import CompanyProfile from '../pages/CompanyProfile';
import Table from '../pages/Table';
import Chart from "./Chart";
import Login from '../pages/Login';

export default function Routes() {
  return(
    <BrowserRouter>
        <Switch>
        <Route path="/" exact> <Login /> </Route>
        <Route path="/dashboard"> <Dashboard /> </Route>
        <Route path="/list-applicants"> <ListApplicants /> </Route>
        <Route path="/list-vacancy"> <ListVacancy /> </Route>
        <Route path="/add-vacancy"> <AddVacancy /> </Route>
        <Route path="/company-profile"> <CompanyProfile /> </Route>
        <Route path="/table"> <Table /> </Route>
        {/* <Route path="/chart"> <Chart /> </Route> */}
        </Switch>
    </BrowserRouter>
  )
}
