import React, { useState, useEffect, useContext } from "react";
import { Stack, Button, Box, Typography } from "@mui/material";
import { FunctionalData } from "../constants/FunctionalConstants";
import { IndustrySectorsData } from "../constants/IndutrySectorsContants";
import { DeloitteInternalData } from "../constants/DeloitteInternalConstants";
import { AppContext } from "../context/AppContext";

const SubAgentSection = () => {
  const { stateData, updateState } = useContext(AppContext);

  const [subCategories, setSubCategories] = useState([]);
  const dataMap = {
    Functional: FunctionalData,
    Sectors: IndustrySectorsData,
    "Deloitte Internal": DeloitteInternalData,
  };

  useEffect(() => {
    setSubCategories(dataMap[stateData.category]);
  }, [stateData.category]);

  const subMenuSelectionChange = (item, index) => {
    updateState("subCategoryIndex", index);
    updateState("isUseCaseVisibile", true);
    updateState("subCategory", item.name);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 2,
        py: 2,
        justifyContent: "flex-start",
      }}
    >
      {subCategories?.map((item, index) => (
        <Box
          key={index}
          sx={{
            border: "1px solid #ccc",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            borderRadius: 8,
            width: { xs: "100%", sm: "calc(33.33% - 16px)" }, // Full width on mobile, 3-per-row on larger
            minHeight: 90,
            aspectRatio: "11",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.6)",
              cursor: "pointer",
            },
          }}
          onClick={() => subMenuSelectionChange(item, index)}
        >
          <Box
            component="img"
            src={item.icon}
            alt={item.name}
            sx={{
              width: "20%",
              height: "auto",
              objectFit: "cover",
            }}
            padding={1}
          />
          {item?.name && (
            <Typography
              sx={{
                flex: 1,
                fontWeight: 500,
                fontFamily: "Open Sans, sans-serif",
                color: "#1A1A1A",
                textAlign: "left",
                fontSize: "1.2rem",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              }}
            >
              {item?.name}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default SubAgentSection;
