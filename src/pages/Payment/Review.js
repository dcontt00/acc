import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { useParams } from "react-router-dom";
import Llantas from "../../data/Llantas.json";
import Colores from "../../data/Colores.json";
import Asientos from "../../data/Asientos.json";
import Cars from "../../data/Cars.json";
import Cookies from "universal-cookie";
import AButton from "../../components/AButton";
import { Box } from "@mui/material";
import getCar from "../../utils/GetCar";
const cookie = new Cookies();


const addresses = ["Valencia de Don Juan", "Mayor", "41", "24200", "ES"];
const payments = [
  { name: "Tipo de Tarjeta", detail: "Visa" },
  { name: "Propietario de la Tarjeta", detail: "Eustaquio Abichuelo" },
  { name: "Numero de la Tarjeta", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Fecha de Caducidad", detail: "04/2024" },
];

export default function Review(props) {
  const params = useParams();
  const car = getCar(params.id);

  var personalization = [];
  var total = car.price;
  if (cookie.get("personalization") !== undefined) {
    personalization = cookie.get("personalization");
    var llantas = Llantas.find((llanta) => llanta.id === parseInt(personalization["tire"]));
    var color = Colores.find((color) => color.id === parseInt(personalization["colors"]));
    var asiento = Asientos.find((asiento) => asiento.id === parseInt(personalization["seats"]));
    total += llantas.price;
    total += color.price;
    total += asiento.price;

  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Resumen de la compra
      </Typography>

      <List disablePadding>
        <ListItem key={car.brand} sx={{ py: 1, px: 0 }}>
          <ListItemText
            primary={car.name}
            secondary={car.desc}
          />
          <Typography variant="body2">{total}€</Typography>
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
        <Grid item xs={12}>
          <Box
            m={1}
            display={"flex"}
            justifyContent="flex-end"
            alignItems="flex-end"
          >
            <AButton onClick={() => props.setActiveStep(props.activeStep - 1)} sx={{ mt: 3, ml: 1 }} text="Atrás" />
            <AButton
              variant="contained"
              onClick={() => props.setActiveStep(props.activeStep + 1)}
              sx={{ mt: 3, ml: 1 }}
              text="Completar compra"
            />
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}