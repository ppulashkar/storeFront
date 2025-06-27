import React, { useContext, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import PillMenu from "./PillMenu";
import SubAgentSection from "./SubAgentSection";
import { AppContext } from "../context/AppContext";
import AgenticUseCase from "./AgenticUseCase";

const AgenticSubSection = () => {
  const { stateData, updateState } = useContext(AppContext);
  return (
    <Box
      // sx={{
      //   display: "flex",
      //   flexDirection: "column", // Keep elements stacked vertically
      //   alignItems: "left", // Horizontal centering
      //   width: "100%",
      // }}
    >
      {!stateData.isUseCaseVisibile ? (
        <>
          <PillMenu />
          <SubAgentSection />
        </>
      ) : (
        <AgenticUseCase />
      )}
    </Box>
  );
};

export default AgenticSubSection;
