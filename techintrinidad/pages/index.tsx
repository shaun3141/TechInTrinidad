import { Box, Paper, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Grid xs={12} md={3}>
        <Paper sx={{ padding: "10px" }}>
          <Typography variant="h5">Mission</Typography>
          <Typography sx={{}}>
            <b>Tech in Trinidad</b> is focused on building and elevating the
            tech community in Trinidad and Tobago, fostering economic growth and
            creating opportunities for all.
          </Typography>
          <br />
          <br />
          <Typography variant="h6">Join Us</Typography>
          <Typography>
            Joining the Tech in Trinidad Directory is free!
            <br />
            <br />
            Joining allows your name and interests to be discovered by others
            hiring, founding a business, or otherwise passionate about
            technology.
          </Typography>
          <br />
          <br />
          <Link
            href="https://airtable.com/shrff0sxgpa8Wz4Hy"
            target="_blank"
            style={{ color: "inherit", textDecoration: "none" }}
          >
            <Button variant="contained" endIcon={<LaunchIcon />}>
              Add your Name
            </Button>
          </Link>
        </Paper>
      </Grid>
      <Grid xs={12} md={9}>
        <Paper sx={{ padding: "10px" }}>
          <h3>Directory</h3>
          <Typography sx={{ fontStyle: "italic" }}>
            Click on a card to expand it
          </Typography>
          <br />
          <iframe
            style={{ width: "100%", height: "500px", border: "none" }}
            src="https://airtable.com/shrZVjgNWpuAre43x"
          ></iframe>
        </Paper>
      </Grid>
    </>
  );
}
