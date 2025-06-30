import { useState, useContext } from "react";
import { Stack, Button, Box, Typography } from "@mui/material";
import { AppContext } from "../context/AppContext";
import { CategoryList } from "../constants/CategoryContants";

const PillMenu = () => {
  const { stateData, updateState } = useContext(AppContext);

  const selectionChange = (label) => {
    updateState("category", label);
    updateState("isSubCategoryVisible", true);
    updateState("isUseCaseVisibile", false);
  };
  console.log("state", stateData);

  return (
    <Stack direction="row" spacing={2}>
      {CategoryList?.map((item, index) => {
        const isActive = item?.name === stateData?.category; // ✅ Check if current menu matches label

        return (
          <Button
            key={index}
            sx={{
              border: isActive ? "2px solid #699120" : "2px solid transparent",
              borderImageSlice: 1,
              backdropFilter: "blur(25px)",
              boxShadow: "0px 9px 18.4px 0px #00000040",
              borderRadius: "999px",
              px: 3,
              py: 1,
              minWidth: 200,
              height: 60,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              textTransform: "none",
              opacity: isActive ? 1 : 0.5,
              transition: "opacity 0.3s ease",
            }}
            onClick={() => selectionChange(item?.name)}
          >
            <Box
              component="img"
              src={item?.icon}
              alt={item?.name}
              sx={{
                width: 24,
                height: 24,
                objectFit: "contain",
              }}
            />
            <Typography
              sx={{
                fontFamily: "Open Sans, sans-serif",
                color: "#2C5234",
                fontSize: "20px",
                fontWeight:"500",
                lineHeight: 1.5,
              }}
            >
              {item?.name}
            </Typography>
          </Button>
        );
      })}
    </Stack>
  );
};

export default PillMenu;
