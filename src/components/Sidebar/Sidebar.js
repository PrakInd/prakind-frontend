// import React from 'react';
// import { Link } from 'react-router-dom';
// import { LogoutOutlined } from '@mui/icons-material';
// import { ListItemIcon, List, ListItem, ListItemText } from '@mui/material';
// import SidebarData from './SidebarData';
// import SidebarLinks from './SidebarLinks';
// import { logout } from '../../utils/Auth';
// import { COLORS } from '../../constants/colors';
// 
// const Sidebar = () => {
//     return (
//         <div>
//             <List>
//                 {SidebarData.map((item, index) => (
//                     <SidebarLinks
//                         key={index}
//                         primary={item.title}
//                         to={item.path}
//                         icon={item.icon}
//                     />
//                 ))}
//             </List>
//             <div>
//                 <Link to="/" onClick={logout}>
//                     <ListItem
//                         button
//                         sx={{
//                             color: "white",
//                             borderRadius: 1.5,
//                             "&:hover": {
//                                 backgroundColor: COLORS.primaryHover,
//                             },
//                         }}
//                     >
//                         <ListItemIcon sx={{ color: "white" }}>
//                             <LogoutOutlined />
//                         </ListItemIcon>
//                     </ListItem>
//                 </Link>
//             </div>
//         </div>
//     );
// };
// 
// export default Sidebar;