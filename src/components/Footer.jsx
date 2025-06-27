import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <AppBar
      position="static"
      component="footer"
      sx={{ top: "auto", bottom: 0, backgroundColor: "#2C5234", boxShadow: 1 }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: { xs: 40, sm: 50 }, // Responsive height similar to TopBar
          //   px: { xs: 1, sm: 2 },
          px: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
          },
          flexDirection: { xs: "column", sm: "row" }, // Stack vertically on mobile
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* Left Side: Email */}
        <Typography
          variant="body2"
          sx={{
            color: "#000000",
            fontSize: { xs: "0.75rem", sm: "0.9rem" },
            mb: { xs: 0.5, sm: 0 },
          }}
        >
          contact@deloitte.com
        </Typography>

        {/* Right Side: Sponsor Details */}
        <Typography
          variant="body2"
          sx={{ color: "#000000", fontSize: { xs: "0.75rem", sm: "0.9rem" } }}
        >
          Sponsored by Deloitte
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
