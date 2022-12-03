import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

const products = [
  {
    name: "Producto 1",
    desc: "El vehiculo más ecológico",
    price: "79.000,00 €",
  },
  {
    name: "Producto 2",
    desc: "El deportivo más excentrico",
    price: "67.500,75€",
  },
  {
    name: "Producto 3",
    desc: "Confort, elegancia, potencia y belleza unidos en uno",
    price: "108.777,99€",
  },
  {
    name: "Producto 4",
    desc: "Uno de los mejores vehiculos",
    price: "54.995,88 €",
  },
  { name: "Envio", desc: "", price: "Gratis" },
];

const cars = [
  {
    brand: "BMW",
    model: "iX",
    desc: "El BMW iX es un SUV 100% eléctrico, fabricado por BMW desde 2021, ofrece 306CV de potencia.",
    price: "85.000,00 €",
  },
];

const addresses = ["Valencia de Don Juan", "Mayor", "41", "24200", "ES"];
const payments = [
  { name: "Tipo de Tarjeta", detail: "Visa" },
  { name: "Propietario de la Tarjeta", detail: "Eustaquio Abichuelo" },
  { name: "Numero de la Tarjeta", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Fecha de Caducidad", detail: "04/2024" },
];

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de la compra
      </Typography>
      <List disablePadding>
        {cars.map((car) => (
          <ListItem key={car.brand} sx={{ py: 1, px: 0 }}>
            <ListItemText
              primary={car.brand + " " + car.model}
              secondary={car.desc}
            />
            <Typography variant="body2">{car.price}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            85.000,00 €
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Envio
          </Typography>
          <Typography gutterBottom>John Smith</Typography>
          <Typography gutterBottom>{addresses.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles del pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <React.Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
