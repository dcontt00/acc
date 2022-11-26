import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

function Payment() {


  return (
    <div>
     <br />
     <br />
     <br />
      <Typography
        variant="h1"
        color="black"
        component="h2"
        align="center"
      >
        Carrito de compra
      </Typography>
      <br />
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={3} >
          <Typography variant="h5" align="center">Personalizar vehiculo</Typography>
        </Grid>
        <Grid item xs={3} >
          <Typography variant="h5" align="center">Personalizar vehiculo</Typography>
        </Grid>
        <Grid item xs={3} >
          <Typography variant="h5" align="center">Personalizar vehiculo</Typography>
        </Grid>
        <Grid item xs={3} >
          <Typography variant="h5" align="center">Personalizar vehiculo</Typography>
        </Grid>
    </Grid >
      <br />
      {/* Incluyo una linea separadora, para que quede mas profesional. */}
      <Divider />
      <br />
      <br />
      <br />
    </div>
  );
}
export default Payment;
