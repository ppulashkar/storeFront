import React from "react";
import { Box, Typography } from "@mui/material";
import Agentic_Logo from "../assets/svg/Agentic_Logo.svg";
import "../App.css";

const AgenticSection = () => {
  const heading = {
    title: "Agentic AI Storefront",
    description:
      "Deloitte India's Agentic AI Solutions addressing various business needs—featuring use cases that are either in production or currently at MVP stage.",
    logo: Agentic_Logo,
  };
  return (
    <Box
      sx={{
        border: "2px solid #699120",
        borderRadius: "16px",
        padding: "2px 16px",
        display: "flex",
        flexDirection: "row",
        flexShrink: 1,
        height: "100%",
        maxHeight: "110px",
        justifyContent: "space-between",
        overflow: "hidden",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "70%" },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          // padding: "8px 16px",
        }}
      >
        {/* <img
          style={{
            maxHeight: 30,
            objectFit: "contain",
          }}
          src={heading?.title}
          alt="Company Logo"
          loading="lazy"
        /> */}
        <Typography
          sx={{
            fontFamily: "'Overlock SC', 'Open Sans', sans-serif",
            color: "#2C5234",
            fontSize: 32,
            lineHeight: 1.5,
          }}
        >
          {heading?.title.toUpperCase()}
        </Typography>

        <Typography
          sx={{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: 500,
            fontSize: "1rem",
            lineHeight: 1.5,
            color: "#4F7706",
          }}
        >
          {heading?.description}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <img
          style={{
            maxHeight: "96px", // ✅ More stable
            objectFit: "contain",
            alignItems: "center",
          }}
          src={heading?.logo}
          alt="Company Logo"
          loading="lazy"
        />
      </Box>
    </Box>
  );
};

export default AgenticSection;
