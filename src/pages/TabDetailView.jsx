import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
 
const TabDetailView = ({ tab }) => {
  return (
    <Box display="flex" flexDirection="column" gap={2} padding={2}>
 
      <Box>
        <Typography variant="h6" fontWeight={600}>
          {tab.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" mt={0.5}>
          {tab.description}
        </Typography>
      </Box>
 
      {tab.link && (
        <Typography variant="body2" mt={2}>
          <a
            href={tab.link}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#000", fontWeight: 500 }}
          >
            View Demo
          </a>
        </Typography>
      )}
 
      {tab.videoUrl && (
        <video
          src={tab.videoUrl}
          controls
          style={{ width: "100%", borderRadius: "8px" }}
        />
      )}
 
      <Typography variant="body2" color="#1A1A1A" mt={0.5}>
        Recruitment Agent UI Path
      </Typography>
    </Box>
  );
};
export default TabDetailView;