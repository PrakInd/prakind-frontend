import React from 'react';
import {
    PeopleAltOutlined,
    DashboardRounded,
    GroupRounded,
    WorkRounded,
    HailRounded,
} from '@mui/icons-material';

export const routes = [
    {
        title: "Dashboard",
        path: "/perusahaan",
        exact: true,
        icon: <DashboardRounded />,
    },
    {
        title: "Profil Perusahaan",
        path: "/perusahaan/profil",
        exact: true,
        icon: <GroupRounded />,
    },
    {
        title: "List Lowongan",
        path: "/perusahaan/lowongan",
        icon: <WorkRounded />,
    },
    {
        title: "Daftar Pelamar",
        path: "/perusahaan/pelamar",
        icon: <HailRounded />,
    },
    {
        title: "Tabel Magang",
        path: "/perusahaan/table",
        exact: true,
        icon: <PeopleAltOutlined />,
    },
];