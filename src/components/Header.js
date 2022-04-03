import React from "react";
import { Link } from "react-router-dom";
import Menu from '@mui/material/Menu';
import { Container } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { isLogin } from "../utils/Auth";
import ProfileIconMenu from "./ProfileIconMenu";
import prakind_logo from "../assets/logo_orange2.svg";
import PrimaryButton from "../components/button/PrimaryButton";

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
    gap: "4em",
  }
}));

const Header = props => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const menuItems = [
    {
      menuTitle: "Masuk",
      pageURL: "/login"
    },
    {
      menuTitle: "Daftar",
      pageURL: "/register"
    },
    {
      menuTitle: "Perusahaan",
      pageURL: "/regist-perusahaan"
    }
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
              <>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  {menuItems.map(menuItem => {
                    const { menuTitle, pageURL } = menuItem;
                    return (
                      <MenuItem onClick={() => handleMenuClick(pageURL)}>
                        {menuTitle}
                      </MenuItem>
                    );
                  })}
                </Menu>
              </>
            ) : (
              isLogin() ? (
                <ProfileIconMenu />
              ) : (
                <div className={classes.headerOptions}>
                  <Link to="/login">
                    <Typography color={"white"}>Masuk</Typography>
                  </Link>
                  <Link to="/register">
                    <Typography color={"white"}>Daftar</Typography>
                  </Link>
                  <Link to="/regist-perusahaan">
                    <PrimaryButton 
                      style={{ 
                        background: "#FC9400", 
                        paddingLeft: "3em", 
                        paddingRight: "3em" 
                      }}>
                      Perusahaan
                    </PrimaryButton>
                  </Link>
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