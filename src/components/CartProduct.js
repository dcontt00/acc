import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box, Card } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Cars from "../data/Cars.json";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import AButton from "./AButton";
function getCar(id) {
  return Cars.find((car) => car.id === id);
}

export default function CartGrid() {
  // Obtenemos los parametrosde la url para poder insertarlos en el navigate
  const params = useParams();
  const car = getCar(params.id);
  const navigate = useNavigate();
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
          <img src={car.img} height="auto" width="100%" />
        </Grid>
        <Grid item lg={6}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <Typography variant="h5" >
                Resumen de las características del vehículo
              </Typography>
              <Typography variant="subtitle1">Marca: {car.brand}</Typography>
              <Typography variant="subtitle1">Modelo: {car.name}</Typography>
              <Typography variant="subtitle1">Año: 2022</Typography>
              <Typography variant="body1" color="text.secondary">
                Descripcion: {car.description}
              </Typography>
              <Box>
                <Typography variant="h6" color="#f01515">
                  Precio Total: {car.price}€
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={6}>
              <AButton onClick={() => navigate("/payment/checkout")} text="Comprar" />
            </Grid>
            <Grid item lg={6}>
              <AButton onClick={() => navigate("/description/" + car.id)} text="Cancelar" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
