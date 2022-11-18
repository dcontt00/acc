import "../App.css";
import * as React from "react";
import {
  Button,
  Typography,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  FormGroup,
  Switch,
} from "@mui/material";
import Container from "@mui/material/Container";
import Gallery from "../components/Gallery";
import Brands from "../data/Brands.json";
import Cars from "../data/Cars.json";

// filter array by car name
function filterByName(cars, name) {
  return cars.filter((car) =>
    car.name.toLowerCase().includes(name.toLowerCase())
  );
}

// filter array by car brand
function filterByBrand(cars, brand) {
  return cars.filter((car) => car.brand.toLowerCase() === brand.toLowerCase());
}

// filter array by car type
function filterByType(cars, type) {
  return cars.filter((car) => car.type.toLowerCase() === type.toLowerCase());
}

// filter array by fuel
function filterByFuel(cars, fuel) {
  return cars.filter((car) => car.fuel.toLowerCase() === fuel.toLowerCase());
}

export default function Catalog() {
  const [selectedCars, setSelectedCars] = React.useState(Cars);

  const [type, setType] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [fuel, setFuel] = React.useState("");
  const [search, setSearch] = React.useState("");

  const [displayFilters, setDisplayFilters] = React.useState("none");

  const handleChangeType = (event) => {
    setType(event.target.value);
    setSelectedCars(filterByType(Cars, event.target.value));
  };
  const handleChangeBrand = (event) => {
    setBrand(event.target.value);
    setSelectedCars(filterByBrand(Cars, event.target.value));
  };
  const handleChangeFuel = (event) => {
    setFuel(event.target.value);
    setSelectedCars(filterByFuel(Cars, event.target.value));
  };

  const handleDisplayFilters = (event) => {
    if (displayFilters === "none") {
      setDisplayFilters("block");
    } else {
      setDisplayFilters("none");
    }
  };

  const handleSearch = (event) => {
    // filter by name
    var temp = filterByName(Cars, event.target.value);
    setSelectedCars(temp);
    setSearch(event.target.value);
  };

  const deleteFilters = () => {
    setSelectedCars(Cars);
    setType("");
    setBrand("");
    setFuel("");
  };

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Catálogo</Typography>
        </Grid>

        {/* Barra búsqueda*/}
        <Grid item xs={10} sm={10} md={10} lg={10}>
          <TextField
            id="standard-basic"
            label="Buscar por nombre de coche"
            variant="standard"
            sx={{ width: "100%" }}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Button variant="contained">Buscar</Button>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  sx={{ color: "#fff" }}
                  onChange={() => {
                    handleDisplayFilters();
                  }}
                />
              }
              label="Filtrar"
            />
          </FormGroup>
        </Grid>

        {/* Filtros*/}

        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ display: displayFilters }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Typography variant="h4">Filtrar por:</Typography>
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
                {Brands.map((item, i) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                ))}
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
                <MenuItem value={"SUV"}>SUV</MenuItem>
                <MenuItem value={"Urbano"}>Urbano</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fuel}
                label="Hola"
                onChange={handleChangeFuel}
                sx={{ width: "100%" }}
              >
                <MenuItem value={"Gasolina"}>Gasolina</MenuItem>
                <MenuItem value={"Diésel"}>Diésel</MenuItem>
                <MenuItem value={"Eléctrico"}>Eléctrico</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Button variant="contained" onClick={deleteFilters}>
                Borrar filtros
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Gallery cars={selectedCars} />
        </Grid>
      </Grid>
    </Container>
  );
}
