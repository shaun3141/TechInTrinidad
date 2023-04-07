import { Box, Paper, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Grid xs={12}>
        <Paper sx={{ padding: "10px" }}>
          <h3>Directory</h3>
          <Typography sx={{ fontStyle: "italic" }}>
            Click on a card to expand it
          </Typography>
          <br />
          <iframe
            style={{ width: "100%", height: "600px", border: "none" }}
            src="https://airtable.com/shrZVjgNWpuAre43x"
          ></iframe>
        </Paper>
      </Grid>
    </>
  );
}
