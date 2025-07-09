import React, { useContext, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AgenticSection from "./AgenticSection";
import { AppContext } from "../context/AppContext";
import AgenticSubSection from "./AgenticSubSection";
import { CategoryList } from "../constants/CategoryContants";

const AgenticStorefront = () => {
  const [robotText, setRobotText] = useState("");
  const { stateData, updateState } = useContext(AppContext);

  const clickFunction = (category) => {
    updateState("category", category);
    updateState("isSubCategoryVisible", true);
    updateState("homeRobot", false);
  };

  const selectionChange = ($event) => {
    updateState("category", $event.currentTarget.textContent);
    updateState("isSubCategoryVisible", true);
    updateState("isUseCaseVisibile", false);
    setRobotText("And a sub-category will also suffice");
  };

  const loadPrevMenu = ($event) => {
    updateState("isSubCategoryVisible", false);
    updateState("isUseCaseVisibile", false);

    setRobotText("Please select a category");
  };

  // ✅ Reactive robotText based on state changes
  useEffect(() => {
    if (stateData.isUseCaseVisibile) {
      setRobotText(
        "Our storefront has use cases in the following 3 categories"
      );
    } else if (stateData.isSubCategoryVisible) {
      setRobotText("And a sub-category will also suffice");
    } else if (stateData.isCategoryVisible) {
      setRobotText("Hi, I am Agentic AI. Please select a category");
    } else {
      setRobotText(""); // fallback
    }
  }, [
    stateData.isUseCaseVisibile,
    stateData.isSubCategoryVisible,
    stateData.isCategoryVisible,
  ]);

  return (
    <>
      

      {/* ✅ Switch view */}
      {!stateData.isSubCategoryVisible ? (
        <>
          <AgenticSection />
          <Box
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              flexShrink: 1,
              gap: 2,
              py: 2,
              justifyContent: "space-between",
            }}
          >
            {CategoryList?.map((item, index) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  transformStyle: "preserve-3d",
                  transition: "transform 1s ease-in, box-shadow ease-out",
                  "&:hover": {
                    transform: "rotateY(180deg)",
                    cursor: "pointer",
                  },
                }}
                onClick={() => clickFunction(item?.name)}
              >
                {/* Front Card */}
                <Box
                  sx={{
                    position: "absolute",
                    border: "1px solid #ccc",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                    borderRadius: 2,
                    width: "100%",
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Box
                    component="img"
                    src={item?.icon}
                    alt={item?.name}
                    sx={{
                      maxHeight: "40%",
                      maxWidth: "40%",
                      objectFit: "cover",
                    }}
                  />
                  {item?.name && (
                    <Typography
                      sx={{
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: 500,
                        lineHeight: 1.4,
                        textAlign: "center",
                        width: "80%",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        paddingX: 2,
                        paddingTop: 1,
                        color: "#1A1A1A",
                        fontSize: "20px",
                      }}
                    >
                      {item?.name}
                    </Typography>
                  )}
                </Box>

                {/* Back Card */}
                <Box
                  sx={{
                    position: "absolute",
                    border: "1px solid #ccc",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                    borderRadius: 2,
                    width: "100%",
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backfaceVisibility: "hidden",
                    backgroundColor: "#fff",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <Typography
                    fontWeight="bold"
                    sx={{
                      fontFamily: "Open Sans, sans-serif",
                      color: "#213547",
                      textAlign: "center",
                      width: "80%",
                    }}
                  >
                    {item?.description || "Show Description"}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </>
      ) : (
        <AgenticSubSection />
      )}
    </>
  );
};

export default AgenticStorefront;
