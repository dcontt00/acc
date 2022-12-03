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
  Switch,
  Slider,
} from "@mui/material";
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

// filter array by price
function filterByPrice(cars, price) {
  return cars.filter(
    (car) => car.price >= price[0] * 1000 && car.price <= price[1] * 1000
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

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
    setSelectedCars(filterByPrice(Cars, event.target.value));
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
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Catálogo</Typography>
        </Grid>

        {/* Barra búsqueda*/}
        <Grid item xs={10} sm={10} md={10} lg={10}>
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
        <Grid item xs={2} sm={2} md={2} lg={2}>
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
        </Grid>
      </Grid>
      <br />

      {/* Filtros*/}
      <Grid container sx={{ display: displayFilters }}>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h4">Filtrar por:</Typography>
        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={12}>
          <FormControl size="small"
            sx={{ width: "25%" }}

          >
            <InputLabel id="demo-simple-select-label">Marca</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={brand}
              label="Marca"
              onChange={handleChangeBrand}
            >
              {Brands.map((item, i) => (
                <MenuItem key={i} value={item.name}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl size="small"
            sx={{ width: "25%" }}
          >
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={type}
              label="Tipo"
              onChange={handleChangeType}
            >
              <MenuItem value={"SUV"}>SUV</MenuItem>
              <MenuItem value={"Urbano"}>Urbano</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small"

            sx={{ width: "25%" }}
          >
            <InputLabel id="demo-simple-select-label">
              Combustible
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={fuel}
              label="Combustible"
              onChange={handleChangeFuel}
            >
              <MenuItem value={"Gasolina"}>Gasolina</MenuItem>
              <MenuItem value={"Diésel"}>Diésel</MenuItem>
              <MenuItem value={"Eléctrico"}>Eléctrico</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{ width: "25%", alignContent: "right" }}

          >
            <Typography sx={{ width: "100%", textAlign: "center" }}>
              Precio: {formatPrice(price)}
            </Typography>
            <Slider
              size="small"
              valueLabelFormat={valuetext}
              valueLabelDisplay="auto"
              value={price}
              min={10}
              onChange={handleChangePrice}
              step={10}
              marks
            />
          </FormControl>

        </Grid>


        <Grid item xs={12} sm={12} md={12} lg={10}>
          <Button variant="contained" onClick={deleteFilters}>
            Borrar filtros
          </Button>
        </Grid>
      </Grid>


      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Gallery cars={selectedCars} />
      </Grid>
    </Container >
  );
}
