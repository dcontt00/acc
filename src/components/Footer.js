import * as React from "react";
import Grid from "@mui/material/Grid";

function Footer() {
  return (
    <Grid
      container
      sx={{
        paddingBottom: "0.5%",
        paddingTop: "0.5%",
        backgroundColor: "#C8C8C8",
      }}
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid item xs={12}>
        <p>DreamCar - 2022</p>
      </Grid>
    </Grid>
  );
}
export default Footer;
