import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import Button from "@mui/material/Button";

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

export default function CartGrid() {
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
          <ButtonBase sx={{ width: 450, height: 350 }}>
            <Img src="https://wallpapercave.com/wp/wp2538996.jpg" />
          </ButtonBase>
        </Grid>
        <Grid item xs={2} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <br/>
              <br/>
              <br/>
              <br/>
              {/* gutterBottom es para aniadir un margen en la parte de abajo del texto*/} 
              <Typography gutterBottom variant="h4" component="div">
              Marca: Ferrari
              </Typography>
              <Typography variant="h4" gutterBottom>
              Modelo: LaFerrari
              </Typography>
              <Typography variant="h4" gutterBottom>                
                Año: 2022
              </Typography>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                Descripcion: Rapido, elegante y comodo, el coche de tus sueños!
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
              € 15
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
