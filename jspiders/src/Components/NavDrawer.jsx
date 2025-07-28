import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";

const NavDrawer = () => {
  let [isDrawerOpen, setisDrawerOpen] = useState(false);
  let navigate = useNavigate();
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setisDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
      >
        <Box p={2} width="350px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Menu
          </Typography>
        </Box>
        <List>
          {["Dashboard", "Profile", "QR", "Feedback", "Payment", "Edit Details"].map(
            (text, index) => {
              let link = text.toLowerCase();
              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={(text) => {
                      setisDrawerOpen(false);
                      navigate(`/${link}`);
                    }}
                  >
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              );
            }
          )}
        </List>
      </Drawer>
    </>
  );
};

export default NavDrawer;
