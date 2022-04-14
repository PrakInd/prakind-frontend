import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import { Avatar, Button, Container, Divider, ListItemIcon } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { isLogin, logout } from "../utils/Auth";
import ProfileIconMenu from "./ProfileIconMenu";
import prakind_logo from "../assets/logo_orange2.svg";
import PrimaryButton from "../components/button/PrimaryButton";
import { Logout, MenuBook } from "@mui/icons-material";
import { UserContext } from "../contexts/UserContext";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  logo: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "1.5em"
  },
  button: {
    backgroundColor: "#2D3246",
    "&:hover": {
      color: "#FC9400"
    }
  }
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const [user] = useContext(UserContext);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const menuItems = [
    {
      title: "Masuk",
      path: "/login"
    },
    {
      title: "Daftar",
      path: "/register"
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar position="sticky" sx={{ p: "0", background: "#2D3246" }}>
        <Container maxWidth="xl">
          <Toolbar sx={{
            p: "0",
            display: "flex",
            justifyContent: "space-between",
          }}>
            <Link to="/">
              <div
                className={classes.logo}
                style={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
              >
                <img src={prakind_logo} style={{ height: "2rem" }} alt="logo" />
              </div>
            </Link>
            {isMobile ? (
              !isLogin() ? (
                <>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMenu}
                    sx={{ "&:hover": { color: "#FC9400" } }}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    id="menu-appbar"
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    onClick={() => setAnchorEl(null)}
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
                      const { title, path } = menuItem;
                      return (
                        <Link to={path}>
                          <MenuItem>
                            { title }
                          </MenuItem>
                        </Link>
                      );
                    })}
                  </Menu>
                </>
              ) : (
                <ProfileIconMenu />
              )
            ) : (
              isLogin() ? (
                <ProfileIconMenu />
              ) : (
                <div className={classes.headerOptions}>
                  {menuItems.map(menuItem => {
                    const { title, path } = menuItem;
                    return (
                      <Link to={path}>
                        <Button 
                          color="primary" 
                          className={classes.button}
                        >
                          { title }
                        </Button>
                      </Link>
                    );
                  })}
                </div>
              )
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Header;