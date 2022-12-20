import * as React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CartProduct from "../../components/CartProduct";

function Payment() {
  return (
    <div>
      <Grid container>
        <Grid item lg={12}>
          <Typography
            variant="h1"
            color="black"
            component="h2"
            align="center"
          >
            Procesando Compra del Vehiculo
          </Typography>
        </Grid>
      </Grid>

      {/* Incluyo una linea separadora, para que quede mas profesional. */}
      <Divider />
      <CartProduct />
      <Box height={"6rem"} />
    </div>
  );
}
export default Payment;
