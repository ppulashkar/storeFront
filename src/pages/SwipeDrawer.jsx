// components/SwipeDrawer.tsx
import React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import BackButton from "../assets/svg/BackButton.svg";
import { Typography } from "@mui/material";
 
// interface SwipeDrawerProps {
//   open: boolean;
//   onClose: () => void;
//   onOpen: () => void;
//   onBack: () => void;
//   view: "list" | "detail" | "options";
//   headerTitle?: string; // ✅ NEW
//   headerDescription?: string; // ✅ NEW
//   children: React.ReactNode;
// }
 
const SwipeDrawer = ({
  open,
  onClose,
  onOpen,
  onBack,
  view,
  headerTitle,
  headerDescription,
children,
drawerWidth
}) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
      PaperProps={{
        sx: {
          width: drawerWidth,
          padding: 3,
          overflowX: "hidden",
        },
      }}
    >
      <Box
        className="drawer-header"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
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
 
        <a
          href="mailto:contact@example.com"
          target="_blank"
          rel="noreferrer"
          style={{
            fontFamily: "Open Sans, sans-serif",
            fontSize: "1rem",
            fontWeight: 500,
            color: "#2C5234",
            textDecoration: "none",
            letterSpacing: "-0.06em",
            lineHeight: "100%",
          }}
        >
          {/* Contact Us */}
        </a>
      </Box>
      {view !== "detail" && (
        <Box sx={{ mb: 2 }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, fontSize: "20px", color: "#383838" }}
          >
            {headerTitle}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#555", fontSize: "14px", mt: 0.5 }}
          >
            {headerDescription}
          </Typography>
        </Box>
      )}
      {children}
    </SwipeableDrawer>
  );
};
 
export default SwipeDrawer;