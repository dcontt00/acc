import * as React from "react";
import Grid from "@mui/material/Grid";
import { Paper, Box, Container, Typography } from "@mui/material";

function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(10% + 60px)",
        width: "100%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            my: 1,
          }}
        >
          <div>
            <img
              priority
              src={process.env.PUBLIC_URL + "/imgs/logo/DreamCarLogo.png"}
              width={120}
              height={"auto"}
              alt="Logo"
            />
          </div>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography variant="caption" color="initial">
            Copyright © 2022
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
}
export default Footer;
