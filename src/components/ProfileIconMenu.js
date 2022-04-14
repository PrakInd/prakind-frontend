import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logout from '@mui/icons-material/Logout';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Settings from '@mui/icons-material/Settings';
import PersonAdd from '@mui/icons-material/PersonAdd';
import ListItemIcon from '@mui/material/ListItemIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Assignment, Person } from '@mui/icons-material';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { logout } from "../utils/Auth";
import default_avatar from "../assets/avatar.jpg";
import { UserContext } from '../contexts/UserContext';
import { SHOW_PHOTO } from '../constants/urls';

const ProfileIconMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [user] = React.useContext(UserContext);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    {
      title: "Aktivitasku",
      path: "/pelamar/aktivitasku",
      icon: <Assignment />
    },
    {
      title: "Profil",
      path: "/pelamar/profil",
      icon: <Person />
    }
  ];

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {!isMobile && <Typography>{user.name}</Typography>}
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2 }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar sx={{ width: "2rem", height: "2rem" }}>
            <img 
              style={{ width: "2rem", height: "2rem" }} 
              src={user.avatar === 'avatar.jpg' ? default_avatar : SHOW_PHOTO(user.avatar)} 
              alt="user-profile-pic" 
            />
          </Avatar>
        </IconButton>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        {menuItems.map(menuItem => {
          const { title, path, icon } = menuItem;
          return (
            <Link to={path}>
              <MenuItem>
                  <ListItemIcon>
                    { icon }
                  </ListItemIcon>
                  { title }
              </MenuItem>
            </Link>
          );
        })}
        <Divider />
        <Link to="/" onClick={logout}>
          <MenuItem>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </React.Fragment>
  );
}

export default ProfileIconMenu;
