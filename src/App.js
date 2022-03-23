// import './App.css';
import { APP_ROUTES } from "./routes";
import PrivateRoute from "./utils/PrivateRoute";
import PublicRoute from './utils/PublicRoute';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HomeUser from "./pages/user/HomeUser";
// import Vacancy from "./pages/user/Vacancy";
// import DetailVacancy from "./pages/user/DetailVacancy";
// import DetailCompany from "./pages/user/DetailCompany";
// import ErrorPage from "./pages/ErrorPage";
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
          {APP_ROUTES.map((value, index) => {
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
          </Route>
          {/* <Route exact path="/" component={HomeUser} />
          <Route exact path="/lowongan" component={Vacancy} />
          <Route exact path="/lowongan/:id" component={DetailVacancy} />
          <Route exact path="/detail-perusahaan/:id" component={DetailCompany} /> */}
          {/* <Route exact path="/form-register" component={FormRegister} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;