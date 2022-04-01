import ErrorPage from "../pages/ErrorPage";
import Lowongan from "../pages/admin/Lowongan";
import Dashboard from "../pages/admin/Dashboard";
import ListPelamar from "../pages/admin/ListPelamar";
import TabelMagang from "../pages/admin/TabelMagang";
import ListLowongan from "../pages/admin/ListLowongan";
import ProfilPerusahaan from "../pages/admin/ProfilPerusahaan";
import PengaturanAdmin from "../pages/admin/PengaturanAdmin";
import DetailPelamar from "../pages/admin/DetailPelamar";

export const ADMIN_ROUTES = [
  {
    name: "Dashboard",
    path: "/perusahaan",
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
    name: "Detail Pelamar",
    path: "/perusahaan/pelamar/detail/:id",
    exact: true,
    component: DetailPelamar,
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
    name: "Pengaturan Admin",
    path: "/perusahaan/admin",
    exact: true,
    component: PengaturanAdmin,
    private: true,
    isAdmin: true,
  },
  {
    name: "Halaman Error",
    path: "/perusahaan/*",
    exact: true,
    component: ErrorPage,
    private: true,
    isAdmin: true,
    isNotFound: true,
  },
];