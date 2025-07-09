import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { Box, Typography } from "@mui/material";
import { DetailsConstants } from "../constants/DetailsConstants";
import "../pages/css/DetailsPage.css";

const DetailsPage = ({ tab }) => {
  const { stateData } = useContext(AppContext);
  const [activeButtonId, setActiveButtonId] = useState(null);

  if (!stateData) return <div>Context not available</div>;

  const navigatePage = (item) => {
    let link = null;

    switch (item?.id) {
      case 1:
        link = tab?.link;
        break;
      case 2:
        link = tab?.videoLink;
        break;
      case 3:
        link = tab?.workFlowLink;
        break;
      default:
        break;
    }

    if (link) {
      window.open(link, "_blank");
    }
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
        <div className="use-case-name">{stateData.selectedSubUseCase}</div>

        <div className="detail-grid">
          {stateData.details?.main &&
            DetailsConstants.map((item) => {
              const isDisabled =
                (item.id === 1 && !tab?.link) ||
                (item.id === 2 && !tab?.videoLink) ||
                (item.id === 3 && !tab?.workFlowLink);

              const isActive = activeButtonId === item.id;

              return (
                <div
                  key={item.id}
                  className={`detail-button ${isDisabled ? "disabled" : ""} ${
                    isActive ? "active" : ""
                  }`}
                  data-action={item.action}
                  onClick={() => {
                    if (!isDisabled) {
                      setActiveButtonId(item.id);
                      navigatePage(item);
                    }
                  }}
                >
                  <img
                    src={item.icon}
                    className="item-icon-img"
                    alt={item.text}
                  />
                  <div className="item-text">{item.text}</div>
                </div>
              );
            })}
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
