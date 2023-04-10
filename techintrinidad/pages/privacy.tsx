import { Box, Paper, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Grid xs={12}>
        <Paper sx={{ padding: "10px" }}>
          <h3>Privacy Policy</h3>
          <Typography>
            Tech in Trinidad (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, store, and protect your
            personal information when you interact with our website
            techintrinidad.com (&quot;Website&quot;) and our services. By using
            our Website and providing your personal information, you agree to
            the terms of this Privacy Policy.
          </Typography>
          <br />
          <b>Information We Collect</b>
          <Typography>
            We collect the following personal information from our users:
          </Typography>
          <ul>
            <li>Name</li>
            <li>Email address</li>
          </ul>
          <Typography>
            This information is collected through user registration or opt-in
            forms on our Website.
          </Typography>
          <br />
          <b>How We Use Your Information</b>
          <Typography>
            We use the collected information to send newsletters and other
            communication related to Tech in Trinidad.
          </Typography>
          <br />
          <b>Data Storage and Security</b>
          <Typography>
            Your personal information is stored securely in our email provider,
            SendGrid. We take appropriate measures to protect your information
            from unauthorized access, alteration, disclosure, or destruction.
          </Typography>
          <br />
          <b>Data Retention</b>
          <Typography>
            We retain your personal information indefinitely, unless you request
            to modify or delete your data. To request modification or deletion
            of your data, please contact us at&nbsp;
            <Link href="mailto:techintrinidad@gmail.com">
              techintrinidad@gmail.com
            </Link>
            .
          </Typography>
          <br />
          <b>Third-Party Disclosure</b>
          <Typography>
            We do not share your personal information with third parties.
          </Typography>
          <br />
          <b>User Rights</b>
          <Typography>
            You have the right to access, modify, or delete your personal
            information. To exercise these rights, please contact us at&nbsp;
            <Link href="mailto:techintrinidad@gmail.com">
              techintrinidad@gmail.com
            </Link>
            .
          </Typography>
          <br />
          <b>Children&apos;s Privacy</b>
          <Typography>
            We do not knowingly collect personal information from minors. If you
            are a parent or guardian and believe that your child has provided us
            with personal information, please contact us at&nbsp;
            <Link href="mailto:techintrinidad@gmail.com">
              techintrinidad@gmail.com
            </Link>
            .
          </Typography>
          <Typography>so we can take appropriate action.</Typography>
          <br />
          <b>Cookies and Tracking Technologies</b>
          <Typography>
            We do not use cookies or tracking technologies on our Website.
          </Typography>
          <br />
          <b>Compliance with GDPR and CCPA</b>
          <Typography>
            We comply with the General Data Protection Regulation (GDPR) and the
            California Consumer Privacy Act (CCPA). If you are a resident of the
            European Union or California, you have additional rights under these
            regulations. To learn more or exercise your rights, please contact
            us at&nbsp;
            <Link href="mailto:techintrinidad@gmail.com">
              techintrinidad@gmail.com
            </Link>
            .
          </Typography>
          <br />
          <b>Changes to this Privacy Policy</b>
          <Typography>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </Typography>
          <Typography>This policy is effective as of 22 March 2021.</Typography>
        </Paper>
      </Grid>
    </>
  );
}
