// import HomeUser from "./pages/user/HomeUser";
// import Vacancy from "./pages/user/Vacancy";
// import DetailVacancy from "./pages/user/DetailVacancy";
// import DetailCompany from "./pages/user/DetailCompany";
// import AddVacancy from "./pages/admin/AddVacancy";
// import Dashboard from "./pages/admin/Dashboard"
// import CompanyProfile from "./pages/admin/CompanyProfile"
// import ListApplicants from "./pages/admin/ListApplicants"
// import ListVacancy from "./pages/admin/ListVacancy"
// import Table from "./pages/admin/Table"
import FormRegister from "./pages/user/FormRegister";
import Login from "./pages/Login";
import UploadDocs from "./pages/user/UploadDocs";
import Profil from "./pages/user/Profil";
import Apply from "./pages/user/Apply";

export const APP_ROUTE = [
  // === PUBLIC ===
  {
    name: "Login",
    path: "/login",
    exact: true,
    component: Login,
    restricted: true,
  },
  {
    name: "User Register",
    path: "/daftar",
    exact: true,
    component: Login,
    restricted: true,
  },
  // {
  //   name: "Company Register",
  //   path: "/perusahaan/daftar",
  //   exact: true,
  //   component: HomeUser,
  //   restricted: true,
  // },

  // === USER ===
  // {
  //   name: "Homepage",
  //   path: "/",
  //   exact: true,
  //   component: HomeUser,
  //   restricted: true,
  // },
  // {
  //   name: "Cari Lowongan",
  //   path: "/lowongan",
  //   exact: true,
  //   component: Vacancy,
  //   restricted: true,
  // },
  // {
  //   name: "Detail Lowongan",
  //   path: "/lowongan/:id",
  //   exact: true,
  //   component: DetailVacancy,
  //   restricted: true,
  // },
  // {
  //   name: "Lihat Perusahaan",
  //   path: "/detail-perusahaan/:id",
  //   exact: true,
  //   component: DetailCompany,
  //   restricted: true,
  // },
];

export const PRIVATE_ROUTE = [
  // === USER ===
  {
    name: "Form Register",
    path: "/form-register",
    exact: true,
    component: FormRegister,
    restricted: false,
    private: true,
  },
  {
    name: "Upload Dokumen",
    path: "/upload-dokumen",
    exact: true,
    component: UploadDocs,
    restricted: false,
    private: true,
  },
  {
    name: "Profil Saya",
    path: "/profil-saya",
    exact: true,
    component: Profil,
    restricted: false,
    private: true,
  },
  {
    name: "Daftar Magang",
    path: "/daftar-magang",
    exact: true,
    component: Apply,
    restricted: false,
    private: true,
  },

  // === ADMIN ===
  // {
  //   name: "Dashboard",
  //   path: "/perusahaan",
  //   exact: true,
  //   component: Dashboard,
  //   restricted: false,
  //   private: true,
  // },
  // {
  //   name: "Tambah Lowongan",
  //   path: "/perusahaan/lowongan/tambah",
  //   exact: true,
  //   component: AddVacancy,
  //   restricted: false,
  //   private: true,
  // },
  // {
  //   name: "List Lowongan",
  //   path: "/perusahaan/lowongan",
  //   exact: true,
  //   component: ListVacancy,
  //   restricted: false,
  //   private: true,
  // },
  // {
  //   name: "Profil Perusahaan",
  //   path: "/perusahaan/profil",
  //   exact: true,
  //   component: CompanyProfile,
  //   restricted: false,
  //   private: true,
  // },
  // {
  //   name: "Daftar Pelamar",
  //   path: "/perusahaan/pelamar",
  //   exact: true,
  //   component: ListApplicants,
  //   restricted: false,
  //   private: true,
  // },
  // {
  //   name: "Table",
  //   path: "/table",
  //   exact: true,
  //   component: Table,
  //   restricted: false,
  //   private: true,
  // },
];