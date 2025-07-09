import { useContext } from "react";
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
              backgroundColor: "#F0FFFF",
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
              color: isActive ? "#000" : "#666",
              transform: isActive ? "translateY(-2px)" : "none",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.12)",
              },
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
                color: isActive ? "#2C5234" : "#000000",
                fontSize: "20px",
                fontWeight: "500",
                lineHeight: 1.5,
                transition: "color 0.3s ease",
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
