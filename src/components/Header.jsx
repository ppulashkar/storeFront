import React, { useContext } from "react";
import { AppBar, Toolbar, Box, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DeloitteIndiaLogo from "../assets/svg/DeloitteIndia_Logo.svg";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const { updateState } = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    updateState("isCategoryVisible", true);
    updateState("isSubCategoryVisible", false);
    updateState("isUseCaseVisibile", false);
    updateState("category", null);
    updateState("subCategory", null);
    updateState("subCategoryIndex", 0);
    updateState("homeRobot", true);
    navigate("/");
  };

  return (
    <AppBar
      position="static"
    elevation={0}
      sx={{ backgroundColor: "transparent"}}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
          },
        }}
      >
        {/* Left side: Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            width: { xs: "100px", sm: "150px" },
          }}
          onClick={handleLogoClick}
        >
          <img
            src={DeloitteIndiaLogo}
            alt="Deloitte Logo"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>

        {/* Right side: Contact Us */}
        <Box>
          <Typography
            component={Link}
            to="/contact"
            sx={{
              fontFamily: "Open Sans, sans-serif",
              color: "#000000",
              textAlign: "center",
              width: "60%",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontSize: "clamp(0.4rem, 3vw, 0.8rem)",
              textDecoration: "none",
              "&:hover": {
                color: "#4F7706", 
              },
            }}
          >
            {/* Contact Us */}
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
