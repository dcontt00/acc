import "../App.css";
import { Button, Grid, Typography} from "@mui/material";
import Carousel from "../components/CarouselCar";
import Container from "@mui/material/Container";
import ImageList from "../components/ImageList";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function Personalize() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Carousel />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h1">Personalizar vehiculo</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Asientos</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
            <ImageList />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Color</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
            <ImageList />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Llantas</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
            <ImageList />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Motor</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}> 
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">Tipo de motor</FormLabel>
                <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="hybrid"
                name="radio-buttons-group"
                >
                    <FormControlLabel value="hybrid" control={<Radio />} label="Híbrido" />
                    <FormControlLabel value="gas" control={<Radio />} label="Gasolina" />
                    <FormControlLabel value="diesel" control={<Radio />} label="Diesel" />
                </RadioGroup>
            </FormControl>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3">Faros</Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
            <ImageList />
        </Grid>

        <Typography variant="h4" item xs={8} sm={8} md={8} lg={8} padding={5}> Precio: 25.000$</Typography>

        <Button variant="contained" item xs={4} sm={4} md={4} lg={4} padding={5}>
            Comprar <ShoppingCartIcon />
        </Button>
        

      </Grid>
    </Container>
  );
}