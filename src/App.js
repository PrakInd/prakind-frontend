// import './App.css';
import { APP_ROUTE, PRIVATE_ROUTE } from "./routes";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from './utils/PublicRoute';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
// import Navbar from "./components/Navbar";
import HomeUser from "./pages/user/HomeUser";
import Vacancy from "./pages/user/Vacancy";
import DetailVacancy from "./pages/user/DetailVacancy";
import DetailCompany from "./pages/user/DetailCompany";
import ErrorPage from "./pages/ErrorPage";
// import FormRegister from "./pages/user/FormRegister";

function App() {
  const prefix = [
    '/form-register',
    '/upload-dokumen',
    '/profil-saya',
    '/daftar-magang',
  ];

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* {APP_ROUTE.map((value) => {
            if (value.private) {
              return (
                <PrivateRoute
                  name={value.name}
                  component={value.component}
                  path={value.path}
                  exact={value.exact}
                  index={value.index}
                />
              )
            } else {
              return (
                <PublicRoute
                  key={value.name}
                  restricted={value.restricted}
                  path={value.path}
                  component={value.component}
                  exact={value.exact}
                />
              );
            }
          })} */}
          <Route exact path="/" component={HomeUser} />
          <Route exact path="/lowongan" component={Vacancy} />
          <Route exact path="/lowongan/:id" component={DetailVacancy} />
          <Route exact path="/detail-perusahaan/:id" component={DetailCompany} />
          {/* <Route exact path="/form-register" component={FormRegister} /> */}

          {APP_ROUTE.map((val) => (
            <PublicRoute
              key={val.name}
              path={val.path}
              exact={val.exact}
              component={val.component}
              restricted={val.restricted}
            />
          ))}
          <Route exact path={prefix}>
            <Switch>
              {PRIVATE_ROUTE.map((val) => (
                <PrivateRoute
                  key={val.name}
                  path={val.path}
                  exact={val.exact}
                  component={val.component}
                  private={val.private}
                />
              ))}
            </Switch>
          </Route>
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;