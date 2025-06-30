import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { AppContext } from "../context/AppContext";

const VerticalTabStack = ({ tabsData, onSelect }) => {
  const { stateData, updateState } = useContext(AppContext);
  console.log("stateData", stateData);

  return (
    <>
      <Box
        py={2}
        display={"flex"}
        flexDirection={"column"}
        alignItems="flex-start"
        gap={1}
      >
        <Typography
          variant="h7"
          sx={{
            fontWeight: 700,
            fontFamily: "Open Sans, sans-serif",
            color: "#383838",
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {tabsData?.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 400,
            fontFamily: "Open Sans, sans-serif",
            color: "#474747",
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {tabsData?.description}
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
      >
        {tabsData?.useCaseOptions?.map((tab, index) => (
          <Box
            key={index}
            onClick={() => onSelect(tab)}
            sx={{
              py: 2,
              px: 2,
              borderRadius: "15px",
              borderImageSlice: 1,
              borderImageSource:
                "linear-gradient(147.93deg, rgba(255, 255, 255, 0.2) 9.38%, rgba(0, 0, 0, 0) 54.41%, rgba(255, 255, 255, 0.2) 95.97%)",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(25px)",
              boxShadow: "0px 9px 18.4px 0px #00000040",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.015)",
                backgroundColor: "#ffffff",
                boxShadow: "0px 12px 24px 0px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 400,
                fontFamily: "Open Sans, sans-serif",
                color: "#474747",
              }}
            >
              {tab.name}
            </Typography>
            {/* Description is intentionally omitted */}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default VerticalTabStack;
