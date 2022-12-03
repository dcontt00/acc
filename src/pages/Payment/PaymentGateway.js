import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import CartProduct from "../../components/CartProduct";

function Payment() {

  let product = [];

  return (
    <div>
      <br />
      <br />
      <Typography
        variant="h1"
        color="black"
        component="h2"
        align="center"
      >
        Procesando Compra del Vehiculo
      </Typography>
      <br />
      {/* Incluyo una linea separadora, para que quede mas profesional. */}
      <Divider />
      <br />
      <CartProduct />
    </div>
  );
}
export default Payment;
