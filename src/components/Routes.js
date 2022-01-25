import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import Booking from "./Booking";
import Listing from "./Listing";
import AddList from "./AddList";
import UserProfile from "./UserProfile";
import Table from "./Table";
import Chart from "./Chart";

export default function Routes() {
  return(
    <BrowserRouter>
        <Switch>
        <Route path="/" exact> <Dashboard /> </Route>
        <Route path="/booking"> <Booking /> </Route>
        <Route path="/listing"> <Listing /> </Route>
        <Route path="/add-list"> <AddList /> </Route>
        <Route path="/user-profile"> <UserProfile /> </Route>
        <Route path="/table"> <Table /> </Route>
        <Route path="/chart"> <Chart /> </Route>
        </Switch>
    </BrowserRouter>
  )
}
