import * as React from "react";
import Typography from "@mui/material/Typography";
import Cars from "../../data/Cars.json";
import { useParams } from "react-router-dom";
import Cookies from "universal-cookie";
import Llantas from "../../data/Llantas.json";
import Colores from "../../data/Colores.json";
import Asientos from "../../data/Asientos.json";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import AButton from "../../components/AButton";
function createData(part, model, price) {
  return { part, model, price };
}

const cookie = new Cookies();

const Lights = [
  {
    "id": 0,
    "name": "LED",
    "price": 0
  },
  {
    "id": 1,
    "name": "Xenon",
    "price": 100
  },
  {
    "id": 2,
    "name": "Halógenos",
    "price": 50
  }
]

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
function getCar(id) {
  return Cars.find((car) => car.id === parseInt(id));
}

export default function Details(props) {
  const params = useParams();
  const car = getCar(params.id);
  var personalization = [];
  var rows = []
  if (cookie.get("personalization")) {
    personalization = cookie.get("personalization");
    var llantas = Llantas.find((llanta) => llanta.id === parseInt(personalization["tire"]));
    var color = Colores.find((color) => color.id === parseInt(personalization["colors"]));
    var asiento = Asientos.find((asiento) => asiento.id === parseInt(personalization["seats"]));
    var lights = Lights.find((light) => light.id === parseInt(personalization["lights"]));
    var assistencies = []
    var extras = []

    rows = [
      createData("Llantas", llantas.title, llantas.price),
      createData("Color", color.title, color.price),
      createData("Asiento", asiento.title, asiento.price),
      createData("Luces", lights.name, lights.price)
    ];

    if (personalization["assistencies"]) {
      var temp = personalization["assistencies"];
      if (temp.length > 1) {
        for (var i = 0; i < temp.length; i++) {
          assistencies.push(Assistencies.find((assistencies) => assistencies.id === parseInt(temp[i])));
        }
      } else {
        assistencies.push(Assistencies.find((assistencies) => assistencies.id === parseInt(temp)));
      }
      rows.push(createData("Asistencias", assistencies.map((assistencies) => assistencies.name), assistencies.map((assistencies) => assistencies.price).reduce((a, b) => a + b, 0)));
    }
    if (personalization["extras"]) {
      var temp2 = personalization["extras"];
      if (temp2.length > 1) {
        for (var i = 0; i < temp2.length; i++) {
          extras.push(Extras.find((extras) => extras.id === parseInt(temp2[i])));
        }
      } else {
        extras.push(Extras.find((extras) => extras.id === parseInt(temp2)));

      }
      rows.push(createData("Extras", extras.map((extras) => extras.name), extras.map((extras) => extras.price).reduce((a, b) => a + b, 0)));
    }



  }

  const desglose = () => {
    var total = car.price;
    if (llantas) {
      total += llantas.price;
    }
    if (color) {
      total += color.price;
    }
    if (asiento) {
      total += asiento.price;
    }
    if (lights) {
      total += lights.price;
    }
    if (assistencies) {
      for (var i = 0; i < assistencies.length; i++) {
        total += assistencies[i].price;
      }
    }
    if (extras) {
      for (var i = 0; i < extras.length; i++) {
        total += extras[i].price;
      }
    }
    return (
      <div>
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

              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                  <TableCell >{row.part}</TableCell>
                  <TableCell >{row.model}</TableCell>
                  <TableCell >{row.price}€</TableCell>
                </TableRow>
              ))}

              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell >Total</TableCell>
                <TableCell ></TableCell>
                <TableCell >{total}€</TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </div>

    );
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h1" gutterBottom>
          Detalles del pedido
        </Typography>
      </Grid>

      <Grid item xs={6}>
        <img src={process.env.PUBLIC_URL + car.img} alt={car.name} width="100%" />
      </Grid>

      <Grid item xs={6}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" component="h3" gutterBottom>
              {car.name}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" component="h3" gutterBottom>
              {car.type}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" component="h3" gutterBottom>
              {car.year}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h2">Desglose</Typography>
      </Grid>

      <Grid item xs={12}>
        {desglose()}
      </Grid>
      <AButton
        variant="contained"
        onClick={() => props.setActiveStep(props.activeStep + 1)}
        sx={{ mt: 3, ml: 1 }}
        text="Continuar"
      />
    </Grid>
  )
}