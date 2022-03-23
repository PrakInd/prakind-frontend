// import Dashboard from "../pages/admin/Dashboard"
// import ProfilPerusahaan from "../pages/admin/ProfilPerusahaan"
// import ListPelamar from "../pages/admin/ListPelamar"
// import ListLowongan from "../pages/admin/ListLowongan"
// import TabelMagang from "../pages/admin/TabelMagang"
// import Lowongan from "../pages/admin/Lowongan"
// import DetailPelamar from "../pages/admin/DetailPelamar"
// 
// export const APP_ADMIN_ROUTE = [
//     {
//         name: "Dashboard",
//         path: "/perusahaan",
//         exact: true,
//         component: Dashboard,
//         isAdmin: true,
//         private: true,
//       },
//       {
//         name: "List Lowongan",
//         path: "/perusahaan/lowongan",
//         exact: true,
//         component: ListLowongan,
//         isAdmin: true,
//         private: true,
//       },
//       {
//         name: "Detail Lowongan",
//         path: "/perusahaan/lowongan/tambah",
//         exact: true,
//         component: Lowongan,
//         isAdmin: true,
//         private: true,
//       },
//       {
//         name: "Lis Pelamar",
//         path: "/perusahaan/pelamar",
//         exact: true,
//         component: ListPelamar,
//         isAdmin: true,
//         private: true,
//       },
//       {
//         name: "Detail Pelamar",
//         path: "/perusahaan/pelamar",
//         exact: true,
//         component: DetailPelamar,
//         isAdmin: true,
//         private: true,
//       },
//       {
//         name: "Profil Perusahaan",
//         path: "/perusahaan/profil",
//         exact: true,
//         component: ProfilPerusahaan,
//         isAdmin: true,
//         private: true,
//       },
//       {
//         name: "Tabel Magang",
//         path: "/tabel",
//         exact: true,
//         component: TabelMagang,
//         isAdmin: true,
//         private: true,
//       },
// ];

// import AddVacancy from "./pages/admin/AddVacancy";
// import CompanyProfile from "./pages/admin/CompanyProfile";
// import Dashboard from "./pages/admin/Dashboard";
// import ListApplicants from "./pages/admin/ListApplicants";
// import ListVacancy from "./pages/admin/ListVacancy";
// import Table from "./pages/admin/Table";
import ErrorPage from "../pages/ErrorPage";

import Dashboard from "../pages/admin/Dashboard"
import ProfilPerusahaan from "../pages/admin/ProfilPerusahaan"
import ListPelamar from "../pages/admin/ListPelamar"
import ListLowongan from "../pages/admin/ListLowongan"
import TabelMagang from "../pages/admin/TabelMagang"
import Lowongan from "../pages/admin/Lowongan"
// import DetailPelamar from "../pages/admin/DetailPelamar"

export const ADMIN_ROUTES = [
    {
      name: "Dashboard",
      path: "/perusahaan/dashboard",
      exact: true,
      component: Dashboard,
      private: true,
      isAdmin: true,
    },
    {
      name: "Tambah Lowongan",
      path: "/perusahaan/lowongan/tambah",
      exact: true,
      component: Lowongan,
      private: true,
      isAdmin: true,
    },
    {
      name: "List Lowongan",
      path: "/perusahaan/lowongan",
      exact: true,
      component: ListLowongan,
      private: true,
      isAdmin: true,
    },
    {
      name: "Profil Perusahaan",
      path: "/perusahaan/profil",
      exact: true,
      component: ProfilPerusahaan,
      private: true,
      isAdmin: true,
    },
    {
      name: "Daftar Pelamar",
      path: "/perusahaan/pelamar",
      exact: true,
      component: ListPelamar,
      private: true,
      isAdmin: true,
    },
    {
      name: "Tabel",
      path: "/perusahaan/table",
      exact: true,
      component: TabelMagang,
      private: true,
      isAdmin: true,
    },
    {
      name: "Halaman Error",
      path: "/admin/*",
      exact: true,
      component: ErrorPage,
      private: true,
      isAdmin: true,
      isNotFound: true,
    },
  ];