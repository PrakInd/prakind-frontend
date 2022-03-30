import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AdminRoute from "./AdminRoute";
import { Switch } from "react-router-dom";
import { ADMIN_ROUTES } from "../routes/admin_routes";

const drawerWidth = 240;

function AdminContainer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
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
            <a
              className="nav-link"
              data-toggle="modal"
              data-target="#exampleModal"
            >
              <i className="fa fa-fw fa-sign-out" />
              Keluar
            </a>
          </li>
        </ul>
      </div>
      {/* <Toolbar /> */}
      {/* <Divider /> */}
      <List
        style={{ backgroundColor: "#40465D", color: "#fff", height: "auto" }}
      >
        {[
          "Dashboard",
          "List Pelamar",
          "List Lowongan",
          "Profil Perusahaan",
          "List Magang",
          "Pengaturan Admin",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      {/* <Divider />
      <List>
        {['Keluar'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
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
}

AdminContainer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default AdminContainer;