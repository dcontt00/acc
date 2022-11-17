import "../App.css";
import * as React from "react";
import {
  Paper,
  Button,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import Carousel from "../components/Carousel";
import Container from "@mui/material/Container";
import Gallery from "../components/Gallery";

export default function Catalog() {
  const [type, setType] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [fuel, setFuel] = React.useState("");

  const handleChangeType = (event) => {
    setType(event.target.value);
  };
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
  };
  const handleChangeFuel = (event) => {
    setFuel(event.target.value);
  };
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Catálogo</Typography>
        </Grid>

        {/* Barra búsqueda*/}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <TextField
            id="standard-basic"
            label="Buscar por nombre de coche"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <Button>Buscar</Button>
        </Grid>

        {/* Filtros*/}
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h2">Filtrar por:</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={brand}
                label="Hola"
                onChange={handleChangeBrand}
                sx={{ width: "100%" }}
              >
                <MenuItem value={10}>Audi</MenuItem>
                <MenuItem value={20}>Ferrari</MenuItem>
                <MenuItem value={30}>Seat</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Hola"
                onChange={handleChangeType}
                sx={{ width: "100%" }}
              >
                <MenuItem value={10}>4x4</MenuItem>
                <MenuItem value={20}>Sub</MenuItem>
                <MenuItem value={30}>Deportivo</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="Hola"
                onChange={handleChangeType}
                sx={{ width: "100%" }}
              >
                <MenuItem value={10}>4x4</MenuItem>
                <MenuItem value={20}>Sub</MenuItem>
                <MenuItem value={30}>Deportivo</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Button>Buscar</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Gallery />
        </Grid>
      </Grid>
    </Container>
  );
}
