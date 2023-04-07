import { Box, Paper, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Grid xs={12} md={6}>
        <Paper sx={{ padding: "10px" }}>
          <h3>Get in Touch</h3>
          <Typography sx={{}}>
            We&apos;d love to hear from you!
            <br />
            <br />
            Sending an email over to{" "}
            <a href="mailto:techintrinidad@gmail.com">
              TechInTrinidad@gmail.com
            </a>{" "}
            is the best way to get in touch with us.
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
