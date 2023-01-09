import "../App.css";
import * as React from "react";
import { Button, Typography, Grid, TextField, Select, MenuItem, FormControlLabel, Switch, Slider, Alert } from "@mui/material";
import Container from "@mui/material/Container";
import Gallery from "../components/CatalogGallery";
import Brands from "../data/Brands.json";
import Cars from "../data/Cars.json";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { useParams } from "react-router-dom";

// format price
function formatPrice(price) {
  var min = (price[0] * 1000).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });
  var max = (price[1] * 1000).toLocaleString("en-US", {
    style: "currency",
    currency: "EUR",
  });
  return min + " - " + max;
}

// filter array by car name
function filterByName(cars, name) {
  return cars.filter((car) =>
    car.name.toLowerCase().includes(name.toLowerCase())
  );
}

export default function Catalog() {

  const params = useParams();
  const [price, setPrice] = React.useState([10, 100]);
  const [type, setType] = React.useState("");
  const [brand, setBrand] = React.useState("");
  const [fuel, setFuel] = React.useState("");
  const [search, setSearch] = React.useState(params.search || "");

  // Selected cars filtered by name if theres a search param in url
  const [selectedCars, setSelectedCars] = React.useState(Cars.filter((car) =>
    car.name.toLowerCase().includes(search.toLowerCase())));

  const [displayFilters, setDisplayFilters] = React.useState("none");

  const handleFilter = (array) => {
    var tempCars = Cars;

    for (let i in array) {
      if (i !== "price" && array[i] !== "") {
        tempCars = tempCars.filter((car) => car[i].toLowerCase() === array[i].toLowerCase());
      } else {

        tempCars = tempCars.filter((car) => car.price >= price[0] * 1000 && car.price <= price[1] * 1000);
      }

    }
    setSelectedCars(tempCars)
  }

  const handleDisplayFilters = (event) => {
    if (displayFilters === "none") {
      setDisplayFilters("block");
    } else {
      setDisplayFilters("none");
    }
  };


  function valuetext(value) {
    return `${value * 1000}€`;
  }


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
        <Grid item xs={9} sm={10} md={10} lg={10}>
          <TextField
            id="standard-basic"
            label="Buscar por nombre de coche"
            defaultValue={search}

            variant="outlined"
            size="small"
            sx={{ width: "100%" }}
            onChange={handleSearch}
          />
        </Grid>


        {/* Switch de filtros */}
        <Grid item xs={3} sm={2} md={2} lg={2}>
          <FormControlLabel
            control={
              <Switch
                size="medium"
                sx={{ color: "#fff" }}
                onChange={() => {
                  handleDisplayFilters();
                }}
              />
            }
            label={<Typography variant="h6">Filtrar</Typography>}

          />
        </Grid>
      </Grid >
      <br />

      {/* Filtros*/}
      <Grid container sx={{ display: displayFilters }} spacing={2}>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">Filtrar por:</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={3} order={{ xs: 1, sm: 1, md: 1, lg: 1 }}>

              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Marca</InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={brand}
                  label="Marca"
                  onChange={function (ev) {
                    var temp;
                    if (ev.target.value === "Marca") {
                      temp = "";
                      setBrand("");
                    } else {
                      temp = ev.target.value;
                      setBrand(ev.target.value)
                    }
                    handleFilter({ "fuel": fuel, "brand": temp, "type": type, "price": price })
                  }}
                  name="marca"
                >
                  <MenuItem value="Marca">Marca</MenuItem>
                  {Brands.map((item, i) => (
                    <MenuItem key={i} value={item.name}>{item.name}</MenuItem>
                  ))}
                </Select>

              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} order={{ xs: 2, sm: 2, md: 2, lg: 2 }}>

              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">Tipo</InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={type}
                  label="Tipo"
                  onChange={
                    function (ev) {
                      var temp;
                      if (ev.target.value === "Tipo") {
                        temp = ""
                        setType("")

                      } else {
                        temp = ev.target.value
                        setType(ev.target.value)

                      }
                      handleFilter({ "fuel": fuel, "brand": brand, "type": temp, "price": price })
                    }
                  }
                  name="tipo"
                >
                  <MenuItem value={"Tipo"}>Tipo</MenuItem>
                  <MenuItem value={"SUV"}>SUV</MenuItem>
                  <MenuItem value={"Coupé"}>Coupé</MenuItem>
                  <MenuItem value={"Todoterreno"}>Todoterreno</MenuItem>
                  <MenuItem value={"Urbano"}>Urbano</MenuItem>
                </Select>

              </FormControl>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={3} order={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
              <FormControl size="small" fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Combustible
                </InputLabel>

                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={fuel}
                  label="Combustible"
                  onChange={
                    function (ev) {
                      var temp;
                      if (ev.target.value === "Combustible") {
                        temp = ""
                        setFuel("")
                      } else {
                        temp = ev.target.value
                        setFuel(ev.target.value)
                      }
                      handleFilter({ "fuel": temp, "brand": brand, "type": type, "price": price })
                    }
                  }
                  name="fuel"
                >
                  <MenuItem value={"Combustible"}>Combustible</MenuItem>
                  <MenuItem value={"Gasolina"}>Gasolina</MenuItem>
                  <MenuItem value={"Diesel"}>Diésel</MenuItem>
                  <MenuItem value={"Eléctrico"}>Eléctrico</MenuItem>
                </Select>

              </FormControl>
            </Grid>

            <Grid item xs={12} sm={4} md={3} lg={3} order={{ xs: 5, sm: 5, md: 5, lg: 4 }}>
              <Button variant="contained" onClick={deleteFilters}>
                Borrar filtros
              </Button>
            </Grid>

            <Grid item xs={12} sm={8} md={9} lg={4} order={{ xs: 4, sm: 4, md: 4, lg: 5 }}>
              <FormControl fullWidth sx={{ alignContent: "right" }}>
                <Typography sx={{ width: "100%", textAlign: "center" }}>
                  Precio: {formatPrice(price)}
                </Typography>

                <Slider
                  size="small"
                  valueLabelFormat={valuetext}
                  valueLabelDisplay="auto"
                  value={price}
                  min={10}
                  onChange={function (ev) {
                    setPrice(ev.target.value)
                    handleFilter({ "fuel": fuel, "brand": brand, "type": type, "price": ev.target.value })
                  }}
                  step={10}
                  name="price"
                  marks
                />

              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br />


      {selectedCars.length === 0 ?
        <Grid
          container
          spacing={0}
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '20vh' }}
        >
          <Grid item xs={12} sm={12} md={8} lg={8}>
            <Alert variant="filled" severity="info">No hay coches con esos filtros. Borre los filtros o cámbielos</Alert>
          </Grid>
        </Grid>
        :
        <Gallery cars={selectedCars} />}
    </Container >
  );
}
