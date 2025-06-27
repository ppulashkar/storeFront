"use client";

import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Button } from "@mui/material";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const BackButton = () => {
  const { stateData, updateState } = useContext(AppContext);

  const handleBack = () => {
    updateState("isUseCaseVisibile", false);
  };

  return (
    <Button
      size="small"
      onClick={handleBack}
      startIcon={<ArrowBackIosIcon size="small" />}
      sx={{
        border: "2px solid none",
        borderRadius: "999px",
        px: 1,
        py: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textTransform: "none",
        color: "text.secondary",
      }}
    >
      Back
    </Button>
  );
};

export default BackButton;
