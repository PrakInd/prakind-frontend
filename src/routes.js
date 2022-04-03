import Login from "./pages/Login";
import Vacancy from "./pages/user/Vacancy";
import HomeUser from "./pages/user/HomeUser";
import DetailVacancy from "./pages/user/DetailVacancy";
import DetailCompany from "./pages/user/DetailCompany";
import UserContainer from "./components/UserContainer";
import AdminContainer from "./components/AdminContainer";
import Lowongan from "./pages/admin/Lowongan";
import Dashboard from "./pages/admin/Dashboard";
import TabelMagang from "./pages/admin/TabelMagang";
import ListPelamar from "./pages/admin/ListPelamar";
import ListLowongan from "./pages/admin/ListLowongan";
import DetailPelamar from "./pages/admin/DetailPelamar";
import ProfilPerusahaan from "./pages/admin/ProfilPerusahaan";
import Apply from "./pages/user/Apply";
import Profil from "./pages/user/Profil";
import UploadDocs from "./pages/user/UploadDocs";
import FormRegister from "./pages/user/FormRegister";
import ErrorPage from "./pages/ErrorPage";

export const APP_ROUTES = [
  {
    name: "Home Page",
    path: "/dashboard",
    exact: true,
    component: HomeUser,
    restricted: true,
  },
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
    restricted: true,
  },
  {
    name: "Vacancy",
    path: "/lowongan",
    exact: true,
    component: Vacancy,
    restricted: true,
  },
  {
    name: "Vacancy Detail",
    path: "/lowongan/:id",
    exact: true,
    component: DetailVacancy,
    restricted: true,
  },
  {
    name: "Company Detail",
    path: "/detail-perusahaan/:id",
    exact: true,
    component: DetailCompany,
    restricted: true,
  },
  {
    name: "Master Layout Admin",
    path: "/perusahaan",
    component: AdminContainer,
    private: true,
    isAdmin: true,
  },
  {
    name: "Master Layout User",
    path: "/pelamar",
    component: UserContainer,
    private: true,
    isUser: true,
  },
  {
    name: "Error Page",
    path: "/*",
    exact: true,
    component: ErrorPage,
    private: true,
    isNotFound: true,
  },
  {
    name: "Error Page",
    path: "/error",
    exact: true,
    component: ErrorPage,
    private: true,
    isNotFound: true,
  },
];