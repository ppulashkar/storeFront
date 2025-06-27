import React, { useState, useEffect, useContext } from "react";
import { Stack, Button, Box, Typography, IconButton } from "@mui/material";
import { FunctionalUseCaseConstants } from "../constants/FunctionalUseCaseConstants";
import { IndustryUseCaseConstants } from "../constants/IndustrySectorUseCaseConstants";
import { DeloitteInternalUseCaseConstants } from "../constants/DeloitteInternalUseCaseConstants";
import imageDefault from "../assets/svg/imagedefault.svg";
import { AppContext } from "../context/AppContext";
import SwipeDrawer from "./SwipeDrawer";
import VerticalTabStack from "./VerticalTabStack";
import BackButton from "../assets/svg/BackButton.svg";
import DetailsPage from "./DetailsPage";

const AgenticUseCase = () => {
  const { stateData, updateState } = useContext(AppContext);
  const [selectedTab, setSelectedTab] = useState({});
  const [tabsData, setTabsData] = useState([]);
  const [subUseCase, setSubUseCase] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerView, setDrawerView] = useState("list");
  const dataMap = {
    Functional: FunctionalUseCaseConstants,
    Sectors: IndustryUseCaseConstants,
    "Deloitte Internal": DeloitteInternalUseCaseConstants,
  };

  useEffect(() => {
    const categoryData = dataMap[stateData.category];
    console.log("categoryData", categoryData);
    setSubUseCase(categoryData[stateData.subCategoryIndex]?.info);
  }, [stateData.category, stateData.subCategory]);

  console.log("subUseCase", subUseCase);

  const openDrawerList = (item, index) => {
    setOpenDrawer(true);
    setTabsData(item);
  };

  const onBack = () => {
    updateState("isUseCaseVisibile", false);
  };

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
    if (true) {
      setDrawerView("list"); // Reset to tab list on open
    }
  };

  const handleTabSelect = (tab) => {
    setSelectedTab(tab);
    setDrawerView("detail");
  };

  const handleBack = () => {
    if (drawerView === "detail") {
      setDrawerView("list");
    } else {
      setOpenDrawer(false);
    }
  };

  console.log("drawerview", drawerView);
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} alignItems="flex-start">
        <IconButton
          onClick={onBack}
          sx={{
            padding: 0,
            "&:hover": {
              backgroundColor: "transparent",
            },
            cursor: "pointer",
          }}
        >
          <img src={BackButton} alt="Back" width={55} height={55} />
        </IconButton>
        <Typography
          sx={{
            fontWeight: 500,
            fontFamily: "Open Sans, sans-serif",
            color: "#1A1A1A",
            // textAlign: "center",
            whiteSpace: "normal",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "clamp(1rem, 3vw, 1.8rem)", // Shrinks with viewport
          }}
        >
          {stateData?.subCategory}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          py: 2,
          justifyContent: "flex-start",
          margin: "auto",
        }}
      >
        {subUseCase?.map((item, index) => (
          <Box
            key={index}
            sx={{
              border: "1px solid #ccc",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
              borderRadius: "8%",
              width: { xs: "calc(50% - 30px)", sm: "calc(16.33% - 16px)" },
              aspectRatio: "3 / 4",
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.6)",
                cursor: "pointer",
              },
              p: 1,
              gap: 1,
            }}
            onClick={() => openDrawerList(item, index)}
          >
            <Box
              sx={{
                flex: 1,
                // width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 1,
                pt: 1,
              }}
            >
              <Box
                component="img"
                src={item?.icon || imageDefault}
                alt={item?.title}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </Box>

            {/* Text Box - 50% Height */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item?.title && (
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Open Sans, sans-serif",
                    color: "#1A1A1A",
                    textAlign: "center",
                    whiteSpace: "normal",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    fontSize: "clamp(0.6rem, 1.8vw, 1rem)", // Shrinks with viewport
                  }}
                >
                  {item?.title}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>

      <Box>
        <SwipeDrawer
          open={openDrawer}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          onBack={handleBack}
          view={drawerView}
        >
          {drawerView === "list" ? (
            <VerticalTabStack
              tabsData={tabsData}
              onSelect={handleTabSelect}
              view={drawerView}
            />
          ) : (
            <DetailsPage tab={selectedTab} />
          )}
        </SwipeDrawer>
      </Box>
    </>
  );
};

export default AgenticUseCase;
