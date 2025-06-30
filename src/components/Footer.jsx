import React from "react";
import { Box } from "@mui/material";
import FooterItem from "../pages/FooterItem";
import Ashwin_pic from "../assets/svg/Ashwin_pic.svg";
import Moumita_pic from "../assets/svg/Moumita_pic.svg"
import EmailEnvelope from "../assets/EnvelopeSimple.svg"

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#2C5234",
        display: "flex",
        flexWrap: "wrap",
        gap: 4,
        justifyContent: "space-between",
        px: {
          xs: 1,
          sm: 2,
          md: 3,
          lg: 4,
        },
        py: 2,
      }}
    >
      {/* Email Section */}
      <FooterItem
        title={
          <>
            <img
              src={EmailEnvelope}
              alt="Email icon"
              style={{ width: 20, height: 20, marginRight: 5 }}
            />
            E-Mail
          </>
        }
        value="agenticai@deloitte.com"
      />

      <Box display={"flex"} gap={4}>
        {/* Ashwin Vellody */}
        <FooterItem
          title="Ashwin Vellody"
          value="ashvinv@deloitte.com"
          avatarUrl={Ashwin_pic}
        />

        {/* Moumita Sarker */}
        <FooterItem
          title="Moumita Sarker"
          value="msarker@deloitte.com"
          avatarUrl={Moumita_pic}
        />
      </Box>
    </Box>
  );
};

export default Footer;
