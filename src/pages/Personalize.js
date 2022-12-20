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
const cookie = new Cookie();

function getCar(id) {
  return Cars.find((car) => car.id === parseInt(id));
}


export default function Personalize() {
  const navigate = useNavigate();
  const params = useParams();
  const car = getCar(params.id);
  const myImage = car.img;

  const handleClickBuy = () => {
    navigate("/payment/" + params.id)
  };

  const handleClickCancel = () => {
    cookie.remove("personalization")
    navigate("/description/" + params.id)
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h2">{car.name}</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img src={myImage} style={{ width: "100%" }} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Personalizar vehiculo</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Asientos</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ImageList data={Asientos} part="seats" />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Color</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ImageList data={Colores} part="colors" />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Llantas</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <ImageList data={Llantas} part="tire" />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Motor</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
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

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Faros</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
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

      <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography variant="h3">
            Precio: {car.price}€ SE PUEDE PONER AQUI EL DESGLOSE TAMBIEN, ESTO SON LOS NUEVOS COMENTARIOS DE JAVASCRIPT XD
          </Typography>

          <Grid align={"right"} mr={5}>
            <AButton
              variant="contained"
              text={<><ShoppingCartIcon /> <Typography>Comprar</Typography></>}
              onClick={handleClickBuy}
              align={"right"}
            />

            <Typography variant="h4" padding={2}></Typography>

            <AButton
              variant="contained"
              text={<Typography>Cancelar</Typography>}
              onClick={handleClickCancel}
            />
          </Grid>
        </Paper>
    </Container>
  );
}
