import * as React from "react";
import PropTypes from "prop-types";
import { Switch, NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MenuRounded, LogoutRounded } from "@mui/icons-material";
import AdminRoute from "./AdminRoute";
import { logout } from "../utils/Auth";
import { routes } from "./SidebarData";
import prakind_logo from "../assets/logo_orange.svg";
import { ADMIN_ROUTES } from "../routes/admin_routes";

const drawerWidth = 240;

const AdminContainer = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLogout = () => {
    logout();
  };

  const drawer = (
    <>
      <Toolbar>
        <img src={prakind_logo} style={{ height: "2rem" }} alt="logo" />
      </Toolbar>
      <Divider />
      <div 
        style={{ 
          display: "flex",
          flex: "1 1 0%",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "1em", marginBottom: "1em"
        }}
      >
        <div>
          <List>
            {routes.map((val, index) => (
              <NavLink key={index} to={val.path}>
                <ListItem button>
                  <ListItemIcon sx={{ color: "white" }}>{val.icon}</ListItemIcon>
                  <ListItemText sx={{ color: "white" }} primary={val.title} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
        <div>
          <NavLink to="/login" onClick={onLogout}>
            <ListItem button>
              <ListItemIcon sx={{ color: "white" }}><LogoutRounded /></ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary="Logout" />
            </ListItem>
          </NavLink>
        </div>
      </div>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        elevation={0}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#2D3246",
          borderBottom: "1px solid #282C3D",
          p: "0",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton 
              edge="start" 
              aria-label="open drawer" 
              onClick={handleDrawerToggle} 
              sx={{ marginRight: 2, color: "white", display: { sm: "none" } }}
            >
              <MenuRounded />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box 
        component="nav" 
        aria-label="prakind routes"
        sx={{ 
          width: { sm: drawerWidth }, 
          flexShrink: { sm: 0 },
          background: "#2D3246", 
        }} 
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            background: "#2D3246",
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
            background: "#2D3246",
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          background: "#FFFFFF",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          p: "1rem",
        }}
      >
        <Toolbar />
        <Switch>
          {ADMIN_ROUTES.map((value, key) => {
            return (
              <AdminRoute 
                key={key} 
                component={value.component} 
                path={value.path} 
                exact={value.exact} 
                isAdmin={value.isAdmin} 
                isNotFound={value.isNotFound} 
              />
            );
          })}
        </Switch>
      </Box>
    </Box>
  );
};

AdminContainer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminContainer;