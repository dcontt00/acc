import "../App.css";
import { Grid, Paper, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ImageList from "../components/ImageList";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cars from "../data/Cars.json";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import AButton from "../components/AButton";
import Cookie from "universal-cookie";
import Llantas from "../data/Llantas.json";
import Colores from "../data/Colores.json";
import Asientos from "../data/Asientos.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Stack } from "@mui/material";

const cookie = new Cookie();

function getCar(id) {
  return Cars.find((car) => car.id === parseInt(id));
}


export default function Personalize() {
  const navigate = useNavigate();
  const params = useParams();
  const car = getCar(params.id);

  const [tire, setTire] = React.useState(null);
  const [colors, setColors] = React.useState(null);
  const [seats, setSeats] = React.useState(null);

  function tireData(id) {
    if (id != null) {
      var llantas = Llantas.find((llanta) => llanta.id === parseInt(id));
      return (
        <TableRow key={llantas.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
          <TableCell >Llantas</TableCell>
          <TableCell >{llantas.title}</TableCell>
          <TableCell >{llantas.price}€</TableCell>
        </TableRow>
      );
    }
  }
  function colorsData(id) {
    if (id != null) {
      var colores = Colores.find((color) => color.id === parseInt(id));
      return (
        <TableRow key={colores.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
          <TableCell >Color</TableCell>
          <TableCell >{colores.title}</TableCell>
          <TableCell >{colores.price}€</TableCell>
        </TableRow>
      );
    }
  }

  function seatsData(id) {
    if (id != null) {
      var asientos = Asientos.find((asiento) => asiento.id === parseInt(id));
      return (
        <TableRow key={asientos.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
          <TableCell >Asientos</TableCell>
          <TableCell >{asientos.title}</TableCell>
          <TableCell >{asientos.price}€</TableCell>
        </TableRow>
      );
    }
  }

  function totalPrice() {
    var total = car.price;
    if (tire != null) {
      var llantas = Llantas.find((llanta) => llanta.id === parseInt(tire));
      total = total + llantas.price;
    }
    if (colors != null) {
      var colores = Colores.find((color) => color.id === parseInt(colors));
      total = total + colores.price;
    }
    if (seats != null) {
      var asientos = Asientos.find((asiento) => asiento.id === parseInt(seats));
      total = total + asientos.price;
    }
    return total;
  }


  const handleClickBuy = () => {
    cookie.set("personalization", { seats: seats, colors: colors, tire: tire });
    navigate("/payment/" + params.id)
  };

  const handleClickCancel = () => {
    cookie.remove("personalization")
    navigate("/description/" + params.id)
  };

  return (
    <Container maxWidth>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">{car.name}</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={9}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12}>

              <img src={process.env.PUBLIC_URL + car.img} style={{ width: "100%" }} />

              <Typography variant="h1">Personalizar vehiculo</Typography>

              <Typography variant="h3">Asientos</Typography>

              <ImageList data={Asientos} part="seats" setItem={setSeats} />

              <Typography variant="h3">Color</Typography>

              <ImageList data={Colores} part="colors" setItem={setColors} />

              <Typography variant="h3">Llantas</Typography>

              <ImageList data={Llantas} part="tire" setItem={setTire} />
            </Grid>

            <Grid item xs={5} sm={3} md={3} lg={3}>

              <Typography variant="h3">Motor</Typography>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Tipo de motor
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="hybrid"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="hybrid"
                    control={<Radio />}
                    label="Híbrido"
                  />
                  <FormControlLabel
                    value="gas"
                    control={<Radio />}
                    label="Gasolina"
                  />
                  <FormControlLabel
                    value="diesel"
                    control={<Radio />}
                    label="Diesel"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={5} sm={3} md={3} lg={3}>
              <Typography variant="h3">Faros</Typography>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Tipo de faros
                </FormLabel>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="LED"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="LED" control={<Radio />} label="LED" />
                  <FormControlLabel
                    value="Xenón"
                    control={<Radio />}
                    label="Xenón"
                  />
                  <FormControlLabel
                    value="Halógenos"
                    control={<Radio />}
                    label="Halógenos"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>

          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={3} sx={{}}>
          <Paper variant="outlined" sx={{ p: 2, position: "sticky", top: 20 }}>

            <Typography variant="h3">
              Detalles
            </Typography>
            {/* <TablaPrecio tire={tire} seats={seats} colors={colors} /> */}
            <TableContainer component={Paper} >
              <Table sx={{ width: "100%" }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell >Concepto</TableCell>
                    <TableCell >Modelo</TableCell>
                    <TableCell >Precio</TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  <TableRow>
                    <TableCell >Base</TableCell>
                    <TableCell >{car.name}</TableCell>
                    <TableCell >{car.price}€</TableCell>
                  </TableRow>

                  {tireData(tire)}
                  {seatsData(seats)}
                  {colorsData(colors)}




                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell >Total</TableCell>
                    <TableCell ></TableCell>
                    <TableCell >{totalPrice()}€</TableCell>
                  </TableRow>

                </TableBody>
              </Table>
            </TableContainer>

            <br />
            <Stack direction="row" spacing={2} justifyContent="flex-end">


              <AButton
                variant="contained"
                text="Comprar"
                icon={<ShoppingCartIcon />}
                onClick={handleClickBuy}
                align={"right"}
              />


              <AButton
                variant="contained"
                text={<Typography>Cancelar</Typography>}
                onClick={handleClickCancel}
              />
            </Stack>
          </Paper>
        </Grid>


      </Grid>


    </Container>
  );
}
