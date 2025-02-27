// src/components/NavigationBar.jsx
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import ConnectButton from "../ConnectButton";

const truncateAddress = (address) => {
  if (!address) return "";
  return address.slice(0, 6) + "..." + address.slice(-4);
};

const NavigationBar = () => {
  const { address, isConnected } = useAccount();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Create Chama", path: "/create-chama" },
    { title: "Join Chama", path: "/join-chama" },
    { title: "Dashboard", path: "/dashboard" },
  ];

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Chama DApp
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: 250,
                  bgcolor: "white",
                  height: "100vh",
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navLinks.map((link, index) => (
                    <ListItem
                      button
                      key={index}
                      component={Link}
                      to={link.path}
                      sx={{
                        transition:
                          "transform 0.3s, background-color 0.3s, box-shadow 0.3s",
                        borderRadius: 1,
                        "&:hover": {
                          bgcolor: "#e0e0e0",
                          transform: "scale(1.03)",
                          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                    >
                      <ListItemText
                        primary={link.title}
                        sx={{
                          color: "black",
                          fontWeight: "bold",
                          textAlign: "center",
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </>
        ) : (
          navLinks.map((link, index) => (
            <Button
              key={index}
              component={Link}
              to={link.path}
              sx={{ color: "white", textTransform: "none" }}
            >
              {link.title}
            </Button>
          ))
        )}

        {isConnected ? (
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
              "&:hover": { backgroundColor: "#333" },
              borderRadius: "8px",
              padding: "8px 16px",
              textTransform: "none",
              ml: 2,
            }}
          >
            {truncateAddress(address)}
          </Button>
        ) : (
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "black",
              color: "white",
              border: "2px solid white",
              "&:hover": { backgroundColor: "#333" },
              borderRadius: "8px",
              padding: "8px 16px",
              textTransform: "none",
              ml: 2,
            }}
          >
            <ConnectButton />
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
