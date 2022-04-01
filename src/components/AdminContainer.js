import * as React from "react";
import PropTypes from "prop-types";
import { Switch, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import AppBar from "@mui/material/AppBar";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AdminRoute from "./AdminRoute";
import { ADMIN_ROUTES } from "../routes/admin_routes";
import Sidebar from "../components/Sidebar/Sidebar";
import { routes } from "../components/Sidebar/SidebarData";
import { RouteSharp } from "@mui/icons-material";
import { logout } from "../utils/Auth";

const drawerWidth = 240;

const AdminContainer = props => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onLogout = () => {
    logout();
  };

  const drawer = (
    <div>
      <div
        className="navbar navbar-expand-lg navbar-dark bg-default fixed-top"
        id="mainNav"
      >
        <a className="navbar-brand" href="/">
          <img
            src="img/logo2.png"
            data-retina="true"
            alt
            width={150}
            height={36}
          />
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            {/* <a
              className="nav-link"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fa fa-fw fa-sign-out" />
              Keluar
            </a> */}
            <button onClick={onLogout}>
              <Link to="/">
                Keluar
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <List
        style={{ backgroundColor: "#40465D", height: "auto" }}
      >
        {routes.map((val, index) => (
          <Link to={val.path} key={index}>
            <ListItem button key={val.title}>
              <ListItemText style={{ color: "#FFF" }} primary={val.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      {/* <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
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
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        {/* <Toolbar /> */}
        <Switch>
          {ADMIN_ROUTES.map((value, key) => {
            return (
              <AdminRoute
                key={key} //key gaboleh dihilangi karena untuk identifier map
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