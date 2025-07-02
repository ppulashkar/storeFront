import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Box, Typography } from "@mui/material";
import { DetailsConstants } from "../constants/DetailsConstants";
import "../pages/css/DetailsPage.css";

const DetailsPage = ({ tab }) => {
  const { stateData } = useContext(AppContext);

  if (!stateData) return <div>Context not available</div>;

  const navigatePage = (item) => {
    let link = null;

    switch (item?.text) {
      case "Live demo":
        link = tab?.link;
        break;
      case "Demo video":
        link = tab?.videoLink;
        break;
      case "Agentic workflow":
        link = tab?.workFlowLink;
        break;
      default:
        break;
    }

    if (link) {
      window.open(link, "_blank");
    } 
    // else {
    //   alert(`No link found for "${item?.text}"`);
    // }
  };

  return (
    <div>
      <Typography
        sx={{
          fontFamily: "Open Sans, sans-serif",
          fontWeight: 500,
          fontSize: "1.5rem",
          lineHeight: "160%",
          letterSpacing: "-0.06em",
          color: "#383838",
          whiteSpace: "normal",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {tab?.name}
      </Typography>
      <div className="detail-options">
        {/* Use Case Title */}
        <div className="use-case-name">{stateData.selectedSubUseCase}</div>

        {/* Grid of Actions */}
        <div className="detail-grid">
          {stateData.details?.main &&
            DetailsConstants.map((item) => (
              <div
                key={item.id}
                className="detail-button"
                data-action={item.action}
                onClick={() => navigatePage(item)}
              >
                <img
                  src={item.icon}
                  className="item-icon-img"
                  alt={item.text}
                />
                <div className="item-text">{item.text}</div>
              </div>
            ))}
        </div>

        {(tab?.sponsoredBy || tab?.poweredBy) && (
          <div className="sponsor-powered-block">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "2px" }}
            >
              {tab?.sponsoredBy && (
                <div className="sponsoring-name">
                  Sponsoring Partner: <b>{tab?.sponsoredBy}</b>
                </div>
              )}
              {tab?.poweredBy && (
                <div className="powering-name">
                  Enabling Partner: <b>{tab?.poweredBy}</b>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
