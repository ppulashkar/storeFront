import react, { useState, useContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import { AppContext } from "../context/AppContext";

const Layout = ({ children }) => {
  const { stateData } = useContext(AppContext);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <Header />
      <Box
        component="main"
        sx={{
          flex: 1,
          overflowY: "auto",
          px: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
          },
          paddingTop: 2,
        }}
      >
        {children}
      </Box>
      {!stateData?.category && <Footer />}
    </Box>
  );
};

export default Layout;
