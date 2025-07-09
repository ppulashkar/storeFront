import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { AppContext } from "../context/AppContext";

const VerticalTabStack = ({ tabsData, onSelect }) => {
  const { stateData } = useContext(AppContext);
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
        {/* <Typography
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
        </Typography> */}
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
      >
        {tabsData?.useCaseOptions?.map((tab, index) => {
          const isDisabled = !tab.link && !tab.videoLink && !tab.workFlowLink;

          return (
            <Box
              key={index}
              onClick={() => {
                if (!isDisabled) onSelect(tab);
              }}
              sx={{
                py: 2,
                px: 2,
                borderRadius: "15px",
                border: "1px solid",
                borderImageSlice: isDisabled ? 0 : 1,
                borderColor: isDisabled ? "#E0E0E0" : undefined,
                borderImageSource: isDisabled
                  ? "none"
                  : "linear-gradient(147.93deg, rgba(255, 255, 255, 0.2) 9.38%, rgba(0, 0, 0, 0) 54.41%, rgba(255, 255, 255, 0.2) 95.97%)",
                backgroundColor: isDisabled
                  ? "#f2f2f2"
                  : "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(25px)",
                boxShadow: "0px 9px 18.4px 0px #00000040",
                opacity: isDisabled ? 0.6 : 1,
                pointerEvents: isDisabled ? "none" : "auto",
                cursor: isDisabled ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: isDisabled ? "none" : "scale(1.015)",
                  backgroundColor: isDisabled ? "#f2f2f2" : "#ffffff",
                  boxShadow: isDisabled
                    ? "inset 0 0 5px rgba(0,0,0,0.05)"
                    : "0px 12px 24px 0px rgba(0, 0, 0, 0.2)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: 500,
                    fontSize: "1rem",
                    lineHeight: "160%",
                    letterSpacing: "-0.06em",
                    color: "#474747",
                  }}
                >
                  {tab.name}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: 700, // increased from 600
                    fontSize: "1rem", // slightly increased
                    letterSpacing: "-0.02em", // tighter spacing for bold feel
                    color:
                      tab.agentType === "single"
                        ? "#3C924C"
                        : tab.agentType === "multi"
                        ? "#588EC7"
                        : "#999999",
                  }}
                >
                  {tab.agentType === "single"
                    ? "Single Agent"
                    : tab.agentType === "multi"
                    ? "Multi Agent"
                    : ""}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </>
  );
};

export default VerticalTabStack;
