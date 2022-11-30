import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Cars from "../data/Cars.json"
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function getCar(id) {
  return Cars.find((car) => car.id === id);
}

export default function CartGrid() {
  const params = useParams();
  const navigate = useNavigate();
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
      <Button onClick={() => navigate("description/" + car.id)}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <img src={"/" + car.img} width="100%"/>
          </Grid>
          <Grid item lg={6}>
            <Grid container direction="column" spacing={2}>
              <Grid item >
                <Typography variant="body2" >
                  Marca: {car.brand}
                </Typography>
                <Typography variant="body2" >
                  Modelo: {car.name}
                </Typography>
                <Typography variant="body2" >
                  Año: 2022
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                  Descripcion: {car.description}
                </Typography>
              </Grid>
              <Grid item lg={6}>
                <Button >
                  Comprar
                </Button>
                <Button >
                  Eliminar
                </Button>
              </Grid>
            </Grid>
            <Box >

              <Typography variant="body2" >
                {car.price}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Button>
    </Paper>
  );
}
