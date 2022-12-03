import * as React from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cars from "../data/Cars.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function getCar(id) {
  return Cars.find((car) => car.id === id);
}

export default function CartGrid() {
  const params = useParams();
  const car = getCar(params.id);

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item lg={6}>
          <img src={"/" + car.img} width="100%" />
        </Grid>
        <Grid item lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="body2">Marca: {car.brand}</Typography>
              <Typography variant="body2">Modelo: {car.name}</Typography>
              <Typography variant="body2">Año: 2022</Typography>
              <Typography variant="body2" color="text.secondary">
                Descripcion: {car.description}
              </Typography>
              <Box>
                <Typography variant="body2">{car.price}</Typography>
              </Box>
            </Grid>
            <Grid item lg={6} color="#bd1212">
              <Link to="/payment/checkout">
                <Button>
                  <Typography variant="subtitle1" color="#bd1212">
                    Comprar
                  </Typography>
                </Button>
              </Link>
              <Button>Eliminar</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}