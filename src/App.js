import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Vacancy from "./pages/user/Vacancy";
import HomeUser from "./pages/user/HomeUser";
import DetailVacancy from "./pages/user/DetailVacancy";
import DetailCompany from "./pages/user/DetailCompany";
import UserContainer from "./components/UserContainer";
import AdminContainer from "./components/AdminContainer";
import { SearchProvider } from "./components/SearchContext/SearchContext";

function App() {
  return (
    <SearchProvider>
      <div className="App">
        <Router>
          <Switch>
            {/* {APP_ROUTES.map((value, index) => {
              return (
                <PublicRoute
                  key={value.name}
                  restricted={value.restricted}
                  path={value.path}
                  component={value.component}
                  exact={value.exact}
                  isNotFound={value.isNotFound}
                />
              );
            })}
            
            <Route path="/">
              <Redirect to="/login" />
            </Route> */}

            <Route exact restricted path="/" component={HomeUser} />
            <Route exact restricted path="/login" component={Login} />
            <Route exact restricted path="/lowongan" component={Vacancy} />
            <Route exact restricted path="/lowongan/:id" component={DetailVacancy} />
            <Route exact restricted path="/detail-perusahaan/:id" component={DetailCompany} />
            <Route isUser private path="/pelamar" component={UserContainer} />
            <Route isAdmin private path="/perusahaan" component={AdminContainer} />
            <Route exact private isNotFound restricted path="/*" component={ErrorPage} />
            <Route exact private isNotFound restricted path="/error" component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    </SearchProvider>
  );
}

export default App;