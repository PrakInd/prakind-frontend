import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material/styles';
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import Vacancy from "./pages/user/Vacancy";
import HomeUser from "./pages/user/HomeUser";
import RegisterUser from "./pages/RegisterUser";
import DetailVacancy from "./pages/user/DetailVacancy";
import DetailCompany from "./pages/user/DetailCompany";
import UserContainer from "./components/UserContainer";
import AdminContainer from "./components/AdminContainer";
import RegisterPerusahaan from "./pages/RegisterPerusahaan";
import { SearchProvider } from "./components/SearchContext/SearchContext";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: '#2D3246',
        },
      },
    },
  },
  typography: {
    fontFamily: [
      "Roboto",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    // button: {
    //   textTransform: 'none'
    // }
  },
})

function App() {
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <SearchProvider>
          <Router>
            <Switch>
              <Route exact restricted path="/" component={HomeUser} />
              <Route exact restricted path="/login" component={Login} />
              <Route exact restricted path="/register" component={RegisterUser} />
              <Route exact restricted path="/regist-perusahaan" component={RegisterPerusahaan} />
              <Route exact restricted path="/lowongan" component={Vacancy} />
              <Route exact restricted path="/lowongan/:id" component={DetailVacancy} />
              <Route exact restricted path="/detail-perusahaan/:id" component={DetailCompany} />
              <Route isUser private path="/pelamar" component={UserContainer} />
              <Route isAdmin private path="/perusahaan" component={AdminContainer} />
              <Route exact private isNotFound restricted path="/*" component={ErrorPage} />
              <Route exact private isNotFound restricted path="/error" component={ErrorPage} />
            </Switch>
          </Router>
        </SearchProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;