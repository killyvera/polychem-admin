import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import ListAltIcon from "@mui/icons-material/ListAlt";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// import CategoryIcon from "@mui/icons-material/Category";
import WidgetsIcon from "@mui/icons-material/Widgets";

export const SideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box width="250px" textAlign="center" role="presentation">
          <List>
            <Link style={{ textDecoration: "blink" }} to="/">
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="Home" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link style={{ textDecoration: "blink" }} to="/users">
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                  <ListItemIcon>
                    <GroupIcon />
                  </ListItemIcon>
                  <ListItemText primary="Usuarios" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link style={{ textDecoration: "blink" }} to="/forms">
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                  <ListItemIcon>
                    <ListAltIcon />
                  </ListItemIcon>
                  <ListItemText primary="Formularios" />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link style={{ textDecoration: "blink" }} to="/products">
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                  <ListItemIcon>
                    <WidgetsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Products" />
                </ListItemButton>
              </ListItem>
            </Link>

            {/* <Link style={{ textDecoration: "blink" }} to="/formula-elements">
              <ListItem disablePadding>
                <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                  <ListItemIcon>
                    <CategoryIcon />
                  </ListItemIcon>
                  <ListItemText primary="Formula Elements" />
                </ListItemButton>
              </ListItem>
            </Link> */}
          </List>
        </Box>
      </Drawer>
    </>
  );
};
