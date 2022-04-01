import React from 'react';
import { 
    DescriptionOutlined, 
    PeopleAltOutlined, 
    PersonAddAlt1Outlined, 
    HistoryOutlined,
} from '@mui/icons-material';

export const routes = [
    {
        title: "Dashboard",
        path: "/perusahaan/dashboard",
        exact: true,
        icon: <DescriptionOutlined />,
    },
    {
        title: "List Lowongan",
        path: "/perusahaan/lowongan",
        icon: <PersonAddAlt1Outlined />,
    },
    {
        title: "Profil Perusahaan",
        path: "/perusahaan/profil",
        icon: <HistoryOutlined />,
    },
    {
        title: "Daftar Pelamar",
        path: "/perusahaan/pelamar",
        icon: <PeopleAltOutlined />,
    },
    {
        title: "Tabel Magang",
        path: "/perusahaan/table",
        icon: <PeopleAltOutlined />,
    },
];