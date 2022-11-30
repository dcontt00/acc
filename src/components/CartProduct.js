import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";
import Cars from "../data/Cars.json"
import { useParams } from "react-router-dom";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

/*
export default function CartGrid({ product }) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
      key={product._id}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img src={product.imgLink} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              {/* gutterBottom es para aniadir un margen en la parte de abajo del texto 
              <Typography gutterBottom variant="subtitle1" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2">
                Proveedor: {product.provider}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Stock: {product.stock}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Descripcion: {product.description}
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={() => startEdition(product)}>Actualizar</Button>
              <Button onClick={() => removeProd(product._id)}>Eliminar</Button> 
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" component="div">
              € {product.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}*/
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
        <Grid item>
          <img src={"/" + car.img} width="50%" />
        </Grid>
        <Grid item xs={2} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              {/* gutterBottom es para aniadir un margen en la parte de abajo del texto*/}
              <Typography gutterBottom variant="h4" component="div">
                Marca: {car.brand}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Modelo: {car.name}
              </Typography>
              <Typography variant="h4" gutterBottom>
                Año: 2022
              </Typography>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                Descripcion: {car.description}
              </Typography>
            </Grid>
            <Grid item>
              <Button sx={{ width: 200, height: 80 }}>
                <Typography variant="h5">
                  Comprar
                </Typography>
              </Button>
              <Button sx={{ width: 200, height: 80 }}>
                <Typography variant="h5">
                  Eliminar
                </Typography></Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h3" component="div">
              {car.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
