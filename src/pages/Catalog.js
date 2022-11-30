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
  Slider,
  Box,
  SliderMarkLabel,
} from "@mui/material";
import Container from "@mui/material/Container";
import Gallery from "../components/CatalogGallery";
import Brands from "../data/Brands.json";
import Cars from "../data/Cars.json";

const priceMarks = [
  {
    value: 10,
    label: "10.000",
  },
  {
    value: 20,
    label: "20.000",
  },
  {
    value: 30,
    label: "30.000",
  },
  {
    value: 40,
    label: "40.000",
  },
  {
    value: 50,
    label: "50.000",
  },
  {
    value: 60,

    label: "60.000",
  },
  {
    value: 70,
    label: "70.000",
  },
  {
    value: 80,
    label: "80.000",
  },
  {
    value: 90,
    label: "90.000",
  },
  {
    value: 100,
    label: "100.000",
  },
];

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
  const [price, setPrice] = React.useState([10, 100]);

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

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
    setSelectedCars(filterByPrice(Cars, event.target.value));
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
      <Grid container spacing={0}>
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

        {/* Switch de filtros */}
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
                label="Marca"
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
                label="Tipo"
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
                label="Combustible"
                onChange={handleChangeFuel}
                sx={{ width: "100%" }}
              >
                <MenuItem value={"Gasolina"}>Gasolina</MenuItem>
                <MenuItem value={"Diésel"}>Diésel</MenuItem>
                <MenuItem value={"Eléctrico"}>Eléctrico</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <Typography>Precio: {formatPrice(price)}</Typography>
              <Box sx={{ width: 300 }}>
                <Slider
                  value={price}
                  min={10}
                  onChange={handleChangePrice}
                  valueLabelDisplay="off"
                  marks={priceMarks}
                  step={null}
                />
              </Box>
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
