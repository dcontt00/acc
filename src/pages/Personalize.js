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
import Checkbox from '@mui/material/Checkbox';
import Luces from "../data/Luces.json";
import formatPrice from "../utils/FormatPrice";
const cookie = new Cookie();

function getCar(id) {
  return Cars.find((car) => car.id === parseInt(id));
}



const Assistencies = [
  {
    "id": 0,
    "name": "Asistencia de aparcamiento",
    "price": 100
  },
  {
    "id": 1,
    "name": "Sensores proximidad",
    "price": 100
  },
  {
    "id": 2,
    "name": "Cámaras de visión frontales y traseras",
    "price": 100
  },

]


const Extras = [
  {
    "id": 0,
    "name": "Sistema de altavoces",
    "price": 200

  },
  {
    "id": 1,
    "name": "Sistema de pantallas de entretenimiento",
    "price": 500,
  },
  {
    "id": 2,
    "name": "Pantalla Principal y HUD",
    "price": 1500
  }
]



export default function Personalize() {
  const navigate = useNavigate();
  const params = useParams();
  const car = getCar(params.id);

  const [tire, setTire] = React.useState(0);
  const [colors, setColors] = React.useState(0);
  const [seats, setSeats] = React.useState(0);
  const [light, setLight] = React.useState(0);
  const [assistencie, setAssistencie] = React.useState([]);
  const [extra, setExtra] = React.useState([]);

  function tireData(id) {
    if (id != null) {
      var llantas = Llantas.find((llanta) => llanta.id === parseInt(id));
      return (
        <TableRow key={llantas.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
          <TableCell >Llantas</TableCell>
          <TableCell >{llantas.title}</TableCell>
          <TableCell >{formatPrice(llantas.price)}</TableCell>
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
          <TableCell >{formatPrice(colores.price)}</TableCell>
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
          <TableCell >{formatPrice(asientos.price)}</TableCell>
        </TableRow>
      );
    }
  }

  function lightData() {
    return (
      <TableRow key={"lights"} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
        <TableCell >Faros</TableCell>
        <TableCell >{Luces[light].name}</TableCell>
        <TableCell >{formatPrice(Luces[light].price)}</TableCell>
      </TableRow>
    )
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
    if (light != null) {
      total = total + Luces[light].price;
    }
    if (assistencie != null) {
      assistencie.forEach(element => {

        var assistencia = Assistencies.find((assistencia) => assistencia.id === parseInt(element));
        total = total + assistencia.price;
      });
    }

    if (extra != null) {
      extra.forEach(element => {
        var extra = Extras.find((extra) => extra.id === parseInt(element));
        total = total + extra.price;
      });
    }
    return formatPrice(total);
  }


  const handleClickBuy = () => {
    cookie.set("personalization", { seats: seats, colors: colors, tire: tire, lights: light, assistencies: assistencie, extras: extra });
    navigate("/payment/" + params.id)
  };

  const handleClickCancel = () => {
    cookie.remove("personalization")
    navigate("/description/" + params.id)
  };

  return (
    <Container maxWidth="xl">
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

              <Typography variant="h3">Faros</Typography>

              <ImageList data={Luces} part="tire" setItem={setLight} />
            </Grid>


            <Grid item xs={5} sm={5} md={5} lg={5}>
              <Typography variant="h3">Asistencia</Typography>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Sistemas de asistencia
                </FormLabel>

                {Assistencies.map((item) => (
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={assistencie.includes(item.id)}
                        onChange={(ev) => {
                          if (ev.target.checked) {
                            setAssistencie(assistencie.concat(item.id))
                          } else {
                            setAssistencie(assistencie.filter((id) => id != item.id))
                          }
                        }}
                      />}


                    label={
                      "+ " + item.price + "€" + " - " + item.name

                    }

                  />
                )
                )}
              </FormControl>
            </Grid>

            <Grid item xs={5} sm={5} md={5} lg={5}>
              <Typography variant="h3">Extras</Typography>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Sistemas extra
                </FormLabel>

                {Extras.map((item) => (
                  <FormControlLabel
                    control={
                      <Checkbox

                        checked={extra.includes(item.id)}
                        onChange={(ev) => {
                          if (ev.target.checked) {
                            setExtra(extra.concat(item.id))
                          } else {
                            setExtra(extra.filter((id) => id != item.id))
                          }
                        }}
                      />}


                    label={"+ " + item.price + "€" + " - " + item.name
                    }
                  />
                )
                )}
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
                    <TableCell >{formatPrice(car.price)}</TableCell>
                  </TableRow>

                  {tireData(tire)}
                  {seatsData(seats)}
                  {colorsData(colors)}
                  {lightData()}
                  {
                    assistencie.map((assistencie) => (
                      <TableRow key={assistencie} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

                        <TableCell >Asistencia</TableCell>
                        <TableCell >{Assistencies[assistencie].name}</TableCell>
                        <TableCell >{Assistencies[assistencie].price}€</TableCell>
                      </TableRow>

                    ))
                  }
                  {
                    extra.map((item) => (
                      <TableRow key={item} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >

                        <TableCell >Extra</TableCell>
                        <TableCell >{Extras[item].name}</TableCell>
                        <TableCell >{Extras[item].price}€</TableCell>
                      </TableRow>

                    ))
                  }




                  <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell >Total</TableCell>
                    <TableCell ></TableCell>
                    <TableCell >{totalPrice()}</TableCell>
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
