import { AppBar, Toolbar, Typography } from "@mui/material";
import { IBM_Plex_Mono } from "next/font/google";
const ibm_plex_mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Footer = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="body1"
          color="inherit"
          sx={{ fontFamily: ibm_plex_mono }}
        >
          Tech in Trinidad | ©{new Date().getFullYear()} |{" "}
          <a
            href="/privacy"
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            Privacy Policy
          </a>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
