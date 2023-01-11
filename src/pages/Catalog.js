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
import AButton from "../components/AButton";
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import formatPrice from "../utils/FormatPrice";


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
        var min = price[0] * 1000
        var max = price[1] * 1000
        if (price[1] === 100) {
          max = 1000000
        }

        tempCars = tempCars.filter((car) => car.price >= min && car.price <= max);
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


  // format price
  function formatMinMaxPrice(price) {
    var min = formatPrice(price[0] * 1000);

    if (price[1] === 100) {
      return min + " - " + "Más de 100.000€";
    } else {
      var max = formatPrice(price[1] * 1000);

      return min + " - " + max;
    }


  }
  // Format labels from slider
  function valuetext(value) {
    if (value === 100) {
      return "Más de 100.000€";
    }

    value = value * 1000;
    value = parseFloat(value).toLocaleString("es-ES", {

      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }
    )

    return value;
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


  // Constant with all brands sorted alphabetically
  const brands = Brands.sort((a, b) => a.name.localeCompare(b.name));
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

          <Grid container columns={14} spacing={2}>
            <Grid item xs={14} sm={14} md={14} lg={4} order={{ xs: 1, sm: 1, md: 1, lg: 1 }}>

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
                  {brands.map((item, i) => (
                    <MenuItem key={i} value={item.name}>
                      <img src={process.env.PUBLIC_URL + "/imgs/brands/" + item.name.toLowerCase() + ".png"} alt={item.name} style={{ width: "30px", height: "30px", marginRight: "10px" }} />
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>

              </FormControl>
            </Grid>

            <Grid item xs={14} sm={14} md={14} lg={4} order={{ xs: 2, sm: 2, md: 2, lg: 2 }}>

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
                  <MenuItem value={"Superdeportivo"}>Superdeportivo</MenuItem>


                </Select>

              </FormControl>
            </Grid>

            <Grid item xs={14} sm={14} md={14} lg={4} order={{ xs: 3, sm: 3, md: 3, lg: 3 }}>
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
                  <MenuItem value={"Gasolina"}>
                    <LocalGasStationIcon />
                    Gasolina
                  </MenuItem>
                  <MenuItem value={"Diesel"}>
                    <OilBarrelIcon />
                    Diésel
                  </MenuItem>
                  <MenuItem value={"Eléctrico"}>
                    <ElectricBoltIcon />
                    Eléctrico
                  </MenuItem>
                </Select>

              </FormControl>
            </Grid>

            <Grid item xs={14} sm={4} md={3} lg={2} order={{ xs: 5, sm: 5, md: 5, lg: 4 }}>
              <AButton variant="contained" onClick={deleteFilters} text="Borrar Filtros" sx={{ width: "100%" }} />
            </Grid>

            <Grid item xs={14} sm={8} md={9} lg={4} order={{ xs: 4, sm: 4, md: 4, lg: 5 }}>
              <FormControl fullWidth sx={{ alignContent: "right" }}>
                <Typography sx={{ width: "100%", textAlign: "center" }}>
                  Precio: {formatMinMaxPrice(price)}
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
