import React, { useContext, useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import AgenticSection from "./AgenticSection";
import { AppContext } from "../context/AppContext";
import AgenticSubSection from "./AgenticSubSection";
import { CategoryList } from "../constants/CategoryContants";

const AgenticStorefront = () => {
  const [robotText, setRobotText] = useState("");
  const { stateData, updateState } = useContext(AppContext);
  // console.log("categories: ", categories, stateData);

  const clickFunction = (category) => {
    updateState("category", category);
    updateState("isSubCategoryVisible", true);
    updateState("homeRobot", false);
    setRobotText("And a sub-category will also suffice");
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

  useEffect(() => {
    if (stateData.isUseCaseVisibile) {
      setRobotText(
        "Our storefront has use cases in the following 3 categories"
      );
      return;
    }
    if (stateData.isSubCategoryVisible) {
      setRobotText("And a sub-category will also suffice");
      return;
    }
    if (stateData.isCategoryVisible) {
      setRobotText("Hi, I am Agentic AI. Please select a category");
      return;
    }
  }, []);
  return (
    <>
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
                  transition: "transform 1s ease-in, box-shadow ease-out ",
                  "&:hover": {
                    transform: "rotateY(180deg)",
                    cursor: "pointer",
                  },
                }}
                onClick={() => clickFunction(item?.name)}
              >
                <Box
                  sx={{
                    position: "absolute",
                    border: "1px solid #ccc",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                    borderRadius: 2,
                    width: "100%",
                    // maxWidth: 300,
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <>
                    <Box
                      component="img"
                      src={item?.icon}
                      alt={item?.name}
                      sx={{
                        maxHeight: "70%",
                        maxWidth: "70%",
                        objectFit: "cover",
                      }}
                    />
                    {item?.name && (
                      <Typography
                        sx={{
                          fontFamily: "Open Sans, sans-serif",
                          fontWeight: 500,
                          lineHeight: 1.4,
                          letterSpacing: "0em",
                          textAlign: "center",
                          width: "80%",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          paddingX: 2,
                          paddingTop: 1,
                          color: "#1A1A1A",
                          borderRadius: 1,
                        }}
                      >
                        {item?.name}
                      </Typography>
                    )}
                  </>
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    border: "1px solid #ccc",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                    borderRadius: 2,
                    width: "100%",
                    // maxWidth: 300,
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    backfaceVisibility: "hidden",
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
