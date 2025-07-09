import React, { useState, useEffect, useContext, useMemo } from "react";
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
import { useResizeObserver } from "../hooks/useResizeObserver";

const AgenticUseCase = () => {
  const { stateData, updateState } = useContext(AppContext);
  const [selectedTab, setSelectedTab] = useState({});
  const [tabsData, setTabsData] = useState([]);
  const [subUseCase, setSubUseCase] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerView, setDrawerView] = useState("list");
  const [containerRef] = useResizeObserver();

  const dataMap = useMemo(
    () => ({
      Functional: FunctionalUseCaseConstants,
      Sectors: IndustryUseCaseConstants,
      "Deloitte Internal": DeloitteInternalUseCaseConstants,
    }),
    []
  );

useEffect(() => {
  const categoryData = dataMap[stateData.category];
  console.log("categoryData", categoryData);
  setSubUseCase(categoryData[stateData.subCategoryIndex]?.info);
}, [dataMap, stateData.category, stateData.subCategoryIndex]);

  console.log("subUseCase", subUseCase);

  const openDrawerList = (item) => {
    setOpenDrawer(true);
    setTabsData(item);
  };

  const onBack = () => {
    updateState("isUseCaseVisibile", false);
  };

  const toggleDrawer = (open) => () => {
    setOpenDrawer(open);
    if (open) {
      setDrawerView("list");
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

  let leftWidth = "100%";
  let drawerWidth = "0";

  if (openDrawer) {
    const w = window.innerWidth;
    if (w < 600) {
      leftWidth = "100%";
      drawerWidth = "fit-content";
    } else {
      leftWidth = "72%";
      drawerWidth = "35%";
    }
  }

  return (
    <Box display="flex" width="100%">
      <Box
        ref={containerRef}
        sx={{
          width: openDrawer ? leftWidth : "100%",
          minWidth: 0,
          transition: "width 0.3s ease",
          overflow: "hidden",
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="flex-start">
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
              lineHeight: 1.3,
              fontSize: "clamp(1rem, 3vw, 1.8rem)",
            }}
          >
            {stateData?.subCategory}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            pl: 2,
            gap: 2,
            py: 4,
            justifyContent: "flex-start",
            margin: "auto",
          }}
        >
          {subUseCase?.map((item, index) => {
            const isDisabled = !item?.useCaseOptions?.length;

            return (
              <Box
                key={index}
                onClick={() => {
                  if (!isDisabled) openDrawerList(item, index);
                }}
                sx={{
                  border: "1px solid #ccc",
                  boxShadow: isDisabled
                    ? "inset 0 0 5px rgba(0,0,0,0.1)"
                    : "0px 4px 8px rgba(0, 0, 0, 0.5)",
                  borderRadius: "8%",
                  width: {
                    xs: "calc(50% - 30px)",
                    sm: "calc(18.33% - 20px)",
                  },
                  aspectRatio: "3 / 4",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  //backgroundColor: isDisabled ? "#f3f3f3" : "#fff",
                  opacity: isDisabled ? 0.6 : 1,
                  pointerEvents: isDisabled ? "none" : "auto",
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  "&:hover": !isDisabled && {
                    transform: "scale(1.05)",
                    boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.6)",
                  },
                  p: 1,
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    flex: 1,
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
                      width: "80%",
                      height: "80%",
                      objectFit: "contain",
                      filter: isDisabled ? "grayscale(100%)" : "none",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    minWidth: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                  }}
                >
                  {item?.title && (
                    <Typography
                      sx={{
                        fontWeight: 500,
                        fontFamily: "Open Sans, sans-serif",
                        color: "#1A1A1A",
                        textAlign: "center",
                        overflowWrap: "break-word",
                        whiteSpace: "normal",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        wordBreak: "break-word",
                        lineHeight: 1.2,
                        maxWidth: "100%",
                        fontSize: {
                          xs: "0.75rem",
                          sm: openDrawer ? "0.9rem" : "1rem",
                          md: openDrawer ? "0.9rem" : "1.3rem",
                        },
                      }}
                    >
                      {item?.title}
                    </Typography>
                  )}

                  {isDisabled && (
                    <Typography
                      variant="caption"
                      sx={{ color: "#888", fontSize: "0.8rem" }}
                    >
                      Coming Soon
                    </Typography>
                  )}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <SwipeDrawer
        open={openDrawer}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        onBack={handleBack}
        view={drawerView}
        drawerWidth={drawerWidth}
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
  );
};

export default AgenticUseCase;
